import React, { useEffect, useState } from 'react'
import { BombMessage, Container, Title } from './style'
import InputTimer from '../../components/play_together/input_timer'
import TipInput from '../../components/play_together/tip_input'
import InputPassword from '../../components/play_together/input_password'
import { useNavigation } from '@react-navigation/native'
import ButtonComponent from '../../components/buttons'
import BombService from '../../services/api/bomb_service'

export default function PlayTogether() {
  const navigation = useNavigation()

  const [pin, setPin] = useState(['', '', ''])
  const [started, setStarted] = useState(false)
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('03')
  const [seconds, setSeconds] = useState('00')
  const [message, setMessage] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [intervalId, setIntervalId] = useState()
  function handleNavToStart() {
    navigation.navigate('Start')
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
    BombService.bombActivationTogether({
      question,
      pin,
      hours,
      minutes,
      seconds,
      setMessage,
      setStarted,
      setPin,
      handleStartBomb,
      answer,
      setAnswer
    })
  }

  function handleDisarmBomb() {
    BombService.bombDisarmTogether({
      pin,
      answer,
      setStarted,
      intervalId,
      setPin,
      setAnswer,
      navigation
    })
  }

  useEffect(() => {
    if (started) {
      handleStartBomb()
    }
  }, [started])

  return (
    <Container>
      <Title>Bomb Game Dupla</Title>
      <InputTimer />
      {message ? <BombMessage>{message ? message : null}</BombMessage> : null}
      <TipInput
        started={started}
        answer={answer}
        setAnswer={setAnswer}
        setQuestion={setQuestion}
      />
      <InputPassword pin={pin} setPin={setPin} />
      {!started ? (
        <ButtonComponent buttonText={'Iniciar'} handlePress={handleStartGame} />
      ) : (
        <ButtonComponent
          buttonText={'Desarmar'}
          handlePress={handleDisarmBomb}
        />
      )}
    </Container>
  )
}
