import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";
import IconButton from "../components/IconButton";
import { Item } from "../components/Item";

import { getItems } from "../db/firestore/db";

export default function Search() {
  const [text, setText] = useState("");
  const [foundItems, setFoundItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    getItems().then((items) => {
      setAllItems(items);
      if (!text) setFoundItems(items);
    });
  }, []);

  function handleSearchOptions() {
    console.log("search options");
  }

  function onChangeText(text) {
    setText(text);

    const newItems = allItems.filter((item) => {
      const lowerName = item.name.toLowerCase();
      const lowerText = text.toLowerCase();

      return lowerName.includes(lowerText);
    });

    setFoundItems(newItems);
  }

  return (
    <View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search in your folders and products"
        />
        <IconButton
          icon="options-outline"
          size={26}
          onPress={handleSearchOptions}
          style={styles.searchOptionsButton}
        />
      </View>
      <View style={styles.results}>
        <Text style={styles.foundItemsText}>Found Items</Text>
        <FlatList
          contentContainerStyle={{
            //justifyContent: "center",
            //alignContent: "center",
            alignItems: "center",
          }}
          data={foundItems}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item item={item} highlightedText={text} width={350} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: Colors.softGray,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    backgroundColor: "white",
  },
  searchOptionsButton: {
    marginRight: 5,
    marginLeft: -5,
  },
  results: {
    height: "100%",
    paddingBottom: 125,
  },
  foundItemsText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: 20,
  },
});
