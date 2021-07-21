import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from "react-native-elements";
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://source.unsplash.com/random' },
  { id: 2, text: 'Card #2', uri: 'https://source.unsplash.com/random' },
  { id: 3, text: 'Card #3', uri: 'https://source.unsplash.com/random' },
  { id: 4, text: 'Card #4', uri: 'https://source.unsplash.com/random' },
  { id: 5, text: 'Card #5', uri: 'https://source.unsplash.com/random' },
  { id: 6, text: 'Card #6', uri: 'https://source.unsplash.com/random' },
  { id: 7, text: 'Card #7', uri: 'https://source.unsplash.com/random' },
  { id: 8, text: 'Card #8', uri: 'https://source.unsplash.com/random' },
]

export default function App() {

  const renderCard = (item) => {
    return (
        <Card key={item.id}>
            <Card.Image source={{ uri: item.uri }}></Card.Image>
            <Card.Title style={{textAlign: 'left'}}>{item.text}</Card.Title>
            <Text>
                I can customize the card further.
            </Text>
            <Button
                icon={{name: 'code'}}
                backgroundColor={"#03A9F4"}
                title={"View Now"}
            />
        </Card>
    )
  }

  const renderNoMoreCards = () => {
      return (
          <Card>
              <Card.Title style={{textAlign: 'left'}}>No more cards</Card.Title>
              <Text>
                  There is no more cards.
              </Text>
              <Button
                  icon={{name: 'code'}}
                  backgroundColor={"#03A9F4"}
                  title={"OK"}
              />
          </Card>
      )
  }

  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
