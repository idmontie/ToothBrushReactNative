import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Circle as ProgressCircle } from 'react-native-progress';

import { PLAY } from '../constants/scene';

const TWO_MINUTES = 120000.0;

class Brush extends Component {
  constructor(props) {
    super(props);

    this.state = {
      milliseconds: 0,
      past: 0,
      now: 0,
      timer: null,
    };
  }

  componentDidMount() {
    let past = +new Date();
    this.setState({
      past,
      timer: setInterval(() => {
        if (this.state.now - this.state.past >= TWO_MINUTES) {
          clearInterval(this.state.timer);
        }

        this.setState({
          now: +new Date(),
        });
      }, 10)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  handleCancel() {
    this.props.navigator.push({
      scene: PLAY
    });
  }

  formatText(progress) {
    // Turn progress into seconds
    const milliseconds = parseInt((1 - progress) * TWO_MINUTES);

    // Turn seconds into a countdown
    const numberOfMinutes = parseInt((milliseconds * 1.0) / 60000.0);
    const remainder = parseInt((milliseconds % 60000) / 1000);

    if (numberOfMinutes > 0) {
      return numberOfMinutes + ':' + remainder;
    } else {
      return '' + remainder;
    }
  }

  render() {
    const diff = this.state.now - this.state.past;
    return (
      <View style={styles.container}>
        <Text>Brush</Text>

        <ProgressCircle
          unfilledColor={'#f44336'}
          borderWidth={0}
          color={'#ffebee'}
          size={200}
          formatText={this.formatText}
          thickness={20}
          showsText={true}
          progress={(diff * 1.0) / (TWO_MINUTES)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c62828',
  }
});

const { object } = PropTypes;

Brush.propTypes = {
  navigator: object.isRequired,
}

export default Brush;
