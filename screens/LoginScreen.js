import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function LoginScreen() {
    return (
        <View className='bg-white h-full w-full'>
            <StatusBar style='light' />
            <Image className='h-full w-full absolute' source={require('../assets/images/background.png')} />

            {/* lights */}
            <View className='flex-row justify-around w-full h-full'>
                <Image className='h-[225] w-[90]' source={require('../assets/images/light.png')} />
                <Image className='h-[160] w-[65]' source={require('../assets/images/light.png')} />
            </View>
        </View>
    )
}