import React, { Component } from 'react'
import { Text, View , StyleSheet , Image } from 'react-native'

export class ReadStoryScreen extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require("../assets/StoryHub.png")}
                    style={{width:200, height: 200}}/>
                <Text> Read story  </Text>
            </View>
        )
    }
}

export default ReadStoryScreen

const styles = StyleSheet.create({
    
});