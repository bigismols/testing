import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../app/HomeScreen'

export default function HomeStack(){
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}