import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
      <View className="px-4 pt-12 pb-6">
        <Text className="text-2xl font-bold text-black mb-2">Profile</Text>
        <Text className="text-gray-600 mb-8">Manage your account</Text>
        
        {/* Profile Card */}
        <View className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-6">
          <View className="items-center">
            <View className="w-20 h-20 bg-gray-200 rounded-full items-center justify-center mb-4">
              <Ionicons name="person" size={32} color="#000000" />
            </View>
            <Text className="text-xl font-semibold text-black">Guest User</Text>
            <Text className="text-gray-600">Not signed in</Text>
          </View>
        </View>

        {/* Menu Options */}
        <View className="bg-gray-50 rounded-2xl border border-gray-200 mb-6">
          {/* Account Settings */}
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-200">
            <View className="flex-row items-center">
              <Ionicons name="settings-outline" size={24} color="#000000" />
              <Text className="ml-3 text-base text-black">Account Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6B7280" />
          </TouchableOpacity>

          {/* Payment Methods */}
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-200">
            <View className="flex-row items-center">
              <Ionicons name="card-outline" size={24} color="#000000" />
              <Text className="ml-3 text-base text-black">Payment Methods</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6B7280" />
          </TouchableOpacity>

          {/* Notifications */}
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-200">
            <View className="flex-row items-center">
              <Ionicons name="notifications-outline" size={24} color="#000000" />
              <Text className="ml-3 text-base text-black">Notifications</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6B7280" />
          </TouchableOpacity>

          {/* Help & Support */}
          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center">
              <Ionicons name="help-circle-outline" size={24} color="#000000" />
              <Text className="ml-3 text-base text-black">Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity className="bg-black rounded-2xl p-4 items-center">
          <Text className="text-white font-semibold text-base">Sign In</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}