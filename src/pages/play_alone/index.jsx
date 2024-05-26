import React from 'react'
import {
  Container,
  TextTimer,
  Timer,
  TipContainer,
  TipText,
  TipTitle,
  Title
} from './styles'
import bombImg from '../../assets/bomba.png'
import { ImageBackground } from 'react-native'
import { Button } from '../../components/buttons/styles'
import PasswordInput from '../../components/play_alone/PasswordInput'

function handleNavToStart() {
  navigation.navigate('Start')
}

function handleStartGame() {
  Alert.alert('Jogo começou!')
}

export default function PlayAlone() {
  return (
    <Container>
      <Title>Bomb Game Solo</Title>
      <ImageBackground
        source={bombImg}
        resizeMode='cover'
        style={{
          marginTop: 50,
          minHeight: 130,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Timer>
          <TextTimer>
            {'00'} : {'05'} : {'00'}
          </TextTimer>
        </Timer>
      </ImageBackground>

      <TipContainer>
        <TipTitle>Sua dica:</TipTitle>
        <TipText>Aqui a sua dica</TipText>
      </TipContainer>

      <PasswordInput />

      <Button buttonText='Iniciar' handlePress={handleStartGame} />

      <Button buttonText='Página Inicial' handlePress={handleNavToStart} />
    </Container>
  )
}
