import React, { useRef } from 'react'
import { Container, Input, InputContainer } from './style'
import { Keyboard } from 'react-native'

export default function InputPassword({ pin, setPin, started }) {
  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()

  const updatePin = () => {
    const pinValue = [
      input1.current.value,
      input2.current.value,
      input3.current.value
    ]
    setPin(pinValue)
    console.log('updatePin', pin)
  }

  return (
    <Container>
      <InputContainer>
        <Input
          keyboardType={'number-pad'}
          maxLength={1}
          ref={input1}
          onChangeText={(value) => {
            input1.current.value = value
            value && input2.current.focus()
            updatePin()
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={'number-pad'}
          maxLength={1}
          ref={input2}
          onChangeText={(value) => {
            input2.current.value = value
            value && input3.current.focus()
            updatePin()
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={'number-pad'}
          maxLength={1}
          ref={input3}
          onChangeText={(value) => {
            input3.current.value = value
            updatePin()
            Keyboard.dismiss()
          }}
        />
      </InputContainer>
    </Container>
  )
}
