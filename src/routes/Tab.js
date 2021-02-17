import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Pages/Home'
import SobreNos from '../Pages/SobreNos'
import Gestante from '../Pages/Gestante'
import Profissional from '../Pages/Profissional'
import ProcurarAjuda from '../Pages/ProcurarAjuda'
import Login from '../Pages/login'
import FaleConosco from '../Pages/FaleConosco'

const routeTab = createBottomTabNavigator()

const Tab = () => {
    return(
        <routeTab.Navigator initialRouteName='Home' tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: {fontSize: 30},
        }}>
            <routeTab.Screen name="Login" component={Login} />
            <routeTab.Screen name="Home" component={Home} />
            <routeTab.Screen name="SobreNos" component={SobreNos} />
            <routeTab.Screen name="Gestante" component={Gestante} />
            <routeTab.Screen name="Profissional" component={Profissional} />
            <routeTab.Screen name="ProcurarAjuda" component={ProcurarAjuda} />
            <routeTab.Screen name="FaleConosco" component={FaleConosco} />
        </routeTab.Navigator>


    )
}

export default Tab