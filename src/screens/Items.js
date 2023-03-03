import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

//import { items } from "../db/dummy-items";
import { getItems } from "../db/firestore/db";

import { Item } from "../components/Item";
import { ItemsHeader } from "../components/ItemsHeader";

export default function Items() {
  const [items, setItems] = useState();

  getItems().then((results) => setItems(results));

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
    borderBottomColor: "lavender",
    borderBottomWidth: 1,
    borderTopColor: "lavender",
    borderTopWidth: 1,
  },
});
