import React from 'react';
import Story from '../Story';
import { View,FlatList } from 'react-native';
import styles from './styles';
const data=[
    {
        imageUri: 'https://reactnative.dev/img/tiny_logo.png',
        name: 'React',
    },  {
        imageUri: 'https://reactnative.dev/img/tiny_logo.png',
        name: 'Lucas',
    },  {
        imageUri: 'https://reactnative.dev/img/tiny_logo.png',
        name: 'Mo',
    },{
        imageUri: 'https://reactnative.dev/img/tiny_logo.png',
        name: 'han',
    },
    {
        imageUri: 'https://reactnative.dev/img/tiny_logo.png',
        name: 'Chang',
    }
]
const Stories = () => (
    <FlatList
        data={data}
        keyExtractor={({name})=> name}
        horizontal
        show showsHorizontalScrollIndicator={false}
        style={styles.container}
        renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
    />

)

export default Stories;