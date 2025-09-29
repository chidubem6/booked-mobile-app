import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
      <View className="px-4 pt-12 pb-6">
        <Text className="text-2xl font-bold text-black mb-2">My Bookings</Text>
        <Text className="text-gray-600 mb-8">Manage your appointments</Text>
        
        {/* Placeholder content */}
        <View className="space-y-4">
          {/* Upcoming section */}
          <View className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <Text className="text-lg font-semibold mb-3 text-black">Upcoming</Text>
            <View className="items-center py-8">
              <Ionicons name="calendar-outline" size={36} color="#000000" style={{ marginBottom: 12 }} />
              <Text className="text-black text-center font-medium">No upcoming bookings</Text>
              <Text className="text-gray-600 text-sm text-center mt-1">
                Your future appointments will appear here
              </Text>
            </View>
          </View>

          {/* Past section */}
          <View className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <Text className="text-lg font-semibold mb-3 text-black">Past Bookings</Text>
            <View className="items-center py-8">
              <Ionicons name="time-outline" size={36} color="#000000" style={{ marginBottom: 12 }} />
              <Text className="text-black text-center font-medium">No past bookings</Text>
              <Text className="text-gray-600 text-sm text-center mt-1">
                Your booking history will appear here
              </Text>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}