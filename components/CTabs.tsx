import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,} from 'react-native-reanimated';

import {LinearGradient} from "expo-linear-gradient";
import {useFonts} from "expo-font";

const tabs:string[] = ['Популярні', 'Неподалік', 'Усі події'];
const { width } = Dimensions.get('window');
const TAB_WIDTH = (width-48) / tabs.length;

export default function CTabs({style}: {style?: any}) {
    const activeIndex = useSharedValue(0);

    const [loaded] = useFonts({
        "FontMedium": require('../assets/fonts/MontserratAlternates-Medium.ttf'),
        "FontBold": require('../assets/fonts/MontserratAlternates-Bold.ttf'),
        "FontRegular": require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

    const indicatorStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: withTiming(activeIndex.value * TAB_WIDTH, {
                    duration: 400,
                    easing: Easing.inOut(Easing.quad),
                }),
            },
        ],
    }));

    return (
        <View style={[{
            backgroundColor: '#1A1A1A',
            height: 54,
            borderRadius: 20,
        }, style]}>
            <Animated.View
                style={[
                    {
                        height: 44,
                        width: TAB_WIDTH-10,
                        backgroundColor: 'blue',
                        position: 'absolute',
                        bottom: 5,
                        left: 5,
                        borderRadius: 18,
                        shadowColor: '#d93902',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.7,
                        shadowRadius: 4,
                    },
                    indicatorStyle,
                ]}
            >
                <LinearGradient style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 18,

                }} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={["#fe7000", "#e43800", "#d00e07"]}>
                </LinearGradient>
            </Animated.View>
            <View style={{ flexDirection: 'row' }}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => (activeIndex.value = index)}
                        style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}
                    >
                        <Text style={{
                            color: index===activeIndex.value ? '#fefefe' : '#fefefe',
                            fontFamily: 'FontBold',
                            fontSize: 15,
                        }}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
