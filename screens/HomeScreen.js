import { Appearance, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useNavigation, useState, useEffect } from 'react'
import data from '../assets/data/wallpaper.json'


const HomeScreen = ({ navigation }) => {

  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
      console.log(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  const bgColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <View style={[styles.root, { backgroundColor: bgColor }]}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Pressable
          onPress={() => navigation.navigate('ImageView', { data: item })}
          style={styles.itemContainer}>
          <Image source={{ uri: item.image }}
            style={styles.image}
          />
        </Pressable>}
        numColumns={2}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,

  },
  itemContainer: {
    width: '50%',
    padding: 1,
    //backgroundColor: 'red'
  },
  image: {
    width: "100%",
    height: 400,
    //borderWidth: 3,
    //borderColor: '#fff'
  },
})