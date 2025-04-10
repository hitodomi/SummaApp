import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={require('../assets/wood-bg.jpg')} style={styles.bg}>
            <Text style={styles.title}>書類解析アプリ</Text>
            <Text style={styles.logo}>Summa</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
                <Text style={styles.btnText}>撮影する</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Result')}>
                <Text style={styles.btnText}>アップロード</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 18, color: '#fff', marginBottom: 5 },
    logo: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 30 },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginVertical: 10,
    },
    btnText: { fontSize: 18 },
});