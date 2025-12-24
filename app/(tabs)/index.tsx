import { router } from "expo-router";
import { View } from "react-native";

import { Button, Text } from "../../src/components";
import { styles } from "../../src/styles/darkTheme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="title">Home Screen</Text>

      <Button title="Go to Settings" onPress={() => router.push("/settings")} />
    </View>
  );
}
