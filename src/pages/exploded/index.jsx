import React from 'react'
import logoImg from '../../assets/logoDark.png'
import failedImg from '../../assets/bomba_explodiu.png'
import { Container, FailedImg, Logo, Title } from './style'
import ButtonComponent from '../../components/buttons'
import { useNavigation } from '@react-navigation/native'
import { Vibration } from 'react-native'

export default function Exploded() {
  const navigation = useNavigation()

  function handleNavToStart() {
    navigation.navigate('Start')
  }

  setTimeout(function () {
    Vibration.vibrate(4 * 1000)
  }, 500)

  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: 'contain' }} />
      <Title>Você falhou, a {'\n'} bomba explodiu!</Title>
      <FailedImg source={failedImg} style={{ resizeMode: 'contain' }} />
      <ButtonComponent
        buttonText={'Página incial'}
        handlePress={handleNavToStart}
      />
    </Container>
  )
}
