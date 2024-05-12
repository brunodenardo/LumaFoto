import { View, Text, StyleSheet } from "react-native"

export default function Stikers(){
  return(
    <View style={style.background}>
      <Text style={style.text}>Stikers</Text>
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