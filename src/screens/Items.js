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
import { getNextItems, getPreviousItems } from "../db/firestore/db";

import { Item } from "../components/Item";
import { ItemsHeader } from "../components/ItemsHeader";
import IconButton from "../components/IconButton";
import { Scanning } from "../components/Scanning";

import { Colors } from "../constants/colors";

export default function Items() {
  const [items, setItems] = useState();
  const [firstVisible, setFirstVisible] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getNextItems().then(({ foundItems, newFirstVisible, newLastVisible }) => {
      setItems(foundItems);
      setFirstVisible(newFirstVisible);
      setLastVisible(newLastVisible);
    });
  }, []);

  function handelScan() {
    setModalVisible(true);
  }

  async function handlePressNext() {
    const { foundItems, newFirstVisible, newLastVisible } = await getNextItems(
      lastVisible
    );
    setItems(foundItems);
    setFirstVisible(newFirstVisible);
    setLastVisible(newLastVisible);
  }

  async function handlePressPrevious() {
    const { foundItems, newFirstVisible, newLastVisible } =
      await getPreviousItems(firstVisible);
    setItems(foundItems);
    setFirstVisible(newFirstVisible);
    setLastVisible(newLastVisible);
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
      <View style={styles.navigationButtonsContainer}>
        <IconButton
          icon="chevron-back"
          size={28}
          color="white"
          style={styles.addButton}
          onPress={handlePressPrevious}
          disabled={false}
        />
        <IconButton
          icon="chevron-forward"
          size={28}
          color="white"
          style={styles.addButton}
          onPress={handlePressNext}
        />
      </View>
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
    paddingBottom: 170,
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
  navigationButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
