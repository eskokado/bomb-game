import React from 'react'
import { Container, Logo, Rules, SubTitle, Title } from './styles'
import ButtonComponent from '../../components/buttons'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Start() {
  const navigation = useNavigation()

  function handleNavToPlayAlone() {
    Alert.alert('Botão clicado 1')
  }

  function handleNavToPlayTogether() {
    Alert.alert('Botão clicado 2')
  }

  function handleNavToRules() {
    navigation.navigate('Rules')
  }

  function handleNavToPlayAlone() {
    navigation.navigate('PlayAlone')
  }

  return (
    <Container>
      {/* <Logo
        source={require('../../assets/logoDark.png')}
        style={{ resizeMode: 'contain' }}
      /> */}
      <Title>Bem-vindo ao {'\n'} Bomb game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent
        buttonText={'Jogar Solo'}
        handlePress={handleNavToPlayAlone}
      />
      <ButtonComponent
        buttonText={'Jogar Em Dupla'}
        handlePress={handleNavToPlayTogether}
      />
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
    </Container>
  )
}
