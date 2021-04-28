import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'


export const Container = styled(LinearGradient)`
    height: 220px;
    padding: 25px;
    align-items: center;
    justify-content: center;
`
export const BalanceValue = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;

`
export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
`
export const Subtitle = styled.Text`
    color: #fff;
    font-size:14px;
`
export const ActiveBalance = styled.View` 
    height:60px;
    background: #1e222b;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
`
export const ActiveBalanceText = styled.Text`
  color: #fff;
    font-size: 14px;
    font-weight: bold;
  `

export const AreaButtons = styled.View`
    margin-top: 25px;
    flex-direction: row;
    
`
export const Button = styled.TouchableOpacity`
    padding: 10px 15px;
    margin: 0 15px;
    border: 1px dashed white;
    border-radius:20px;
    
`

export const TextButton = styled.Text`
    color: #fff;
`