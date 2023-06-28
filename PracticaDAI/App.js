
import ImageLogo from './assets/imgs/central_perk_logo.jpeg'
import Card from "./Card";
import React, {Fragment} from "react";
import './App.css';
import { Text, View, Image } from 'react-native';

export default function App() {
  return (
    <div className="App">
        <header className="App-header">
      <Image source={ImageLogo} style={styles.img}/>
      <Card/></header>
      </div>
  );
};

