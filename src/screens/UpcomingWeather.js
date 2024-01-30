import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native';
import Listitem from '../components/Listitem';


const UpcomingWeather = ({ weatherData }) => {
    const renderItem = ({ item }) => (
        <Listitem 
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            max={item.main.temp_max}
            min={item.main.temp_min}
        />
    )
    const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
        <ImageBackground source={require('../../assests/upcoming-background.jpg')} style={image} >
            <FlatList 
                data={weatherData}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
            />
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   marginTop: StatusBar.currentHeight || 0,
      backgroundColor: 'royalblue'
    },
    
    image: {
        flex: 1,
    }
  })

export default UpcomingWeather;