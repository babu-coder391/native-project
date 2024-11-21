
import {StyleSheet,Text,View } from 'react-native';
import { TouchableOpacity,} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import userlocation from './hooks/userlocation';

export default function App() {
    const {latitude,longtitude,errorMsg} = userlocation();
  return (
   
        
    <View style={styles.container}>
 

     <Text style={styles.title}>Location Tracker</Text>

     <View style={styles.IconWrapper}>
      
      
      <Feather name="map-pin" size={50} color='#FF0800'/>

   </View>

     <Text style={styles.desc}>
        "Welcome To the Location Tracker App"
        when you click on the use location button,
     Your location will be used to get your position!
    </Text>
    <TouchableOpacity>
        <Text style={styles.btnText}> Get Location</Text>
    </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0bdc84",
        justifyContent:"centre",
        alignitems:"Centre",
        PaddingHorizantal:25,
        alignitems:'centre',
 
     },
     IconWrapper:{
        backgroundColor:"#FFFFFF",
        padding:25,
        borderRadius:"50%",
        borderWidth:1,
        borderColor:"#D3D3D3",
        marginLeft:130,
        marginTop:60,
        marginRight:125,

     },
     title:{
        fontSize:40,
        color:"black",
        marginBottom:10,
        alignItems:'center',
        alignContent:'center',
        marginLeft:45,
        marginTop:130,
        fontFamily:'Arial'
        

    },
    desc:{
        textAlign:"center",
        color:"404040",
        marginBottom:35,
        fontSize:15,
        marginTop:"50vh",
        padding:15,
        
    },
    btnText:{
        fontSize:20,
        marginLeft:95,
        backgroundColor:"#000000",
         borderColor:"#e6e6e6",
         marginRight:100,
         borderRadius:10,
          padding:10,
         color:'white',
         paddingLeft:25
        
        
     }

     })
       

