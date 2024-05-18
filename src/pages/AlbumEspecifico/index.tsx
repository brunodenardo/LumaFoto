import { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library"
import { ScrollView, Image, View, StyleSheet, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function AlbumEspecifico({navigation}:any){
    const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);
    const route = useRoute();
    const { album }:any = route.params;


    useEffect(() => {
        
        setAssets([])
        async function getAlbumAssets() {
          const albumAssets = await MediaLibrary.getAssetsAsync({ 
                album: album,
                mediaType: MediaLibrary.MediaType.photo,
            });
          setAssets(albumAssets.assets);
        }
        getAlbumAssets();
    }, [album]);
    return (
        <><View style={{padding:10, marginLeft:10, justifyContent:"center", backgroundColor:"#FFFBE8"}}>
            <Text style={styles.text}>
                {album.title}
            </Text>
        </View>
        <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    {assets && assets.map((asset) => (
                        <Image
                            key={asset.id}
                            style={styles.image}
                            source={{ uri: asset.uri }} />
                    ))}
                </View>
            </ScrollView></>
      );
}
const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      padding:5,
      backgroundColor:"#FFFBE8",

    },
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "center",
    },
    image: {
      margin: 2,
      height: 160,
      width: 160,
      borderWidth:2,
      borderColor:"black"
    },
    text:{
        color:"black",
        fontWeight:"bold",
        fontSize:25
      },
  });