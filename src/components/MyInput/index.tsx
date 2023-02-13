import React from "react"
import { TextInput } from "react-native-paper"
import theme from "../../core/theme"

type Props = {
  onChangeText: (e: string) => void
  label: string
}

export default function MyInput({ onChangeText, label }: Props) {
  return (
    <TextInput
      label={label}
      activeUnderlineColor={theme.colors.BLUE}
      style={{ backgroundColor: theme.colors.INPUT_BG }}
      textColor={theme.colors.BLACK}
      onChangeText={onChangeText}
    />
  )
}
