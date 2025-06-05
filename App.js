import React, { useState } from "react";
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingStateConstants,
  ViroBox,
} from "@reactvision/react-viro";
import { StyleSheet } from "react-native";

const InitialScene =()=>{
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
    />
    
  </ViroARScene>
  )
}


export default function App() {
  return(
    <ViroARSceneNavigator
    initialScene={{
      scene:InitialScene
    }}
    style={{flex:1}}
    />
  );
};

const style = StyleSheet.create({
  
});
