import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

export default function ProjectCreation({ onBack }) {
  const [currentStep, setCurrentStep] = useState(1); // 1, 2, 3
  const [projectTitle, setProjectTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [budgetRange, setBudgetRange] = useState(5000);
  const [deadline, setDeadline] = useState('');
  const [deliveryPreference, setDeliveryPreference] = useState('digital'); // 'digital' or 'physical'
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);

  const categories = [
    'Computer Science',
    'Literature',
    'Physics',
    'Mathematics',
    'Chemistry',
    'Biology',
    'Engineering',
    'Economics',
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f9fafb] dark:bg-[#111621]">
      {/* Top App Bar */}
      <View className="flex-row items-center bg-[#f9fafb] dark:bg-[#111621] p-4 border-b border-slate-200 dark:border-slate-800">
        <TouchableOpacity
          onPress={onBack}
          className="w-10 h-10 items-center justify-center"
          activeOpacity={0.7}
        >
          <MaterialIcons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text className="text-[#111827] dark:text-white text-lg font-bold flex-1 text-center">
          Create New Project
        </Text>
        <View className="w-10" />
      </View>

      {/* Page Indicators */}
      <View className="flex-row items-center justify-center gap-3 py-5 px-4">
        <View
          className={`flex-1 h-1.5 rounded-full ${
            currentStep >= 1 ? 'bg-[#10b981]' : 'bg-slate-200 dark:bg-slate-700'
          }`}
        />
        <View
          className={`flex-1 h-1.5 rounded-full ${
            currentStep >= 2 ? 'bg-[#10b981]' : 'bg-slate-200 dark:bg-slate-700'
          }`}
        />
        <View
          className={`flex-1 h-1.5 rounded-full ${
            currentStep >= 3 ? 'bg-[#10b981]' : 'bg-slate-200 dark:bg-slate-700'
          }`}
        />
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-4">
        <View className="flex-col gap-6 pb-24">
          {/* Project Details Card */}
          <View className="w-full rounded-xl bg-white dark:bg-slate-900 shadow-sm p-5">
            <Text className="text-[#111827] dark:text-white text-lg font-medium">
              Project Details
            </Text>
            <View className="flex-col gap-4 mt-4">
              {/* Project Title */}
              <View className="flex-col w-full">
                <Text className="text-[#6B7281] dark:text-slate-400 text-sm font-medium pb-2">
                  Project Title
                </Text>
                <TextInput
                  className="flex w-full rounded-lg text-[#111827] dark:text-white border border-slate-300 dark:border-slate-700 bg-[#f9fafb] dark:bg-slate-800 h-12 px-4 text-base"
                  placeholder="e.g., Quantum Physics Research Paper"
                  placeholderTextColor="#6B7281"
                  value={projectTitle}
                  onChangeText={setProjectTitle}
                />
              </View>

              {/* Category */}
              <View className="flex-col w-full">
                <Text className="text-[#6B7281] dark:text-slate-400 text-sm font-medium pb-2">
                  Category
                </Text>
                <TouchableOpacity
                  className="flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-[#f9fafb] dark:bg-slate-800 h-12 px-4 flex-row items-center justify-between"
                  onPress={() => setShowCategoryPicker(!showCategoryPicker)}
                >
                  <Text
                    className={
                      category
                        ? 'text-[#111827] dark:text-white text-base'
                        : 'text-[#6B7281] text-base'
                    }
                  >
                    {category || 'Select a category'}
                  </Text>
                  <MaterialIcons name="expand-more" size={20} color="#6B7281" />
                </TouchableOpacity>
                {showCategoryPicker && (
                  <View className="mt-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
                    {categories.map((cat, index) => (
                      <TouchableOpacity
                        key={index}
                        className="px-4 py-3 border-b border-slate-200 dark:border-slate-700"
                        onPress={() => {
                          setCategory(cat);
                          setShowCategoryPicker(false);
                        }}
                      >
                        <Text className="text-[#111827] dark:text-white text-base">
                          {cat}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

              {/* Description */}
              <View className="flex-col w-full">
                <Text className="text-[#6B7281] dark:text-slate-400 text-sm font-medium pb-2">
                  Detailed Description
                </Text>
                <TextInput
                  className="flex w-full rounded-lg text-[#111827] dark:text-white border border-slate-300 dark:border-slate-700 bg-[#f9fafb] dark:bg-slate-800 h-32 p-4 text-base"
                  placeholder="Describe the project requirements, scope, and expected deliverables..."
                  placeholderTextColor="#6B7281"
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  textAlignVertical="top"
                />
              </View>
            </View>
          </View>

          {/* File Upload Card */}
          <View className="w-full rounded-xl bg-white dark:bg-slate-900 shadow-sm p-5">
            <Text className="text-[#111827] dark:text-white text-lg font-medium">
              Attachments
            </Text>
            <TouchableOpacity className="mt-4 flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 bg-[#f9fafb] dark:bg-slate-800/50 p-6">
              <MaterialIcons name="cloud-upload" size={48} color="#6B7281" />
              <Text className="mt-2 text-sm text-[#6B7281] dark:text-slate-400">
                Drag & drop files here, or
              </Text>
              <Text className="mt-2 text-sm font-semibold text-[#10b981] dark:text-green-400">
                Browse Files
              </Text>
            </TouchableOpacity>
          </View>

          {/* Logistics & Budget Card */}
          <View className="w-full rounded-xl bg-white dark:bg-slate-900 shadow-sm p-5">
            <Text className="text-[#111827] dark:text-white text-lg font-medium">
              Logistics & Budget
            </Text>
            <View className="flex-col gap-6 mt-4">
              {/* Budget Range */}
              <View className="w-full">
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-[#6B7281] dark:text-slate-400 text-sm font-medium">
                    Budget Range
                  </Text>
                  <Text className="text-[#111827] dark:text-white text-lg font-semibold">
                    ₹100 - ₹{budgetRange}
                  </Text>
                </View>
                <Slider
                  style={{ width: '100%', height: 40 }}
                  minimumValue={100}
                  maximumValue={10000}
                  step={100}
                  value={budgetRange}
                  onValueChange={setBudgetRange}
                  minimumTrackTintColor="#10b981"
                  maximumTrackTintColor="#E2E8F0"
                  thumbTintColor="#10b981"
                />
              </View>

              {/* Deadline */}
              <View className="flex-col w-full">
                <Text className="text-[#6B7281] dark:text-slate-400 text-sm font-medium pb-2">
                  Deadline
                </Text>
                <TextInput
                  className="flex w-full rounded-lg text-[#111827] dark:text-white border border-slate-300 dark:border-slate-700 bg-[#f9fafb] dark:bg-slate-800 h-12 px-4 text-base"
                  placeholder="Select date (DD/MM/YYYY)"
                  placeholderTextColor="#6B7281"
                  value={deadline}
                  onChangeText={setDeadline}
                />
              </View>

              {/* Delivery Preference */}
              <View className="w-full">
                <Text className="text-[#6B7281] dark:text-slate-400 text-sm font-medium pb-2">
                  Delivery Preference
                </Text>
                <View className="flex-row gap-3">
                  <TouchableOpacity
                    className={`flex-1 flex-row items-center justify-center gap-2 rounded-lg p-3 border-2 ${
                      deliveryPreference === 'digital'
                        ? 'border-[#10b981] bg-green-500/10 dark:bg-green-400/10'
                        : 'border-slate-300 dark:border-slate-700'
                    }`}
                    onPress={() => setDeliveryPreference('digital')}
                  >
                    <View
                      className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
                        deliveryPreference === 'digital'
                          ? 'border-[#10b981]'
                          : 'border-slate-400'
                      }`}
                    >
                      {deliveryPreference === 'digital' && (
                        <View className="w-3 h-3 rounded-full bg-[#10b981]" />
                      )}
                    </View>
                    <Text className="text-[#111827] dark:text-white font-medium">
                      Digital
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={`flex-1 flex-row items-center justify-center gap-2 rounded-lg p-3 border-2 ${
                      deliveryPreference === 'physical'
                        ? 'border-[#10b981] bg-green-500/10 dark:bg-green-400/10'
                        : 'border-slate-300 dark:border-slate-700'
                    }`}
                    onPress={() => setDeliveryPreference('physical')}
                  >
                    <View
                      className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
                        deliveryPreference === 'physical'
                          ? 'border-[#10b981]'
                          : 'border-slate-400'
                      }`}
                    >
                      {deliveryPreference === 'physical' && (
                        <View className="w-3 h-3 rounded-full bg-[#10b981]" />
                      )}
                    </View>
                    <Text className="text-[#111827] dark:text-white font-medium">
                      Physical
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Footer Button */}
      <View className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4">
        <TouchableOpacity className="w-full h-14 rounded-xl bg-[#10b981] items-center justify-center shadow-lg">
          <Text className="text-white text-base font-bold">
            Post Project - Pay ₹25 Escrow
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
