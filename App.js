import React, { Component } from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      larAnimado: new Animated.Value(150),
      altAnimado: new Animated.Value(35)
    };
    Animated.loop(
      //loop sem parar a animação
      /**
      Animated.timing(
        this.state.larAnimado,
        {
          toValue:300,
          duration: 2000,
          //useNativeDriver:'true',: elemento do WARN porem funciona sem
        }
      ) */
        // animated - com sequincia de inicio e fim
      Animated.sequence([
        Animated.timing(
          this.state.larAnimado,
          {
            toValue:200,
            duration: 1000
          }
        ),
        Animated.timing(
          this.state.larAnimado,
          {
            toValue: 150,
            duration: 1000
          }
        )
      ])
    ).start();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View style={{
          width: this.state.larAnimado,
          height: this.state.altAnimado,
          backgroundColor: '#4169E1',
          justifyContent: 'center',
          borderRadius: 25
        }}>

          <Text style={{
            color: '#FFFFFF',
            fontSize:20,
            textAlign:'center',

          }}> Carregando...
          </Text>

        </Animated.View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
