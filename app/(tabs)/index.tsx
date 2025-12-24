import { View } from "react-native";
import { router } from "expo-router";
import { styles } from "../../src/styles/darkTheme";
import { Text, Button } from "../../src/components";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="title">Home Screen</Text>

      <Button title="Go to Settings" onPress={() => router.push("/settings")} />
    </View>
  );
}
