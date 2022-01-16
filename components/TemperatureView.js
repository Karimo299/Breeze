import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { captilize } from "./utils";

const { fontScale } = Dimensions.get("window");

export default function TemperatureView({ data }) {
  return (
    <View style={styles.tempContainer}>
      <Image style={styles.img} source={{ uri: `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png` }}/>
      <View style={styles.textContainer}>
        <Text style={styles.tempText}>{Math.round(data.current.temp)} &#176;C</Text>
        <Text style={styles.text}>Feels Like: {Math.round(data.current.feels_like)} &#176;C</Text>
        <Text style={styles.text}>{captilize(data.current.weather[0].description)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tempContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: -20,
    marginTop: 20,
    marginBottom: 30,
  },
  img: {
    width: 100,
    height: 100,
  },
  tempText: {
    fontSize: 40 / fontScale,
    fontWeight: "bold",
    color: "#f1faee",
  },
  text: {
    fontSize: 20 / fontScale,
    color: "#f1faee",
  },
});
