import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VideoScreen from './VideoScreen';

const HomeScreen = () => {
    // State Variable
    const [videoID, setVideoID] = useState('');

    // Return JSC Component
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Anuz Live Stream</Text>
            <VideoScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        position: 'absolute',
        bottom: 10,
        fontSize: 16,
        right: 16,
        fontWeight: "bold",
        elevation: 5,
        backgroundColor: '#ff0000',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        color: '#fff',
        opacity: 0.2,
    }
});

export default HomeScreen;
