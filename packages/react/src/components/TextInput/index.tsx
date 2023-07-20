import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
