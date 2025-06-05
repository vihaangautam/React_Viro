import React, { useState } from "react";
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
