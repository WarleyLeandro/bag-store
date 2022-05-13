
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './screens/Home'
import Car from './screens/Car'
import Confirmation
 from './screens/Confirmation'
const Stack = createNativeStackNavigator()

const Routes = () => {
    return(
            <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='Car'
                component={Car}
                options={{
                title: 'CARRINHO',
                headerTintColor: '#85868A'
          }}/>
          <Stack.Screen 
          name='Confirmation'
          component={Confirmation}
          />
        </Stack.Navigator>
    )
}

export default Routes