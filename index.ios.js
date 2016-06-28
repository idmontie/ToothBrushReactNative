/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Play from './src/ios/components/play';
import Brush from './src/ios/components/brush';
import { PLAY, BRUSH } from './src/ios/constants/scene';

class ToothBrush extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: PLAY,
    };
  }

  handleBrush() {
    this.setState({
      scene: BRUSH,
    });
  }

  handlePlay() {
    this.setState({
      scene: PLAY,
    });
  }

  render() {
    return (
      <Navigator
        initialRoute={{scene: PLAY}}
        renderScene={this.renderScene}
      />
    );
  }

  renderScene(route, navigator) {
    switch(route.scene) {
    case BRUSH:
      return (
        <Brush
          navigator={navigator}
        />
      );
    case PLAY:
    default:
      return (
        <Play
          navigator={navigator}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0277bd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ToothBrush', () => ToothBrush);
