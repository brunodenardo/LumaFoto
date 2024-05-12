import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import StackRoutes from "../StackRoutes";
import Fontes from "../../pages/Fontes";
import Stikers from "../../pages/Stikers";
import Estudio from "../../pages/Estudio";

const Tab = createBottomTabNavigator();

export function TabRoutes(){
    return(
        
        <Tab.Navigator 
            initialRouteName="Galeria"
            screenOptions={{
                tabBarStyle:{height:75, padding:0, margin:0}
            }}>
            <Tab.Screen
                name="Fontes"
                component={Fontes}
                options={{
                    tabBarShowLabel:false,
                    headerShown:false,
                    tabBarIcon: ({focused, size})=>{
                        if(focused){
                            return <Image style={{height:50, aspectRatio: 1}} source={require("../../assets/bottomBar/FontesLogo.png")}  />
                        }
                        return <Image style={{height:50, aspectRatio: 1}} source={require("../../assets/bottomBar/FontesLogoOutliar.png")}  />
                    }
                }}
            />
            <Tab.Screen
                name="Estudio"
                component={Estudio}
                options={{
                    tabBarShowLabel:false,
                    headerShown:false,
                    tabBarIcon: ({focused, size})=>{
                        if(focused){
                            return <Image style={{height:50, aspectRatio: 1}} source={require("../../assets/bottomBar/EstudioLogo.png")}  />
                        }
                        return <Image style={{height:50, aspectRatio:1}} source={require("../../assets/bottomBar/EstudioLogoOutliar.png")}  />
                    }
                }}
            />

            <Tab.Screen
                name="Stikers"
                component={Stikers}
                options={{
                    tabBarShowLabel:false,
                    headerShown:false,
                    tabBarIcon: ({focused, size})=>{
                        if(focused){
                            return <Image style={{height:50, aspectRatio: 1}} source={require("../../assets/bottomBar/StikersLogo.png")}  />
                        }
                        return <Image style={{height:50, aspectRatio: 1}} source={require("../../assets/bottomBar/StikersLogoOutliar.png")}  />
                    }
                }}
            />

            
        </Tab.Navigator>
    )
}