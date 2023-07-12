import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import type { AppNavigationProps } from "../navigation";

interface TextWithHighlightProps {
  text?: string;
  highlightedText: string;
}

function TextWithHighlight({ text, highlightedText }: TextWithHighlightProps) {
  const index = text?.toLowerCase().indexOf(highlightedText.toLowerCase()) ?? 0;
  const firstPart = text?.slice(0, index);
  const middlePart = text?.slice(index, index + highlightedText.length);
  const lastPart = text?.slice(index + highlightedText.length);

  return (
    <Text>
      {firstPart}
      <Text style={styles.name}>{middlePart}</Text>
      {lastPart}
    </Text>
  );
}

interface ItemProps {
  item: Item,
  width?: number;
  highlightedText?: string;
}




export function Item({ item, width, highlightedText }: ItemProps ) {

  const navigation = useNavigation<AppNavigationProps>();

  const totalPrice = `$${item.price * item.quantity}.00`;

  const slimItem = Boolean(width && width < 400);

  function handleShowOptions() {
    console.log(item.name);
  }

  function handleShowDetails() {
    navigation.navigate("ItemDetails", { id: item.id });
  }
  
  return (
    <Pressable
      style={[styles.componentContainer, slimItem && styles.slimContainer]}
      onPress={handleShowDetails}
    >
      <View style={slimItem ? styles.slimItemContainer : styles.itemContainer}>
        <Image
          source={{ uri: item.image }}
          style={slimItem ? styles.slimImage : styles.image}
        />

        <View style={styles.optionsContainer}>
          <View
            style={slimItem ? styles.slimTextContainer : styles.textContainer}
          >
            {highlightedText ? (
              <TextWithHighlight
                text={item.name}
                highlightedText={highlightedText}
              />
            ) : (
              <Text style={styles.name}> {item.name}</Text>
            )}
            <Text style={styles.information}>
              {item.quantity} units {!slimItem && `| ${totalPrice}`}
            </Text>
          </View>
          <Pressable
            android_ripple={{}}
            onPress={handleShowOptions}
            style={[styles.optionsButton, slimItem && styles.slimOptionsButton]}
          >
            <Ionicons name="ellipsis-vertical" size={20} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  componentContainer: {
    flexDirection: "row",
    borderBottomColor: "lavender",
    borderBottomWidth: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  slimContainer: {
    elevation: 4,
    margin: 10,
    borderRadius: 10,
    padding: 5,
    maxWidth: 150,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
  },
  slimItemContainer: {
    minHeight: 190,
  },
  image: {
    width: 90,
    height: 90,
    margin: 10,
  },
  slimImage: {
    width: 110,
    height: 110,
    margin: 1,
  },
  textContainer: {
    justifyContent: "center",
  },
  slimTextContainer: {
    marginTop: 12,
  },

  name: {
    fontWeight: "bold",
  },
  information: {
    color: "gray",
    marginLeft: 2,
  },
  optionsButton: {
    marginTop: 15,
    marginRight: 5,
  },
  slimOptionsButton: {
    marginRight: -4,
  },
});
