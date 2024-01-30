import React from 'react';
import { View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const {
     wrapper,
     container,
     tempStyles,
     feels,
     highLowWrapper,
     highLow,
     bodyWrapper,
     description,
     message
   } = styles;
   console.log(weatherData);
   
  //  destructing the weather data
  const { main: { temp, feels_like, temp_min, temp_max }, weather } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView style={[
      wrapper, 
      { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}>
      <View style={container}>
        <Icon 
          name={weatherType[weatherCondition]?.icon} 
          size={100} 
          color="white" 
        />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText 
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />

      </View>
        <RowText 
            messageOne={weather[0]?.description}
            messageTwo={weatherType[weatherCondition]?.message}
            containerStyles={bodyWrapper}
            messageOneStyles={description}
            messageTwoStyles={message}
          />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: 'coral',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather;
