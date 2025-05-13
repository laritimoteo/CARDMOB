import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class List extends Component {
  state = {
    names: [
      { id: 0, name: 'Ben' },
      { id: 1, name: 'Susan' },
      { id: 2, name: 'Roberth' },
      { id: 3, name: 'Chrischarles' }
    ]
  };

  alertItemName = (item) => {
    alert(item.name);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Lista de itens "clicáveis"
        </Text>
        {
          this.state.names.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() => this.alertItemName(item)}
            >
              <Text style={styles.itemText}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  container: {
    padding: 12,
    marginVertical: 3,
    backgroundColor: '#E6DAF3',
    alignItems: 'center',
    borderRadius: 4,
  },
  itemText: {
    color: '#B39DDB',
    fontSize: 16,
  }
});
