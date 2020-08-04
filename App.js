import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <HomeScreen/>
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
});

export default App;
