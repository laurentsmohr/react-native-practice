import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, AsyncStorage, SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'; 
import { addPlace, deletePlace, selectPlace, deselectPlace } from '../../../store/actions/index'
import { PlaceInput } from '../../components/PlaceInput/PlaceInput'
import { ListComponent } from '../../components/ListComponent/ListComponent'
import { PlaceDetail } from '../../components/PlaceDetail/PlaceDetail'
import image from '../../../assets/hamburg.jpg'
import { CustomHeaderButton } from '../../components/UI/HeaderButton/HeaderButton'
import HeaderButtons, { Item } from 'react-navigation-header-buttons';

class HomeScreenUnwrapped extends Component {
  static navigationOptions = ({navigation}) => {
    console.log(navigation)
    return {
    title: 'Home',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='settings' iconName='ios-settings' onPress={() => navigation.openDrawer()} />
      </HeaderButtons>
    ),
    headerTintColor: 'green',
  }};

  state = {
    places: [],
    selectedPlace: null,
  }
  
  addItem = (name) => {
    if ( name.trim() === '') {
      return;
    }
    this.props.onAddPlace(name)
  }

  // http://www.capetown.travel/wp-content/uploads/2016/07/camps_bay_grass-2.jpg

  selectItem = key => {
    this.props.onSelectPlace(key)
  }

  deleteItem = () => {
    this.props.onDeletePlace()
  }

  closeModal = () => {
    this.props.onDeselectPlace()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          deleteItem={this.deleteItem}
          closeModal={this.closeModal}
        />
        {/* <PlaceInput 
          handleButtonPress={this.addItem}
        /> */}
        <ListComponent
          items={this.props.places}
          selectItem={this.selectItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
    paddingTop: 40,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace
})

const mapDispatchToProps = dispatch => ({
  onAddPlace: (name) => dispatch(addPlace(name)),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: (key) => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace())
})

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreenUnwrapped)