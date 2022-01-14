import { StyleSheet, View } from "react-native";
import Forcast from "./Forcast";
import { LinearGradient } from "expo-linear-gradient";

export default function FutureForcasts({ weekData }) {
  return (
    <LinearGradient
      style={styles.colorMe}
      colors={["#0f023a", "#0f387a"]}
    >
      <View style={styles.forcastList}>
        {weekData.map((day) => (
          <Forcast tempData={day} key={day.sunrise} />
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  forcastList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxHeight: "70%",
    alignSelf: "center",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  colorMe: {
    height: "100%",
    backgroundColor: "#0f023a",
    borderRadius: 20,
  },
  borderView: {
    width: 5,
    alignSelf: "center",
    height: "100%",
    borderColor: "red",
  },
});
