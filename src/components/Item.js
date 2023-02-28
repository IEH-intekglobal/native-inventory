import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Item({ item, width }) {
  const totalPrice = `$${item.price * item.quantity}.00`;

  const slimItem = width && width < 400;

  function handleShowOptions() {
    console.log(item.name);
  }
  return (
    <View style={[styles.screenContainer, slimItem && styles.slimContainer]}>
      <View style={slimItem ? styles.smallItemContainer : styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}> {item.name}</Text>
          <Text style={styles.information}>
            {item.quantity} units {!slimItem && `| ${totalPrice}`}
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
  slimContainer: {
    elevation: 8,
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  itemContainer: {
    flexDirection: "row",
  },
  smallItemContainer: {},
  image: {
    width: 100,
    height: 100,
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
