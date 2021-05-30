import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
const API_KEY = '2d185cb0915ca318e92b8db530aaff0a';
const queryUrl = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`


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

    if (this.state.isLoading) {
      return (
        <View>
          <Image style={styles.imageStyle} source={require('./Box-Loading-2.gif')}/>
        </View>
      )
    }

   let celsius = this.state.main.temp - 273.15;
   let today_weather=this.state.weather[0].main;
   today_weather=today_weather.trim();
    if(today_weather == 'Clear')
           return (
             <View style={styles.container}>
              <Image style={styles.weatherStyle} source={require('./clear.png')}/>
               <Text style={styles.weatherText}>온도: {celsius.toFixed(1)}</Text>
             </View>
          );
    else if(today_weather == 'Rain')
            return (
                 <View style={styles.container}>
                  <Image style={styles.weatherStyle} source={require('./rain.png')}/>
                   <Text style={styles.weatherText}>온도: {celsius.toFixed(1)}</Text>
                 </View>
            );
    else if(today_weather == 'Haze')
            return (
                 <View style={styles.container}>
                 <Image style={styles.weatherStyle} source={require('./haze.png')}/>
                   <Text style={styles.weatherText}>온도: {celsius.toFixed(1)}</Text>
                 </View>
            );
    else if(today_weather == 'Snow')
            return (
                 <View style={styles.container}>
                  <Image style={styles.weatherStyle} source={require('./snow.png')}/>
                   <Text style={styles.weatherText}>온도: {celsius.toFixed(1)}</Text>
                 </View>
            );
    else if(today_weather == 'Thunderstorm')
            return (
                 <View style={styles.container}>
                  <Image style={styles.weatherStyle} source={require('./thunderstorm.png')}/>
                   <Text style={styles.weatherText}>온도: {celsius.toFixed(1)}</Text>
                 </View>
            );
    else if(today_weather == 'Clouds')
            return (
                 <View style={styles.container}>
                  <Image style={styles.weatherStyle} source={require('./clouds.png')}/>
                   <Text style={styles.weatherText}>온도: {celsius.toFixed(1)}</Text>
                 </View>
            );
    else if(today_weather == 'Drizzle')
            return (
                 <View style={styles.container}>
                  <Image style={styles.weatherStyle} source={require('./drizzle.png')}/>
                   <Text style={styles.weatherText}>온도: {celsius.toFixed(1)}</Text>
                 </View>
            );
    else
        return (
                     <View style={styles.container}>
                     <Image style={styles.weatherStyle} source={require('./others.png')}/>
                       <Text style={styles.weatherText}>온도: {celsius.toFixed(1)}</Text>
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
           left:5,
           height:800,
           width:2000,

         },
         weatherStyle : {
                    left:5,
                    height:500,
                    width:500,
         },
         weatherText : {
            textAlign: 'center',
            color: 'orange',
         }
});