import React from "react";
import {View, Text} from "react-native";

import { Container }  from "native-base";
import { StatusBar }  from "react-native";

import MapContainer from "./MapContainer";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";

const logo = require("../../../assets/img/logo.png");

class Home extends React.Component{

  componentDidMount() {
    StatusBar.setHidden(true);
    this.props.getCurrentLocation();
  }

  render(){
    const region = {
      latitude:21.029595,
      longitude:105.845818,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    }
    return(
      <Container>
        <HeaderComponent logo={logo}/>
        {this.props.region.latitude &&
            <MapContainer region={this.props.region}/>
        }
        <FooterComponent />
      </Container>

    );

  }
}

export default Home;
