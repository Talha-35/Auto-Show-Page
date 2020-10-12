import React from 'react';
import {TouchableOpacity , Text , StyleSheet} from 'react-native'

const MyButton = (props) => {
    return ( 
        <TouchableOpacity
        onPress = { () => alert('hello')}
        onLongPress = { () => alert('hello : long press')}
         style={styles.container}>
            <Text style={styles.text}>{props.button}</Text>
        </TouchableOpacity>
     );
}
 
export  {MyButton};

const styles =  StyleSheet.create({
    container : {
        paddingVertical : 5,
        borderWidth : 1 ,
         backgroundColor : "red"  ,
          borderRadius : 25, 
          marginHorizontal : 100 
    },
    text :{
        // height :40 , 
        textAlign:"center" ,
        width : 70 , 
        alignSelf : "center",  
        fontSize : 25, 
        color : "white", 
        fontWeight : "bold" ,
    }
})