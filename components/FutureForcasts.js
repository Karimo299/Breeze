import { StyleSheet, Dimensions } from "react-native";
import Forcast from "./Forcast";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function FutureForcasts({ weekData }) {
  return (
    <LinearGradient style={styles.forcastList} colors={["#0f023a", "#0f387a"]}>
      {weekData.map((day) => (
        <Forcast tempData={day} key={day.sunrise} />
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  forcastList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: width / 50,
  },
});
