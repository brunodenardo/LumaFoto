import BotaoAcessoCamera from "@/src/components/BotaoAcessoCamera"
import { View, Text, StyleSheet } from "react-native"

export default function Stikers({navigation}:any){
  return(
    <View style={style.background}>
      <Text style={style.text}>Stikers</Text>
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