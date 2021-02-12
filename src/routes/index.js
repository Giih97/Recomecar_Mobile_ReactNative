import React from 'react'
import {SafeAreaView} from 'react-native'
import {NavigationContainer} from "@react-navigation/native"

import Drawer from './Drawer'

// import Tab from './Tab'

const Routes = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer />
                
            </NavigationContainer>

        </SafeAreaView>
    )
}

export default Routes