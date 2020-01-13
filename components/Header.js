import React from 'react'
import { View, Platform, StyleSheet } from 'react-native';
import TitleText from './TitleText'
import colors from '../constants/colors'

const Header = props => {
    return (
        <View style={{ ...styles.headerBase, ...Platform.select({
            ios: styles.headerIOS,
            android: styles.headerAndroid
        })}}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: "white"
    },
    headerAndroid: {
        backgroundColor: colors.primary
    },
    title: {
        color: Platform.OS === 'ios' ? colors.primary : 'white'
    }
})

export default Header;