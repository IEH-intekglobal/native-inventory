import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { GestureResponderEvent } from "react-native";
import type { FC, PropsWithChildren, ComponentProps } from "react";

interface IconButtonProps {
  icon: ComponentProps<typeof Ionicons>["name"];
  size: number;
  color: string;
  style?: {}
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
}

const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({
  icon,
  size = 12,
  color = "black",
  onPress,
  style,
  ...props
}: IconButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        style && style,
      ]}
      onPress={onPress}
      {...props}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
