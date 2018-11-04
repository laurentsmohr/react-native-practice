import React from 'React'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { ListItem } from './ListItem/ListItem'

export const ListComponent = ({items, selectItem}) => (
  <ScrollView style={styles.listContainer}> 
    {items.map((item, i) =>(
      <ListItem key={item.key} item={item} selectItem={selectItem}/>
    ))}
  </ScrollView>
)

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})