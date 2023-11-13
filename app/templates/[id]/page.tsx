'use client'

import { useEffect, useState } from 'react'
// import Layout from '../layout'
import { TEMPLATES } from 'constants/templates'
import InputOutputComponent from 'components/inputOutputComponent'

const TemplatePage = ({ params }: { params: { id: string } }) => {
  const id = params.id

  const [template, setTemplate] = useState(null)
  console.log('id_TETETETETETETETETETETETETETETETE', params)
  console.log({ id })
  useEffect(() => {
    if (id) {
      const selectedTemplate = TEMPLATES.find((t) => t.id === id)
      // @ts-ignore
      setTemplate(selectedTemplate)
    }
  }, [id])

  console.log({ template })
  if (!template) {
    return <div>Loading...</div>
  }

  return (
    // @ts-ignore  ="gogogo">
    <InputOutputComponent template={template} />
  )
}

export default TemplatePage
