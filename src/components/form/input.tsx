import React, { InputHTMLAttributes, ReactNode } from 'react'

export interface FormFieldInputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string | ReactNode,
  name: string,
  initialValue?: string,
}

const FormFieldInput = () => {
  return (
    <div></div>
  )
}
