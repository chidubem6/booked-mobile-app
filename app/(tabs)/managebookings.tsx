import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1">
      <View className="px-4 pt-12 pb-6">
        <Text className="text-2xl font-bold text-yellow-400 mb-2">My Bookings</Text>
        <Text className="text-gray-300 mb-8">Manage your appointments</Text>
        
        {/* Placeholder content */}
        <View className="space-y-4">
          {/* Upcoming section */}
          <View className="bg-gray-900 rounded-2xl p-6 border border-yellow-400/20">
            <Text className="text-lg font-semibold mb-3 text-white">Upcoming</Text>
            <View className="items-center py-8">
              <Ionicons name="calendar-outline" size={36} color="#FACC15" style={{ marginBottom: 12 }} />
              <Text className="text-gray-300 text-center font-medium">No upcoming bookings</Text>
              <Text className="text-gray-400 text-sm text-center mt-1">
                Your future appointments will appear here
              </Text>
            </View>
          </View>

          {/* Past section */}
          <View className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
            <Text className="text-lg font-semibold mb-3 text-white">Past Bookings</Text>
            <View className="items-center py-8">
              <Ionicons name="time-outline" size={36} color="#FACC15" style={{ marginBottom: 12 }} />
              <Text className="text-gray-300 text-center font-medium">No past bookings</Text>
              <Text className="text-gray-400 text-sm text-center mt-1">
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