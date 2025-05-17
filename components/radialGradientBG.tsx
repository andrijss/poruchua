import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, RadialGradient as SVGRadialGradient, Stop, Rect, Path } from 'react-native-svg';

import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const scaleX = 320;
const overflow = screenWidth - scaleX;
const gradientCenterX = screenWidth - overflow / 2;

export default function RadialGradientBackground() {
    return (
        <View style={{ position: 'absolute', width: screenWidth, height: '100%', right: -overflow/2 }}>
            <Svg
                height="140%"
                width={screenWidth}
                style={{
                    position: 'absolute',
                    top: '0%'
                }}
            >
                <Path
                    d="M0 0H375V279C375 283.418 371.418 287 367 287H8C3.58172 287 0 283.418 0 279V0Z"
                    fill="url(#grad)"
                />
                <Defs>
                    <SVGRadialGradient
                        id="grad"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform={`translate(${gradientCenterX},0) rotate(90) scale(${scaleX} 340.061)`}
                    >
                        <Stop stopColor={'#EC530133'} stopOpacity={.6}/>
                        <Stop stopColor={'#0d0d0d'} stopOpacity={0} offset={1} />
                    </SVGRadialGradient>
                </Defs>
            </Svg>
        </View>
    );
}
