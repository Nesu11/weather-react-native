import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native'
import Weather from './components/weather';
import ForecastCard from './components/forecastCard';
import Constants from 'expo-constants';

const  Weather_API_Key = 'd4c0774c52765d8f79bf748fe0a1eebc'

export default class App extends React.Component {
  state = {
    isLoading: true,
    forecast: [],
    location: null,
    error: null,
    
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position);

				this.setState({ location }), () => { this.fetchWeather() };
			},
			error => this.setState({forecast: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

  fetchWeather(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${Weather_API_Key}&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          forecast:data
        });
      });
  }
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<TouchableOpacity onPress={this.getLocation}>
          <View>
					<Text style={styles.welcome}>Find My Location</Text>
          </View>
				<FlatList data={this.state.forecast.list} style={{marginTop:20}} keyExtractor={item => item.dt_txt} renderItem={({item}) => <ForecastCard detail={item} location={this.state.forecast.city.name} />} />
				</TouchableOpacity>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: Constants.statusBarHeight,
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
  },
})