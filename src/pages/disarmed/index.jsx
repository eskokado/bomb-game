import React from 'react'
import { Container, Logo, SucessImg, Title } from './style'
import sucessImg from '../../assets/bomba_cortada_matrix.png'
import logoImg from '../../assets/logoDark.png'
import ButtonComponent from '../../components/buttons'
import { useNavigation } from '@react-navigation/native'

export default function Disarmed() {
  const navigation = useNavigation()

  function handleNavToStart() {
    navigation.navigate('Start')
  }

  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: 'contain' }} />
      <Title>Parabéns!!!{'\n'}Você desarmou</Title>
      <SucessImg source={sucessImg} style={{ resizeMode: 'contain' }} />
      <ButtonComponent
        buttonText={'Página incial'}
        handlePress={handleNavToStart}
      />
    </Container>
  )
}
