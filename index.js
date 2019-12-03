/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import Home from './src/Home';
import Seetings from './src/Settings';
import traslate from './src/utils/i18n';

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
              text: traslate.left_side_menu,
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
                    text: traslate.tab1,
                  },
                  options: {
                    bottomTab: {
                      text: traslate.tab1,
                      icon: require('./img/layouts.png'),
                    },
                  },
                },
              },
              {
                component: {
                  name: 'navigation.WelcomeScreen',
                  passProps: {
                    text: traslate.tab2,
                  },
                  options: {
                    bottomTab: {
                      text: traslate.tab2,
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
