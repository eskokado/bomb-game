import styled from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: ${getStatusBarHeight() + 20}px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Icon = styled(MaterialIcons)`
  font-size: ${30}px;
  margin-bottom: ${20}px;
  color: ${({ theme }) => theme.colors.white};
`

export const Title = styled.Text`
  font-size: ${32}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: ${10}px;
  color: ${({ theme }) => theme.colors.white};
`

export const Paragraph = styled.Text`
  font-size: ${16}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: ${10}px;
  margin-top: ${15}px;
  color: ${({ theme }) => theme.colors.textLight};
`

export const NumberParagraph = styled.Text`
  font-weight: bold;
`

export const ScrollTextRules = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`
