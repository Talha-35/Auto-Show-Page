import React from 'react';
import {Text ,View , SafeAreaView , StyleSheet }  from 'react-native';



const MyBanner = (props) => {

    // function test() {
    //     if (props.isActiv) {
    //         return <Text>Aktifdir</Text>
    //     } else {
    //         return <Text>Aktif değildir</Text>

    //     }
    // },

    function test() {
        return 
    }
    
    return(
        <SafeAreaView>
            
        <View style={[styles.container , {backgroundColor :  props.color}]}>

            <View style={{flexDirection : "row" , alignItems : "center"}}>
            <View style={{flex : 1}}>
                <Text style={[styles.text, {color : props.color2}]}>{props.title}    </Text>
                <Text>{props.desc}</Text>
            </View>
            
            {props.isActiv ? <Text>aktif</Text> :  <Text>Aktif değildir</Text>}
            {/* yukarıdaki if fonksiyonu ile aynı sonucu verir */}
            </View>
            <View>
                <Text>selam</Text>
            {props.isActiv2 && <Text>kullanıcı onaylandı</Text>}
            </View>

         
        </View>
        </SafeAreaView>


    )
};


const styles = StyleSheet.create({
    container : {
        // flex : 1,
        
        margin : 10,        
        padding : 10,
        backgroundColor : "#b2ebf2",
        borderRadius : 15,
        
    },
    text : {
        
        
        // textAlign  :"center",
        fontWeight  :"bold",
        fontSize : 25,
    }}
    )

export {MyBanner}