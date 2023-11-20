'use client'

import { useState } from 'react'
import InputComponent from './inputComponent'
import OutputComponent from './outputComponent'
import OutputLoader from './outputLoader'

import { Template } from 'constants/templates'

// @ts-ignore
const InputOutputComponent = ({ template }) => {
  const [output, setOutput] = useState('')
  const [elapsedTime, setElapsedTime] = useState(Number)
  const [isLoading, setIsLoading] = useState(false)

  const handleClearOutput = () => {
    setOutput('')
  }

  const generateOutputHandler = async (
    template: Template,
    inputsData: { [key: string]: string }
  ) => {
    let time1 = performance.now()
    const result: any = await fetch('/api/chat-gpt', {
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
    let time2 = performance.now()
    let elapsedTime = (time2 - time1) / 1000
    setElapsedTime(elapsedTime)
    setOutput(reply || '')
    setIsLoading(false)
  }
  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <InputComponent
        template={template}
        generateOutput={generateOutputHandler}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      {isLoading ? (
        <OutputLoader />
      ) : (
        <OutputComponent
          onClearOutput={handleClearOutput}
          generatedOutput={output}
          elapsedTime={elapsedTime}
        />
      )}
    </div>
  )
}

export default InputOutputComponent
