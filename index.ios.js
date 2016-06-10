
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Day from './src/day-item';
import Moment from 'moment';



class Weekdays extends Component {

  _renderDays(){
    let dayItems = [];

    for(let i = 0; i < 7; i++){
      const day = Moment().add(i, 'days').format('dddd');
      dayItems.push(<Day day={day} key={day} daysUntil={i} />)
    }

    return dayItems;
  }

  render() {
    return (
      <View style={styles.container}>
        { this._renderDays() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center', //Moves along the Y axis
    alignItems: 'center' //Moves along the X axis,
  },
  title: {
    fontSize:26
  },
  currentDay:{

  }
});


AppRegistry.registerComponent('weekdays', () => Weekdays);
