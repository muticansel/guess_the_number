import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    source={{ uri: 'https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }}
                    style={styles.image} />
            </View>
            <Text style={styles.resultText}>Your phone needed{' '}
                <Text style={styles.highlight}>{props.rounds}</Text> 
                {' '}rounds to guess the number{' '}
                <Text style={styles.highlight}>{props.userNumber}</Text>
            </Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 5
    },
    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold'
    }
})

export default GameOverScreen;