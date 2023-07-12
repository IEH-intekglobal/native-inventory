import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { ItemsHeader } from "../components/ItemsHeader";
import { DashboardCard } from "../components/DashboardCard";
import { Item } from "../components/Item";
import { getRecentItems } from "../network/db";

export default function Dashboard() {
  const [recentItems, setRecentItems] = useState([] as Item[]);

  useEffect(() => {
    getRecentItems().then((items) => {
      setRecentItems(items);
    });
  }, []);

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <DashboardCard
          icon="clipboard"
          title="Inventory Summary"
          size="fullWidth"
        >
          <ItemsHeader />
        </DashboardCard>
        <View style={styles.smallCardsContainer}>
          <DashboardCard icon="trending-down" title="Low Stock">
            <Text style={styles.cardText}>Items that are low inventory</Text>
          </DashboardCard>
          <DashboardCard icon="repeat" title="Transactions">
            <Text style={styles.cardText}>Report of the transactions</Text>
          </DashboardCard>
        </View>
        <View style={styles.smallCardsContainer}>
          <DashboardCard icon="bar-chart" title="Quantity Changes">
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
        <View style={styles.recentItems}>
          <FlatList
            data={recentItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Item item={item} width={120} />}
            horizontal={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 0,
    flex: 1,
  },
  smallCardsContainer: {
    flexDirection: "row",
  },

  cardText: {
    margin: 10,
    color: "gray",
  },
  newSectionText: {
    margin: 12,
    fontSize: 18,
    color: "gray",
  },
  recentItems: {
    backgroundColor: "white",
    paddingVertical: 10,
  },
});
