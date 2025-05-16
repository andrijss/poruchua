import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, RadialGradient as SVGRadialGradient, Stop, Rect, Path } from 'react-native-svg';


export default function RadialGradientBackground() {
    return (
        <View style={{ position: 'absolute', width: '100%', height: '100%', left: '-50%' }}>
            <Svg
                height="140%"
                width="105%"
                style={{
                    position: 'absolute',
                    right: '-60%',
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
                        gradientTransform="translate(340.5) rotate(90) scale(320 340.061)"
                    >
                        <Stop stopColor={'#EC530133'} stopOpacity={.6}/>
                        <Stop stopColor={'#0d0d0d'} stopOpacity={0} offset={1} />
                    </SVGRadialGradient>
                </Defs>
            </Svg>
        </View>
    );
}
