import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
`
export const ReposList = styled.FlatList<any>``
