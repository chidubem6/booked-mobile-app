import { Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const CATEGORIES = ["Braids", "Locs", "Nails", "Barber", "Makeup"] as const;

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Sticky Header */}
      <View className="bg-gray-900 px-4 pt-4 pb-3 border-b border-yellow-400/20">
        {/* Top row: Location & Notifications */}
        <View className="flex-row items-center justify-between mb-3">
          {/* Location */}
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={18} color="#FACC15" />
            <Text className="ml-1 text-white font-medium">London, UK</Text>
            <Ionicons name="chevron-down" size={16} color="#FACC15" style={{ marginLeft: 4 }} />
          </View>
          
          {/* Notifications */}
          <TouchableOpacity className="p-2 -mr-2">
            <Ionicons name="notifications-outline" size={22} color="#FACC15" />
          </TouchableOpacity>
        </View>
        
        {/* Search */}
        <View className="relative">
          <Ionicons name="search-outline" size={18} color="#FACC15" style={{ position: 'absolute', left: 16, top: 18, zIndex: 1 }} />
          <TextInput
            placeholder="Search Booked."
            value={query}
            onChangeText={setQuery}
            className="bg-black rounded-2xl p-4 pl-12 mb-3 border border-yellow-400/30 pr-12 text-white"
            placeholderTextColor="#9CA3AF"
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
                      active ? "bg-yellow-400" : "bg-gray-800 border border-gray-600"
                    }`}
                  >
                    <Text className={active ? "text-black font-medium" : "text-white"}>{cat}</Text>
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
              <Text className="text-lg font-semibold mb-2 text-white">Featured near you</Text>
              <View className="bg-gray-900 rounded-2xl border border-gray-700 p-6 items-center">
                <Ionicons name="sparkles-outline" size={32} color="#FACC15" style={{ marginBottom: 12 }} />
                <Text className="text-white text-lg font-medium mb-2">
                  No featured providers yet
                </Text>
                <Text className="text-gray-400 text-center text-base">
                  Featured providers will appear here once available
                </Text>
              </View>
            </View>
          )}

          {/* When a category is active, show header */}
          {activeCat && (
            <View className="mb-3 px-1">
              <Text className="text-sm text-gray-400">Showing results for</Text>
              <Text className="text-lg font-semibold text-yellow-400">{activeCat}</Text>
            </View>
          )}

          {/* Section divider */}
          <Text className="text-lg font-semibold mb-4 text-white">All providers</Text>
          
          {/* Empty state for providers */}
          <View className="bg-gray-900 rounded-2xl border border-gray-700 p-6 items-center">
            <Ionicons name="location-outline" size={48} color="#FACC15" style={{ marginBottom: 16 }} />
            <Text className="text-white text-lg font-medium mb-2">
              No providers found
            </Text>
            <Text className="text-gray-400 text-center text-base mb-4">
              We're building our network of amazing beauty professionals in your area
            </Text>
            <TouchableOpacity className="bg-yellow-400/20 border border-yellow-400 rounded-xl py-3 px-6">
              <Text className="text-yellow-400 font-medium">Notify Me When Available</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom Spacing */}
        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
}