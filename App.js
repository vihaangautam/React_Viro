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
  Viro3DObject,
  ViroAmbientLight,
} from "@reactvision/react-viro";
import { StyleSheet } from "react-native";

const InitialScene =(props)=>{
  let data=props.sceneNavigator.viroAppProps
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
  return(
  <ViroARScene>
    <ViroAmbientLight color="#ffffff"/> 
    <Viro3DObject>
      source={require('./assets/Skull_v3_L2.123c1407fc1e-ea5c-4cb9-9072-d28b8aba4c36/Skull_v3_L2.123c1407fc1e-ea5c-4cb9-9072-d28b8aba4c36/12140_Skull_v3_L2.obj')}
      position={[0,0,-5]}
      scale={[0.05,0.05,0.05]}
      rotation ={[-45,50,40]}
      type="OBJ"
    </Viro3DObject>
  

  </ViroARScene>
  )
}


export default() => {
  const [object, setObject]=useState('skull')
  return(
    <View style={styles.mainView}>
    <ViroARSceneNavigator
    initialScene={{
      scene:InitialScene
    }}
    viroAppProps={{"object":object}}
    style={{flex:1}}
    />
    <View style={styles.controlsView}>
      <TouchableOpacity onPress={()=>setObject('skull')}>
        <Text style={styles.Text}>Display Skull</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={()=>setObject('skull')}>
        <Text style={styles.Text}>Display TV</Text>
        </TouchableOpacity>

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
  },
  text:{
    margin: 20,
    backgroundColor:'#9d9d9d',
    padding:10,
    fontWeight:'bold'

  }
  
});
