import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'

import Home from '../Pages/Home'
import SobreNos from '../Pages/SobreNos'
import Gestante from '../Pages/Gestante'
import Profissional from '../Pages/Profissional'
import ProcurarAjuda from '../Pages/ProcurarAjuda'
import Login from '../Pages/login'
import FaleConosco from '../Pages/FaleConosco'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
    return (
       <routeDrawer.Navigator initialRouteName="Home">
           <routeDrawer.Screen name="Login" component={Login} />
           <routeDrawer.Screen name="Home" component={Home} />
           <routeDrawer.Screen name="Sobre Nós" component={SobreNos} />
           <routeDrawer.Screen name="Gestante/Mãe" component={Gestante} />
           <routeDrawer.Screen name="Profissional" component={Profissional} />
           <routeDrawer.Screen name="Procurar Ajuda" component={ProcurarAjuda} />
           <routeDrawer.Screen name="Fale Conosco" component={FaleConosco} />
       </routeDrawer.Navigator>
    )
}

export default Drawer
