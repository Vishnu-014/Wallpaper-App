import { Image, ImageBackground, Modal, StyleSheet, Text, View, CameraRoll, Alert } from 'react-native'
import React from 'react'
import data from '../assets/data/wallpaper.json'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Icon } from '@rneui/themed';
import Animated, { Easing } from "react-native-reanimated";
import { Camera } from 'expo-camera';
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";


const ImageViewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params.data);
  const { image, name } = route.params.data
  const opacity = new Animated.Value(0);

  const previewHandler = () => {
    navigation.popToTop()
    navigation.navigate('Preview', { data: route.params.data })
  }

  const saveToCameraRoll = async (image, name) => {
    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 300,
      easing: Easing.linear(Easing.ease),
    }).start();
    let cameraPermissions = await Camera.requestCameraPermissionsAsync();
    if (cameraPermissions.status !== "granted") {
      cameraPermissions = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    }
    if (cameraPermissions.status === "granted") {
      FileSystem.downloadAsync(
        image,
        FileSystem.documentDirectory + name + ".jpg"
      )
        .then(async ({ uri }) => {
          const asset = await MediaLibrary.createAssetAsync(uri);
          MediaLibrary.createAlbumAsync("Wallpapers", asset)
            .then(() => {
              Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                easing: Easing.linear(Easing.ease),
              }).start(() => {
                Alert.alert("Success", "Image has been saved");
              });
            })
            .catch((error) => { });
        })
        .catch(() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear(Easing.ease),
          }).start(() => {
            Alert.alert("Error", "Could not save image");
          });
        });
    }
  }

  return (
    <ImageBackground source={{ uri: image }}
      resizeMode='cover'
      blurRadius={50}
      style={{ flex: 1, }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: image }}
          style={{
            width: 300, aspectRatio: 1 / 2, resizeMode: 'cover', borderRadius: 16,
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 45 }}>
        <Button
          title="PREVIEW"
          icon={{
            name: 'mobile',
            type: 'font-awesome',
            size: 17,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(199, 43, 98, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 150,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onPress={previewHandler}
        />
        <Button
          title="SAVE"
          icon={{
            name: 'save',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(199, 43, 98, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 150,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onPress={() => saveToCameraRoll(image, name)}
        />
      </View>

    </ImageBackground>
  )
}

export default ImageViewScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  }
})