import { Tabs } from 'expo-router';
import React, {useEffect, useState} from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import {importFont} from "@/utils/importFont";

export default function TabLayout() {
    useColorScheme();
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await importFont();
            setFontsLoaded(true);
        }
        loadFonts().then(r => {});
    }, []);

    if (!fontsLoaded) {
        return <></>;
    }

  return (
      <Tabs
          screenOptions={{
              tabBarActiveTintColor: '#E43800',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
              tabBarButton: HapticTab,
              tabBarStyle: Platform.select({
                  default: {
                      position: 'absolute',
                      height: 70,
                      paddingTop: 8,
                      backgroundColor: "#1A1A1A",
                      borderTopWidth: 0,
                      borderRadius: 100,
                      bottom: 28,
                      marginLeft: 24,
                      marginRight: 24,
                      elevation: 8,
                      shadowColor: '#000000',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.33,
                      shadowRadius: 16,
                  },
              }),
          }}>
          <Tabs.Screen
              name="index"
              options={{
                  title: 'Головна',
                  tabBarIcon: ({ focused, color }) =>
                      <IconSymbol size={28} name="house.fill" color={focused ? "#E43800" : "gray"} style={{
                          shadowColor: focused ? "#af2a00" : '#000000',
                          shadowOffset: { width: 0, height: 4 },
                          shadowOpacity: 0.48,
                          shadowRadius: 8,
                      }} />
                  ,
                  tabBarLabelStyle: {
                      fontFamily: 'FontMedium',
                  }
              }}
          />
          <Tabs.Screen
              name="map"
              options={{
                  title: 'Мапа',
                  tabBarIcon: ({ focused, color }) =>
                      <IconSymbol size={28} name="map.fill" color={focused ? "#E43800" : "gray"} style={{
                          shadowColor: focused ? "#af2a00" : '#000000',
                          shadowOffset: { width: 0, height: 4 },
                          shadowOpacity: 0.48,
                          shadowRadius: 8,
                      }} />
                  ,
                  tabBarLabelStyle: {
                      fontFamily: 'FontMedium',
                  }
              }}
          />
          <Tabs.Screen
              name="myevents"
              options={{
                  title: 'Мої події',
                  tabBarIcon: ({ focused, color }) => <IconSymbol size={28} name="calendar.and.person" color={focused ? "#E43800" : "gray"} style={{
                      shadowColor: focused ? "#af2a00" : '#000000',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.48,
                      shadowRadius: 8,
                  }} />,
                  tabBarLabelStyle: {
                      fontFamily: 'FontMedium',
                  }
              }}
          />
      </Tabs>
  );
}
