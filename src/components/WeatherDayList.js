import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Fontisto } from "@expo/vector-icons";

function WeatherDayList({ weatherDirection }) {
    // console.log(weatherDirection[10]);

    function hours(d) {
        return new Date(d * 1000).getHours();
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

    const tempArr = [];
    weatherDirection.map((e) => {
        tempArr.push(Math.round(e.main.temp));
    });

    // console.log(tempArr);

    function actualTemp(t) {
        if (t != null) {
            return t + "°";
        } else {
            return (
                Math.round(
                    weatherDirection[weatherDirection.length - 1].main.temp
                ) + "°"
            );
        }
    }

    return (
        <>
            <ScrollView style={styles.container} horizontal={false}>
                {weatherDirection.map((e, i) => {
                    // console.log(i);
                    if (hours(e.dt) == 0) {
                        return (
                            <View style={styles.listItem} key={i}>
                                <Text style={styles.listItemTxt}>
                                    {day(e.dt)}
                                </Text>
                                <Image
                                    style={styles.iconOpenWeather}
                                    source={{
                                        uri: `https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,
                                    }}
                                />

                                <Text style={styles.temp}>
                                    ночь {Math.round(e.main.temp)}° день {actualTemp(tempArr[i + 4])}
                                </Text>
                            </View>
                        );
                    }
                })}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    listItem: {
        height: 50,
        width: "100%",
        borderRadius: 3,
        elevation: 3,
        padding: 2,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
    },
    listItemTxt: {
        fontSize: 16,
        color: "white",
    },
    temp: {
        fontSize: 16,
        color: "white",
    },
    iconOpenWeather: {
        width: 40,
        height: 40,
    },
});

export default WeatherDayList;
