import React, { Component } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

class ScrollViewExample extends Component {
  state = {
        names: [
            { name: 'Larissa', id: 1 },
            { name: 'Lucas', id: 2 },
            { name: 'Leonardo', id: 3 },
            { name: 'Luana', id: 4 },
            { name: 'Luan', id: 5 },
            { name: 'Lívia', id: 6 },
            { name: 'Lorena', id: 7 },
            { name: 'Luiza', id: 8 },
            { name: 'Leandro', id: 9 },
            { name: 'Luca', id: 10 },
            { name: 'Lourenço', id: 11 },
            { name: 'Luciana', id: 12 },
          ]
  }

  render() {
    return (
        <View>
            <ScrollView>
                {
                    this.state.names.map((item, index) => (
                        <View
                           key={item.id}
                           style={styles.item}
                        >
                        <Image source={require('../assets/favicon.png')} />
                        <Text>{item.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>

     );
  }
  
}

export default ScrollViewExample;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});