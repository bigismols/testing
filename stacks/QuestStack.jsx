import { createNativeStackNavigator } from "@react-navigation/native-stack"
import QuestScreen from '../app/QuestScreen'

export default function QuestStack(){
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Quest" component={QuestScreen} />
        </Stack.Navigator>
    )
}