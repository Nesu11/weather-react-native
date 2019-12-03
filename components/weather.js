import React, {Component} from 'react';
import {StyleSheet, Image, View } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from './weatherConditions'
import PropTypes from 'prop-types';

const Weather = ({ weather, temperature, description }) => {
    return (
        
      <View style={[
          styles.weatherContainer,
          { backgroundColor: weatherConditions[weather].color }
          ]}>
        <View style={styles.headerContainer} > 
        <MaterialCommunityIcons size={48} name={weatherConditions[weather].icon} color={'#fff'} />
<Text style={styles.tempText}>{Math.round(temperature)}˚C</Text>
        </View>
        <View style={styles.bodyContainer}> 
        <Text style={styles.title}>So Sunny</Text>
        <Text style={styles.subtitle}>It hurts my eyes!</Text>
        </View>
      </View>
     
    );
  };

  Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
  };
  
  const styles = StyleSheet.create({
        
    weatherContainer: {
      flex: 1,
      backgroundColor: '#f7b733'
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