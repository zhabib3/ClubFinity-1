import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import {
  Calendar
} from 'react-native-calendars';
import AgendaContainer from '../components/AgendaContainer';

export default class CalendarScr extends React.Component {

  static navigationOptions = {
    title: 'Clubfinity',
    headerStyle: { backgroundColor: '#7e947f' },
    headerTitleStyle: { color: "#ecf0f1", letterSpacing: 2 },
  }

  constructor(props) {
    super(props);
    this.state = {
      eventsData : [
        {
          id: 1,
          title: 'GBM #3: Interviews',
          club: 'Software Engineering Club',
          time: '5:10 pm',
          date: '2019-02-21',
          location: 'CSE E114'
        },
        {
          id: 2,
          title: 'Startup Hour',
          club: 'gnvInnovate',
          time: '8:30 pm',
          date: '2019-02-21',
          location: 'Gaston Pub'
        },
        {
          id: 3,
          title: 'Gator Tank',
          club: 'Gator Innovators',
          time: '3:00 pm',
          date: '2019-02-25',
          location: 'Reitz Union'
        },
        {
          id: 4,
          title: 'GBM #2',
          club: 'ACE',
          time: '4:25 pm',
          date: '2019-02-22',
          location: 'CAB 214'
        }
      ],
      datePressed: ""
    }
  }

  handleDayPress = (day) => {
    this.setState({
      datePressed: day.dateString,
      selected: day.dateString
    });
  }

  render() {

    return (
      <View style={style.container}>
        <View style={style.calContainer}>
          <Calendar
            hideArrows={false}
            markedDates={{[this.state.selected]: {selected: true}}}
            onDayPress={this.handleDayPress}
          />
        </View>

        <AgendaContainer eventsArr={this.state.eventsData} datePressed={this.state.datePressed}/>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // paddingHorizontal: 10,
  },

  calContainer: {
    flex: 3,

  },

  agendaContainer: {
    flex: 2,
    paddingHorizontal: 10,
  },

  agendaHeader: {
    fontSize: 22,
    color: '#7e947f'
  }
})
