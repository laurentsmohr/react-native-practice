import React from 'react'

export class DrawerScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Logout',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Auth')}
        title="Logout"
      />
    );
  }
}