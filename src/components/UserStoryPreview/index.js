import React from 'react';
import ProfilePicture from "../ProfilePicture";
import { View,Text,TouchableOpacity } from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const Story = ({imageUri,name}) => {

    const navigation = useNavigation();


    const onPress= () => {
        navigation.navigate("Story");
    }

    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <ProfilePicture uri={imageUri}/>
        <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
    )
}

export default Story;