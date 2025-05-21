import { StyleSheet } from "react-native";
import React from "react";

export default StyleSheet.create({
    container:{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inner_container:{
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    info_container:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 10,
        flex: 1,
    },
    artist:{
        fontSize: 16,
        marginRight: 10,
        flexShrink: 1,
        maxWidth: 150,   
    },
    year:{
        fontSize: 13,
        color: 'gray',
    },
    content_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start', 
    },
    soldOut_container:{
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
        marginTop: 10,

    },
    soldOut_Text:{
        color: 'red'
    }
});