import { FlatList, Text, View } from "react-native";

import { items } from "../db/dummy-items";

import { Item } from "../components/Item";

export default function Items() {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}
