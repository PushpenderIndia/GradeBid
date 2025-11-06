import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Dashboard({ onNavigateToProfile }) {
  const [activeTab, setActiveTab] = useState('active'); // 'active', 'materials', 'mywork'
  const [activeRole, setActiveRole] = useState('find'); // 'find' or 'earn'

  const projects = [
    {
      id: 1,
      title: 'Urgent: Calculus II Problem Set',
      description: 'Need help solving a set of 10 differential equations. Must show all work clearly.',
      budget: '₹1,500',
      deadline: 'Due in 2 days',
    },
    {
      id: 2,
      title: 'Python Code Debugging for ML',
      description: 'My Keras model is not converging. Need an expert to review the code and identify the bug.',
      budget: '₹3,000',
      deadline: 'Due in 5 days',
    },
    {
      id: 3,
      title: 'Proofread History Essay (10 pages)',
      description: 'Looking for someone to proofread and provide feedback on an essay about the Roman Empire.',
      budget: '₹800',
      deadline: 'Due tomorrow',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1">
        {/* Top App Bar */}
        <View className="flex-row items-center justify-between px-4 pb-2 pt-4 bg-background-light dark:bg-background-dark">
          <TouchableOpacity
            className="w-12 h-12 items-center justify-center"
            onPress={onNavigateToProfile}
          >
            <View className="w-10 h-10 rounded-full bg-gray-300 shadow-sm items-center justify-center">
              <MaterialIcons name="person" size={24} color="#007AFF" />
            </View>
          </TouchableOpacity>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity className="relative w-10 h-10 items-center justify-center rounded-full bg-transparent">
              <MaterialIcons name="notifications" size={24} color="#1C1C1E" />
              <View className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-2 h-10 px-4 rounded-full bg-primary/10">
              <MaterialIcons name="account-balance-wallet" size={20} color="#007AFF" />
              <Text className="text-sm font-semibold text-primary">₹8,450</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="px-4 py-3">
          <View className="flex-row items-center h-12 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">
            <View className="pl-4">
              <MaterialIcons name="search" size={24} color="#8A8A8E" />
            </View>
            <TextInput
              className="flex-1 h-full px-4 text-base text-[#1C1C1E] dark:text-gray-200"
              placeholder="Search projects, materials, or ask AI..."
              placeholderTextColor="#8A8A8E"
            />
          </View>
        </View>

        {/* Segmented Buttons */}
        <View className="px-4 py-3">
          <View className="h-10 flex-row items-center rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            <TouchableOpacity
              onPress={() => setActiveRole('find')}
              className={`flex-1 h-full items-center justify-center rounded-lg ${
                activeRole === 'find' ? 'bg-[#34C759]' : ''
              }`}
            >
              <Text
                className={`text-sm font-semibold ${
                  activeRole === 'find' ? 'text-white' : 'text-[#1C1C1E] dark:text-gray-300'
                }`}
              >
                Find Help
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveRole('earn')}
              className={`flex-1 h-full items-center justify-center rounded-lg ${
                activeRole === 'earn' ? 'bg-primary' : ''
              }`}
            >
              <Text
                className={`text-sm font-semibold ${
                  activeRole === 'earn' ? 'text-white' : 'text-[#1C1C1E] dark:text-gray-300'
                }`}
              >
                Earn Money
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* AI Card */}
        <View className="p-4">
          <LinearGradient
            colors={['#6A11CB', '#2575FC']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-row items-center justify-between gap-4 p-4 shadow-lg"
            style={{ borderRadius: 12 }}
          >
            <View className="flex-col gap-3">
              <View className="flex-row items-center gap-2 text-white">
                <MaterialIcons name="auto-awesome" size={24} color="white" />
                <Text className="text-base font-bold text-white">Ask AI Any Doubt</Text>
              </View>
              <TouchableOpacity className="flex-row-reverse items-center justify-center h-8 px-3 rounded-lg bg-white/20 gap-1.5" style={{ alignSelf: 'flex-start', minWidth: 84, maxWidth: 480 }}>
                <MaterialIcons name="photo-camera" size={18} color="white" />
                <Text className="text-sm font-medium text-white">Quick Capture</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Tabs */}
        <View className="pb-3">
          <View className="flex-row border-b border-gray-200 dark:border-gray-700 px-4">
            <TouchableOpacity
              onPress={() => setActiveTab('active')}
              className={`flex-1 items-center pb-3 pt-4 border-b-[3px] ${
                activeTab === 'active' ? 'border-b-primary' : 'border-b-transparent'
              }`}
            >
              <Text
                className={`text-sm font-bold ${
                  activeTab === 'active' ? 'text-[#1C1C1E] dark:text-white' : 'text-[#8A8A8E] dark:text-gray-400'
                }`}
              >
                Active Projects
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab('materials')}
              className={`flex-1 items-center pb-3 pt-4 border-b-[3px] ${
                activeTab === 'materials' ? 'border-b-primary' : 'border-b-transparent'
              }`}
            >
              <Text
                className={`text-sm font-bold ${
                  activeTab === 'materials' ? 'text-[#1C1C1E] dark:text-white' : 'text-[#8A8A8E] dark:text-gray-400'
                }`}
              >
                Study Materials
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab('mywork')}
              className={`flex-1 items-center pb-3 pt-4 border-b-[3px] ${
                activeTab === 'mywork' ? 'border-b-primary' : 'border-b-transparent'
              }`}
            >
              <Text
                className={`text-sm font-bold ${
                  activeTab === 'mywork' ? 'text-[#1C1C1E] dark:text-white' : 'text-[#8A8A8E] dark:text-gray-400'
                }`}
              >
                My Work
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Project Cards */}
        <View className="flex-col gap-4 p-4">
          {projects.map((project) => (
            <View
              key={project.id}
              className="flex-col gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 p-4 shadow-sm"
            >
              <View className="flex-col gap-1">
                <Text className="text-base font-bold text-[#1C1C1E] dark:text-white">
                  {project.title}
                </Text>
                <Text className="text-sm text-[#8A8A8E] dark:text-gray-400">
                  {project.description}
                </Text>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-1 px-2 py-1 rounded bg-green-500/10 dark:bg-green-500/20">
                  <MaterialIcons name="sell" size={16} color="#10B981" />
                  <Text className="text-sm font-semibold text-green-600 dark:text-green-400">
                    Budget: {project.budget}
                  </Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <MaterialIcons name="timer" size={16} color="#8A8A8E" />
                  <Text className="text-sm text-[#8A8A8E]">{project.deadline}</Text>
                </View>
              </View>
              <TouchableOpacity className="w-full h-10 items-center justify-center rounded-lg bg-primary">
                <Text className="text-sm font-bold text-white">Bid Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
