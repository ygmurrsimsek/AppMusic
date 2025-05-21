import React, { useState } from 'react';
import { StyleSheet, View,FlatList ,SafeAreaView, TextInput, Text} from 'react-native';
import music_data from './data/song.json';
import SongCard from './components/SongCard/SongCard';

const AppMusic = () => {
  const RenderSong=({item})=><SongCard song={item}/>;

  const renderSeperator=()=> <View style={styles.Seperator}/>
  
  const [searchText, setSearchText] = useState(music_data);
  const handleSearch = (text)=> {
    const filteredData= music_data.filter(song=>{
      const songName= song.title.toLowerCase();
      const searchText= text.toLowerCase();
      return songName.indexOf(searchText)>-1;
    
    })
    setSearchText(filteredData);
  };
  
  return (
      <SafeAreaView>
          <TextInput placeholder='Şarkı Ara...' style={styles.textInput} onChangeText={handleSearch}/>
          <FlatList data={searchText} keyExtractor={item=> item.id} renderItem={RenderSong} ItemSeparatorComponent={renderSeperator} />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Seperator:{
   borderWidth:1,
    borderColor:'#e0e0e0',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#e0e0e0',
    padding:10,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
  }
  

});
export default AppMusic;