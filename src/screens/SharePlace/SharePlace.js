import React from 'react';
import { View, Text, Button, TextInput, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import MainText from '../../components/UI/MainText/MainText'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import { addPlace } from '../../../store/actions/index'
import imagePlaceholder from '../../../assets/hamburg.jpg'
import PickImage from '../../components/PickImage/PickImage'
import PickLocation from '../../components/PickLocation/PickLocation'
import { connect } from 'react-redux'; 
import { CustomHeaderButton } from '../../components/UI/HeaderButton/HeaderButton'
import HeaderButtons, { Item } from 'react-navigation-header-buttons';

export class SharePlaceScreenUnwrapped extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Share Place',
    headerTintColor: 'green',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='settings' iconName='ios-settings' onPress={() => navigation.openDrawer()} />
      </HeaderButtons>
    ),
  });

  state = {
    placeName: ''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeAddedHandler = () => {
    const { placeName } = this.state
    if (placeName.trim() !== '') {
      this.props.onAddPlace(placeName)
    }
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView >
          <View style={styles.container}>
            <MainText>
              <HeadingText>Share a Place with us!</HeadingText>
            </MainText>
            <PickImage />
            <PickLocation />
            <PlaceInput
              placeName={this.state.placeName}
              onChangeText={this.placeNameChangedHandler}
            />
            <View style={styles.button}>
              <Button 
                title="Share the Place!"
                onPress={this.placeAddedHandler}  
              />
            </View>          
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  onAddPlace: (name) => dispatch(addPlace(name))
})
export const SharePlaceScreen = connect(null, mapDispatchToProps)(SharePlaceScreenUnwrapped)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  previewImage: {
    width: '100%',
    height: '100%'
  },
  button: {
    margin: 8,
  }
})