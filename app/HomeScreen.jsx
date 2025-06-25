import { useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";

export default function () {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>I am now the home tab</Text>
      <Button title="I go to Quest Screen" onPress={() => navigation.push("QuestScreen")} />
    </View>
  );
}
