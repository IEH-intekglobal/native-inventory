import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";

//import { items } from "../db/dummy-items";
import { getItems } from "../db/firestore/db";

import { Item } from "../components/Item";
import { ItemsHeader } from "../components/ItemsHeader";
import IconButton from "../components/IconButton";
import { Scanning } from "../components/Scanning";

import { Colors } from "../constants/colors";

export default function Items() {
  const [items, setItems] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getItems().then((results) => setItems(results));
  }, []);

  function handelScan() {
    setModalVisible(true);
  }

  return (
    <View style={styles.itemsContainer}>
      <ItemsHeader style={styles.header} />
      <IconButton
        icon="add"
        size={28}
        color="white"
        style={styles.addButton}
        onPress={handelScan}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Scanning />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    paddingBottom: 70,
  },
  header: {
    borderBottomColor: "lavender",
    borderBottomWidth: 1,
    borderTopColor: "lavender",
    borderTopWidth: 1,
  },
  addButton: {
    backgroundColor: Colors.primary,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: Colors.primary,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
