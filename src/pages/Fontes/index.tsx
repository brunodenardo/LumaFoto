import BotaoAcessoCamera from "@/src/components/BotaoAcessoCamera"
import { View, Text, StyleSheet, Button } from "react-native"

export default function Fontes({navigation}:any){
  return(
    <View style={style.background}>
      <Text style={style.text}>Fontes</Text>
      <BotaoAcessoCamera navigation={navigation}/>
    </View>
  )
}


const style = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:"#FFFBE8",
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color:"black",
    fontWeight:"bold"
  }
})