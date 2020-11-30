import * as React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
const blah = ["hello"];

class GenreScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      dataSource: [],
      items: []
    };
  }

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Choose a Gene</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.GetAction.bind(this)}
        >
          <Text>Action</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.GetAction.bind(this)}
        >
          <Text>Horror</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
          style={styles.button}
          onPress={this.GetAction.bind(this)}
        >
          <Text>Documentaries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.GetAction.bind(this)}
        >
          <Text>Family</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
          style={styles.button}
          onPress={this.GetAction.bind(this)}
        >
          <Text>Documentaries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.GetAction.bind(this)}
        >
          <Text>Family</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
          style={styles.button}
          onPress={this.GetAction.bind(this)}
        >
          <Text>Documentaries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.GetAction.bind(this)}
        >
          <Text>Family</Text>
        </TouchableOpacity>
      </View>
      <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListSeparator}
                    renderItem={item => this.renderItem(item)}
                />
    </View>);
  };

  GetAction() {
    this.state = {
      loading: true,
      dataSource: []
    };
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=d7c08717890b402b415ad97c1039fb2c&language=en-US&page=1", {
      "method": "GET"
    })
      .then(response => response.json())
      .then((responseJson) => {
          console.log('getting data from fetch', responseJson)
          this.setState({dataSource: responseJson})
          setTimeout(() => {
            this.state = {
              loading: false,
              dataSource: responseJson.results[0]
            };
            alert(responseJson)
          }, 4000)
  
      })
      .catch(error => console.log(error))
  }

  renderItem(data: any) {
    return (
        <TouchableOpacity>
            <Text>{data.item.title}</Text>
        </TouchableOpacity>
    )
  }

  FlatListSeparator() {
    return (
        <View style={{
            height: .5,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
        }}
        />
    );
  }
}

export default GenreScreen;

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
