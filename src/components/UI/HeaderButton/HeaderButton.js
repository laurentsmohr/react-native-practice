import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import { StyleSheet } from 'react-native'

export const CustomHeaderButton = props => (
  <HeaderButton {...props} IconComponent={Icon} iconSize={30} color="grey" style={styles.paddingLeft}/>
)

const styles = StyleSheet.create({
  paddingLeft: {
    marginLeft: 7,
  }
})