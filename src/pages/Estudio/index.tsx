import { useState, useEffect } from 'react';
import { Button, Text, SafeAreaView, ScrollView, StyleSheet, Image, View, Platform } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import Albums from '@/src/components/Albums';
import BotaoAcessoCamera from '@/src/components/BotaoAcessoCamera';

export default function Estudio({navigation}:any){
  const [albums, setAlbums] = useState<MediaLibrary.Album[]>([]);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  


  async function getAlbums() {
    if(permissionResponse==null)
      await requestPermission();
    else if (permissionResponse.status !== 'granted') {
      await requestPermission();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
      
    });
    setAlbums(fetchedAlbums);
  }

  useEffect(()=>{
    getAlbums()
  }, [])

  return (
    <>
      <ScrollView style={style.background}>
        <SafeAreaView>
          {albums && albums.map((album: any) => <Albums album={album} navigation={navigation} />)}
        </SafeAreaView>
      </ScrollView>
      <BotaoAcessoCamera navigation={navigation} />
    </>
  );
}


const style = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:"#FFFBE8",
    padding:20,
    position:"relative",
    marginBottom:10
  },
  text:{
    color:"black",
    fontWeight:"bold"
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, 
    right: 20, 
  },
  
})