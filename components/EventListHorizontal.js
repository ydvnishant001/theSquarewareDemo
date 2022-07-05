import React from 'react'
import {View, Text, ImageBackground, StyleSheet, Dimensions} from 'react-native'
import homeStyles from "../styles/homeStyles"

const { width, height } = Dimensions.get("window");

const EventListHorizontal = ({item}) => {
    return (
      <ImageBackground style={styles.eventForYouBg(width)} imageStyle={{borderRadius: 20, opacity: 0.6}} source={item.img}>
      <View style={styles.eventForYouContent}>
      <Text style={styles.eventForYouDay}>{item.day}</Text>
      <Text style={styles.eventForYouMonth}>{item.month}</Text>
      </View>
      <Text style={styles.eventForYouName}>{item.name}</Text>
      <View style={styles.eventForYouDetails}>
      <Text style={styles.eventForYouGenre}>🎙  {item.genre}</Text>
      <Text style={styles.eventForYouTime}>🕒   {item.time}</Text>
      </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create(homeStyles)

export default EventListHorizontal