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
import ProjectDetails from '../Project/ProjectDetails';

export default function Dashboard({ onNavigateToProfile, onNavigateToAI, onNavigateToMaterials, onNavigateToChat, onNavigateToProjectCreation }) {
  const [activeTab, setActiveTab] = useState('createtask'); // 'active', 'materials', 'mywork', 'createtask'
  const [activeRole, setActiveRole] = useState('find'); // 'find' or 'earn'
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const projects = [
    {
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
    },
    {
      id: 2,
      title: 'Python Code Debugging for ML',
      description: 'My Keras model is not converging. Need an expert to review the code and identify the bug. Experience with TensorFlow and Keras required.',
      budget: '₹3,000',
      budgetMin: 2500,
      budgetMax: 3500,
      deadline: 'Due in 5 days',
      postedTime: '5 hours ago',
      category: 'Computer Science',
      client: {
        name: 'Priya Singh',
        rating: 4.6,
        projectsPosted: 8,
        location: 'Bangalore, India',
      },
      skills: ['Python', 'Machine Learning', 'Keras', 'TensorFlow'],
      attachments: 3,
      bidsCount: 12,
      avgBid: '₹2,800',
    },
    {
      id: 3,
      title: 'Proofread History Essay (10 pages)',
      description: 'Looking for someone to proofread and provide feedback on an essay about the Roman Empire. Need attention to grammar, style, and historical accuracy.',
      budget: '₹800',
      budgetMin: 600,
      budgetMax: 1000,
      deadline: 'Due tomorrow',
      postedTime: '1 hour ago',
      category: 'Literature',
      client: {
        name: 'Amit Kumar',
        rating: 4.9,
        projectsPosted: 15,
        location: 'Delhi, India',
      },
      skills: ['Proofreading', 'History', 'English'],
      attachments: 1,
      bidsCount: 5,
      avgBid: '₹750',
    },
  ];

  const myWorkProjects = [
    {
      id: 1,
      title: 'Data Structures Assignment Help',
      client: 'Rajesh Kumar',
      status: 'In Progress',
      earning: '₹2,500',
      deadline: 'Due in 3 days',
      progress: 60,
    },
    {
      id: 2,
      title: 'Chemistry Lab Report Writing',
      client: 'Priya Singh',
      status: 'In Progress',
      earning: '₹1,800',
      deadline: 'Due in 5 days',
      progress: 35,
    },
    {
      id: 3,
      title: 'Economics Research Paper',
      client: 'Amit Sharma',
      status: 'Under Review',
      earning: '₹3,200',
      deadline: 'Submitted',
      progress: 100,
    },
    {
      id: 4,
      title: 'Java Programming Project',
      client: 'Neha Patel',
      status: 'Completed',
      earning: '₹4,000',
      deadline: 'Completed on 2 Nov',
      progress: 100,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-1">
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
            <TouchableOpacity
              className="relative w-10 h-10 items-center justify-center rounded-full bg-transparent"
              onPress={onNavigateToChat}
            >
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
              onPress={() => {
                setActiveRole('find');
                setActiveTab('createtask');
              }}
              className={`flex-1 h-full items-center justify-center rounded-lg ${
                activeRole === 'find' ? 'bg-primary' : ''
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
              onPress={() => {
                setActiveRole('earn');
                setActiveTab('active');
              }}
              className={`flex-1 h-full items-center justify-center rounded-lg ${
                activeRole === 'earn' ? 'bg-[#34C759]' : ''
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
          <TouchableOpacity onPress={onNavigateToAI} activeOpacity={0.9}>
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
                <View className="flex-row-reverse items-center justify-center h-8 px-3 rounded-lg bg-white/20 gap-1.5" style={{ alignSelf: 'flex-start', minWidth: 84, maxWidth: 480 }}>
                  <MaterialIcons name="photo-camera" size={18} color="white" />
                  <Text className="text-sm font-medium text-white">Quick Capture</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View className="pb-3">
          <View className="flex-row border-b border-gray-200 dark:border-gray-700 px-4">
            {activeRole === 'earn' ? (
              <>
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
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => setActiveTab('createtask')}
                  className={`flex-1 items-center pb-3 pt-4 border-b-[3px] ${
                    activeTab === 'createtask' ? 'border-b-primary' : 'border-b-transparent'
                  }`}
                >
                  <Text
                    className={`text-sm font-bold ${
                      activeTab === 'createtask' ? 'text-[#1C1C1E] dark:text-white' : 'text-[#8A8A8E] dark:text-gray-400'
                    }`}
                  >
                    My Tasks
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setActiveTab('materials');
                    onNavigateToMaterials();
                  }}
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
              </>
            )}
          </View>
        </View>

        {/* Content based on active tab */}
        {activeTab === 'createtask' && (
          <View className="flex-col items-center justify-center p-8 gap-6">
            <View className="w-32 h-32 rounded-full bg-gray-100 dark:bg-gray-800 items-center justify-center">
              <MaterialIcons name="assignment" size={64} color="#8A8A8E" />
            </View>
            <View className="flex-col items-center gap-2">
              <Text className="text-xl font-bold text-[#1C1C1E] dark:text-white text-center">
                Create Your First Task
              </Text>
              <Text className="text-sm text-[#8A8A8E] dark:text-gray-400 text-center px-4">
                Get help with your assignments, projects, or any academic work by creating a task
              </Text>
            </View>
            <TouchableOpacity
              onPress={onNavigateToProjectCreation}
              className="w-full h-12 rounded-lg bg-primary items-center justify-center"
            >
              <Text className="text-base font-bold text-white">Create Task</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'active' && (
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
                <TouchableOpacity
                  className="w-full h-10 items-center justify-center rounded-lg bg-primary"
                  onPress={() => {
                    setSelectedProject(project);
                    setShowProjectDetails(true);
                  }}
                >
                  <Text className="text-sm font-bold text-white">Bid Now</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {/* My Work Tab Content */}
        {activeTab === 'mywork' && (
          <View className="flex-col gap-4 p-4">
            {myWorkProjects.map((project) => (
              <View
                key={project.id}
                className="flex-col gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 p-4 shadow-sm"
              >
                <View className="flex-row items-start justify-between">
                  <View className="flex-1 flex-col gap-1">
                    <Text className="text-base font-bold text-[#1C1C1E] dark:text-white">
                      {project.title}
                    </Text>
                    <View className="flex-row items-center gap-1 mt-1">
                      <MaterialIcons name="person" size={16} color="#8A8A8E" />
                      <Text className="text-sm text-[#8A8A8E] dark:text-gray-400">
                        Client: {project.client}
                      </Text>
                    </View>
                  </View>
                  <View
                    className={`px-3 py-1 rounded-full ${
                      project.status === 'In Progress'
                        ? 'bg-blue-500/10 dark:bg-blue-500/20'
                        : project.status === 'Under Review'
                        ? 'bg-yellow-500/10 dark:bg-yellow-500/20'
                        : 'bg-green-500/10 dark:bg-green-500/20'
                    }`}
                  >
                    <Text
                      className={`text-xs font-semibold ${
                        project.status === 'In Progress'
                          ? 'text-blue-600 dark:text-blue-400'
                          : project.status === 'Under Review'
                          ? 'text-yellow-600 dark:text-yellow-400'
                          : 'text-green-600 dark:text-green-400'
                      }`}
                    >
                      {project.status}
                    </Text>
                  </View>
                </View>

                {/* Progress Bar */}
                {project.status !== 'Completed' && (
                  <View className="flex-col gap-2">
                    <View className="flex-row items-center justify-between">
                      <Text className="text-xs text-[#8A8A8E] dark:text-gray-400">
                        Progress
                      </Text>
                      <Text className="text-xs font-semibold text-[#1C1C1E] dark:text-white">
                        {project.progress}%
                      </Text>
                    </View>
                    <View className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                      <View
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${project.progress}%` }}
                      />
                    </View>
                  </View>
                )}

                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-1 px-2 py-1 rounded bg-green-500/10 dark:bg-green-500/20">
                    <MaterialIcons name="payments" size={16} color="#10B981" />
                    <Text className="text-sm font-semibold text-green-600 dark:text-green-400">
                      Earning: {project.earning}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="schedule" size={16} color="#8A8A8E" />
                    <Text className="text-sm text-[#8A8A8E]">{project.deadline}</Text>
                  </View>
                </View>

                {project.status === 'In Progress' && (
                  <View className="flex-row gap-2">
                    <TouchableOpacity className="flex-1 h-10 items-center justify-center rounded-lg border border-primary">
                      <Text className="text-sm font-bold text-primary">View Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 h-10 items-center justify-center rounded-lg bg-primary">
                      <Text className="text-sm font-bold text-white">Submit Work</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {project.status === 'Under Review' && (
                  <TouchableOpacity className="w-full h-10 items-center justify-center rounded-lg border border-yellow-500">
                    <Text className="text-sm font-bold text-yellow-600 dark:text-yellow-400">
                      Waiting for Review
                    </Text>
                  </TouchableOpacity>
                )}

                {project.status === 'Completed' && (
                  <TouchableOpacity className="w-full h-10 items-center justify-center rounded-lg bg-green-600">
                    <Text className="text-sm font-bold text-white">View Receipt</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Floating Action Button */}
      {!showProjectDetails && (
        <TouchableOpacity
          className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-[#10b981] shadow-lg items-center justify-center"
          onPress={onNavigateToProjectCreation}
          activeOpacity={0.8}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}
        >
          <MaterialIcons name="add" size={28} color="white" />
        </TouchableOpacity>
      )}
      </View>

      {/* Project Details Modal */}
      {showProjectDetails && (
        <View className="absolute inset-0 bg-white dark:bg-[#111621]">
          <ProjectDetails
            project={selectedProject}
            onBack={() => {
              setShowProjectDetails(false);
              setSelectedProject(null);
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
