import React from 'react'
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export const PlaceDetail = ({selectedPlace, deleteItem, closeModal}) => {
  let modalContent = null

  if (selectedPlace) {
    modalContent = (
      <View>
          <Image source={selectedPlace.image} style={styles.image}/>
          <Text style={styles.text}>{selectedPlace.name}</Text>
      </View>
    )
  }

  return (
    <Modal onRequestClose={closeModal} visible={selectedPlace !== null} animationType='slide'>
      <SafeAreaView style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={deleteItem}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
          <Button title='close' onPress={closeModal}/>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  image: {
    width: '100%',
    height: 200
  },
  text: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  },
  deleteButton: {
    alignItems: 'center'
  }
})