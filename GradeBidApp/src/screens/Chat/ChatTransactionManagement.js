import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function ChatTransactionManagement({ onBack }) {
  const [activeTab, setActiveTab] = useState('messages'); // 'messages', 'orders', 'earnings'

  const conversations = [
    {
      id: 1,
      name: 'Dr. Eleanor Vance',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv81iUjhBLFJJt7BnhadLJ46G9uebHfb_fq3i7KrK5J8InYsr3BXZ5FNqGOFr9cP1OuUgUWOn-6zxHTZiGjURXfN2RZ4IYoh5CAnfGLqU7vxcdedhq40R0_19tbSZoenprHODSK7RJWG6S-Shl9oDZEYLqCVrUNu5GmGlkRFJt7pJtn8Nskesz6llzP-5_2rl33zRoBqr-uWptVK_IMQE7aCGwBGA32Nzh8TzaUNCPYMPgM5g4ufkniUERcQRVjB8-qhQm3RmrXjO_',
      message: 'Sounds great, I\'ll review the draft...',
      time: '11:45 AM',
      isOnline: true,
      unreadCount: 2,
      isUnread: true,
    },
    {
      id: 2,
      name: 'Ben Carter',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq4e0_pj7Yq_IEU7eORRF7ReXvHCK_3Gl4k-DNAlE-SZqPDIL4YanNLuG4zsX_0ZfjveDMde11DvuXUZ1t2dDAedBu-My_VFjfWI9Vam6cpRpYUlUvTF3iJMMaQz8p8YpJ24mePfDbQrkZaUgzbMlWNLyc6tH2FMRTtdG4-pVAqC5OW1elF6yCHUfGOLJRL7TF3oUdQLFpBJgV957nvR4ucXg4rAWBFfJ73Tncjt-e9pnPyzK8AJ3SMrsYLwXlmCpgpgtSiV-ddwZy',
      message: 'Payment has been escrowed.',
      time: '11:42 AM',
      isOnline: false,
      unreadCount: 0,
      isUnread: false,
    },
    {
      id: 3,
      name: 'Sophia Chen',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs7KF1TVj65RNgduxJfXoVh80yfvRpY8oEpe_PQ1VakA9-tLFUeaMzh62DaX2KK4ZvEssaN1zl_VQjTgKsgvgBwtw0pnKYAuBG29rmLjWtFT1NEjuiy05gQccBILzxa7_e0_8aP7HTcioiuzBnbJX1khHYt1qS9aDrwnFQONCymz0oI325fAigQNSjg-Q-oxO_6aPOUP1YR9F1UmNk6QvpHjhZNvSnpvMdUp37dsj9yjrCn3LzOp4kN6VmpWLv8yEgVZLvcrvhbuO_',
      message: 'Can you clarify the requirements for...',
      time: 'Yesterday',
      isOnline: false,
      unreadCount: 0,
      isUnread: false,
    },
    {
      id: 4,
      name: 'Marcus Holloway',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfULlmocdEJ1VVLlPEnbaNqzc0PdNzPIzWTgnypcgdN0ajLvP1SwZgjuj4O1VTIW5y9zKiyr4eH0A08AP2lUl5jacK9EtN0EOs2ur-cM5cV9Pu8kbxnjZVYUz3W5e42V2-2I2mdYo0s3N82P80rMAjqABx80WVDNlCfekdXI3vbGLJc5GfxWu4LmDLIS4e_y8g0coyAvBAsxMbPHZ3GZO9v2iCACznRwYpLbY-0krmyOaRbPt2TgwD5IwpKzglbq1__W_Jm4hBfo8C',
      message: 'Great, looking forward to working with you.',
      time: '3/15/24',
      isOnline: false,
      unreadCount: 0,
      isUnread: false,
    },
    {
      id: 5,
      name: 'Chloe Price',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlOuHt9frUiAn7jZxHM5y-1zWcauszxvHIoquL28tBAY1YKuYorzvspaEyGxSm5dh8E_RiLZ-CTXQt1K04IKaLA-8fo2QGjibv9SIQbEa759gwYBNJf3lC161L_9zAuKbeEg8OCEzm9qL3-Eiz3OZPGpT7PjZKWKy2k-FKZdV_vFGoVp0K3dgm0e7rOpTlsjodQkWwI73D5WeZKvznefb7G8-T0uEY_dpobha50tyu8vXIN1ZhxCOfh-l1dzZyux8yej0azDbuFjpS',
      message: 'The files are attached below.',
      time: '3/14/24',
      isOnline: false,
      unreadCount: 0,
      isUnread: false,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f6f6f8] dark:bg-[#111621]">
      {/* Top App Bar */}
      <View className="flex-row items-center justify-between p-4 pb-2 bg-[#f6f6f8] dark:bg-[#111621] border-b border-[#E4E4E7]/50 dark:border-white/10">
        <TouchableOpacity
          className="w-12 h-12 items-center justify-center"
          onPress={onBack}
          activeOpacity={0.7}
        >
          <MaterialIcons name="arrow-back" size={24} color="#1C1C1E" />
        </TouchableOpacity>
        <Text className="text-[#1C1C1E] dark:text-gray-50 text-lg font-bold flex-1 text-center">
          Inbox
        </Text>
        <View className="flex-row items-center gap-0">
          <TouchableOpacity className="w-12 h-12 items-center justify-center">
            <MaterialIcons name="search" size={24} color="#1C1C1E" />
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 items-center justify-center">
            <MaterialIcons name="add-circle-outline" size={24} color="#1C1C1E" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View className="bg-[#f6f6f8] dark:bg-[#111621] border-b border-[#E4E4E7]/50 dark:border-white/10">
        <View className="flex-row px-4 justify-between">
          <TouchableOpacity
            onPress={() => setActiveTab('messages')}
            className={`flex-1 items-center pb-[13px] pt-4 border-b-[3px] ${
              activeTab === 'messages' ? 'border-b-[#2463eb]' : 'border-b-transparent'
            }`}
          >
            <Text
              className={`text-sm font-bold ${
                activeTab === 'messages'
                  ? 'text-[#1C1C1E] dark:text-gray-50'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Messages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('orders')}
            className={`flex-1 items-center pb-[13px] pt-4 border-b-[3px] ${
              activeTab === 'orders' ? 'border-b-[#2463eb]' : 'border-b-transparent'
            }`}
          >
            <Text
              className={`text-sm font-bold ${
                activeTab === 'orders'
                  ? 'text-[#1C1C1E] dark:text-gray-50'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('earnings')}
            className={`flex-1 items-center pb-[13px] pt-4 border-b-[3px] ${
              activeTab === 'earnings' ? 'border-b-[#2463eb]' : 'border-b-transparent'
            }`}
          >
            <Text
              className={`text-sm font-bold ${
                activeTab === 'earnings'
                  ? 'text-[#1C1C1E] dark:text-gray-50'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Earnings
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Messages List */}
      <ScrollView className="flex-1 pb-4">
        {conversations.map((conversation) => (
          <TouchableOpacity
            key={conversation.id}
            className="flex-row items-center gap-4 bg-[#f6f6f8] dark:bg-[#111621] px-4 min-h-[72px] py-3 justify-between border-b border-[#E4E4E7]/50 dark:border-white/10"
            activeOpacity={0.7}
          >
            <View className="flex-row items-center gap-4 flex-1">
              {/* Avatar with Online Status */}
              <View className="relative">
                <Image
                  source={{ uri: conversation.avatar }}
                  className="w-14 h-14 rounded-full"
                  resizeMode="cover"
                />
                {conversation.isOnline && (
                  <View className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#7ED321] border-2 border-[#f6f6f8] dark:border-[#111621]" />
                )}
              </View>

              {/* Message Preview */}
              <View className="flex-1 flex-col justify-center">
                <Text
                  className={`text-base ${
                    conversation.isUnread
                      ? 'font-bold text-[#1C1C1E] dark:text-gray-50'
                      : 'font-medium text-[#1C1C1E] dark:text-gray-50'
                  }`}
                  numberOfLines={1}
                >
                  {conversation.name}
                </Text>
                <Text
                  className={`text-sm ${
                    conversation.isUnread
                      ? 'font-medium text-[#2463eb]'
                      : 'font-normal text-gray-500 dark:text-gray-400'
                  }`}
                  numberOfLines={conversation.isUnread ? 1 : 2}
                >
                  {conversation.message}
                </Text>
              </View>
            </View>

            {/* Time and Unread Badge */}
            <View className="shrink-0 flex-col items-end gap-1.5">
              <Text className="text-gray-500 dark:text-gray-400 text-xs font-normal">
                {conversation.time}
              </Text>
              {conversation.unreadCount > 0 && (
                <View className="w-6 h-6 items-center justify-center rounded-full bg-[#2463eb]">
                  <Text className="text-white text-xs font-bold">
                    {conversation.unreadCount}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Empty State (commented out, can be shown when no messages) */}
      {/*
      <View className="flex-1 flex-col items-center justify-center text-center p-10">
        <MaterialIcons name="forum" size={64} color="#9CA3AF" />
        <Text className="mt-4 text-lg font-semibold text-[#1C1C1E] dark:text-gray-200">
          No Messages Yet
        </Text>
        <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Your conversations with buyers and sellers will appear here.
        </Text>
      </View>
      */}
    </SafeAreaView>
  );
}
