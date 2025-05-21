import {Text, View} from 'react-native';
import React from 'react';

const SongCard = ({song}) => {
    return(
        <View>
            <Text>{song.title}</Text>
        </View>
    )
};

export default SongCard;