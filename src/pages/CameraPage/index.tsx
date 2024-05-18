import { useState, useRef, useEffect } from "react"
import { StyleSheet, View, StatusBar, Button, TouchableOpacity, Modal, Text, useWindowDimensions } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera, CameraPosition, PhotoFile, Templates, useCameraDevice, useCameraFormat, useCameraPermission } from "react-native-vision-camera"
import * as MediaLibrary from "expo-media-library"
import PhotoSave from "@/src/components/PhotoSave";

export default function CameraPage({ navigation }: any) {
    const [cameraType, setCameraType] = useState<CameraPosition>("back")
    const [isActive, setIsActve] = useState(true)
    const device = useCameraDevice(cameraType, { physicalDevices: ['wide-angle-camera'] })
    const { hasPermission, requestPermission } = useCameraPermission()
    const [permission, setPermission] = useState<null | boolean>(null)
    const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
    const cameraRef = useRef<Camera>(null)
    const [photoStatus, setPhotoStatus] = useState(false)
    const [photoExistente, setPhotoExistente] = useState(false)
    const format = useCameraFormat(device, [
        { photoResolution: { width: 1080, height: 1920 } }
    ])
    const [foto, setFoto] = useState<PhotoFile>()

    async function photoHandler() {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePhoto()

            setFoto(photo)
            setPhotoExistente(true)
        }
    }

    useEffect(() => {
        (async () => {
            setIsActve(true)
            const status = await requestPermission();
            await requestPermissionMedia();
            if (status)
                setPermission(true)
        })()
    }, [photoExistente])


    if (permission == null || permission == false || device == null || !device) return <View></View>

    return (
        <View style={style.background}>
            {photoExistente ? (<PhotoSave navigation={navigation} photo={foto} setPhotoExistente={setPhotoExistente} />)
                :
                (
                    <><StatusBar hidden /><Camera
                        ref={cameraRef}
                        style={StyleSheet.absoluteFill}
                        device={device}
                        isActive={isActive}
                        orientation="portrait"
                        photo={photoStatus}
                        format={format}
                        onInitialized={() => setPhotoStatus(true)} /><TouchableOpacity onPress={photoHandler} style={style.photoButton}>
                            <View style={style.innerButtom} />
                        </TouchableOpacity><TouchableOpacity onPress={() => setCameraType(cameraType === "back" ? "front" : "back")} style={style.flipButton}>
                            <MaterialCommunityIcons style={{ alignSelf: "center", top: 8 }} name="camera-flip-outline" size={30} color="black" />
                        </TouchableOpacity></>
                )}

        </View>
    )
}


const style = StyleSheet.create({
    background: {
        flex: 1
    },
    viewSemPermissao: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        flexDirection: "column"
    },
    photoButton: {
        width: 70,
        height: 70,
        borderRadius: 99,
        borderWidth: 5,
        borderColor: "#FFFBE8",
        position: "absolute",
        bottom: 60,
        alignSelf: "center"
    },
    innerButtom: {
        width: 50,
        height: 50,
        borderRadius: 99,
        backgroundColor: "#FFFBE8",
        position: "absolute",
        top: 5,
        alignSelf: "center"
    },
    flipButton: {
        width: 50,
        height: 50,
        borderRadius: 99,
        backgroundColor: "#FFFBE8",
        position: "absolute",
        bottom: 70,
        alignSelf: "flex-end",
        right: 60
    }
})

