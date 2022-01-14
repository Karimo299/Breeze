import { StyleSheet, Text, View, Image } from "react-native";
import { getStringMonth, getStringDay, captilize } from "./utils";

export default function Forcast({ tempData }) {
  function dayFinder(date) {
    const today = new Date(); 
    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
        return("Today");
      }
      return getStringDay(date);
  }

  return (
    <View style={styles.forcastContaier}>
      <Image
        style={styles.img}
        source={{
          url: `http://openweathermap.org/img/wn/${tempData.weather[0].icon}@4x.png`,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.day}>{dayFinder(new Date(tempData.sunrise * 1000))}</Text>
        <Text style={styles.text}>{captilize(tempData.weather[0].description)}</Text>
        <Text style={styles.text}>H: {Math.round(tempData.temp.max)}&#176;C | L: {Math.round(tempData.temp.min)}&#176;C</Text>
        <Text style={styles.text}>Cloudiness: {tempData.clouds}%</Text>
        <Text style={styles.text}>Precpitation: {Math.round(tempData.pop * 100)}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forcastContaier: {
    marginVertical: 20,
    flexDirection: "row",
    width: "49%",
    borderRadius: 10,
  },
  img: {
    width: 60,
    height: 60,
    padding: 0,
    marginLeft: -5,
    marginTop: -10,
  },
  day: {
    color: "#f1faee",
    fontWeight: "700",
    fontSize: 20,
  },
  text: {
    color: "#f1faee",
  },
  temp: {
    color: "#f1faee",
    fontSize: 20,
    fontWeight: "bold",
  },
});
