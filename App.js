import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Divider } from 'react-native';

export default class App extends React.Component {

  state = {
    "coin_result": "head"
  }

  flipACoin() {
    const random = Math.floor(Math.random() * 2) + 1;

    if (random == 1) {
      //coin is head
      this.setState({
        "coin_result": "head"
      })
      console.log("It's Heads");
    }
    else {
      this.setState({
        "coin_result": "tail"
      })
      console.log("It's Tails");
    }
  }

  render() {
    
    return (
      
      <View style={styles.container}>

        {this.state.coin_result == "head" ?
        
          <Image
          source={
            require("./assets/coin_h.png")
          }
          style={styles.image}
          />
          

          :

          <Image
          source={
            require("./assets/coin_t.png")
          }
          style={styles.image}
          />
      
        }


        <TouchableOpacity>
          <Text
            onPress={() => {
              this.flipACoin()
            }}
            style={styles.button}>
            Flip The Coin!
          </Text>
        </TouchableOpacity>

        <View>
          <Text style={{
            marginTop:20,
            paddingTop: 100,
            fontSize: 15,
          }}>
            Developed By Z | 2022</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#DADADA"
  },
  button: {
    color: "white",
    backgroundColor: "#F38333",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 13,
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 50,
  }
});
