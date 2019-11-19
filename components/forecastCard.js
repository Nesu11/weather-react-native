
import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';


export default class ForecastCard extends Component {

	render() {

		return (
			<View>
				<Text style={styles.details}>{this.props.location}</Text>

				<Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20}} />
				
				<View style={{flexDirection:'row', justifyContent:'space-between'}}>
					<Text style={styles.details}>{this.props.detail.weather[0].description}</Text>
					<Text style={styles.details}>{Math.round( this.props.detail.main.temp)}˚C</Text>
				</View>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	card:{
		backgroundColor:'#38acec',
		borderWidth:0,
		borderRadius:20
	},
	
	details: {
		fontSize: 18,
		color:'#fff',
	}
});