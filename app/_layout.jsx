import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '../stacks/HomeStack';
import QuestStack from '../stacks/QuestStack';

export default function RootLayout() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={HomeStack}/>
      <Drawer.Screen name="QuestStack" component={QuestStack}/>
    </Drawer.Navigator>
  )
}
