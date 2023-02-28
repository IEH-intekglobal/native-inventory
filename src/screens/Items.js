import { FlatList, StyleSheet, View } from "react-native";

import { items } from "../db/dummy-items";

import { Item } from "../components/Item";
import { ItemsHeader } from "../components/ItemsHeader";

export default function Items() {
  return (
    <View style={styles.itemsContainer}>
      <ItemsHeader style={styles.header} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    paddingBottom: 70,
  },
  header: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderTopWidth: 1,
  },
});
