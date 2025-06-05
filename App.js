import React, { useState } from "react";
import{View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingStateConstants,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
} from "@reactvision/react-viro";
import { StyleSheet } from "react-native";

const InitialScene =()=>{
  ViroMaterials.createMaterials({
    wood:{
      diffuseTexture:require('./assets/wood.jpg')
    }
  })

  ViroAnimations.registerAnimations({
    rotate:{
      duration:2500,
      properties:{
        rotateY:'+=90'
      }
    }
  })
  return(<ViroARScene>
    {/*
    <ViroText 
    text={"Hello World"}
    position={[0,-5,-3]}
    style={{fontSize:100,fontFamily:'Arial',color:'red'}}
    /> */}
    <ViroBox
    height={2}
    length={2}
    width={2}
    scale={[0.2,0.2,0.2]}
    position={[0,-1,-1]}
    materials={["wood"]}
    animation={{name:'rotate', loop:true,run:true}}
    />

  </ViroARScene>
  )
}


export default function App() {
  return(
    <View style={styles.mainView}>
    <ViroARSceneNavigator
    initialScene={{
      scene:InitialScene
    }}
    style={{flex:1}}
    />
    <View style={styles.controlsView}>
      <TouchableOpacity><Text>Display Skull</Text></TouchableOpacity>
      <TouchableOpacity>Display TV</TouchableOpacity>

    </View>

    </View>
  );
};

var styles = StyleSheet.create({
  mainView:{
    flex:1
  },
  controlsView:{
    width:'100%',
    height:100,
    backgroundColor: '#ffffff',
    display :'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  }
  
});
