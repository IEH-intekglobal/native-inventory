import { useEffect, useState } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { getItems } from "../network/db";

interface ItemInfo {
  name: string;
  info: string;
}
function ItemInfo({ name, info }: ItemInfo) {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
}

interface ItemsHeader {
  style?: StyleProp<ViewStyle>;
}

export function ItemsHeader({ style }: ItemsHeader) {
  const [items, setItems] = useState<Item[]>([]);
  const numberItems = items.length;
  const totalUnities = items.reduce((accumulate, currentItem) => {
    return currentItem.quantity + accumulate;
  }, 0);

  useEffect(() => {
    getItems().then((results) => setItems(results));
  }, []);

  const totalValue = items.reduce((accumulate, currentItem) => {
    const currentValue = currentItem.quantity * currentItem.price;
    return accumulate + currentValue;
  }, 0);
  const totalValueStr = `$${String(totalValue / 1000)}K`;

  return (
    <View style={[styles.container, style]}>
      <ItemInfo name="Folders" info="1" />
      <ItemInfo name="Items" info={`${numberItems}`} />
      <ItemInfo name="Total units" info={`${totalUnities}`} />
      <ItemInfo name="Total value" info={totalValueStr} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",

    height: 70,
    alignItems: "center",
  },
  name: {
    color: "gray",
  },
  info: {
    fontWeight: "bold",
  },
});
