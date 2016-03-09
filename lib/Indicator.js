'use strict'

import Style from './Style'
import React, {
  View,
  ActivityIndicatorIOS,
  Image,
  Text,
  PropTypes,
  StyleSheet
} from 'react-native'

export default class Indicator extends React.Component {
  render () {
    var display_object = ''
    if (this.props.needPull) {
      display_object = (
        <Text style={Style.indicatorText}>Потяните, чтобы обновить</Text>
      )
    } else {
      display_object = (
        <ActivityIndicatorIOS
          size='small'
        />
      )
    }
    return (
      <View style={Style.indicatorWrapper}>
        {display_object}
      </View>
    )
  }
}

Indicator.propTypes = {
  needPull: PropTypes.bool
}

