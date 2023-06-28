import {toHaveDisplayValue} from "@testing-library/jest-dom/matchers";
import {getByDisplayValue} from "@testing-library/react";
import React, {Fragment} from 'react';
import {StyleSheet, Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ImageCard from './assets/imgs/coffee1.jpeg'

const Card = () => {
  return (<div style={styles.card}>
    <img src={ImageCard} style={styles.img}/>
    <Text style={styles.text}>Mocha</Text>
    </div>);
};

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'darkgreen',
    borderRadius: '10%',
    flexDirection:'column',
    width: '30%'
  },
  img:{
    width:'100%',
    paddingBottom:'15px',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0%',
    borderBottomRightRadius: '0%'
  },
  text:{
    textAlign: 'center',
    paddingBottom: '15px',
    fontWeight: 'bold',
    fontSize: '100%',
    display: 'revert',
    color: '#FFFFFF'
  }

})

export default Card;