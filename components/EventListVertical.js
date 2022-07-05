import React from 'react'
import {View, Text, ImageBackground, StyleSheet, Dimensions} from 'react-native'
import homeStyles from "../styles/homeStyles"

const { width, height } = Dimensions.get("window");

const EventListVertical = ({item}) => {
    return (
        <ImageBackground style={styles.popularEventsBg(width)} imageStyle={{borderRadius: 20, opacity: 0.6}} source={item.img}>
        <View style={styles.popularEventsDate}>
        <Text style={styles.popularEventsDay}>{item.day}</Text>
        <Text style={styles.popularEventsMonth}>{item.month}</Text>
        </View>
        <Text style={styles.popularEventsName}>{item.name}</Text>
        <View style={styles.popularEventsDetails}>
        <Text style={styles.popularEventsGenre}>🎙  {item.genre}</Text>
        <Text style={styles.popularEventsTime}>🕒   {item.time}</Text>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create(homeStyles)

export default EventListVertical