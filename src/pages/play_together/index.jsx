import React from 'react'
import {
  BombMessage,
  Container,
  Input,
  InputContainer,
  TextTimer,
  Timer,
  Title
} from './style'
import InputTimer from '../../components/play_together/input_timer'
import TipInput from '../../components/play_together/tip_input'
import InputPassword from '../../components/play_together/input_password'
import { Button } from '../../components/buttons/styles'
import { useNavigation } from '@react-navigation/native'
import ButtonComponent from '../../components/buttons'
import { Alert } from 'react-native'

export default function PlayTogether() {
  const navigation = useNavigation()

  function handleNavToStart() {
    navigation.navigate('Start')
  }

  function handleStartGame() {
    Alert.alert('O jogo começou')
  }

  function handleDisarmed() {
    navigation.navigate('Disarmed')
  }

  function handleExploded() {
    navigation.navigate('Exploded')
  }

  return (
    <Container>
      <Title>Bomb Game Dupla</Title>
      <InputTimer />
      <BombMessage>Mensagem de erro temporária!</BombMessage>
      <TipInput />
      <InputPassword />
      <ButtonComponent buttonText={'Iniciar'} handlePress={handleStartGame} />
      <ButtonComponent
        buttonText={'Página Inicial'}
        handlePress={handleNavToStart}
      />
      <ButtonComponent buttonText={'Sucesso'} handlePress={handleDisarmed} />
    </Container>
  )
}
