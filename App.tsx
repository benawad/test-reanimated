import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function App() {
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${p.value * 2 * Math.PI}rad`,
        },
      ],
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: "red",
          },
          style,
        ]}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
