import React from "react";
import { View } from "native-base";
import { Image } from "react-native";
import MapView from "react-native-maps";

import SearchBox from "../SearchBox";

import styles from "./MapContainerStyles.js";
const treeImg = require("../../../../assets/img/tree.png");

export const MapContainer = ({region})=>{
  const trees1 = [
    {
      latitude:21.005633,
      longitude:105.843289,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005588,
      longitude:105.843347,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005659,
      longitude:105.843405,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005693,
      longitude:105.843352,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005655,
      longitude:105.843348,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005642,
      longitude:105.843309,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005652,
      longitude:105.843349,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005599,
      longitude:105.843348,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005587,
      longitude:105.843384,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005597,
      longitude:105.843327,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {
      latitude:21.005626,
      longitude:105.843392,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    }];

  const people = [
    {         
      latitude:21.005625,  
      longitude:105.843346,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
    {         
      latitude:21.005619,  
      longitude:105.843360,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    },
  ];
  return(
    // provider={MapView.PROVIDER_GOOGLE}
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
      >
        {
          people.map((p, k) => (
            <MapView.Marker
              key={k}
              coordinate={p}
              pinColor="red"
            />
          ))
        }
        <MapView.Marker
          coordinate={region}
          pinColor="green"
        />
        {
          trees1.map((t, key) => (
            <MapView.Marker
              key={key}
              coordinate={t}
              image={treeImg}
            />
          ))
        }
      </MapView>
      <SearchBox/>
    </View>
  )
}

export default MapContainer;
