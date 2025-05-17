// import { Image } from 'expo-image';
import {View, Dimensions, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import { importFont } from '@/utils/importFont';

import RadialGradientBackground from "@/components/radialGradientBG";
import CTabs from "@/components/CTabs";
import Event from "@/components/Event";
import {IconSymbol} from "@/components/ui/IconSymbol";

import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;


function UHaveUnreadMessages({amount, from}:{amount: number, from: string}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('notifications')} style={[{
            backgroundColor: "#1A1A1A",
            borderRadius: 18,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.38,
            shadowRadius: 12,
            borderWidth: 0,
            width: windowWidth - 48,
            borderColor: "#d5d5d5",
            marginHorizontal: 0,
            elevation: 3,
            position: "relative",
            display: "flex",
            flexDirection: "row",

            paddingVertical: 16,
            paddingHorizontal: 13,
            marginTop: 12,
            marginBottom: 24,
        }]}>
            <IconSymbol size={32} name="bell.fill" color={'#c4c4c4'} style={{
            }} />
            <Text style={{
                position: 'absolute',
                backgroundColor: '#D00E07FF',
                borderRadius: 10,
                width: 20,
                top: 31,
                left: 29,
                height: 20,
                paddingTop: 3,
                paddingLeft: 4,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                }}>{amount}</Text>
            </Text>
            <Text style={{
                color: "#d5d5d5",
                marginLeft: 9,
                paddingRight: 16,
                fontSize: 13,
                top: 2,
                fontWeight: 'bold'
            }}>У Вас є нові сповіщення від координатора події &#34;{from}&#34;</Text>
        </TouchableOpacity>
    )
}

function UserAvatar() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View style={styles.avatarCircle}>
                <Text style={styles.avatarText}>JD</Text>
            </View>
        </TouchableOpacity>
    );
}

export default function MyEvents() {
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
            <View style={{
                paddingTop: 80,
                paddingHorizontal: 24,
                alignItems: 'flex-start',
                height: '100%',
            }}>
                <View style={styles.headerRow}>
                    <Text style={styles.headerText}>Мої події</Text>
                    <UserAvatar />
                </View>
                <UHaveUnreadMessages amount={10} from={'Penis'}/>
                    <SafeAreaProvider>
                        <SafeAreaView edges={['top']}>
                            <ScrollView style={{
                                height: 288,
                            }}>
                                <Event eventName={"Допомога в притулку"}
                                       date={"24 квітня 2025"}
                                       linkToEvent={'1'}
                                       status={"active"}
                                       type={'a'}
                                       address={"вул. Керамічна 4"}
                                />

                                <Event eventName={"Допомога в притулку"}
                                       date={"24 квітня 2025"}
                                       linkToEvent={'1'}
                                       status={"soon"}
                                       type={'a'}
                                       address={"вул. Наукова 72"}/>
                                <Event eventName={"Допомога в притулку"}
                                       date={"24 квітня 2025"}
                                       linkToEvent={'1'}
                                       status={"soon"}
                                       type={'a'}
                                       address={"вул. Театральна 23"}/>
                            </ScrollView>
                        </SafeAreaView>
                    </SafeAreaProvider>
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
        fontSize: 16,
    },
});
