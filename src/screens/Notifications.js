import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/colors";
import { notifications } from "../db/dummy-items";
import { Notification } from "../components/Notification";

export default function Notifications() {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.schedulerButton}
          android_ripple={{ color: "pink" }}
        >
          <View style={styles.buttonInterior}>
            <Ionicons name="calendar-outline" size={40} color="white" />
            <Text style={styles.schedulerButtonText}>
              Schedule a new notification!
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.notificationsSection}>
        <Text style={styles.notificationsTitle}>Notifications</Text>
        <View style={styles.notificationsContainer}>
          <FlatList
            data={notifications}
            keyExtractor={(not) => not.id}
            renderItem={({ item: notification }) => (
              <Notification notification={notification} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
  schedulerButton: {
    marginTop: 20,
    width: 240,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    elevation: 12,
  },
  buttonInterior: {
    flexDirection: "row",
    height: 100,
    borderRadius: 12,
    justifyContent: "space-around",
    alignItems: "center",
  },
  schedulerButtonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  notificationsSection: {
    height: "100%",
  },
  notificationsTitle: {
    color: "gray",
    fontSize: 18,
    margin: 20,
    fontWeight: "bold",
  },
  notificationsContainer: {
    height: 410,
  },
});
