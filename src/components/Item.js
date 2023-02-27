import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Item({ item }) {
  const totalPrice = `$${item.price * item.quantity}.00`;

  function handleShowOptions() {
    console.log(item.name);
  }
  return (
    <View style={styles.screenContainer}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}> {item.name}</Text>
          <Text style={styles.information}>
            {item.quantity} units | {totalPrice}
          </Text>
        </View>
      </View>
      <Pressable
        android_ripple={true}
        onPress={handleShowOptions}
        style={styles.optionsButton}
      >
        <Ionicons name="ellipsis-vertical" size={20} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  itemContainer: {
    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 120,
    margin: 10,
  },
  textContainer: {
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
  },
  information: {
    color: "gray",
  },
  optionsButton: {
    marginTop: 15,
    marginRight: 5,
  },
});
