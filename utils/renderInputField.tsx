export const renderInputField = (
  input: {
    id: any
    label: any
    placeholder?: string
    type?: 'text' | 'textarea' | 'select' | 'number'
    options?: string[] | undefined
  },
  value: string,
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void
) => {
  let inputField = null
  if (input.type === 'textarea') {
    inputField = (
      <textarea
        id={input.id}
        value={value}
        onChange={handleChange}
        className="w-full p-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-lg"
        placeholder={input.placeholder}
        rows={4}
        maxLength={800}
      />
    )
  } else if (input.type === 'text') {
    inputField = (
      <input
        maxLength={300}
        type="text"
        id={input.id}
        value={value}
        onChange={handleChange}
        className="w-full p-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-lg"
        placeholder={input.placeholder}
      />
    )
  } else if (input.type === 'select' && input.options) {
    inputField = (
      <select
        id={input.id}
        value={value}
        onChange={handleChange}
        className="w-full p-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-lg"
      >
        {input.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  } else {
    inputField = (
      <input
        type="number"
        id={input.id}
        value={value}
        onChange={handleChange}
        className="w-full p-2 mt-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        placeholder={input.placeholder}
      />
    )
  }

  return inputField
}
