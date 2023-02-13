import React from "react"
import { Container, Text, Button, SettingsIcon } from "./styles"
import { StyleSheet } from 'react-native';

type Props = {
  title: string
  onPress: () => void
}


const Header = ({ title, onPress }: Props) => {
  return (
    <Container >
      <Text>{title}</Text>

      <Button onPress={onPress} style={styles.icon}>
        <SettingsIcon />
      </Button>
    </Container>
  )
}


export default Header

const styles = StyleSheet.create({
  icon: {
    paddingRight: 18.4
  },
});
