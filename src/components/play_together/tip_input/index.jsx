import React, { useRef } from 'react'
import { Container, Input, InputContainer, TipTitle } from './style'

export default function TipInput({ setAnswer, setQuestion }) {
  const input = useRef()

  const updateAnswer = () => {
    const answerValue = input.current.value

    setQuestion(answerValue)
    setAnswer(answerValue)
  }

  return (
    <Container>
      <TipTitle>Dica de senha:</TipTitle>
      <InputContainer>
        <Input
          placeholder='Dica para a sua dupla'
          ref={input}
          onChangeText={(value) => {
            input.current.value = value
            updateAnswer()
          }}
        />
      </InputContainer>
    </Container>
  )
}
