import React from "react";

import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Image,
	ImageBackground,
} from "react-native";
import { Fontisto, FontAwesome5, Entypo } from "@expo/vector-icons";

import WeatherList from "./WeatherList";
import WeatherDayList from "./WeatherDayList";


export default function Weather ( {
	temp,
	condition,
	city,
	descr,
	windSpeed,
	windGust,
	windDeg,
	weatherDirection,
	humidity,
} ) {
	function temper ( t ) {
		if ( t > 0 ) {
			return `+${ t }`;
		}
		else {
			return t;
		}
	}

	function windDirection ( wind ) {
		if ( wind > 0 && wind <= 22.5 ) {
			return `ССВ`;
		}
		else
			if ( wind > 22.5 && wind <= 45 ) {
				return `СВ`;
			}
			else
				if ( wind > 45 && wind <= 67.5 ) {
					return `ВСВ`;
				}
				else
					if ( wind > 67.5 && wind <= 90 ) {
						return `В`;
					}
					else
						if ( wind > 90 && wind <= 112.5 ) {
							return `ВЮВ`;
						}
						else
							if ( wind > 112.5 && wind <= 135 ) {
								return `ЮВ`;
							}
							else
								if ( wind > 135 && wind <= 157.5 ) {
									return `ЮЮВ`;
								}
								else
									if ( wind > 157.5 && wind <= 180 ) {
										return `Ю`;
									}
									else
										if ( wind > 180 && wind <= 202.5 ) {
											return `ЮЮЗ`;
										}
										else
											if ( wind > 202.5 && wind <= 225 ) {
												return `ЮЗ`;
											}
											else
												if ( wind > 225 && wind <= 247.5 ) {
													return `ЗЮЗ`;
												}
												else
													if ( wind > 247.5 && wind <= 270 ) {
														return `З`;
													}
													else
														if ( wind > 270 && wind <= 292.5 ) {
															return `ЗСЗ`;
														}
														else
															if ( wind > 292.5 && wind <= 315 ) {
																return `СЗ`;
															}
															else
																if ( wind > 315 && wind <= 337.5 ) {
																	return `ССЗ`;
																}
																else return `С`;
	}

	function color ( t ) {
		if ( t > 0 ) {
			return styles.tempRed;
		}
		else
			if ( t < 0 ) {
				return styles.tempBlue;
			}
			else {
				return styles.tempWhite;
			}
	}
	return (
		<ImageBackground
			style={ styles.container }
			source={ require ( "../assets/animeteImages/sun-66.gif" ) }
			resizeMode="cover"
		>
			<StatusBar barStyle="light-content"/>
			<View style={ styles.topContainer }>
				<Text style={ styles.city }>{ city }</Text>
				<View style={ styles.wrapTemp }>
					<Text style={ color ( temp ) }>{ temper ( temp ) }°</Text>

					<Image
						style={ styles.iconOpenWeather }
						source={ {
							uri: `https://openweathermap.org/img/wn/${ condition }@4x.png`,
						} }
					/>
				</View>
				<Text style={ styles.description }>{ descr }</Text>
				<View style={ styles.wrapDescr }>
					<Fontisto name="wind" size={ 16 } color="white"/>
					<Text style={ styles.textWind }>{ windSpeed }м/с</Text>
					<FontAwesome5 name="wind" size={ 16 } color="white"/>
					<Text style={ styles.textWind }>{ windGust }м/с</Text>
					<FontAwesome5 name="compass" size={ 16 } color="white"/>
					<Text style={ styles.textWind }>
						{ windDirection ( windDeg ) }
					</Text>
					<Entypo name="drop" size={ 16 } color="blue"/>
					<Text style={ styles.textWind }>{ humidity }%</Text>
				</View>
			</View>
			<WeatherList weatherDirection={ weatherDirection }/>
			<View style={ styles.bottomContainer }>
				<WeatherDayList weatherDirection={ weatherDirection }/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create ( {
	container: {
		flex: 1,
	},
	wrapTemp: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	wrapDescr: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	tempRed: {
		color: "red",
		fontSize: 48,
		shadowColor: "white",
	},

	tempBlue: {
		color: "blue",
		fontSize: 48,
	},
	tempWhite: {
		color: "white",
		fontSize: 48,
	},
	topContainer: {
		flex: 1,
		paddingTop: 30,
		justifyContent: "flex-start",
		alignItems: "center",
	},

	bottomContainer: {
		flex: 1,
	},
	iconOpenWeather: {
		margin: 0,
		width: 100,
		height: 100,
	},
	city: {
		fontSize: 20,
		color: "white",
	},
	description: {
		fontSize: 20,
		color: "white",
	},
	textWind: {
		color: "white",
		fontSize: 16,
		marginHorizontal: 10,
	},
	iconWind: {
		paddingRight: 10,
	},
} );