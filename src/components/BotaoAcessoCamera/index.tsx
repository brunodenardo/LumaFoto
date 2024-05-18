import {StyleSheet, TouchableOpacity, View} from "react-native"
import { Entypo } from '@expo/vector-icons';

export default function BotaoAcessoCamera({navigation}:any){

    function buttonHandler(){
        navigation.navigate("Camera")
    }

    return(
        <View style={style.container}>
            <View style={style.sombra}/>
            <TouchableOpacity style={style.button} onPress={buttonHandler}>
                <Entypo style={{ position: "absolute", left: 18, top: 19 }} name="camera" size={50} color="#58BF94" />
                <Entypo style={{ left: 15 }} name="camera" size={50} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        
        borderRadius: 99,
        backgroundColor: "#75FFC5",
        shadowColor: "#58BF94",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 10,
        width: 80,
        height: 80,
        justifyContent:"center",
        alignContent:"center"
      },
    container:{
        position: "absolute",
        bottom: 15,
        right: 20,
    },
    sombra:{
        borderRadius: 99,
        width: 80,
        height: 80,
        top:2,
        left:1,
        backgroundColor: "#58BF94",
        position:"absolute"
    }

})