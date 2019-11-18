import React, {Component} from 'react';
import {StyleSheet, Image, View } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { weatherConditions } from './weatherConditions'
import PropTypes from 'prop-types';

const Weather = (props) => {
    return (
    <Card containerStyle={styles.card}>
        <Text style={styles.notes}>{props.location}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
				
				</View>

            <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20}} />


            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={
            styles.weatherContainer
            }>
               
            

        <View style={styles.headerContainer} > 
             <MaterialCommunityIcons size={72} name={props.icon} color={'#fff'} />
             <Text style={styles.tempText}>{props.temperature}˚C
             </Text>
        </View>
        <View style={styles.bodyContainer}> 
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.description}</Text>
        </View>
       </View>
       </View>

    </Card>
    );
  };

  Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
  };
  
  const styles = StyleSheet.create({
    card:{
		backgroundColor:'rgba(56, 172, 236, 1)',
		borderWidth:0,
		borderRadius:20
    },


    headerContainer: {
        flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    },
    
    tempText: {
        fontSize: 48,
        color: '#fff'
      },
    bodyContainer: {
        flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
    },
    title: {
        fontSize: 48,
        color: '#fff'
      },
      subtitle: {
        fontSize: 24,
        color: '#fff'
      }
  });
  
  export default Weather;