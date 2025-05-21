import React, { useState } from 'react';
import { StyleSheet, View,Switch,FlatList ,SafeAreaView, Text} from 'react-native';
import music_data from './data/song.json';
import SongCard from './components/SongCard/SongCard';

const AppMusic = () => {
  const RenderSong=({item})=><SongCard song={item}/>;
  return (
      <SafeAreaView>
        <View>
          <FlatList data={music_data} renderItem={RenderSong}/>
        </View>
      </SafeAreaView>
  );
};
export default AppMusic;