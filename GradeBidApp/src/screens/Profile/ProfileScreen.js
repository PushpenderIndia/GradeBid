import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen({ onBack }) {
  const portfolioItems = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuACwdY5dxeyFDvTG4JpcULbgbZ6thl6vJTZBASa7Y70ROux8qkL9JW-U36Hji-sP6Y4mfaRPX9sr9NPgqspZE1vxFfQJ5dZiYBJriHVTZ1Rg7UYN6aGr9kgpA50x77wJfEjIzWgx_bCbA8Jq8DCPPzCefgYay5-U-ioWuAta9-RsxnQ9exqiJXMK3CfQ6PgedLEWDxndrjTFGz5AUTCpAgezBuyZOJT6jiV0jmj-ThMVU3tadWa0JivtDjfGumHR1zT2psgAx9JF3re',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD6P6ZV0ZW4eR8m6EaaXfKCELymr7sT4SjmGkG8R67tGryRdEN2YcAKH-bsUJkgsoAEtHh8M2X1vMPXEM9a_IIy6NqtOGN60WewqNylkA0Rut3fr-8FyLrYW5QM78fDBTjwmOHGJW_MCoxsTCfFr-MXx7lYXx43hPqAcnYj7v0gQag1EfF_TyRRu3-Ueg4BYDMuz86mcX5NOK3i8u9cyAXl2gSuCzYOvK4qH5jVq_zrLvw_5SrkvqQQNhnhOB3FpLnalCOUovuO880y',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBpudWotsxv99pf-Qq6VA3870IakJGBMymS6mcuVeuNfBbeE-3JZ-mwAwVKJPwBHJ_oBATf3w6QJeu_5qJ4LsCdrrfzRj5KWZlm4DTRYEoTb_57lUDcdhj0CqOQwG6h04SKiboRJ0PQaBjxa6tQDa-t0CkCtANHeUDT7ux16x3LTFA7PrE2fujUKQ2Dd6E_RBoO_OEV_qvhJyYdH-4nZebcibqfrdtUUqjoB1ny7iFqw3e36gqiSApPXvIn9cE0z3JSzPFNlXlgDoFE',
  ];

  const skills = ['Python', 'React', 'Content Writing'];

  const menuItems = [
    { icon: 'account-balance-wallet', label: 'My Wallet', value: '₹1,500' },
    { icon: 'home', label: 'My Addresses' },
    { icon: 'shield', label: 'Academic Verification', badge: 'Verified' },
    { icon: 'credit-card', label: 'Payment Methods' },
    { icon: 'history', label: 'Transaction History' },
    { icon: 'card-giftcard', label: 'Refer & Earn' },
    { icon: 'help', label: 'Support & Help' },
    { icon: 'settings', label: 'Settings' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f6f6f8] dark:bg-[#111621]">
      {/* Top App Bar */}
      <View className="flex-row items-center justify-between p-4 pb-2 bg-[#f6f6f8] dark:bg-[#111621] border-b border-gray-200 dark:border-gray-800">
        <TouchableOpacity onPress={onBack}>
          <MaterialIcons name="arrow-back" size={24} color="#0e121b" />
        </TouchableOpacity>
        <Text className="text-[#0e121b] dark:text-gray-100 text-lg font-bold flex-1 text-center">
          My Profile
        </Text>
        <View className="w-6" />
      </View>

      <ScrollView className="flex-1">
        {/* Profile Header */}
        <View className="p-4">
          <View className="flex-col gap-4 items-center">
            <View className="flex-col gap-4 items-center">
              <View className="relative">
                <View className="w-32 h-32 rounded-full bg-gray-300 items-center justify-center">
                  <MaterialIcons name="person" size={64} color="#007AFF" />
                </View>
              </View>
              <View className="flex-col items-center justify-center">
                <Text className="text-[#0e121b] dark:text-gray-100 text-[22px] font-bold text-center">
                  Aarav Sharma
                </Text>
                <Text className="text-gray-500 dark:text-gray-400 text-base text-center">
                  University of Delhi, 2024
                </Text>
                <View className="flex-row items-center gap-1 text-gray-500 dark:text-gray-400">
                  <MaterialIcons name="star" size={20} color="#EAB308" />
                  <MaterialIcons name="star" size={20} color="#EAB308" />
                  <MaterialIcons name="star" size={20} color="#EAB308" />
                  <MaterialIcons name="star" size={20} color="#EAB308" />
                  <MaterialIcons name="star-border" size={20} color="#EAB308" />
                  <Text className="text-gray-500 dark:text-gray-400 text-base ml-1">
                    (120 reviews)
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity className="w-full h-10 items-center justify-center rounded-lg bg-[#2463eb]">
              <Text className="text-white text-sm font-bold">Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Chips */}
        <View className="flex-row gap-2 p-3 justify-center flex-wrap px-4">
          <View className="h-8 items-center justify-center rounded-lg bg-[#2463eb]/10 dark:bg-[#2463eb]/20 px-3">
            <Text className="text-[#2463eb] dark:text-blue-300 text-sm font-medium">
              Active Buyer
            </Text>
          </View>
          <View className="h-8 items-center justify-center rounded-lg bg-[#2463eb]/10 dark:bg-[#2463eb]/20 px-3">
            <Text className="text-[#2463eb] dark:text-blue-300 text-sm font-medium">
              Verified Seller
            </Text>
          </View>
          <View className="h-8 items-center justify-center rounded-lg bg-[#2463eb]/10 dark:bg-[#2463eb]/20 px-3">
            <Text className="text-[#2463eb] dark:text-blue-300 text-sm font-medium">
              Top Seller
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row flex-wrap gap-3 p-4">
          <View className="flex-1 min-w-[158px] flex-col gap-1 rounded-xl p-4 bg-white dark:bg-[#111621] border border-gray-200 dark:border-gray-800">
            <Text className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Projects Completed
            </Text>
            <Text className="text-[#0e121b] dark:text-gray-100 text-2xl font-bold">
              85
            </Text>
          </View>
          <View className="flex-1 min-w-[158px] flex-col gap-1 rounded-xl p-4 bg-white dark:bg-[#111621] border border-gray-200 dark:border-gray-800">
            <Text className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Total Earned
            </Text>
            <Text className="text-[#0e121b] dark:text-gray-100 text-2xl font-bold">
              ₹50,000
            </Text>
          </View>
          <View className="flex-1 min-w-[158px] flex-col gap-1 rounded-xl p-4 bg-white dark:bg-[#111621] border border-gray-200 dark:border-gray-800">
            <Text className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Success Rate
            </Text>
            <Text className="text-[#0e121b] dark:text-gray-100 text-2xl font-bold">
              98%
            </Text>
          </View>
        </View>

        {/* Verification Card */}
        <View className="p-4">
          <View className="flex-col gap-4 rounded-xl p-4 bg-yellow-400/20 dark:bg-yellow-500/20 border border-yellow-500/30">
            <View className="flex-row items-center gap-3">
              <MaterialIcons name="error" size={24} color="#D97706" />
              <Text className="text-yellow-800 dark:text-yellow-300 font-semibold flex-1">
                Complete verification to unlock full features
              </Text>
            </View>
            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 h-10 items-center justify-center rounded-lg bg-[#2463eb]">
                <Text className="text-white text-sm font-bold">Upload Student ID</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 h-10 items-center justify-center rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                <Text className="text-[#0e121b] dark:text-gray-100 text-sm font-bold">
                  Upload Grade Sheet
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Portfolio Section */}
        <View className="px-4 pb-3 pt-5">
          <Text className="text-[#0e121b] dark:text-gray-100 text-[22px] font-bold">
            Portfolio
          </Text>
        </View>
        <View className="px-4">
          <View className="flex-row gap-2">
            {portfolioItems.map((item, index) => (
              <View
                key={index}
                className="flex-1 aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg"
                style={{ aspectRatio: 1 }}
              >
                <Image
                  source={{ uri: item }}
                  className="w-full h-full rounded-lg"
                  resizeMode="cover"
                />
              </View>
            ))}
          </View>
          <View className="flex-row gap-2 pt-4 flex-wrap">
            {skills.map((skill, index) => (
              <View
                key={index}
                className="h-7 items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700 px-3"
              >
                <Text className="text-[#0e121b] dark:text-gray-200 text-xs font-medium">
                  {skill}
                </Text>
              </View>
            ))}
          </View>
          <TouchableOpacity className="mt-4 w-full h-10 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800">
            <Text className="text-[#0e121b] dark:text-gray-100 text-sm font-bold">
              Edit Portfolio
            </Text>
          </TouchableOpacity>
        </View>

        <View className="h-px bg-gray-200 dark:bg-gray-800 my-6" />

        {/* Menu List */}
        <View className="flex-col px-4 pb-8">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center py-4 border-b border-gray-200 dark:border-gray-800"
            >
              <MaterialIcons name={item.icon} size={24} color="#6B7280" />
              <Text className="ml-4 flex-1 text-[#0e121b] dark:text-gray-100">
                {item.label}
              </Text>
              {item.value && (
                <Text className="text-gray-500 dark:text-gray-400 mr-2">
                  {item.value}
                </Text>
              )}
              {item.badge && (
                <View className="flex-row items-center gap-1 rounded-full bg-green-100 dark:bg-green-900/50 px-2 py-0.5 mr-2">
                  <Text className="text-xs font-medium text-green-700 dark:text-green-300">
                    {item.badge}
                  </Text>
                </View>
              )}
              <MaterialIcons name="chevron-right" size={24} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
          <TouchableOpacity className="flex-row items-center py-4">
            <MaterialIcons name="logout" size={24} color="#EF4444" />
            <Text className="ml-4 flex-1 text-red-500 dark:text-red-400 font-medium">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
