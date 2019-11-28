import React, {Component} from 'react';
import {View, alert, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

type Props = {};

class LifeCycleScreenExample extends Component<Props> {
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

  hideSideMenu() {
    console.log('********************************', this.props);
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }

  render() {
    return (
      <View>
        <Button onPress={this.hideSideMenu} title="Press Me" />
        <Text> {`Lifecycle Screen`}</Text>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default LifeCycleScreenExample;
