// import { Image } from 'expo-image';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import { importFont } from '@/utils/importFont';

import RadialGradientBackground from "@/components/radialGradientBG";
import CTabs from "@/components/CTabs";
import Event from "@/components/Event";

import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import {Image} from 'expo-image';

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

function Banner() {
    return (
        <View style={{
            width: '100%',
            height: '20%',

            marginTop: 8,
            shadowColor: '#d93902',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.6,
            shadowRadius: 10,
        }}>
            <LinearGradient style={{
                width: '100%',
                height: '100%',
                borderRadius: 18,
                padding: 20,
                justifyContent: 'center',
            }} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={["#fe7000", "#e43800", "#d00e07"]}>
                <Text style={{
                    color: '#fefefe',
                    fontWeight: '700',
                    fontSize: 24,
                    width: 180,
                    fontFamily: 'FontBold'
                }}>
                    Доєднуйся       до команди координаторів
                </Text>
                <Image
                    source={require('../../../assets/images/voulonteer.png')}
                    style={{
                        width: 200,
                        height: 180,
                        top: 0,
                        right: -20,
                        position: 'absolute'
                    }}
                ></Image>
            </LinearGradient>
        </View>
    )
}

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
    <View style={styles.container}>
        <RadialGradientBackground></RadialGradientBackground>
        <View style={{
            paddingTop: 80,
            paddingHorizontal: 24,
            alignItems: 'flex-start',
            height: '100%',
        }}>
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>Головна</Text>
                <UserAvatar />
            </View>

            <Banner/>

            <View style={styles.mainContent}>
                <Text style={[styles.headerText, {
                    marginBottom: 16,
                }]}>Події</Text>
                <CTabs style={{
                    marginBottom: 16,
                    shadowColor: '#000000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 16,
                }} />
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
                            <Event eventName={"Допомога в притулку"}
                                   date={"24 квітня 2025"}
                                   linkToEvent={'1'}
                                   status={"finished"}
                                   type={'a'}
                                   address={"вул. Хімічна 4"}
                            />
                        </ScrollView>
                    </SafeAreaView>
                </SafeAreaProvider>
            </View>
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
