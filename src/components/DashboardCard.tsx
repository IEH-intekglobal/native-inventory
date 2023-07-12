import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import type { FC, PropsWithChildren, ComponentProps } from "react";


interface DashboardCardProps {
  title: string;
  icon: ComponentProps<typeof Ionicons>['name'];
  size?: 'fullWidth';
}

export const DashboardCard: FC<PropsWithChildren<DashboardCardProps>> = ({ children, icon, size, title }) => {
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
    elevation: 1,
  },
  cardIcon: {
    margin: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    marginLeft: 10,
  },
});
