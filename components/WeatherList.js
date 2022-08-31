import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Fontisto } from "@expo/vector-icons";


const WeatherList = ({ weatherDirection }) => {
    function hours(d) {
        return new Date(d * 1000).getHours();
    }

    function days(d) {
        return new Date(d * 1000).getDate();
    }
    function month(d) {
        return new Date(d * 1000).getMonth();
    }

    function day(d) {
        const dayWeekNum = new Date(d * 1000).getDay();

        if (dayWeekNum === 0) return "Воскресенье";
        if (dayWeekNum === 1) return "Понедельник";
        if (dayWeekNum === 2) return "Вторник";
        if (dayWeekNum === 3) return "Среда";
        if (dayWeekNum === 4) return "Четверг";
        if (dayWeekNum === 5) return "Пятница";
        if (dayWeekNum === 6) return "Суббота";
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function windDirection(wind) {
        if (wind > 0 && wind <= 22.5) {
            return `ССВ`;
        } else if (wind > 22.5 && wind <= 45) {
            return `СВ`;
        } else if (wind > 45 && wind <= 67.5) {
            return `ВСВ`;
        } else if (wind > 67.5 && wind <= 90) {
            return `В`;
        } else if (wind > 90 && wind <= 112.5) {
            return `ВЮВ`;
        } else if (wind > 112.5 && wind <= 135) {
            return `ЮВ`;
        } else if (wind > 135 && wind <= 157.5) {
            return `ЮЮВ`;
        } else if (wind > 157.5 && wind <= 180) {
            return `Ю`;
        } else if (wind > 180 && wind <= 202.5) {
            return `ЮЮЗ`;
        } else if (wind > 202.5 && wind <= 225) {
            return `ЮЗ`;
        } else if (wind > 225 && wind <= 247.5) {
            return `ЗЮЗ`;
        } else if (wind > 247.5 && wind <= 270) {
            return `З`;
        } else if (wind > 270 && wind <= 292.5) {
            return `ЗСЗ`;
        } else if (wind > 292.5 && wind <= 315) {
            return `СЗ`;
        } else if (wind > 315 && wind <= 337.5) {
            return `ССЗ`;
        } else return `С`;
    }

    return (
        <View style={styles.middleContainer}>
            <ScrollView style={styles.scrollView} horizontal={true}>
                {weatherDirection.map((e, i) => {
                    // console.log(day(e.dt));
                    if (i === 0) {
                        return (
                            <View style={styles.wheatherList} key={i}>
                                <Text style={styles.day}>Сейчас</Text>
                                <Text style={styles.temp}>
                                    {Math.round(e.main.temp)}°
                                </Text>
                                <Image
                                    style={styles.iconOpenWeather}
                                    source={{
                                        uri: `https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,
                                    }}
                                />
                                <View style={styles.windWrap}>
                                    <Fontisto
                                        name="wind"
                                        size={12}
                                        color="white"
                                    />
                                    <Text style={styles.textWind}>
                                        {e.wind.speed}м/с
                                    </Text>
                                </View>
                                <Text style={styles.textWindDirection}>
                                    {windDirection(e.wind.deg)}
                                </Text>
                            </View>
                        );
                    } else if (i > 0 && hours(e.dt) == 0) {
                        return (
                            <View style={styles.wheatherList} key={i}>
                                <Text style={styles.day}>{day(e.dt)}</Text>
                                <Text style={styles.day}>
                                    {getZero(days(e.dt))}.
                                    {getZero(month(e.dt) + 1)}
                                </Text>

                                <Text style={styles.temp}>
                                    {Math.round(e.main.temp)}°
                                </Text>
                                <Image
                                    style={styles.iconOpenWeather}
                                    source={{
                                        uri: `https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,
                                    }}
                                />
                                <View style={styles.windWrap}>
                                    <Fontisto
                                        name="wind"
                                        size={12}
                                        color="white"
                                    />
                                    <Text style={styles.textWind}>
                                        {e.wind.speed}м/с
                                    </Text>
                                </View>
                                <Text style={styles.textWindDirection}>
                                    {windDirection(e.wind.deg)}
                                </Text>
                            </View>
                        );
                    } else {
                        return (
                            <View style={styles.wheatherList} key={i}>
                                <Text style={styles.day}>{day(e.dt)}</Text>
                                <Text style={styles.day}>
                                    {getZero(hours(e.dt))}:00
                                </Text>
                                <Text style={styles.temp}>
                                    {Math.round(e.main.temp)}°
                                </Text>
                                <Image
                                    style={styles.iconOpenWeather}
                                    source={{
                                        uri: `https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,
                                    }}
                                />
                                <View style={styles.windWrap}>
                                    <Fontisto
                                        name="wind"
                                        size={12}
                                        color="white"
                                    />
                                    <Text style={styles.textWind}>
                                        {e.wind.speed}м/с
                                    </Text>
                                </View>
                                <Text style={styles.textWindDirection}>
                                    {windDirection(e.wind.deg)}
                                </Text>
                            </View>
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    middleContainer: {
        flex: 1,
    },

    scrollView: {
        marginHorizontal: 20,
    },
    wheatherList: {
        alignItems: "center",
        justifyContent: "space-around",
        width: 120,
        height: 200,
        backgroundColor: "transparent",
        marginHorizontal: 5,
        borderRadius: 3,
        elevation: 3,
        padding: 5,

    },
    iconOpenWeather: {
        width: 50,
        height: 50,
    },
    temp: {
        fontSize: 24,
        color: "white",
    },
    windWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
    },
    textWind: {
        fontSize: 14,
        color: "white",
        marginLeft: 5,
    },
    textWindDirection: {
        fontSize: 14,
        color: "white",
    },
    day: {
        fontSize: 14,
        color: "white",
    },
});

export default WeatherList;
