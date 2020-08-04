import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
// Youtube Package
import YouTube from 'react-native-youtube';
import { API_KEY } from '../../config';

const {width, height} = Dimensions.get('window');

console.log(`Width is ${width} and Height is ${height}`);


const VideoScreen = () => {
    return (
        <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
            <YouTube
                apiKey={API_KEY}
                videoId="T62FI6eYjn8"
                play
                loop
                resumePlayAndroid
                controls={0}
                style={{ alignSelf: 'stretch', width: width, backgroundColor: 'black', height: height}}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default VideoScreen;
