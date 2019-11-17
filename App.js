import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Lottie from 'lottie-react-native'
import Weather from './components/weather';

const  Weather_API_Key = 'd4c0774c52765d8f79bf748fe0a1eebc'

export default class App extends React.Component {
  constructor(props){
    super(props)
  
  state = {
    isLoading: true,
    latitude: 0,
    longitude: 0,
    forecast: [],
    error: null,
  };

}

  componentDidMount() {
    //current location of user
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Forecast Unavailable'
        });
      }
    );
  }

  getWeather(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${Weather_API_Key}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading Weather Forecast...</Text>
          </View>
        ) : (
          <Weather weather={weatherCondition} temperature={temperature} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  },
  loadingText: {
    fontSize: 30
  }
});