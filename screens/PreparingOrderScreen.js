import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
 
const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000);
    }, []);
  return (
    <SafeAreaView className="bg-[#0d978b] flex-1 justify-center items-center">
      <Animatable.Image 
        source={require("../assets/motorbike-motorbikes.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-48 w-48"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Wainting for Restaurant to accept your orders!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />

    </SafeAreaView>
  )
}

export default PreparingOrderScreen