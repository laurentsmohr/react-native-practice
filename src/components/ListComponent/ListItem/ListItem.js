import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
 
export const ListItem = ({item, selectItem}) => (
  <TouchableOpacity onPress={() => selectItem(item.key)}>
    <View style={styles.listItem} >
      <Image style={styles.placeImage} source={item.image} />
      <Text>{item.name}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: '#eee',
    margin: 7,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  }
})