import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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

// This is the AR Scene that will render your 3D objects
const InitialScene = (props) => {
  const [rotation, setRotation]= useState([-45,50,40])
  const [position, setPosition]= useState([0,0,-5])
  const [tvScale, setTvScale]= useState([0.004, 0.004, 0.004])
  const [skullScale, setSkullScale]= useState([0.05, 0.05, 0.05])
  // Get the props passed via ViroARSceneNavigator
  let data = props.sceneNavigator.viroAppProps;

  // Define custom material (though not used in this version)
  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require("./assets/wood.jpg"),
    },
  });

  // Register a basic rotation animation (not yet applied)
  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: "+=90", // Rotate 90° on Y axis
      },
    },
  });

  const moveObject=(newPosition)=>{
    setPosition(newPosition);
  }
  

  return (
    <ViroARScene>
      {/* Ambient light so the object is visible */}
      <ViroAmbientLight color="#ffffff" />

      {/* Conditional rendering: skull or TV */}
      {data.object === "skull" ? (
        <Viro3DObject
          source={require("./assets/Skull_v3_L2.123c1407fc1e-ea5c-4cb9-9072-d28b8aba4c36/Skull_v3_L2.123c1407fc1e-ea5c-4cb9-9072-d28b8aba4c36/12140_Skull_v3_L2.obj")}
          position={position}
          scale={skullScale}
          rotation={rotation}
          type="OBJ"
          onDrag={moveObject}
        />
      ) : (
        <Viro3DObject
          source={require("./assets/57-old_tv/Old_TV/Old_TV.obj")}
          position={position}
          scale={tvScale}
          rotation={rotation}
          type="OBJ"
          onDrag={moveObject}
        />
      )}
    </ViroARScene>
  );
};

// The main exported App component
export default () => {
  // React state to track which object to show
  const [object, setObject] = useState("tv");

  return (
    <View style={styles.mainView}>
      {/* AR Navigator that loads InitialScene with passed props */}
      <ViroARSceneNavigator
        initialScene={{
          scene: InitialScene,
        }}
        viroAppProps={{ object: object }}
        style={{ flex: 1 }}
      />

      {/* UI Control Panel */}
      <View style={styles.controlsView}>
        {/* Button to show the skull */}
        <TouchableOpacity onPress={() => setObject("skull")}>
          <Text style={styles.text}>Display Skull</Text>
        </TouchableOpacity>

        {/* Button to show the TV */}
        <TouchableOpacity onPress={() => setObject("tv")}>
          <Text style={styles.text}>Display TV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for layout and buttons
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  controlsView: {
    width: "100%",
    height: 100,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    backgroundColor: "#9d9d9d",
    padding: 10,
    fontWeight: "bold",
    color: "white",
    borderRadius: 5,
  },
});
