'use client'

import { useState } from 'react'
import Toast from './toast'

interface OutputComponentProps {
  generatedOutput: string
  onClearOutput: () => void
}

const OutputComponent: React.FC<OutputComponentProps> = ({
  generatedOutput,
  onClearOutput,
}) => {
  const [toastVisible, setToastVisible] = useState(false)

  const copyTextToClipboard = async (answer: string) => {
    try {
      await navigator.clipboard.writeText(answer)
      setToastVisible(true)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleToastDismiss = () => {
    setToastVisible(false)
  }

  const splitOutput = (output: string): string[] => {
    const patterns = [
      '___',
      '\\d\\.',
      '\\d\\)',
      '\\bOption\\s*\\d',
      '\\boption\\s*\\d',
      '\\bOutput\\s*\\d',
      '\\boutput\\s*\\d',
    ]
    for (const pattern of patterns) {
      const regex = new RegExp(pattern, 'g')
      const matches = output.split(regex)
      if (matches.length > 1) {
        return matches
          .map((match) => match.trim())
          .filter((match) => match.length > 0)
      }
    }
    return [output]
  }

  const outputs = splitOutput(generatedOutput)
  const outputsNumber = outputs[0] === '' ? 0 : outputs.length
  return (
    <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto">
      <div className="sticky top-0 flex items-center justify-between bg-white border-b border-gray-200 p-4">
        <div className="flex items-center">
          <button className="bg-blue-700 text-white px-4 py-2 rounded-full">
            Total outputs
            <span className="ml-2 bg-white text-blue-700 px-2 py-1 rounded-full">
              {outputsNumber}
            </span>
          </button>
          {/* ... other buttons, if needed */}
        </div>
        <div>
          <button
            onClick={onClearOutput}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="w-full text-gray-900 bg-white mt-4">
        {generatedOutput ? (
          <>
            {outputs.map((answer, index) => (
              <div
                key={index}
                className="py-4 px-4 border-b border-gray-200 group cursor-pointer bg-green-50 hover:bg-green-300/5"
              >
                <div className="flex items-center space-x-2">
                  {/* Your action buttons */}
                </div>
                <div
                  className="w-full mt-2 mb-3 text-base font-medium leading-7 text-gray-800 whitespace-pre-wrap pre"
                  onClick={() => copyTextToClipboard(answer)}
                >
                  {answer}
                  {toastVisible && (
                    <Toast
                      message="Text copied to clipboard!"
                      duration={3000}
                      onDismiss={handleToastDismiss}
                    />
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="w-4/5 mx-auto mt-12 text-gray-900 bg-white border border-gray-200 p-4 rounded-md shadow-sm flex items-center justify-center">
            <span className="text-lg font-normal text-gray-200">
              No output generated yet.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default OutputComponent
