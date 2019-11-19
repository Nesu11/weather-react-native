import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import ForecastCard from './components/forecastCard';
import Constants from 'expo-constants';
//make forecast summaries?

const  Weather_API_Key = 'd4c0774c52765d8f79bf748fe0a1eebc'

export default class App extends React.Component {
  state = {
    isLoading: true,
    forecast: [],
    latitude: 0,
		longitude: 0,
    error: null,
    
  };

  componentDidMount() {
    this.fetchLocation();
  }

  fetchLocation = () => {
    //user's geo location
		navigator.geolocation.getCurrentPosition(
			position => {

			      this.setState({ 
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }), () => { this.fetchForecast() };
			},
			error => this.setState({forecast: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

  fetchForecast(lat, lon) {
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
    const { isLoading, forecast } = this.state;
		return (
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading Weather Forecast...</Text>
          </View>

            ) : (
		
				    <TouchableOpacity onPress={this.getLocation}>
            <View>
					    <Text style={styles.title}>Find My Location</Text>
            </View>
				    <FlatList data={forecast.list} style={{marginTop:20}} keyExtractor={item => item.dt_txt} renderItem={({item}) => <ForecastCard detail={item} location={this.state.forecast.city.name} />} />
				  </TouchableOpacity>
         )}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#38acec',
    marginTop: Constants.statusBarHeight,
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
		margin: 10
  },
})