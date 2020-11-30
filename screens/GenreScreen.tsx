import * as React from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

export default function GenreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Choose a Genre</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={GetAction}
        >
          <Text>Action</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={GetAction}
        >
          <Text>Horror</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
          style={styles.button}
          onPress={GetAction}
        >
          <Text>Documentaries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={GetAction}
        >
          <Text>Family</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
          style={styles.button}
          onPress={GetAction}
        >
          <Text>Documentaries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={GetAction}
        >
          <Text>Family</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
          style={styles.button}
          onPress={GetAction}
        >
          <Text>Documentaries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={GetAction}
        >
          <Text>Family</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function GetAction() {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 150,
    margin: 10
  },
});
