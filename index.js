/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from 'react-native-navigation';
import App from './App';
import Home from './src/Home';
import Seetings from './src/Settings';

// Register screens
Navigation.registerComponent('navigation.WelcomeScreen', () => App);
Navigation.registerComponent('navigation.home', () => Home);
Navigation.registerComponent('navigation.settings', () => Seetings);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'navigation.settings',
            passProps: {
              text: 'This is a left side menu screen',
            },
          },
        },
        center: {
          bottomTabs: {
            children: [
              {
                component: {
                  name: 'navigation.home',
                  passProps: {
                    text: 'This is tab 1',
                  },
                  options: {
                    bottomTab: {
                      text: 'Tab 1',
                      icon: require('./img/layouts.png'),
                    },
                  },
                },
              },
              {
                component: {
                  name: 'navigation.WelcomeScreen',
                  passProps: {
                    text: 'This is tab 2',
                  },
                  options: {
                    bottomTab: {
                      text: 'Tab 2',
                      icon: require('./img/options.png'),
                    },
                  },
                },
              },
            ],
          },
        },
        right: {
          component: {
            name: 'navigation.settings',
            passProps: {
              text: 'This is a right side menu screen',
            },
          },
        },
      },
    },
  });
});
