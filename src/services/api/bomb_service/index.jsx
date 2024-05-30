import moment from 'moment'
import React from 'react'
import { Vibration } from 'react-native'

export default BombService = {
  getDiffTime: ({ hours, minutes, seconds }) => {
    const explodeTime = moment()
    let secondsMoment = seconds.length >= 1 ? seconds : 0
    let minutesMoment = minutes.length >= 1 ? minutes : 0
    let hoursMoment = hours.length >= 1 ? hours : 0

    explodeTime
      .add(secondsMoment, 'seconds')
      .add(minutesMoment, 'minutes')
      .add(hoursMoment, 'hours')
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
  },
  startCountdown: ({
    setSeconds,
    setMinutes,
    setHours,
    setStarted,
    diffTime,
    setIntervalId,
    intervalId,
    navigation
  }) => {
    let duration = moment.duration(diffTime * 1000)
    const interval = 1000

    if (diffTime <= 0) return

    const id = setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - interval)

      const hoursDigits = duration.hours().toString().padStart(2, '0')
      const minutesDigits = duration.minutes().toString().padStart(2, '0')
      const secondsDigits = duration.seconds().toString().padStart(2, '0')

      const timeEnded =
        hoursDigits === '00' && minutesDigits === '00' && secondsDigits === '00'

      if (timeEnded) {
        clearInterval(intervalId)
        setStarted(false)
        navigation.navigate('Exploded')
      }

      setHours(hoursDigits)
      setMinutes(minutesDigits)
      setSeconds(secondsDigits)
    }, interval)

    setIntervalId(id)

    return null
  },
  bombStartGame: ({ setStarted, hours, minutes, seconds }) => {
    if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
      setStarted(true)
    }
  },
  disarmBomb: ({ setStarted, answer, navigation, pin, setPin, intervalId }) => {
    if (pin.join('') === answer) {
      clearInterval(intervalId)
      setStarted(false)
      navigation.navigate('Disarmed')

      return
    }
    setPin(['', '', ''])

    Vibration.vibrate(1000)

    return
  },
  bombActivationTogether: ({
    question,
    pin,
    hours,
    minutes,
    seconds,
    setMessage,
    setStarted,
    setPin,
    handleStartBomb,
    setAnswer
  }) => {
    if (question.length < 1) {
      setMessage('Você precisa dar uma dica!')
      return
    }
    if (pin.join('').length < 3) {
      setMessage('Senha invalida, complete ela')
      return
    }

    let timeIsSet = false

    if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
      setStarted(true)
      timeIsSet = true
      setMessage('')
      handleStartBomb()
      setAnswer(pin.join(''))
      setPin(['', '', ''])
    }

    if (!timeIsSet) {
      setMessage('Timer invalido, coloque um tempo')
      return
    }
  },
  bombDisarmTogether: ({
    pin,
    answer,
    setStarted,
    intervalId,
    setPin,
    navigation
  }) => {
    console.log('pin', pin)
    console.log('answer', answer)
    if (pin.join('') === answer) {
      clearInterval(intervalId)
      setStarted(false)
      navigation.navigate('Disarmed')

      return
    }
    setPin(['', '', ''])

    Vibration.vibrate(1000)

    return
  }
}
