import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Loading from "./components/Loading";
import Weather from "./components/Weather";


const API_KEY = process.env.REACT_APP_API_KEY;

export default class extends React.Component {
    state = {
        isLoading: true,
    };

    getWeather = async (latitude, longitude) => {
        const {
            data: { list: list, city: city },
        } = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=ru&appid=${API_KEY}`
        );
        this.setState({
            isLoading: false,
            temp: list[0].main.temp,
            humidity: list[0].main.humidity,
            condition: list[0].weather[0].icon,
            city: city.name,
            descr: list[0].weather[0].description,
            time: list[0].dt,
            windSpeed: list[0].wind.speed,
            windGust: list[0].wind.gust,
            windDeg: list[0].wind.deg,
            weatherDirection: list,
        });
    };

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();

            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();

            this.getWeather(latitude, longitude);

            // TODO: Сделать запрос к API
        } catch (error) {
            Alert.alert("Не могу определить позицию", "Очень грустно :(");
        }
    };

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {
            isLoading,
            temp,
            condition,
            city,
            descr,
            time,
            windSpeed,
            windGust,
            windDeg,
            weatherDirection,
            humidity,
        } = this.state;
        return isLoading ? (
            <Loading />
        ) : (
            <Weather
                temp={Math.round(temp)}
                condition={condition}
                city={city}
                descr={descr}
                time={time}
                windSpeed={windSpeed}
                windGust={windGust}
                windDeg={windDeg}
                weatherDirection={weatherDirection}
                humidity={humidity}
            />
        );
    }
}
