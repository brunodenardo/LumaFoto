import { useState, useRef } from "react"
import { StyleSheet, View, StatusBar,Button, TouchableOpacity, Modal, Text} from "react-native"
import {  CameraView, useCameraPermissions } from "expo-camera"
import * as MediaLibrary from "expo-media-library"

export default function CameraPage({navigation}:any){
    const [permission, requestPermissionCamera] = useCameraPermissions()
    const [cameraReady, setCameraReady] = useState(false)
    const cameraRef = useRef<CameraView>(null)
    const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
    
    async function photoHandler(){
        if(cameraRef.current && cameraReady){
            const photo = await cameraRef.current.takePictureAsync()
            console.log(photo)
            try{
                if(photo != undefined){
                    if(!permissionMedia){
                        await requestPermissionMedia();
                    }
                    const asset = await MediaLibrary.createAssetAsync(photo.uri)
                    await MediaLibrary.createAlbumAsync("Album Lumy", asset, false)
                }
                console.warn("Ocorreu um erro")
            }
            catch(error){
                console.warn(error)
            }
        }
    }


    if(!permission) 
        return (
            <View style={style.viewSemPermissao}>
                <Text style={{textAlign:"center"}}>Sem Permissão</Text>
                <Button title="Voltar" onPress={navigation.navigate('Estudio')}/>
            </View>
        )

    if(!permission.granted)
        return(
            <View style={style.viewSemPermissao}>
                <Text style={{textAlign:"center"}}>Sem Permissão</Text>
                <View style={{flexDirection:"row", gap:10}}>
                    <Button title="Voltar" onPress={navigation.navigate('Estudio')}/>
                    <Button title="Permitir" onPress={requestPermissionCamera}/>
                </View>
            </View>
        )

    return(
        <View style={style.background}>
            <StatusBar hidden/>
            <CameraView
                mode="picture"
                style={StyleSheet.absoluteFill}
                ref={cameraRef}
                onCameraReady={()=>setCameraReady(true)}
            />
            <TouchableOpacity onPress={photoHandler} style={style.photoButton}/>
        </View>
    )
}


const style = StyleSheet.create({
    background:{
        flex:1
    },
    viewSemPermissao:{
        flex:1,
        justifyContent:"center",
        alignSelf:"center",
        flexDirection:"column"
    },
    photoButton:{
        width:70,
        height:70,
        borderRadius:99,
        backgroundColor:"#FFFBE8",
        position:"absolute",
        bottom:60,
        alignSelf:"center"
    }
})


