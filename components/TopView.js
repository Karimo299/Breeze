import { StyleSheet, Text, View, Dimensions } from "react-native";
import { getStringMonth, getStringDay } from "./utils";

const { fontScale } = Dimensions.get("window");

export default function TopView({ city, tempData }) {
  const date = new Date();

  return (
    <View style={styles.dateContainer}>
      <View>
        <Text style={styles.location}>{city}</Text>
      </View>

      <View style={styles.topView}>
        <View style={styles.dateView}>
          <Text style={styles.text}>{`${getStringDay(date)}`}</Text>
          <Text style={styles.text}>{`${getStringMonth(date)} ${date.getDate()}, ${date.getFullYear()}`}</Text>
        </View>
        <View style={styles.otherInfo}>
          <Text style={styles.secondaryText}>Humidity: {tempData.current.humidity}%</Text>
          <Text style={styles.secondaryText}>Wind Speed: {tempData.current.wind_speed} m/s</Text>
          <Text style={styles.secondaryText}>Cloudiness: {tempData.current.clouds}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    margin: 15,
  },
  otherInfo: {
    margin: 10,
    marginTop: 20,
  },
  topView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location: {
    fontSize: 20 / fontScale,
    color: "#f1faee",
    alignSelf: "center",
    fontWeight: "700",
  },
  text: {
    fontSize: 20 / fontScale,
    color: "#f1faee",
    fontWeight: "500",
  },
  secondaryText: {
    fontSize: 15 / fontScale,
    color: "#f1faee",
    fontWeight: "500",
  },
  dateView: {
    marginTop: 20,
  },
});
