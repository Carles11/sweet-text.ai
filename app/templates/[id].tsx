import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../layout'
import { TEMPLATES } from 'constants/templates'
import InputOutputComponent from 'components/inputOutputComponent'

const TemplatePage = () => {
  const router = useRouter()
  const { id } = router.query
  const [template, setTemplate] = useState(null)
  console.log('TETETETETETETETETETETETETETETETE')
  console.log({ id })
  console.log({ template })
  useEffect(() => {
    if (id) {
      const selectedTemplate = TEMPLATES.find((t) => t.id === id)
      // @ts-ignore
      setTemplate(selectedTemplate)
    }
  }, [id])

  if (!template) {
    return <div>Loading...</div>
  }

  return (
    // @ts-ignore  ="gogogo">
      <InputOutputComponent template={template} />
    </Layout>
  )
}

export default TemplatePage
