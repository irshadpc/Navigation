import React, {Component} from 'react';
import {View, alert, Text, styles} from 'react-native';
import {Navigation} from 'react-native-navigation';

class LifeCycleScreenExample1 extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'nothing yet',
    };
  }

  componentDidAppear() {
    this.setState({text: 'componentDidAppear'});
  }
  componentDidDisappear() {
    // alert('componentDidDisappear');
    this.setState({text: 'componentDidDisappear'});
  }

  navigationButtonPressed({buttonId}) {
    // a navigation-based button (for example in the topBar) was clicked. See section on buttons.
  }

  componentWillUnmount() {
    alert('componentWillUnmount');
  }

  render() {
    return (
      <View>
        <Text>{`Lifecycle Screen 1`}</Text>
        <Text>{'Side menu'}</Text>
      </View>
    );
  }
}

export default LifeCycleScreenExample1;
