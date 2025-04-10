import React, { useEffect, useRef, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({ navigation }) {
    const cameraRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            navigation.navigate('Result', { photo });
        }
    };

    if (hasPermission === null) return <View />;
    if (hasPermission === false) return <Text>No camera access</Text>;

    return (
        <Camera style={{ flex: 1 }} ref={cameraRef}>
            <View style={styles.bottom}>
                <Button title="撮影" onPress={takePicture} />
            </View>
        </Camera>
    );
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
    },
});