import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Item({ item, width }) {
  const totalPrice = `$${item.price * item.quantity}.00`;

  const slimItem = width && width < 400;

  function handleShowOptions() {
    console.log(item.name);
  }
  return (
    <View style={[styles.componentContainer, slimItem && styles.slimContainer]}>
      <View style={slimItem ? styles.slimItemContainer : styles.itemContainer}>
        <Image
          source={{ uri: item.image }}
          style={slimItem ? styles.slimImage : styles.image}
        />

        <View style={styles.optionsContainer}>
          <View
            style={slimItem ? styles.slimTextContainer : styles.textContainer}
          >
            <Text style={styles.name}> {item.name}</Text>
            <Text style={styles.information}>
              {item.quantity} units {!slimItem && `| ${totalPrice}`}
            </Text>
          </View>
          <Pressable
            android_ripple={true}
            onPress={handleShowOptions}
            style={[styles.optionsButton, slimItem && styles.slimOptionsButton]}
          >
            <Ionicons name="ellipsis-vertical" size={20} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  componentContainer: {
    flexDirection: "row",
    borderBottomColor: "lavender",
    borderBottomWidth: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  slimContainer: {
    elevation: 4,
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
  },
  slimItemContainer: {
    minHeight: 190,
  },
  image: {
    width: 90,
    height: 90,
    margin: 10,
  },
  slimImage: {
    width: 110,
    height: 110,
    margin: 1,
  },
  textContainer: {
    justifyContent: "center",
  },
  slimTextContainer: {
    marginTop: 12,
  },

  name: {
    fontWeight: "bold",
  },
  information: {
    color: "gray",
    marginLeft: 2,
  },
  optionsButton: {
    marginTop: 15,
    marginRight: 5,
  },
  slimOptionsButton: {
    marginRight: -4,
  },
});
