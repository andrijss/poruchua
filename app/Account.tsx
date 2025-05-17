// import { Image } from 'expo-image';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import { importFont } from '@/utils/importFont';

import Event from "@/components/Event";

import RadialGradientBackground from "@/components/radialGradientBG";
import { LinearGradient } from 'expo-linear-gradient';

function Banner() {
    return (
        <View style={{
            width: '100%',
            height: '16%',
            paddingHorizontal: 22,
            backgroundColor: '#181818',
            borderRadius: 18,
            justifyContent: 'center',
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.35,
            shadowRadius: 10,
        }}>
            <Text style={{
                fontFamily: "FontBold",
                color: '#fefefe',
                fontSize: 34,
                top: -8,
            }}>
                3 год 42 хв.
            </Text>
            <Text style={{
                marginTop: 0,
                fontWeight: '500',
                fontSize: 18,
                fontFamily: "FontMedium",
                color: '#d7d7d7'
            }}>
                загалний час на подіях
            </Text>
        </View>
    )
}

export default function AccountScreen() {
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
        <View style={styles.container}>
            <RadialGradientBackground></RadialGradientBackground>
            <View style={{
                paddingTop: 80,
                paddingHorizontal: 24,
                alignItems: 'flex-start',
                height: '100%',
            }}>
                <View style={styles.headerRow}>
                    <Text style={styles.headerText}>{'Ваш профіль'}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    height: '12%',
                    marginTop: 16,
                    marginBottom: 24
                }}>
                    <View style={styles.accountAvatarCircle}>
                        <Text style={styles.avatarText}>AS</Text>
                    </View>
                    <View style={{
                        left: 20,
                        top: -6,
                        backgroundColor: 'transparent',
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.usernameText}>Andrii Salyk</Text>
                        <Text style={styles.goToProfileText}>Волонтер</Text>

                    </View>
                </View>

                <Banner/>

                <Text style={{
                    marginTop: 30,
                    fontWeight: '500',
                    fontSize: 20,
                    color: 'lightgray',
                    fontFamily: "FontBold"
                }}>
                    Історія подій:
                </Text>

                <ScrollView style={{
                    top: 28,
                    flex: 1,
                    width: 345,
                }}>
                    <Event
                        eventName={'Допомога в притулку'}
                        date={'24 квітня 2025'}
                        linkToEvent={'1'}
                        status={'finished'}
                        type={'a'}
                        address={'Університетська 1'}
                    >
                    </Event>
                    <Event
                        eventName={'Благодійний концерт'}
                        date={'24 квітня 2025'}
                        linkToEvent={'2'}
                        status={'finished'}
                        type={'a'}
                        address={'театр Опери та балету'}>
                    </Event>
                    <TouchableOpacity>
                        {/*<Text onPress={() => {*/}
                        {/*    supabase.auth.signOut();*/}
                        {/*}} style={{*/}
                        {/*    color: '#fefefe'*/}
                        {/*}}>Log out</Text>*/}
                    </TouchableOpacity>
                </ScrollView>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
        height: '100%',
    },
    mainContent: {
        backgroundColor: '#141414',
        paddingHorizontal: 24,
        marginTop: 24,
        paddingTop: 24,
        left: -24,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        width: '114%',
        height: '100%',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
        width: '100%',
    },
    headerText: {
        fontSize: 28,
        fontFamily: 'FontBold',
        color: 'lightgray',
        textAlign: 'left',
        marginRight: 12,
    },
    avatarCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#e43800',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#fff',
        fontFamily: 'FontBold',
        fontSize: 24,
    },
    usernameText: {
        fontSize: 32,
        fontFamily: "FontBold",
        color: 'lightgray',
    },
    goToProfileText: {
        marginTop: 2,
        fontSize: 16,
        color: 'gray',
        fontFamily: "FontMedium",
    },
    accountAvatarCircle: {
        width: 86,
        height: 86,
        borderRadius: '50%',
        backgroundColor: '#e43800',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
