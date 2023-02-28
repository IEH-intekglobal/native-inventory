import { FlatList, StyleSheet, Text, View } from "react-native";
import { ItemsHeader } from "../components/ItemsHeader";
import { DashboardCard } from "../components/DashboardCard";
import { Item } from "../components/Item";

import { items } from "../db/dummy-items";

export default function Dashboard() {
  const recentItems = items.filter((item) => true);
  return (
    <View style={styles.screenContainer}>
      <DashboardCard
        icon="clipboard"
        title="Inventory summary"
        size="fullWidth"
      >
        <ItemsHeader />
      </DashboardCard>
      <View style={styles.smallCardsContainer}>
        <DashboardCard icon="trending-down" title="Low stock">
          <Text style={styles.cardText}>Items that are low inventory</Text>
        </DashboardCard>
        <DashboardCard icon="repeat" title="Transactions">
          <Text style={styles.cardText}>Report of the transactions</Text>
        </DashboardCard>
      </View>
      <View style={styles.smallCardsContainer}>
        <DashboardCard icon="bar-chart" title="Quantity changes">
          <Text style={styles.cardText}>
            Check all the changes in quantity per item
          </Text>
        </DashboardCard>
        <DashboardCard icon="arrow-forward" title="Movements">
          <Text style={styles.cardText}>
            All the movements in the inventory
          </Text>
        </DashboardCard>
      </View>
      <Text style={styles.newSectionText}>Recent Items</Text>
      <View>
        <FlatList
          data={recentItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item item={item} width={120} />}
          horizontal={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 10,
    flex: 1,
  },
  smallCardsContainer: {
    flexDirection: "row",
  },

  cardText: {
    margin: 10,
  },
  newSectionText: {
    margin: 12,
    fontSize: 18,
  },
});
