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

export default function AIDoubtSolver({ onBack }) {
  const [inputMethod, setInputMethod] = useState('photo'); // 'photo', 'text', 'voice'

  const handleBackPress = () => {
    console.log('Back button pressed in AI Doubt Solver');
    if (onBack) {
      onBack();
    }
  };

  const relatedQuestions = [
    {
      question: 'How to solve quadratic equations by factoring?',
      subject: 'Algebra II',
    },
    {
      question: 'What are the applications of derivatives in real life?',
      subject: 'Calculus',
    },
    {
      question: 'Understanding the unit circle in trigonometry.',
      subject: 'Trigonometry',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#EFF6FF] dark:bg-[#111827]">
      {/* Top App Bar */}
      <View className="flex-row items-center justify-between bg-[#EFF6FF] dark:bg-[#111827] p-4 pb-2" style={{ zIndex: 10 }}>
        <TouchableOpacity
          onPress={handleBackPress}
          className="w-10 h-10 items-center justify-center rounded-full"
          activeOpacity={0.7}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <MaterialIcons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <View className="flex-row items-center gap-2 flex-1 justify-center">
          <MaterialIcons name="auto-awesome" size={24} color="#3B82F6" />
          <Text className="text-[#1F2937] dark:text-[#F9FAFB] text-lg font-bold">
            AI Doubt Solver
          </Text>
        </View>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full">
          <MaterialIcons name="history" size={24} color="#1F2937" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <View className="flex-col gap-6 p-4 pt-2">
          {/* Segmented Buttons for Input */}
          <View className="flex-row h-10 items-center justify-center rounded-xl bg-[#3B82F6]/10 p-1">
            <TouchableOpacity
              onPress={() => setInputMethod('photo')}
              className={`flex-1 h-full items-center justify-center rounded-lg ${
                inputMethod === 'photo'
                  ? 'bg-white dark:bg-[#1F2937] shadow-sm'
                  : ''
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  inputMethod === 'photo'
                    ? 'text-[#3B82F6]'
                    : 'text-[#6B7280] dark:text-[#9CA3AF]'
                }`}
              >
                Photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setInputMethod('text')}
              className={`flex-1 h-full items-center justify-center rounded-lg ${
                inputMethod === 'text'
                  ? 'bg-white dark:bg-[#1F2937] shadow-sm'
                  : ''
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  inputMethod === 'text'
                    ? 'text-[#3B82F6]'
                    : 'text-[#6B7280] dark:text-[#9CA3AF]'
                }`}
              >
                Text
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setInputMethod('voice')}
              className={`flex-1 h-full items-center justify-center rounded-lg ${
                inputMethod === 'voice'
                  ? 'bg-white dark:bg-[#1F2937] shadow-sm'
                  : ''
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  inputMethod === 'voice'
                    ? 'text-[#3B82F6]'
                    : 'text-[#6B7280] dark:text-[#9CA3AF]'
                }`}
              >
                Voice
              </Text>
            </TouchableOpacity>
          </View>

          {/* Camera Preview / Empty State */}
          <View className="flex-col items-center gap-6 rounded-xl bg-white dark:bg-[#1F2937] p-6 shadow-sm">
            <View className="relative w-full max-w-[360px] overflow-hidden rounded-xl">
              <View
                className="w-full bg-cover bg-center bg-no-repeat"
                style={{ aspectRatio: 16 / 9 }}
              >
                <Image
                  source={{
                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByg7krNf0woGoCb0ws7KzJ6LQQVM0dn_4BMKiB6pxrF8f3HTc9C5KYhantHUpNOQQep-nR7TOzNiqEJK_NNg6iEU-ehiHTV9TZ7-JDQORtHwTYsVj8LJE2-RENLvDmn3mhacwiwRKY1XymdeOHViU8M2HEwCc7EPAqBJ5W9wDd17BYARn2Xpyosu790mCziFC41xp-tqVCUdMsIZEKyWbsjQ8aP_RZS3OZ_UgJWNpQmRkhyx4R5GZsoweBrD_B-t2VZuD8O9QhhLCI',
                  }}
                  className="w-full h-full rounded-xl"
                  resizeMode="cover"
                />
              </View>
            </View>
            <View className="flex-col items-center gap-2 text-center w-full max-w-md">
              <Text className="text-[#1F2937] dark:text-[#F9FAFB] text-lg font-bold">
                Camera Preview
              </Text>
              <Text className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
                Point your camera at the question to get started.
              </Text>
            </View>
            <TouchableOpacity className="flex-row h-12 min-w-[84px] max-w-xs items-center justify-center gap-2 overflow-hidden rounded-full bg-[#3B82F6] px-6 shadow-lg">
              <MaterialIcons name="photo-camera" size={24} color="white" />
              <Text className="text-white text-base font-bold">Capture</Text>
            </TouchableOpacity>
          </View>

          {/* Solution Card */}
          <View className="flex-col gap-4 rounded-xl bg-white dark:bg-[#1F2937] p-4 shadow-sm">
            <View className="flex-row items-start gap-3">
              <View
                className="h-12 w-12 flex-shrink-0 rounded-lg bg-cover bg-center"
                style={{
                  backgroundColor: '#E5E7EB',
                }}
              >
                <Image
                  source={{
                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNlaUqeROfZfyMAMAXpdrTrM1Iat-Z-wgVZraT3cP1KyaR133S1PeEQnkgIY7jwScmp1Qo21--qGl8P2DI84NpcKiMkUsMurMww5E2bya0ma1imyRrMk3TMeYI90_2X5a87KdNjzCOr1YBnx4UdlYrlHUpATSjDH3ZT-u6NMJrPUXJ6Pxo9S8bDO2hMO1vwIRh3XRGMwoJuWxT2GM4nZY9VnlGRr6U0VlBBAHfO9rqpVn2sgx0JqwZ2SyK17pFTa8m3pmK1LUIYyLa',
                  }}
                  className="w-full h-full rounded-lg"
                  resizeMode="cover"
                />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                  Your Question
                </Text>
                <Text className="text-base font-bold text-[#1F2937] dark:text-[#F9FAFB]">
                  What is the integral of (2x^2 + 3x - 1) dx?
                </Text>
              </View>
            </View>

            <View className="h-px w-full bg-gray-200 dark:bg-gray-700" />

            <View>
              <Text className="mb-2 text-base font-bold text-[#1F2937] dark:text-[#F9FAFB]">
                Step-by-step Solution:
              </Text>
              <View className="flex-col gap-3">
                <Text className="text-sm text-[#1F2937] dark:text-[#F9FAFB]">
                  <Text className="text-[#3B82F6] font-bold">Step 1:</Text> Apply
                  the sum/difference rule for integration. This allows us to
                  integrate each term separately: ∫(2x² + 3x - 1) dx = ∫2x² dx +
                  ∫3x dx - ∫1 dx.
                </Text>
                <Text className="text-sm text-[#1F2937] dark:text-[#F9FAFB]">
                  <Text className="text-[#3B82F6] font-bold">Step 2:</Text> Use the
                  power rule for integration, which states ∫axⁿ dx = (a / (n+1)) *
                  xⁿ⁺¹.
                </Text>
                <View className="rounded-lg bg-[#3B82F6]/10 dark:bg-[#3B82F6]/20 p-3 items-center">
                  <Text className="text-sm font-mono text-[#1F2937] dark:text-[#F9FAFB]">
                    ∫2x² dx = (2/3)x³
                  </Text>
                  <Text className="text-sm font-mono text-[#1F2937] dark:text-[#F9FAFB]">
                    ∫3x dx = (3/2)x²
                  </Text>
                  <Text className="text-sm font-mono text-[#1F2937] dark:text-[#F9FAFB]">
                    ∫1 dx = x
                  </Text>
                </View>
                <Text className="text-sm text-[#1F2937] dark:text-[#F9FAFB]">
                  <Text className="text-[#3B82F6] font-bold">Step 3:</Text> Combine
                  the results and add the constant of integration, C, as this is
                  an indefinite integral.
                </Text>
                <View className="rounded-lg bg-green-100 dark:bg-green-900/50 p-3">
                  <Text className="font-bold text-green-800 dark:text-green-300">
                    Final Answer: (2/3)x³ + (3/2)x² - x + C
                  </Text>
                </View>
              </View>
            </View>

            <View className="mt-2 flex-row items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <Text className="text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                Was this helpful?
              </Text>
              <View className="flex-row items-center gap-2">
                <TouchableOpacity className="w-9 h-9 items-center justify-center rounded-full bg-[#3B82F6]/10">
                  <MaterialIcons name="thumb-up" size={16} color="#3B82F6" />
                </TouchableOpacity>
                <TouchableOpacity className="w-9 h-9 items-center justify-center rounded-full bg-[#3B82F6]/10">
                  <MaterialIcons name="thumb-down" size={16} color="#3B82F6" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Related Questions Section */}
          <View>
            <Text className="px-2 pb-3 pt-4 text-xl font-bold text-[#1F2937] dark:text-[#F9FAFB]">
              Related Questions
            </Text>
            <View className="flex-row gap-4 pb-4">
              {relatedQuestions.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  className="w-64 flex-col justify-between rounded-xl bg-white dark:bg-[#1F2937] p-4 shadow-sm"
                >
                  <Text className="text-sm font-medium text-[#1F2937] dark:text-[#F9FAFB]">
                    {item.question}
                  </Text>
                  <Text className="mt-2 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                    {item.subject}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View className="absolute bottom-6 right-6 z-20">
        <TouchableOpacity className="w-14 h-14 items-center justify-center overflow-hidden rounded-xl bg-[#3B82F6] shadow-lg">
          <MaterialIcons name="photo-camera" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
