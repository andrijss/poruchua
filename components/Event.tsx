import React from 'react';

import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import { IconSymbol } from '@/components/ui/IconSymbol';
import {Link} from 'expo-router';

import {View, Text, StyleSheet} from "react-native";
import {useFonts} from 'expo-font';

// types: charity, medicine, restoration, educational

export default function Event({eventName,
                                  date,
                                  linkToEvent,
                                  status, address, style, type} : {
    eventName: string,
    date: string,
    linkToEvent: string,
    status: string,
    type: string,
    address: string,
    style?: any
}) {

    const [loaded] = useFonts({
        "FontMedium": require('../assets/fonts/MontserratAlternates-Medium.ttf'),
        "FontBold": require('../assets/fonts/MontserratAlternates-Bold.ttf'),
        "FontRegular": require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

    // @ts-ignore
    return (
        <View style={[styles.eventContainer, {
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
        }]}>
            <Link href={{
                pathname: '/Event/[id]',
                params: {id: linkToEvent}
            }}>
                <View style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                }}>
                    { type === "charity" ?
                        <IconSymbol size={60} name="heart.fill" color={'#212121'} style={{
                            position: 'absolute',
                            top: 40,
                            right: 0,
                        }}/> : <View></View>
                    }

                    <Text style={{
                        fontSize: 22,
                        paddingTop: 4,
                        paddingBottom: 8,
                        fontFamily: 'FontBold',
                        color: '#fefefe',
                    }}>{eventName}</Text>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 4,
                    }}>
                        <IconSymbol size={13} name="calendar" color={'#c4c4c4'} style={{
                            top: 4,
                            left: -2,
                        }} />
                        <Text style={{
                            fontFamily: 'FontMedium',
                            left: 0,
                            color: '#fefefe',
                            top: 3,
                        }}> {date}</Text>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <IconSymbol size={13} name="mappin.and.ellipse" color={'#c4c4c4'} style={{
                            top: 4,
                            left: -2,
                        }} />
                        <Text style={{
                            fontFamily: 'FontMedium',
                            left: 0,
                            top: 3,
                            color: '#fefefe'
                        }}> {address}</Text>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        backgroundColor: 'transparent',
                        top: 8
                    }}>
                        {status === 'active' ?
                            <View style={{
                                width: 10,
                                height: 10,
                                top: 4,
                                borderRadius: '50%',
                                backgroundColor: 'rgb(38,91,8)',
                            }}></View> :

                            status === 'soon' ?
                                <View style={{
                                    width: 10,
                                    height: 10,
                                    top: 4,
                                    borderRadius: '50%',
                                    backgroundColor: 'rgb(255,204,0)',
                                }}></View> :

                                <View style={{
                                    width: 10,
                                    height: 10,
                                    top: 4,
                                    borderRadius: '50%',
                                    backgroundColor: 'rgb(217,57,2)',
                                }}></View>}

                        <Text style={{
                            fontFamily: 'FontBold',
                            left: 6,
                            top: 2,
                            color: '#fefefe'
                        }}>
                            {status === 'active' ? 'Активний' : status === 'soon' ? 'Незабаром' : 'Завершений'}
                        </Text>
                    </View>

                    <Text style={{
                        position: 'absolute',
                        fontWeight: 'bold',
                        fontSize: 24,
                        height: '100%',
                        width: 10,
                        top: 7,
                        right: 2,
                        color: 'gray',
                    }}>
                        <IconSymbol size={16} name="chevron.forward" color={'#c4c4c4'} style={{
                        }} />
                    </Text>
                </View>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    eventContainer: {
        padding: 16,
        paddingTop: 12,
        height: 128,
        marginBottom: 16,
        borderRadius: 20,
        backgroundColor: '#1A1A1A',
    }
})

