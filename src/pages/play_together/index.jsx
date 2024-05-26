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

export default function PlayTogether() {
  function handleNavToStart() {
    navigation.navigate('Start')
  }

  function handleStartGame() {
    Alert.alert('O jogo começou')
  }
  return (
    <Container>
      <Title>Bomb Game Dupla</Title>
      <InputTimer />
      <BombMessage>Mensagem de erro temporária!</BombMessage>
      <TipInput />
      <InputPassword />
      <Button buttonText='Iniciar' handlePress={handleStartGame} />
      <Button buttonText='Página Inicial' handlePress={handleNavToStart} />
    </Container>
  )
}
