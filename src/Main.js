import React from 'react';
import {Text , View,Image , StyleSheet, ScrollView } from 'react-native';


const Main = () => {


    const myData = [
        {
         marka : 'Bmw',
         desc : 'Bayerische Motoren Werke AG, commonly referred to as BMW  is a German multinational company which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.',
         img : require('./img/bmw.jpg'),
         img2 : require('./img/bmw2.jpg'),
         color : "#66bb6a"
        },
        {      
            marka : 'Mercedes',
            desc : 'Mercedes-Benz is both a German automotive marque and, from late 2019 onwards, a subsidiary (Mercedes-Benz AG) of Daimler AG. Mercedes-Benz is known for producing luxury vehicles and commercial vehicles.The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz. In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.',
            img : require('./img/mercedes.png'),
            img2 : require('./img/mercedes2.jpg'),
            color : "#90a4ae"
        },
        {
            marka : 'Lamborgini',
            desc : 'Automobili Lamborghini S.p.A. (Italian pronunciation: [lamborˈɡiːni]) is an Italian brand and manufacturer of luxury sports cars and SUVs based in SantAgata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.',
            img : require('./img/lamborgini.jpg'),
            img2 : require('./img/lamborgini2.jpg'),
            color : "#ffe082"
        },
        {
            marka : 'Ferrari',
            desc : 'Ferrari (/fəˈrɑːri/; Italian: [ferˈraːri]) is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 out of Alfa Romeos race division as Auto Avio Costruzioni, the company built its first car in 1940. However, the companys inception as an auto manufacturer is usually recognized in 1947, when the first Ferrari-badged car was completed.',
            img : require('./img/ferrari.jpg'),
            img2 : require('./img/ferrari2.jpg'),
            color : "#f06292"
        }
     ]


    return (
        <ScrollView>
        <View>
            <Text style={styles.title}>Auto Models</Text>
            
            {
                myData.map(item =>{
                    return (
                        <View>
                            <View style={[styles.nav1, {backgroundColor : item.color}]}>
                                <Text style={styles.text1}>{item.marka}</Text>
                                <Image 
                                style={{width : 50, height:50, marginRight : 20,borderRadius : 5}}
                                source={item.img}
                                />
                            </View>
                            
                            <View style={styles.nav2}>
                            <Text style= {{marginBottom : 5}}>{item.desc}</Text>                       
                                <Image 
                                style={{width : 375, height:250,borderRadius : 10}}
                                source={item.img2}
                                />
                            </View>
                                
                        </View>
                    )
                })
            }

        </View>
        </ScrollView>
    )
};


export default Main;

const styles = StyleSheet.create({
    nav1 : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        // marginLeft : 10,
        paddingLeft : 40,
        marginVertical : 10,
        backgroundColor : "gray"
    },
    text1 : {
        fontSize : 20,
        fontWeight : "bold"
    },
    nav2 : {
        borderWidth : 1,
        margin : 2,
        padding : 5,
        borderRadius : 5
    },
    title : {
        fontSize : 25,
        textAlign : "center",
        backgroundColor : '#303f9f',
        color : "white",
        fontWeight : "bold",
        marginVertical : 10,
        borderRadius : 50,
        paddingVertical : 5
    }
})