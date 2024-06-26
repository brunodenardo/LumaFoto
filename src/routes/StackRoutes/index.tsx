import { createStackNavigator } from '@react-navigation/stack';
import CameraPage from '@/src/pages/CameraPage';
import { TabRoutes } from '../TabRoutes';
import AlbumEspecifico from '@/src/pages/AlbumEspecifico';

const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName='Menu'>
            <Stack.Screen options={{headerShown:false}} name="Menu" component={TabRoutes}/>
            <Stack.Screen options={{headerShown:false}} name="AlbumEspecifico" component={AlbumEspecifico}/>
            <Stack.Screen options={{headerShown:false}} name='Camera' component={CameraPage}/>
        </Stack.Navigator>
    );
}