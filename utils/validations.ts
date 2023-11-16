import React, { Dispatch } from 'react'

export const handleValidation = (
  data: {
    fullname: string
    email: string
    subject: string
    message: string
  },
  setErrors: Dispatch<React.SetStateAction<Record<string, boolean>>>
) => {
  let tempErrors: Record<string, boolean> = {}
  let isValid = true
  const { fullname, email, subject, message } = data

  if (fullname.length <= 0) {
    tempErrors['fullname'] = true
    isValid = false
  }
  if (email.length <= 0 || !/\S+@\S+\.\S+/.test(email)) {
    tempErrors['email'] = true
    isValid = false
  }
  if (subject.length <= 0) {
    tempErrors['subject'] = true
    isValid = false
  }
  if (message.length <= 0) {
    tempErrors['message'] = true
    isValid = false
  }

  setErrors({ ...tempErrors })
  return isValid
}
