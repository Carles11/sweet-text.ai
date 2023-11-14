import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { Template, TemplateInput } from 'constants/templates'

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
export async function POST(request: Request) {
  const body = await request.json()
  if (request.method === 'POST') {
    const { template, inputsData } = body as unknown as {
      template: Template
      inputsData: InputsData
    }

    const instruction = createInstruction(template.inputs, inputsData)

    console.log({ instruction })
    const mainGoal = template.command
    console.log({ mainGoal })

    const messages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content: `Your task is: "${mainGoal}".\n\nHere are the details:\n${instruction}. 
            Please suggest 3 outputs. number them 1,2,3`,
      },
    ]

    const messageTest = {
      role: 'assistant',
      content: '\n\nThis is a test!',
    }

    try {
      const response: any = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        // @ts-ignore
        messages: messages,
        temperature: 0.5,
      })
      const reply = response?.choices[0].message.content
      console.log({ response, reply })

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
