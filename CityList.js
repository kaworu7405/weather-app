import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default class CityList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/example0312/weather-crawler/e3168f2b4e316691f8ab385f738783976eef7f0d/availableCityNames')
      .then(response => response.json())
      .then(cities => {
        this.setState({
          cities
        });
      });
  }

  onPressCity(item) {
    console.log('onPressCity =', item);
    this.props.navigation.navigate('Detail', {
      city: item
    });
  }
  renderItem(city) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
        <Text style={styles.text}>{city}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList style={styles.container}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={item => item}
                data={this.state.cities}
      />
    );

  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white', // #fff
      marginTop: 0,
    },
  item: {
      margin: 7,
      marginLeft: 14,
      marginRight: 14,
      flex: 1,
      height: 80,
      justifyContent: 'center',
      backgroundColor: 'orange',

      //
      // borderWidth: 1,
      // borderColor: 'orange',
    },
  text: {
      fontSize: 20,
      textAlign: 'center',
      color: "#f1f2f6",
    },
              imageStyle: {
                position:'absolute',
                left:5,
                height:800,
                width:100,
              }
});