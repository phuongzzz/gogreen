import React from 'react';
import { Text } from 'react-native';
import { FooterTab, Button, Footer } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FooterComponentStyles.js';

export const FooterComponent = () => {

  // TAB BAR ITEMS
  const tabs = [
    {
      title: "Schedule",
      subtitle: "",
      icon: "calendar"
    },
    {
      title: "Task",
      subtitle: "",
      icon: "tasks"
    },
    {
      title: "Account",
      subtitle: "",
      icon: "user-circle"
    }
  ];
  return (
    <Footer>
      <FooterTab style={styles.footerContainer}>
        {
          tabs.map((obj, index) => {
            return(
              <Button key={index}>
                <Icon size={20} name={obj.icon}  color={(index === 0) ? "#ff5e3a" : "grey"}/>
                <Text style={{fontSize: 12,fontWeight:"bold", color:(index === 0) ? "#ff5e3a" : "#eee"}}>{obj.title}</Text>
                <Text style={styles.subText}>{obj.subTitle}</Text>
              </Button>
            )
          })
        }
      </FooterTab>
    </Footer>
  );
}

export default FooterComponent;

