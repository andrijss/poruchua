// import { Image } from 'expo-image';
import {View, Text, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import { importFont } from '@/utils/importFont';

export default function HomeScreen() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await importFont();
            setFontsLoaded(true);
        }
        loadFonts().then(r => {});
    }, []);

    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#141414',
        }}>
            <Text style={{
                fontFamily: 'FontBold',
                fontSize: 16,
                color: '#fefefe',
            }}>Sorry, the map will come in later updates</Text>
        </View>
    );
}

const styles = StyleSheet.create({
});
