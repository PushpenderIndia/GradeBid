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

export default function ProjectDetails({ onBack, project }) {
  const [showBidForm, setShowBidForm] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  // Sample project data (in real app, this would come from props)
  const projectData = project || {
    id: 1,
    title: 'Urgent: Calculus II Problem Set',
    description: 'Need help solving a set of 10 differential equations. Must show all work clearly. The solutions need to be detailed with step-by-step explanations.',
    budget: '₹1,500',
    budgetMin: 1000,
    budgetMax: 2000,
    deadline: 'Due in 2 days',
    postedTime: '2 hours ago',
    category: 'Mathematics',
    client: {
      name: 'Rahul Sharma',
      rating: 4.8,
      projectsPosted: 12,
      location: 'Mumbai, India',
    },
    skills: ['Calculus', 'Mathematics', 'Problem Solving'],
    attachments: 2,
    bidsCount: 8,
    avgBid: '₹1,350',
  };

  const bids = [
    {
      id: 1,
      bidder: 'Priya Mehta',
      rating: 4.9,
      amount: '₹1,200',
      deliveryTime: '1 day',
      proposal: 'I have 5 years of experience in teaching Calculus. I can solve all 10 differential equations with detailed explanations.',
      successRate: 98,
      completedProjects: 145,
    },
    {
      id: 2,
      bidder: 'Amit Kumar',
      rating: 4.7,
      amount: '₹1,500',
      deliveryTime: '2 days',
      proposal: 'Mathematics expert with PhD. Will provide step-by-step solutions with explanations.',
      successRate: 95,
      completedProjects: 89,
    },
    {
      id: 3,
      bidder: 'Sneha Patel',
      rating: 4.8,
      amount: '₹1,350',
      deliveryTime: '1 day',
      proposal: 'I specialize in differential equations. Can deliver high-quality work within 24 hours.',
      successRate: 97,
      completedProjects: 112,
    },
  ];

  const handleSubmitBid = () => {
    // Handle bid submission logic here
    console.log('Bid submitted:', { bidAmount, deliveryTime, coverLetter });
    setShowBidForm(false);
  };

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
          Project Details
        </Text>
        <TouchableOpacity className="w-10 h-10 items-center justify-center">
          <MaterialIcons name="bookmark-border" size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <View className="flex-col gap-4 p-4">
          {/* Project Header */}
          <View className="w-full rounded-xl bg-white dark:bg-slate-900 shadow-sm p-5">
            <View className="flex-row items-start justify-between mb-3">
              <View className="flex-1">
                <Text className="text-xl font-bold text-[#111827] dark:text-white mb-2">
                  {projectData.title}
                </Text>
                <View className="flex-row items-center gap-2 mb-2">
                  <View className="px-2 py-1 rounded bg-blue-500/10 dark:bg-blue-500/20">
                    <Text className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {projectData.category}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="schedule" size={14} color="#6B7281" />
                    <Text className="text-xs text-[#6B7281] dark:text-slate-400">
                      {projectData.postedTime}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Budget & Deadline */}
            <View className="flex-row gap-3 mb-4">
              <View className="flex-1 p-3 rounded-lg bg-green-500/10 dark:bg-green-500/20">
                <View className="flex-row items-center gap-1 mb-1">
                  <MaterialIcons name="payments" size={16} color="#10B981" />
                  <Text className="text-xs text-[#6B7281] dark:text-slate-400">Budget</Text>
                </View>
                <Text className="text-lg font-bold text-green-600 dark:text-green-400">
                  {projectData.budget}
                </Text>
              </View>
              <View className="flex-1 p-3 rounded-lg bg-orange-500/10 dark:bg-orange-500/20">
                <View className="flex-row items-center gap-1 mb-1">
                  <MaterialIcons name="timer" size={16} color="#F97316" />
                  <Text className="text-xs text-[#6B7281] dark:text-slate-400">Deadline</Text>
                </View>
                <Text className="text-lg font-bold text-orange-600 dark:text-orange-400">
                  {projectData.deadline}
                </Text>
              </View>
            </View>

            {/* Stats */}
            <View className="flex-row gap-4 pt-3 border-t border-slate-200 dark:border-slate-700">
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="groups" size={18} color="#6B7281" />
                <Text className="text-sm text-[#6B7281] dark:text-slate-400">
                  {projectData.bidsCount} Bids
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="trending-up" size={18} color="#6B7281" />
                <Text className="text-sm text-[#6B7281] dark:text-slate-400">
                  Avg Bid: {projectData.avgBid}
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="attach-file" size={18} color="#6B7281" />
                <Text className="text-sm text-[#6B7281] dark:text-slate-400">
                  {projectData.attachments} Files
                </Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View className="w-full rounded-xl bg-white dark:bg-slate-900 shadow-sm p-5">
            <Text className="text-lg font-bold text-[#111827] dark:text-white mb-3">
              Description
            </Text>
            <Text className="text-base text-[#6B7281] dark:text-slate-400 leading-6">
              {projectData.description}
            </Text>
          </View>

          {/* Skills Required */}
          <View className="w-full rounded-xl bg-white dark:bg-slate-900 shadow-sm p-5">
            <Text className="text-lg font-bold text-[#111827] dark:text-white mb-3">
              Skills Required
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {projectData.skills.map((skill, index) => (
                <View
                  key={index}
                  className="px-3 py-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/20"
                >
                  <Text className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {skill}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Client Information */}
          <View className="w-full rounded-xl bg-white dark:bg-slate-900 shadow-sm p-5">
            <Text className="text-lg font-bold text-[#111827] dark:text-white mb-3">
              About Client
            </Text>
            <View className="flex-col gap-3">
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center">
                  <MaterialIcons name="person" size={24} color="#007AFF" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-bold text-[#111827] dark:text-white">
                    {projectData.client.name}
                  </Text>
                  <View className="flex-row items-center gap-1 mt-1">
                    <MaterialIcons name="star" size={16} color="#FBBF24" />
                    <Text className="text-sm text-[#6B7281] dark:text-slate-400">
                      {projectData.client.rating} • {projectData.client.projectsPosted} projects posted
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="location-on" size={16} color="#6B7281" />
                <Text className="text-sm text-[#6B7281] dark:text-slate-400">
                  {projectData.client.location}
                </Text>
              </View>
            </View>
          </View>

          {/* Current Bids */}
          <View className="w-full rounded-xl bg-white dark:bg-slate-900 shadow-sm p-5">
            <Text className="text-lg font-bold text-[#111827] dark:text-white mb-4">
              Current Bids ({bids.length})
            </Text>
            <View className="flex-col gap-4">
              {bids.map((bid) => (
                <View
                  key={bid.id}
                  className="p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <View className="flex-row items-start justify-between mb-3">
                    <View className="flex-1">
                      <Text className="text-base font-bold text-[#111827] dark:text-white mb-1">
                        {bid.bidder}
                      </Text>
                      <View className="flex-row items-center gap-3">
                        <View className="flex-row items-center gap-1">
                          <MaterialIcons name="star" size={14} color="#FBBF24" />
                          <Text className="text-sm text-[#6B7281] dark:text-slate-400">
                            {bid.rating}
                          </Text>
                        </View>
                        <Text className="text-sm text-[#6B7281] dark:text-slate-400">
                          {bid.completedProjects} projects
                        </Text>
                        <Text className="text-sm text-green-600 dark:text-green-400">
                          {bid.successRate}% success
                        </Text>
                      </View>
                    </View>
                    <View className="items-end">
                      <Text className="text-lg font-bold text-green-600 dark:text-green-400">
                        {bid.amount}
                      </Text>
                      <Text className="text-xs text-[#6B7281] dark:text-slate-400">
                        in {bid.deliveryTime}
                      </Text>
                    </View>
                  </View>
                  <Text className="text-sm text-[#6B7281] dark:text-slate-400 leading-5">
                    {bid.proposal}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Bid Form */}
          {showBidForm && (
            <View className="w-full rounded-xl bg-white dark:bg-slate-900 shadow-sm p-5">
              <Text className="text-lg font-bold text-[#111827] dark:text-white mb-4">
                Place Your Bid
              </Text>

              <View className="flex-col gap-4">
                {/* Bid Amount */}
                <View className="flex-col">
                  <Text className="text-sm font-medium text-[#6B7281] dark:text-slate-400 mb-2">
                    Bid Amount (₹)
                  </Text>
                  <TextInput
                    className="w-full rounded-lg text-[#111827] dark:text-white border border-slate-300 dark:border-slate-700 bg-[#f9fafb] dark:bg-slate-800 h-12 px-4 text-base"
                    placeholder="Enter your bid amount"
                    placeholderTextColor="#6B7281"
                    value={bidAmount}
                    onChangeText={setBidAmount}
                    keyboardType="numeric"
                  />
                  <Text className="text-xs text-[#6B7281] dark:text-slate-400 mt-1">
                    Client's budget: ₹{projectData.budgetMin} - ₹{projectData.budgetMax}
                  </Text>
                </View>

                {/* Delivery Time */}
                <View className="flex-col">
                  <Text className="text-sm font-medium text-[#6B7281] dark:text-slate-400 mb-2">
                    Delivery Time (days)
                  </Text>
                  <TextInput
                    className="w-full rounded-lg text-[#111827] dark:text-white border border-slate-300 dark:border-slate-700 bg-[#f9fafb] dark:bg-slate-800 h-12 px-4 text-base"
                    placeholder="Enter delivery time in days"
                    placeholderTextColor="#6B7281"
                    value={deliveryTime}
                    onChangeText={setDeliveryTime}
                    keyboardType="numeric"
                  />
                </View>

                {/* Cover Letter */}
                <View className="flex-col">
                  <Text className="text-sm font-medium text-[#6B7281] dark:text-slate-400 mb-2">
                    Cover Letter
                  </Text>
                  <TextInput
                    className="w-full rounded-lg text-[#111827] dark:text-white border border-slate-300 dark:border-slate-700 bg-[#f9fafb] dark:bg-slate-800 h-32 p-4 text-base"
                    placeholder="Explain why you're the best fit for this project..."
                    placeholderTextColor="#6B7281"
                    value={coverLetter}
                    onChangeText={setCoverLetter}
                    multiline
                    textAlignVertical="top"
                  />
                </View>

                {/* Service Fee Notice */}
                <View className="p-3 rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                  <View className="flex-row items-start gap-2">
                    <MaterialIcons name="info" size={20} color="#3B82F6" />
                    <View className="flex-1">
                      <Text className="text-sm text-blue-600 dark:text-blue-400">
                        A service fee of 10% will be deducted from your earnings
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Buttons */}
                <View className="flex-row gap-3 mt-2">
                  <TouchableOpacity
                    onPress={() => setShowBidForm(false)}
                    className="flex-1 h-12 rounded-lg border border-slate-300 dark:border-slate-700 items-center justify-center"
                  >
                    <Text className="text-base font-bold text-[#111827] dark:text-white">
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleSubmitBid}
                    className="flex-1 h-12 rounded-lg bg-primary items-center justify-center"
                  >
                    <Text className="text-base font-bold text-white">
                      Submit Bid
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Action Button */}
      {!showBidForm && (
        <View className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4">
          <TouchableOpacity
            onPress={() => setShowBidForm(true)}
            className="w-full h-14 rounded-xl bg-primary items-center justify-center shadow-lg"
          >
            <Text className="text-white text-base font-bold">
              Place a Bid
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
