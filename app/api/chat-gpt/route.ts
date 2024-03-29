import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { Template, TemplateInput } from 'constants/templates'
import { sweetPrompts } from 'constants/prompts'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // organization: process.env.OPENAI_ORGANISATION,
})

export type InputsData = {
  [key: string]: string
}

const createInstruction = (
  inputs: TemplateInput[],
  inputsData: InputsData
): string => {
  return inputs
    .map((input) => `${input.label}: ${inputsData[input.id]}`)
    .join('\n')
}

const generateCommand = (template: Template): string | undefined => {
  const bestCommand = sweetPrompts.find(
    (comm) => comm.template === template.title
  )
  return bestCommand?.content
}

export async function POST(request: Request) {
  const body = await request.json()
  if (request.method === 'POST') {
    const { template, inputsData } = body as unknown as {
      template: Template
      inputsData: InputsData
    }

    const instruction = createInstruction(template.inputs, inputsData)
    const updatedMainGoal = generateCommand(template)
    // const mainGoal = template.command
    // explicitly ask for only one prompt instead of three for some categories
    // const onePromptCategories = ['science', 'text', 'website']
    // const promptCategories = onePromptCategories.every((value) => {
    //   return template.categories.includes(value)
    // })
    const moreSpecificGoals =
      'The task is delimited by triple quotes. Just for reference and fine tuning use the instruction, which is in delimited by double quotes.'

    const makeItShort =
      'Unless specifically expressed in the task, keep it brief, with only one output. Do not use more paragraphs than necessary.'

    const numberOutputs =
      'If you show more that one output, numerate them in a list.'

    const messages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content: `${numberOutputs} ${makeItShort} ${moreSpecificGoals} Your task is: """${updatedMainGoal}""".\n\nHere are the details:\n""${instruction}"".`,
      },
    ]

    // console.log({ instruction })
    // console.log({ mainGoal })
    console.log('Message sent----->: ', messages[1].content)

    try {
      const response: any = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        // @ts-ignore
        messages: messages,
        temperature: 0.5,
      })
      const reply = response?.choices[0].message.content
      console.log({ reply })
      return NextResponse.json({ reply })
    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        console.error(error.status) // e.g. 401
        console.error(error.message) // e.g. The authentication token you passed was invalid...
        console.error(error.code) // e.g. 'invalid_api_key'
        console.error(error.type) // e.g. 'invalid_request_error'
      } else {
        // Non-API error
        console.log(error)
      }
      console.error('Error while making the API call:', error)
      return NextResponse.json({ error: 'Error while making the API call.' })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed. Use POST.' })
  }
}
