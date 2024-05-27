import React, { useEffect, useState } from 'react'
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
import BombService from '../../services/api/bomb_service'
import api from '../../services/api/api'

export default function PlayAlone() {
  const navigation = useNavigation()

  const [started, setStarted] = useState(false)
  const [pin, setPin] = useState(['', '', ''])
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('03')
  const [seconds, setSeconds] = useState('00')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [intervalId, setIntervalId] = useState()

  function handleNavToStart() {
    navigation.navigate('Start')
  }

  function handleExploded() {
    navigation.navigate('Exploded')
  }

  function handleStartBomb() {
    const diffTime = BombService.getDiffTime({ hours, seconds, minutes })

    BombService.startCountdown({
      setSeconds,
      setMinutes,
      setHours,
      setStarted,
      diffTime,
      setIntervalId,
      intervalId,
      navigation
    })
  }

  function handleStartGame() {
    BombService.bombStartGame({ setStarted, hours, minutes, seconds })
  }

  function handleDisarmBomb() {
    BombService.disarmBomb({
      setStarted,
      answer,
      navigation,
      pin,
      setPin,
      intervalId
    })
  }

  useEffect(() => {
    if (started) {
      handleStartBomb()
    }
  }, [started])

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const randomNumber = Math.floor(Math.random() * 10 + 1)

        const { data } = await api.get(`questions/${randomNumber}`)
        setQuestion(data?.pergunta)
        setAnswer(data?.resp)
      } catch (error) {
        console.error('Failed to fetch question:', error)
      }
    }

    fetchQuestion()
  }, [])

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
            {hours} : {minutes} : {seconds}
          </TextTimer>
        </Timer>
      </ImageBackground>

      <TipContainer>
        <TipTitle>Sua dica:</TipTitle>
        <TipText>{question}</TipText>
        <TipText>{answer}</TipText>
      </TipContainer>

      <PasswordInput pin={pin} setPin={setPin} />

      {!started ? (
        <ButtonComponent buttonText={'Iniciar'} handlePress={handleStartGame} />
      ) : (
        <ButtonComponent
          buttonText={'Desarmar'}
          handlePress={handleDisarmBomb}
        />
      )}
      <ButtonComponent
        buttonText={'Página Inicial'}
        handlePress={handleNavToStart}
      />
      <ButtonComponent buttonText={'Fracassado'} handlePress={handleExploded} />
    </Container>
  )
}
