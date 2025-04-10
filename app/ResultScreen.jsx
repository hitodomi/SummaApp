import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ResultScreen({ route }) {
    const dummySummary = `
⚠️ 契約期間は1年間で自動更新されます。
⚠️ 途中解約には手数料が発生します。
納品期限は6月30日です。`;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.box}>
                <Text style={styles.summary}>{dummySummary}</Text>
            </ScrollView>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.smallBtn}>
                    <Text>翻訳</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smallBtn}>
                    <Text>ズーム設定</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.endBtn}>
                <Text>終了</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    box: {
        borderRadius: 20,
        backgroundColor: '#EAEAEA',
        padding: 20,
        height: 400,
    },
    summary: { fontSize: 16 },
    buttons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
    smallBtn: { padding: 10, backgroundColor: '#eee', borderRadius: 10 },
    endBtn: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#ccc',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 10,
    },
});