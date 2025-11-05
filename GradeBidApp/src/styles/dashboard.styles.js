import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Top Bar
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  avatarContainer: {
    width: 40,
    height: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  notificationIcon: {
    fontSize: 24,
  },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  walletButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  walletIcon: {
    fontSize: 20,
    color: '#007AFF',
    marginRight: 6,
  },
  walletText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  // Search Bar
  searchSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F2F2F7',
    overflow: 'hidden',
  },
  searchIconContainer: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F7',
  },
  searchIcon: {
    fontSize: 24,
    color: '#8A8A8E',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#1C1C1E',
    backgroundColor: '#F2F2F7',
  },
  // Segmented Control
  segmentedSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  segmentedControl: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    padding: 4,
  },
  segmentButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  segmentButtonActive: {
    backgroundColor: '#34C759',
  },
  segmentButtonInactive: {
    backgroundColor: 'transparent',
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '600',
  },
  segmentTextActive: {
    color: '#FFFFFF',
  },
  segmentTextInactive: {
    color: '#1C1C1E',
  },
  // AI Card
  aiCardSection: {
    padding: 16,
  },
  aiCard: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#6A11CB',
  },
  aiCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiCardLeft: {
    flex: 1,
  },
  aiCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  aiCardIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    marginRight: 8,
  },
  aiCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  quickCaptureButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignSelf: 'flex-start',
  },
  quickCaptureIcon: {
    fontSize: 18,
    color: '#FFFFFF',
    marginRight: 6,
  },
  quickCaptureText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  // Tabs
  tabsSection: {
    paddingBottom: 12,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
  },
  tabActive: {
    borderBottomColor: '#007AFF',
  },
  tabInactive: {
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabTextActive: {
    color: '#1C1C1E',
  },
  tabTextInactive: {
    color: '#8A8A8E',
  },
  // Content
  contentSection: {
    flex: 1,
  },
  contentScroll: {
    padding: 16,
  },
  // Project Card
  projectCard: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
  },
  projectHeader: {
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 14,
    color: '#8A8A8E',
    lineHeight: 20,
  },
  projectMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  budgetBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
  },
  budgetIcon: {
    fontSize: 16,
    color: '#34C759',
    marginRight: 4,
  },
  budgetText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34C759',
  },
  dueDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dueDateIcon: {
    fontSize: 16,
    color: '#8A8A8E',
    marginRight: 4,
  },
  dueDateText: {
    fontSize: 14,
    color: '#8A8A8E',
  },
  bidButton: {
    height: 40,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bidButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
