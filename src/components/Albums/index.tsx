import * as MediaLibrary from "expo-media-library"
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

export default function Albums({ album, navigation }:any){
    const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);

    function verTudoHandler(){
        navigation.navigate("AlbumEspecifico",{album:album})
    }


    useEffect(() => {
        setAssets([])
        async function getAlbumAssets() {
          const albumAssets = await MediaLibrary.getAssetsAsync({ 
                album: album,
                mediaType: MediaLibrary.MediaType.photo,
                first: 5, 
            });
          setAssets(albumAssets.assets);
        }
        getAlbumAssets();
    }, [album]);

    if(assets.length == 0) return;

    return (
        <View key={album.id} style={{height:200}}>
          <View style={style.header}>
            <Text style={style.text}>
                {album.title} - {album.assetCount ?? 'Vazia'}
            </Text>
            <TouchableOpacity style={style.button} onPress={verTudoHandler}>
                <Text>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{flex:1, height:180}} horizontal={true}>
            {assets && assets.map((asset) => (
              <Image key={asset.id} style={style.image} source={{ uri: asset.uri }} width={50} height={50} />
            ))}
          </ScrollView>
        </View>
      );
}

const style = StyleSheet.create({
    header:{
        flex:0.5,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginTop:20,
        padding:5
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    },
    button:{
        paddingHorizontal:7,
        paddingVertical:3,
        borderRadius:99,
        backgroundColor:"#FFFFFF",
        borderWidth:2,
        borderColor:"black"
    }, 
    image: {
        marginRight: 5,
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: "black"
    }
})