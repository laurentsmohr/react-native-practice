import React from 'React'
import DefaultInput from '../UI/DefaultInput/DefaultInput'

export const placeInput = props => (
  <DefaultInput 
    placeholder="Place Name!"
    value={props.placeName}
    onChangeText={props.onChangeText}
  />    
)
export default placeInput


