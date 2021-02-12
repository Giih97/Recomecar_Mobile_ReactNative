import React from 'react'

import TextCenter from '../../components/TextCenter'
import { View } from 'react-native'
import Button from '../../components/Button'


const Home = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Button navigation={props.navigation} />
            <TextCenter text="Home" />

        </View>

    )
}

export default Home
