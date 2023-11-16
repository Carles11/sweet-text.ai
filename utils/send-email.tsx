import emailjs, { init } from 'emailjs-com'
import Toast from 'components/toast'

export const emailSend = (
  data: Record<string, unknown> | undefined,
  resetForm: () => void
) => {
  const serviceID = process.env.EMAIL_JS_SERVICE_ID
  const templateID = process.env.EMAIL_JS_TEMPLATE_ID
  init(`${process.env.EMAIL_JS_USER_ID}`)
  debugger
  console.log({ serviceID, templateID, data })

  emailjs.send(serviceID!, templateID!, data).then(
    (result) => {
      resetForm()
      console.log({ result })
      return <Toast message={result} duration={3000} onDismiss />
    },
    (error: any) => {
      console.log({ error })
      return <Toast message={error} duration={3000} onDismiss />
    }
  )
}
