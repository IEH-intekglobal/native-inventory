import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { getItemById } from "../db/dummy-items";

export default function ItemDetails({ navigation, route }) {
  const { id } = route.params;
  const [detailedItem, setDetailedItem] = useState(null);

  useEffect(() => {
    const newItem = getItemById(id);
    navigation.setOptions({ title: newItem.name });
    setDetailedItem(newItem);
  }, [id]);

  if (!detailedItem) {
    return (
      <View style={styles.rootLoadingScreen}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: detailedItem.image }} style={styles.itemImage} />
      </View>
      <View>
        <Text>Location</Text>
      </View>
      <View>
        <Text>Options</Text>
      </View>
      <View>
        <Text>Quantities</Text>
      </View>
      <View>
        <Text>Prices</Text>
      </View>
      <View>
        <Text>Notes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootLoadingScreen: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    color: "gray",
  },

  itemImage: {
    width: 250,
    height: 250,
  },
});
