import ReactWeather from 'react-open-weather';
import React, {Component} from 'react';
import { Text, Card, Divider } from 'react-native-elements';
import {StyleSheet, Image, View } from 'react-native';



export default class OpenWeather extends Component {

	render() {

		return (
			<Card containerStyle={styles.card}>
                <Text>
				<ReactWeather
                    forecast={"5days"}
                    apikey={"d4c0774c52765d8f79bf748fe0a1eebc"}
                    type={"city"}
                    city={"Munich"}
                    />
                    </Text>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	card:{
		backgroundColor:'rgba(56, 172, 236, 1)',
		borderWidth:0,
		borderRadius:20
	},
});