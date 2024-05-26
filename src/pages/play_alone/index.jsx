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
import { Alert, ImageBackground } from 'react-native'
import PasswordInput from '../../components/play_alone/PasswordInput'
import ButtonComponent from '../../components/buttons'
import { useNavigation } from '@react-navigation/native'

export default function PlayAlone() {
  const navigation = useNavigation()

  function handleNavToStart() {
    navigation.navigate('Start')
  }

  function handleStartGame() {
    Alert.alert('Jogo começou!')
  }

  function handleExploded() {
    navigation.navigate('Exploded')
  }

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

      <ButtonComponent buttonText={'Iniciar'} handlePress={handleStartGame} />
      <ButtonComponent
        buttonText={'Página Inicial'}
        handlePress={handleNavToStart}
      />
      <ButtonComponent buttonText={'Fracassado'} handlePress={handleExploded} />
    </Container>
  )
}
