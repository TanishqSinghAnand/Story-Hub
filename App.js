import React from 'react';
import { Image } from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return <AppContainer/>
  }
}



const TabNavigator = createBottomTabNavigator({
  Write:{screen:WriteStoryScreen},
  Read:{screen:ReadStoryScreen}
},
{

defaultNavigationOptions : ({navigation})=>({
  tabBarIcon:({})=>{
    const routeName = navigation.state.routeName
    if(routeName === 'Write'){
      return (

        <Image 
        source = {require('./assets/write.png')} 
        style={{width:20 , height:20}}>

        </Image>

      )
    }
    else if(routeName === 'Read'){
      return(
        <Image
        source={require('./assets/read.png')}
        style={{width:20 , height:20}}>
        </Image>
      )
    }
  }
})
})

const AppContainer = createAppContainer(TabNavigator);