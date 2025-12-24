import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Button title="Go to Settings" onPress={() => router.push("/settings")} />
    </View>
  );
}
