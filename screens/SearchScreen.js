import { Appearance, FlatList, Image, Pressable, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native'
import React, { useNavigation, useState, useEffect } from 'react'
import { Feather, Entypo } from "@expo/vector-icons";
import data from '../assets/data/wallpaper.json'

const SearchScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState([])

  const searchHandler = () => {
    const searchTxt = searchText.toLowerCase();
    const searchItems = data.filter(item => item.name === searchTxt)
    setItems(searchItems);

    //console.log(searchItems);
    setSearchText('')
    //Keyboard.dismiss();
  }


  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(34,36,40,1)', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
        <View style={styles.search}>
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 5, marginTop: 7, }}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={setSearchText}
            placeholder='Search'
            returnKeyType='search'
            value={searchText}
            onEndEditing={searchHandler}
          />
        </View>
        <Feather
          name="search"
          size={20}
          color="royalblue"
          style={{ marginLeft: 5, marginTop: 7, }}
          onPress={searchHandler}
        />
      </View>

      <FlatList
        data={items}
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

export default SearchScreen

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#d9dbda',
    width: '90%',
    height: 35,
    borderRadius: 15,
    flexDirection: 'row'
  },
  textInput: {
    //backgroundColor: 'pink',
    width: '90%',
    fontSize: 20,
  },
  itemContainer: {
    width: '50%',
    padding: 1,
    //backgroundColor: 'red'
  },
  image: {
    width: "100%",
    height: 400,
    borderWidth: 0,
    borderColor: '#fff',

  },
})