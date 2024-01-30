import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function LoginScreen() {
    return (
        <View className='bg-white h-full w-full'>
            <StatusBar style='light' />
            <Image className='h-full w-full absolute' source={require('../assets/images/background.png')} />
        </View>
    )
}