import { MaterialIcons } from "@expo/vector-icons"
import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
  left: 16px;
  padding-top: 18px;
  padding-bottom: 18px;
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``

export const SettingsIcon = styled<any>(MaterialIcons).attrs({
  name: "settings",
  size: 24,
})``
