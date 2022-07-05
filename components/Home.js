import React from 'react'
import {StyleSheet, View, Text, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Platform, LogBox, ImageBackground,
TextInput, Dimensions, FlatList} from 'react-native'
import homeStyles from "../styles/homeStyles"
import EventListHorizontal from './EventListHorizontal';
import EventListVertical from './EventListVertical';

const { width, height } = Dimensions.get("window");

const Home = () => {
  const dummy = 
  [{name: "Event Name", genre: "Dance & Arts", time: "07:00 PM", day: 10, month: "May", img: require("../assets/bg2.jpg")},
  {name: "Event Name", genre: "Dance & Arts", time: "07:00 PM", day: 10, month: "May", img: require("../assets/bg3.jpg")}, 
  {name: "Event Name", genre: "Dance & Arts", time: "07:00 PM", day: 10, month: "May", img: require("../assets/bg4.jpg")}]
    
    return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "black" }} keyboardShouldPersistTaps="handled">
    <View style={styles.mainContainer}>
    <View style={styles.header}>
    <Text style={styles.headerLabel}>Hi Bernd 👋</Text>
    <Image style={styles.notificationIcon} resizeMode="contain" tintColor="white" source={require("../assets/bell.png")}/>
    </View>
    <View style={styles.locationContainer}>
      <View>
        <Text style={styles.locationDate}>Tuesday, 3 May</Text>
        <Text style={styles.locationPlace}>Cologne, Germany</Text>
      </View>
      <View style={styles.locationMap}>
      <ImageBackground style={styles.locationMapBackground} imageStyle={{borderRadius: 10}}
      source={require("../assets/location.png")}>
      <Image resizeMode="contain" source={require("../assets/place.png")} style={styles.locationMapPointer}
      tintColor="black"/>
      </ImageBackground>
      </View>
    </View>
    <TextInput style={styles.searchInput(width)} editable={false} placeholder="Search event..." placeholderTextColor="#A1A1A1"/>
    <Text style={styles.todayEventLabel}>Today's Event</Text>
    <ImageBackground style={styles.todayEventBg(width)} imageStyle={{borderRadius: 20, opacity: 0.6}}
    source={require("../assets/bg1.jpg")}>
    <View style={styles.todayEventContent}>
      <Text style={styles.todayEventName}>Event Name</Text>
      <View style={styles.todayEventDate}>
        <Text style={styles.todayEventDay}>8</Text>
        <Text style={styles.todayEventMonth}>May</Text>
      </View>
    </View>
    <Text style={styles.todayEventFooter}>
    {"Go to ticket ->"}</Text>
    </ImageBackground>
    <View style={styles.scrollIndicatorContainer}>
    <View style={[styles.scrollIndicator, {marginRight: 5}]}></View>
    <View style={[styles.scrollIndicator, {backgroundColor: '#A1A1A1', marginRight: 5}]}></View>
    <View style={[styles.scrollIndicator, {backgroundColor: '#A1A1A1'}]}></View>
    </View>
    <View style={styles.eventForYou}>
    <Text style={styles.eventForYouLabel}>Events for you</Text>
    <Text style={styles.eventForYouLabel2}>See all</Text></View>
    <FlatList data={dummy} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => {
      return <EventListHorizontal item={item}/>
    }}/>
    <View style={styles.popularEvents}>
    <Text style={styles.popularEventsLabel}>Popular Events</Text>
    <Text style={styles.popularEventsLabel2}>See all</Text>
    </View>
    <View style={styles.popularEventsContainer}>
    {dummy.slice(0).reverse().map(item => {
      return <EventListVertical item={item}/>
    })}
    </View>
    </View>
    </ScrollView>
    <View style={styles.bottomTab(width)}>
    <Image resizeMode="contain" source={require("../assets/home.png")} tintColor="white" style={styles.tabIcons}/>
    <Image resizeMode="contain" source={require("../assets/tickets.png")} tintColor="#717171" style={styles.tabIcons}/>
    <Image resizeMode="contain" source={require("../assets/chat.png")} tintColor="#717171" style={styles.tabIcons}/>
    <Image resizeMode="contain" source={require("../assets/user.png")} tintColor="#717171" style={styles.tabIcons}/>
    </View>
    <View style={styles.bottomBar(width)}></View>
    </SafeAreaView>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create(homeStyles)

export default Home