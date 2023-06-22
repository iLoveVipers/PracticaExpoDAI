import React from 'react';
import {Text} from 'react-native';
import ImageCard from './assets/imgs/coffee1.jpeg'

const Card = () => {
  return (<div><img src={ImageCard}/><Text>Mocha</Text></div>);
};

export default Card;