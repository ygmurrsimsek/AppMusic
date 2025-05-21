import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './SongCard.style';
const SongCard = ({song}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri:song.imageUrl}} style={styles.image}/>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{song.title}</Text>
                <View style={styles.info_container} >
                    <Text style={styles.artist}>{song.artist}</Text>
                    <Text style={styles.year}>{song.year}</Text>
                </View>
                <View style={styles.soldOut_container}>
                    <Text style={styles.soldOut_Text}>TÜKENDİ</Text>
                    </View>
            </View>
        </View>
    )
};

export default SongCard;