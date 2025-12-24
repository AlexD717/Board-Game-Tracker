import { View } from "react-native";

import { Text } from "../../src/components";
import { styles } from "../../src/styles/darkTheme";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="title">Settings Screen</Text>
    </View>
  );
}
