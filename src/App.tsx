import React, { useState } from 'react';
import { StyleSheet, View,Switch,FlatList ,SafeAreaView, Text} from 'react-native';
import music_data from './data/song.json';
import SongCard from './components/SongCard/SongCard';

const AppMusic = () => {
  const RenderSong=({item})=><SongCard song={item}/>;
  const renderSeperator=()=> <View style={styles.Seperator}/>
  return (
      <SafeAreaView>
        <View>
          <FlatList data={music_data} keyExtractor={item=> item.id} renderItem={RenderSong} ItemSeparatorComponent={renderSeperator} />
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Seperator:{
   borderWidth:1,
    borderColor:'#e0e0e0',
  },
});
export default AppMusic;