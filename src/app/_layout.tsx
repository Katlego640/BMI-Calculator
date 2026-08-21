import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: 'MyBMI', // Edits "Expo Starter" to "MyBMI"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Learn', // Renames "Explore" to "Learn"
        }}
      />
    </Tabs>
  );
}
