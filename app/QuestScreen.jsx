import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";

export default function QuestScreen() {
  const navigation = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>I am now the home tab</Text>
      <Button title='drawer' onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Button>
    </View>
  );
}
