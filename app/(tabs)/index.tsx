import { Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const CATEGORIES = ["Braids", "Locs", "Nails", "Barber", "Makeup"] as const;

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Sticky Header */}
      <View className="bg-white px-4 pt-4 pb-3 border-b border-gray-300">
        {/* Top row: Location & Notifications */}
        <View className="flex-row items-center justify-between mb-3">
          {/* Location */}
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={18} color="#000000" />
            <Text className="ml-1 text-black font-medium">London, UK</Text>
            <Ionicons name="chevron-down" size={16} color="#000000" style={{ marginLeft: 4 }} />
          </View>
          
          {/* Notifications */}
          <TouchableOpacity className="p-2 -mr-2">
            <Ionicons name="notifications-outline" size={22} color="#000000" />
          </TouchableOpacity>
        </View>
        
        {/* Search */}
        <View className="relative">
          <Ionicons name="search-outline" size={18} color="#000000" style={{ position: 'absolute', left: 16, top: 18, zIndex: 1 }} />
          <TextInput
            placeholder="Search Booked."
            value={query}
            onChangeText={setQuery}
            className="bg-gray-50 rounded-2xl p-4 pl-12 mb-3 border border-gray-300 pr-12 text-black"
            placeholderTextColor="#6B7280"
          />
          {query.trim().length > 0 && (
            <TouchableOpacity
              onPress={() => setQuery("")}
              className="absolute right-4 top-4 p-1"
            >
              <Ionicons name="close-circle" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>

        {/* Category chips - hidden when searching */}
        {!query.trim() && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-3">
            <View className="flex-row gap-2">
              {CATEGORIES.map((cat) => {
                const active = activeCat === cat;
                return (
                  <TouchableOpacity
                    key={cat}
                    onPress={() => setActiveCat(active ? null : cat)}
                    className={`px-4 h-10 rounded-full items-center justify-center ${
                      active ? "bg-black" : "bg-gray-100 border border-gray-300"
                    }`}
                  >
                    <Text className={active ? "text-white font-medium" : "text-black"}>{cat}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        )}
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-4">
          {/* Featured providers section - empty when no data */}
          {!activeCat && !query.trim() && (
            <View className="mb-4">
              <Text className="text-lg font-semibold mb-2 text-black">Featured near you</Text>
              <View className="bg-gray-50 rounded-2xl border border-gray-200 p-6 items-center">
                <Ionicons name="sparkles-outline" size={32} color="#000000" style={{ marginBottom: 12 }} />
                <Text className="text-black text-lg font-medium mb-2">
                  No featured providers yet
                </Text>
                <Text className="text-gray-600 text-center text-base">
                  Featured providers will appear here once available
                </Text>
              </View>
            </View>
          )}

          {/* When a category is active, show header */}
          {activeCat && (
            <View className="mb-3 px-1">
              <Text className="text-sm text-gray-600">Showing results for</Text>
              <Text className="text-lg font-semibold text-black">{activeCat}</Text>
            </View>
          )}

          {/* Section divider */}
          <Text className="text-lg font-semibold mb-4 text-black">All providers</Text>
          
          {/* Empty state for providers */}
          <View className="bg-gray-50 rounded-2xl border border-gray-200 p-6 items-center">
            <Ionicons name="location-outline" size={48} color="#000000" style={{ marginBottom: 16 }} />
            <Text className="text-black text-lg font-medium mb-2">
              No providers found
            </Text>
            <Text className="text-gray-600 text-center text-base mb-4">
              We're building our network of amazing beauty professionals in your area
            </Text>
            <TouchableOpacity className="bg-black border border-black rounded-xl py-3 px-6">
              <Text className="text-white font-medium">Notify Me When Available</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom Spacing */}
        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
}