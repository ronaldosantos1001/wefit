import React from "react"
import theme from "../../core/theme"
import { Spinner } from "./styles"

export default function Loading() {
  return <Spinner size="large" color={theme.colors.PRIMARY} />
}
