import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../Stories'
const data = [
    {
        user:{
            imageUri:'https://reactnative.dev/img/tiny_logo.png',
            name:'Mojinhyeok'
        },
        imageUri:'https://reactnative.dev/img/tiny_logo.png',
        caption : 'eract #instargram',
        likesCount : 1234,
        postedAt : '6 minutes ago'
    },
    {
        user:{
            imageUri:'https://reactnative.dev/img/tiny_logo.png',
            name:'Mojinhyeok'
        },
        imageUri:'https://reactnative.dev/img/tiny_logo.png',
        caption : 'eract #instargram',
        likesCount : 1234,
        postedAt : '6 minutes ago'
    }
]

const Feed = () => (
    <FlatList
     data={data}
     renderItem={({item})=> <Post post={item}/>}
     ListHeaderComponent={Stories}
     />
)

export default Feed;
