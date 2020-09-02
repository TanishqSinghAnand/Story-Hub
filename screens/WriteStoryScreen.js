import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity , ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
//import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            story: '',
        }
    }

    submitStory = ()=>{
        db.collection(this.state.title).add({
            'title': this.state.title,
            'author': this.state.author,
            'date': firebase.firestore.Timestamp.now().toDate(),
            'story': this.state.story,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            title: '',
            author: '',
            story: ''
        })
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Header
                        backgroundColor={'purple'}
                        centerComponent={{
                        text: 'Write Story',
                        style: { color: '#fff', fontSize: 20 }}}
                        />
                    <TextInput 
                        placeholder="Story Title"
                        onChangeText= {(text)=>{
                            this.setState({
                                title: text
                            })
                        }}
                        value={this.state.title}
                        style={styles.title}/>
                    <TextInput
                        placeholder="Author"
                        onChangeText= {(text)=>{
                            this.setState({
                                author: text
                            })
                        }}
                        value={this.state.author}
                        style={styles.author} />
                    <TextInput 
                        placeholder="Write your story"
                        onChangeText= {(text)=>{
                            this.setState({
                                story: text
                            })
                        }}
                        value={this.state.story}
                        style={styles.story}
                        multiline={true}/>
                    <View style={styles.inputBoxContainer}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.submitStory}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    width: '60vw',
    height:50,
    border:'solid',
    borderStartWidth : 2,
    borderEndWidth : 3,
    borderTopWidth : 1,
    boderLeftWidth: 2,
    borderRightWidth: 3,
    borderBottomWidth : 4,
    alignSelf:"center",
    marginTop:20
  },
  author: {
    width: '60vw',
    height:50,
    border:'solid',
    borderStartWidth : 2,
    borderEndWidth : 3,
    borderTopWidth : 1,
    boderLeftWidth: 2,
    borderRightWidth: 3,
    borderBottomWidth : 4,
    alignSelf:"center",
    marginTop:20
  },
  story: {
    width: '60vw',
    height:400,
    border:'solid',
    borderStartWidth : 2,
    borderEndWidth : 3,
    borderTopWidth : 1,
    boderLeftWidth: 2,
    borderRightWidth: 3,
    borderBottomWidth : 4,
    alignSelf:"center",
    marginTop:20
  },
  submitButton:{
    width: '20%',
    height: 35,
    border:'solid',
    borderStartWidth : 2,
    borderEndWidth : 3,
    borderTopWidth : 1,
    boderLeftWidth: 2,
    borderRightWidth: 3,
    borderBottomWidth : 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"black",
    borderRadius:999,
    marginTop:35,
    marginBottom: 33,
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center',
  },
});




