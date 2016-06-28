import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import { BRUSH } from '../constants/scene';

class Play extends Component {
  handlePress() {
    this.props.navigator.push({
      scene: BRUSH
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.handlePress.bind(this)}
        >
          <View>
            <Text>Play</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0277bd',
  }
});

const { object } = PropTypes;

Play.propTypes = {
  navigator: object.isRequired,
}

export default Play;
