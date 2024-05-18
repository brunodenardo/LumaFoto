import { useEffect, useState } from "react"
import {View, Image, TouchableOpacity, StyleSheet} from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import * as MediaLibrary from "expo-media-library"

export default function PhotoSave({navigation, photo, setPhotoExistente}:any){
    console.log(photo)
    console.log(setPhotoExistente)
    const [foto, setFoto] = useState(photo.path)
    const [render, setRender] = useState(0)
    async function save() {
        const asset = await MediaLibrary.createAssetAsync(foto)
        await MediaLibrary.createAlbumAsync("Album Lumy", asset, false)
        await MediaLibrary.deleteAssetsAsync(asset)
        navigation.navigate("Menu")
    }

    async function voltar() {
        setPhotoExistente(false)
    }

    useEffect(()=>{
        if(render <= 2)
            setRender(render+1)
        setFoto(photo.path)
    },[render, photo])

    return(
        <View style={{flex:1}}>
            <Image source={{uri: `file://${foto}`}} style={StyleSheet.absoluteFill}/>
            <TouchableOpacity onPress={voltar} style={style.backButton}>
                <AntDesign style={{alignSelf:"center", top:8}} name="leftcircleo" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={save} style={style.saveButton}>
                <AntDesign style={{alignSelf:"center", top:8}} name="checkcircleo" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    backButton:{
        width: 40,
        height: 40,
        borderRadius: 99,
        backgroundColor: "#FFFBE8",
        position: "absolute",
        top: 20,
        alignSelf:"center",
        left:20
    },
    saveButton:{
        width: 40,
        height: 40,
        borderRadius: 99,
        backgroundColor: "#FFFBE8",
        position: "absolute",
        top: 20,
        alignSelf:"flex-end",
        right:20
    }
})