import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";

interface NotificationProps {
  notification: Notification
}

export function Notification({ notification }: NotificationProps) {
  const { date, status, title } = notification;
  const unread = status === "unread";

  return (
    <View
      style={[
        styles.notificationContainer,
        unread && styles.unreadNotificationContainer,
      ]}
    >
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={unread ? "mail-outline" : "mail-open-outline"}
            size={37}
            color={unread ? "black" : "gray"}
          />
        </View>
        <View>
          <View>
            <Text style={[styles.titleText, unread && styles.unreadTitleText]}>
              {title}
            </Text>
          </View>
          <View>
            <Text style={[styles.date, unread && styles.unreadDate]}>
              {date.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: notification.image }} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: "white",
    height: 80,
    marginVertical: 10,
    marginHorizontal: 15,
    opacity: 0.8,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    flexDirection: "row",
  },
  unreadNotificationContainer: {
    elevation: 11,
    opacity: 1,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    color: "gray",
  },
  unreadTitleText: {
    color: "black",
  },
  date: {
    color: "gray",
    marginLeft: 10,
  },
  unreadDate: {
    color: "black",
  },
  image: {
    width: 60,
    height: 60,
    margin: 10,
  },
  imageContainer: {
    // justifyContent: "flex-end",
    //backgroundColor: "red",
  },
});
