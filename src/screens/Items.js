import { FlatList, View } from "react-native";

import { items } from "../db/dummy-items";

import { Item } from "../components/Item";
import { ItemsHeader } from "../components/ItemsHeader";

export default function Items() {
  return (
    <View>
      <ItemsHeader />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}
