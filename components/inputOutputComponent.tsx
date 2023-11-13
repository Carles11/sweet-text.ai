'use client'

import { useState } from 'react'
import InputComponent from './inputComponent'
import OutputComponent from './outputComponent'
import { Template } from '../constants/templates'

// @ts-ignore
const InputOutputComponent = ({ template }) => {
  const [output, setOutput] = useState('')

  const handleClearOutput = () => {
    setOutput('')
  }
  const generateOutputHandler = async (
    template: Template,
    inputsData: { [key: string]: string }
  ) => {
    const result: any = await fetch('/routes/chat-gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        template,
        inputsData,
      }),
    })
    const { reply } = await result.json()
    setOutput(reply || '')
  }
  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <InputComponent
        template={template}
        generateOutput={generateOutputHandler}
      />
      <OutputComponent
        onClearOutput={handleClearOutput}
        generatedOutput={output}
      />
    </div>
  )
}

export default InputOutputComponent
