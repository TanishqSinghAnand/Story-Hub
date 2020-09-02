import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import { Header } from 'react-native-elements';

export class ReadStoryScreen extends Component {
    render() {
        return (
            <View>
                <Header
                backgroundColor={'purple'}
                centerComponent={{
                text: 'Read Story',
                style: { color: '#fff', fontSize: 20 }}}
                />
                <Text> Read story  </Text>
            </View>
        )
    }
}

export default ReadStoryScreen

const styles = StyleSheet.create({
    
});