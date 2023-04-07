import { Animated } from "react-native";
import { PropsWithChildren } from "react";

const animated = new Animated.Value(1);

export const fadeIn = () => {
  Animated.timing(animated, {
    toValue: 0.4,
    duration: 100,
    useNativeDriver: true,
  }).start();
};

export const fadeOut = () => {
  Animated.timing(animated, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  }).start();
};

export function ButtonAnimationView(props: PropsWithChildren) {
  return (
    <Animated.View
      style={{
        opacity: animated,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
