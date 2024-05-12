import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import StackRoutes from '@/src/routes/StackRoutes';

export default function App(){
  return(
    <NavigationContainer independent={true}>
      <StackRoutes/>
    </NavigationContainer>
  )
}