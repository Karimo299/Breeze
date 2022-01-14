import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Alert,
  Linking,
} from "react-native";

import TemperatureView from "./components/TemperatureView";
import FutureForcasts from "./components/FutureForcasts";
import TopView from "./components/TopView";

export default function App() {
  const [tempData, setTempData] = useState(null);
  const [city, setCity] = useState(null);

  async function getWeatherData(lat, long) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lon=${long}&lat=${lat}&units=metric&exclude=minutely,hourly,alerts&appid=b29c9cd3ca837ab20ad5d8f2a58fb712`;
    const response = await fetch(url);
    const json = await response.json();
    setTempData(json);
  }

  async function gatherInformation() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Location Service Needed",
        "Please allow location services from the setting app, then restart the app.",
        [{ text: "OK", onPress: () => Linking.openSettings() }]
      );
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    });

    let locationInfo = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    setCity(locationInfo[0].city);
    getWeatherData(location.coords.latitude, location.coords.longitude);
  }

  useEffect(gatherInformation, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {tempData === null && (
        <ActivityIndicator size="large" style={styles.loading} />
      )}
      {tempData !== null && (
        <LinearGradient
          colors={["#000080", "#0000ff"]}
          end={{ x: 0.5, y: 0.4 }}
        >
          <TopView city={city} tempData={tempData} />
          <TemperatureView data={tempData} />
          <FutureForcasts weekData={tempData.daily} />
        </LinearGradient>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000080",
  },

  loading: {
    top: "45%",
    alignSelf: "center",
  },
});
