import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
const API_KEY = '{YOUR_API_KEY}';
const queryUrl = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
import loading from './Box-Loading-2.gif';

import todayWeather from './todayWeather.gif';

export default class WeatherDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    const {
      route: {
        params: { city },
      },
    } = this.props;
    fetch(queryUrl(city))
      .then(response => response.json())
      .then(info => {
        console.log(info);
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {
    const {
      route: {
        params: { city },
      },
      navigation,
    } = this.props;

    navigation.setOptions({ title: `Weather Information: ${city}` });
    //
    if (this.state.isLoading) {
      return (
        <View>
          <Image style={styles.imageStyle} source={require('./Box-Loading-2.gif')}/>
        </View>
      )
    }
   //
   let celsius = this.state.main.temp - 273.15;
       return (
         <View style={styles.container}>
           <Text>온도: {celsius.toFixed(1)}</Text>
         </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
         imageStyle: {
           position:'absolute',
           left:5,
           height:800,
           width:2000,
         }
});