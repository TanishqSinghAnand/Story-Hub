import React, { Component } from 'react'
import { TouchableOpacity, View , StyleSheet , TextInput , Text } from 'react-native'
import { Header } from 'react-native-elements';

export class WriteStoryScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header
                backgroundColor={'purple'}
                centerComponent={{
                text: 'Write Story',
                style: { color: '#fff', fontSize: 20 }}}
                />

                <TextInput style={styles.ti} placeholder="Title of the Story" />
                <TextInput style={styles.ti} placeholder="Author" />
                <TextInput style={styles.ti1} placeholder="Write your story here" />
                <View style={styles.inputBoxContainer}>
                <TouchableOpacity style={styles.to}><Text style={styles.searchText}>Submit</Text></TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

export default WriteStoryScreen

const styles = StyleSheet.create({
    searchText:{
        fontSize: 15,
        color:"white"
      },
    inputBoxContainer: {
        flex:0.3,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"ffffff"
      },

    ti:{
        width: '60vw',
        height:50,
        border:"solid",
        borderStartWidth : 2,
        borderEndWidth : 3,
        borderTopWidth : 1,
        boderLeftWidth: 2,
        borderRightWidth: 3,
        borderBottomWidth : 4,
        alignSelf:"center",
        marginTop:20
    },
    ti1:{
        width: '60vw',
        height:400,
        border:"solid",
        borderStartWidth : 2,
        borderEndWidth : 3,
        borderTopWidth : 1,
        boderLeftWidth: 2,
        borderRightWidth: 3,
        borderBottomWidth : 4,
        alignSelf:"center",
        marginTop:20
    },
    to:{
        width: '30%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"black",
        borderRadius:20,
        marginTop:35,
        marginBottom: 33,
    },

    
});