import { StyleSheet, Text, View } from "react-native";
import { items } from "../db/dummy-items";

function ItemInfo({ name, info }) {
  return (
    <View>
      <Text>{name}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
}

export function ItemsHeader() {
  const numberItems = items.length;
  const totalUnities = items.reduce((accumulate, currentItem) => {
    return currentItem.quantity + accumulate;
  }, 0);

  const totalValue = items.reduce((accumulate, currentItem) => {
    const currentValue = currentItem.quantity * currentItem.price;
    return accumulate + currentValue;
  }, 0);
  const totalValueStr = `$${String(totalValue / 1000)}K`;

  return (
    <View style={styles.container}>
      <ItemInfo name="Folders" info="1" />
      <ItemInfo name="Items" info={numberItems} />
      <ItemInfo name="Total units" info={totalUnities} />
      <ItemInfo name="Total value" info={totalValueStr} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderTopWidth: 1,
    height: 70,
    alignItems: "center",
  },
  info: {
    fontWeight: "bold",
  },
});
