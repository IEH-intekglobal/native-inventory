import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export function DashboardCard({ children, icon, size, title }) {
  return (
    <View style={[styles.card, size !== "fullWidth" && { flex: 1 }]}>
      <Ionicons name={icon} style={styles.cardIcon} />
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 10,
  },
  cardIcon: {
    margin: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    marginLeft: 10,
  },
});
