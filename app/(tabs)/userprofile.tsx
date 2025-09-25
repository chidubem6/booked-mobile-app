import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1">
      <View className="px-4 pt-12 pb-6">
        <Text className="text-2xl font-bold text-yellow-400 mb-2">Profile</Text>
        <Text className="text-gray-300 mb-8">Manage your account</Text>
        
        {/* Profile Card */}
        <View className="bg-gray-900 rounded-2xl p-6 border border-gray-700 mb-6">
          <View className="items-center">
            <View className="w-20 h-20 bg-yellow-400/20 rounded-full items-center justify-center mb-4">
              <Ionicons name="person" size={32} color="#FACC15" />
            </View>
            <Text className="text-xl font-semibold text-white">Guest User</Text>
            <Text className="text-gray-400">Not signed in</Text>
          </View>
        </View>

        {/* Menu Options */}
        <View className="bg-gray-900 rounded-2xl border border-gray-700 mb-6">
          {/* Account Settings */}
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-800">
            <View className="flex-row items-center">
              <Ionicons name="settings-outline" size={24} color="#FACC15" />
              <Text className="ml-3 text-base text-white">Account Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          {/* Payment Methods */}
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-800">
            <View className="flex-row items-center">
              <Ionicons name="card-outline" size={24} color="#FACC15" />
              <Text className="ml-3 text-base text-white">Payment Methods</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          {/* Notifications */}
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-800">
            <View className="flex-row items-center">
              <Ionicons name="notifications-outline" size={24} color="#FACC15" />
              <Text className="ml-3 text-base text-white">Notifications</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          {/* Help & Support */}
          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center">
              <Ionicons name="help-circle-outline" size={24} color="#FACC15" />
              <Text className="ml-3 text-base text-white">Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity className="bg-yellow-400 rounded-2xl p-4 items-center">
          <Text className="text-black font-semibold text-base">Sign In</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}