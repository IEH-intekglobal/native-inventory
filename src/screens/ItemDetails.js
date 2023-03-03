import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../constants/colors";
import { getItemById } from "../db/dummy-items";
import { Ionicons } from "@expo/vector-icons";
import { func } from "prop-types";

function OptionButton({ icon, text, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.optionButton}>
      <Ionicons name={icon} size={20} />
      <Text style={styles.optionButtonText}>{text}</Text>
    </Pressable>
  );
}

function NumberOptions({ icon, title, text }) {
  return (
    <View style={styles.numberOptionContainer}>
      <View>
        <Text style={styles.numberOptionsTitle}>{title}</Text>
        <Text style={styles.numberOptionsText}>{text}</Text>
      </View>
      <View style={styles.numberOptionsImageContainer}>
        <Ionicons name={icon} size={22} />
      </View>
    </View>
  );
}

export default function ItemDetails({ navigation, route }) {
  const { id } = route.params;
  const [detailedItem, setDetailedItem] = useState(null);

  useEffect(() => {
    const newItem = getItemById(id);
    navigation.setOptions({ title: newItem.name });
    setDetailedItem(newItem);
  }, [id]);

  if (!detailedItem) {
    return (
      <View style={styles.rootLoadingScreen}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  function defaultOnPress() {}

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{ uri: detailedItem.image }} style={styles.itemImage} />
      </View>
      <View style={styles.dateContainer}>
        <Text>
          <Text style={styles.lastUpdateText}>Last update:</Text>{" "}
          {detailedItem.date.toString()}
        </Text>
      </View>
      <View style={styles.optionsContainer}>
        <OptionButton
          onPress={defaultOnPress}
          icon="arrow-forward"
          text="Move"
        />
        <OptionButton
          onPress={defaultOnPress}
          icon="time-outline"
          text="History"
        />
        <OptionButton
          onPress={defaultOnPress}
          icon="add-circle-outline"
          text="Request"
        />
        <OptionButton
          onPress={defaultOnPress}
          icon="trash-bin-outline"
          text="Dispose"
        />
      </View>
      <View style={styles.quantitiesContainer}>
        <NumberOptions
          icon="add-circle-outline"
          title="Quantity"
          text={detailedItem.quantity}
        />
        <NumberOptions
          icon="notifications-outline"
          title="Max Level"
          text="-"
        />
        <NumberOptions
          icon="notifications-outline"
          title="Min Level"
          text="-"
        />
      </View>
      <View style={styles.pricesContainer}>
        <NumberOptions
          title="Unitary Price"
          text={`$${detailedItem.price}.00`}
        />
        <NumberOptions
          title="Total Value"
          text={`$${detailedItem.price * detailedItem.quantity}.00`}
        />
      </View>
      <View style={styles.notesSectionContainer}>
        <View style={styles.notesTextContainer}>
          <Text style={styles.notesText}>Notes</Text>
        </View>
        <Pressable onPress={defaultOnPress} style={styles.notesButton}>
          <Ionicons name="caret-forward-outline" size={14} />
        </Pressable>
      </View>
      <View style={styles.notesSectionContainer}>
        <View style={styles.notesTextContainer}>
          <Text style={styles.notesText}>Tags</Text>
        </View>
        <Pressable onPress={defaultOnPress} style={styles.notesButton}>
          <Ionicons name="caret-forward-outline" size={14} />
        </Pressable>
      </View>
      <View style={styles.dateContainer}>
        <Text>
          <Text style={styles.lastUpdateText}>ID:</Text> {detailedItem.id}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: "white",
    height: 50,
    borderBottomColor: Colors.softGray,
    borderBottomWidth: 1,
    justifyContent: "center",
    padding: 12,
  },
  rootLoadingScreen: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    color: "gray",
  },

  itemImage: {
    width: 250,
    height: 250,
    borderRadius: 12,
    borderColor: Colors.softGray,
    borderWidth: 1,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    //marginTop: 10,
    paddingTop: 8,
    backgroundColor: "white",
    borderBottomColor: Colors.softGray,
    borderBottomWidth: 1,
  },
  lastUpdateText: {
    fontWeight: "bold",
  },
  optionButton: {
    alignItems: "center",
  },
  optionButtonText: {
    //color: "gray",
    margin: 10,
  },
  quantitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderBottomColor: Colors.softGray,
    borderBottomWidth: 1,
  },
  numberOptionContainer: {
    flexDirection: "row",
    marginVertical: 12,
    // marginHorizontal: 20,
    padding: 5,
  },
  numberOptionsImageContainer: {
    justifyContent: "flex-start",
    marginLeft: 7,
    // borderRightColor: Colors.softGray,
    // borderRightWidth: 1,
  },
  numberOptionsTitle: {
    fontWeight: "bold",
  },
  numberOptionsText: {
    color: "gray",
    //textAlign: "center",
    //paddingLeft: 4,
  },
  pricesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderBottomColor: Colors.softGray,
    borderBottomWidth: 1,
  },
  notesTextContainer: {
    justifyContent: "center",
  },
  notesSectionContainer: {
    backgroundColor: "white",
    borderBottomColor: Colors.softGray,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 50,
  },
  notesText: {
    color: "gray",
    paddingLeft: 5,
    fontSize: 16,
  },
  notesButton: {
    justifyContent: "center",
  },
});
