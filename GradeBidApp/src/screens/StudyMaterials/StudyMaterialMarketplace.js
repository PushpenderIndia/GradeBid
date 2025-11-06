import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function StudyMaterialMarketplace({ onBack }) {
  const [activeFilter, setActiveFilter] = useState('university');
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const screenHeight = Dimensions.get('window').height;

  const materials = [
    {
      id: 1,
      title: 'Engineering Semester 4 Notes',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClT9yp-h37Jm-YDbcGzodJ-wS0JCRroUgr21VuK4Q-yjDoIhssJXZjBMPNNPb8wK-qJV9N8ZIe71wclkeNA9QPwiy8VF_o_LbCeOiqq-mGxOixm3DSooCUFv2q7DfFDB7PllDljbl_yl87N6LDxEygIVYIkBptagYF0z-ZCe6OAuxajUH6DjEjx928MckhHIs5b-RRVdYNIlRCm2S1rGzf8GKsA2T5XTLjCp0VN39jjXi5gwnkyBcKqZl0zLSr1EhsuUgyukp24p7a',
      sellerBadge: 'Gold Seller',
      sellerName: 'Rohan Sharma',
      sellerInfo: 'IIT Bombay, CGPA 9.2',
      sellerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEIc8un_CNeWxzEVhK96p-wYo23-ExQBp-odlLqcCd5es9t1iE78p79U4OrH0dirttaKDh3N6vAN4j1B0I0Kub-DrfuYX8OhNyGx1N5YMrozRUVlvvHY0szy3l_T5wxbUj0Zl_yOU1xkU4Itv1Kqb-4WoQLJZWs0JU-bNDxyt99v_iQ0D577gPnvi1hLpvdQKUeSd0z9vcGbV4ZOPzxjF8GztoRV7PWirxxmDqabdpexD23RGUQGv183vt02_ZmvPw1U7Ia8kOYrKR',
      rating: 4.8,
      reviews: 234,
      digitalPrice: 199,
      printedPrice: 399,
      isBestSeller: true,
      description: 'Comprehensive handwritten notes for the 4th semester of Computer Science Engineering. Covers all major topics including DSA, COA, and Mathematics-IV. Prepared by a top-ranking student.',
      tableOfContents: [
        { chapter: 'Chapter 1: Data Structures', pages: 'p. 1-25' },
        { chapter: 'Chapter 2: Algorithms', pages: 'p. 26-50' },
        { chapter: 'Chapter 3: Computer Organization', pages: 'p. 51-80' },
      ],
    },
    {
      id: 2,
      title: 'Organic Chemistry Flashcards',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB8SeTN7OQdhuFilwk0eB6L_P-zMk3XLVVxfEiJIizPKRty2D_Ea1e8XNvsURCRJ3GVJYI5EruXrOWf-_ETkaq6tKiDuhIOQr8T5PM2NNblDH3_8-fFpPlzFl9Em5dhpTY6_9jCc8Ug5NaacaLAYEORTaCAnkJAmvkoja0J7NxHOCet_XgucY1WclGPNVt_G8sPWor-Z4zJFfYsa0zvYc7c8zU9GdK_BwLA-JEBzgeez5PZWbh3udJ4j-le0KNDmlnWK-7dqcgNDjM',
      sellerBadge: 'Top Rated',
      sellerName: 'Priya Patel',
      sellerInfo: 'AIIMS Delhi, Top 100',
      sellerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMXE9WrdNZnqYdcNxP8JANqZxgaqzTixt4BoEcnofnpglaESzF2NVqEhHcK22JjBY6ZWDF8yUgjwegE1Qk9UuImpXeI6y35RcjZp4PAlnUT7a1dISpmBS64LZE4F9Ry25IsfmZxMufoFJjLu0HcCn9gRm7rSHeYgt7g5TFJsoMqFyB9xvFH3D23RxHxWhF3mXDS8LuKPzi9gQb-f8CkwweMDwvdjQyH0PiYZ9H1iLvh67KBIqe483-JidAkcyhUp-z0Sh0J9No1ePn',
      rating: 4.9,
      reviews: 189,
      digitalPrice: 149,
      printedPrice: 299,
      isBestSeller: false,
      description: 'Complete set of flashcards covering all important reactions, mechanisms, and concepts in Organic Chemistry. Perfect for quick revision and memorization.',
      tableOfContents: [
        { chapter: 'Alkanes & Alkenes', pages: 'Card 1-30' },
        { chapter: 'Aromatic Compounds', pages: 'Card 31-60' },
        { chapter: 'Reaction Mechanisms', pages: 'Card 61-100' },
      ],
    },
    {
      id: 3,
      title: 'Microeconomics Full Syllabus',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG-xSuNdolD76MZnesU7yDvL3y3ciNPFHUfQFef7C4DMRGbXX8Q-J5DPZaTGbLxnoCRKw3_Wh_PN_T4UBfuRC6rvUTEyjLjNMsv_Z1IO5kQhxJNFhJeOmhKY3emSUG95Lcs-eFcZENfVbngZpTIhudWnVVGjhV6nyeLdi08cfiBiKNus0dCPOBhk9P2TthCq3O5i_b1c1RlpYUVRROGn5gjaMgnvusr03v9oPaobMfuiwOGJwg0DwNNRP_ccNoAtZ2ee66c-ld8ycH',
      sellerBadge: 'Gold Seller',
      sellerName: 'Arjun Mehta',
      sellerInfo: 'Delhi School of Economics',
      sellerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8HDIUMl1ClA1B2jhNRD0AHSLQ9mAOFQXSoBXDgC79QQQDo_Ow7Ay2_msYxRMUZxoLPwBYaKBBDvtyMEcjnzakNeNfU-zYT9ThNqVCfRHQ_LJexVNb2VBsZ7UDHZcU-Ovq42kHEGuXiPOGxrfACgu_YwIrj6eX1sO48Om7K7GE5Vv-kuLczxtozaKUR5wxGgNRU7dduRUzk_AAfKa17ClCA5JSONNXrcvjpsJivzg5HDPVa2AxKDr897qFmACDEhr3fJ0XxJSkZ06B',
      rating: 5.0,
      reviews: 98,
      digitalPrice: 199,
      printedPrice: 399,
      isBestSeller: false,
      description: 'Complete microeconomics notes covering consumer theory, producer theory, market structures, and welfare economics. Includes detailed graphs and examples.',
      tableOfContents: [
        { chapter: 'Consumer Theory', pages: 'p. 1-40' },
        { chapter: 'Producer Theory', pages: 'p. 41-80' },
        { chapter: 'Market Structures', pages: 'p. 81-120' },
      ],
    },
    {
      id: 4,
      title: 'Modern Physics Handwritten Notes',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuhZll7G0gigPzfiXig6lg3frRUVojng9fjg2UqSKZSwY6WEYkl2DLYJi9DXrfQDNw6NX3fpYDAHrltLmm4hqmKq9JTXuOscaKX-ifGZJys-CzFJCJnhSNHYY_7k4HNC1utBkESNo2G8V_waAj4GKQbKYVEgkCUmvcaKyQHvk6fQslLJRLu54M-wEX3PAILPT5__BJQPLHLVfz0SEONiB5XFULIw5tPbUJs5TmGJOj-jYZD5FKfRIwV-hBtuIyK8ikWXvPtDQLCYKn',
      sellerBadge: 'Top Rated',
      sellerName: 'Kavya Reddy',
      sellerInfo: 'IIT Madras, CGPA 9.5',
      sellerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO9kBjeomuy5Mv4azfAnY0NIkM2geSEMOXoDfYzbo90cmBPjAHDLnZ15be4nI-BiE94FjG8M4oxrrzmWsIzPxWgEYJ4GQRq6LMGKFSt21bonLfSkYd3FDbgJRK1WXBoOc2zJOiXMLvLBGJHbfKOJDM5Y1UPXyVodbElu_YqP9OOkeMvfzIKPiWfVYHX3NgtbBoilK8AW36I3WJah-gAtturGYUtrRJDhwzJ8AGa_d_D1CfGff24pt3A6Cxwf21bpOqkny0pncphN0U',
      rating: 4.9,
      reviews: 421,
      digitalPrice: 299,
      printedPrice: 499,
      isBestSeller: true,
      description: 'Detailed handwritten notes on modern physics covering quantum mechanics, special relativity, atomic structure, and nuclear physics. Clear diagrams and derivations.',
      tableOfContents: [
        { chapter: 'Quantum Mechanics', pages: 'p. 1-50' },
        { chapter: 'Special Relativity', pages: 'p. 51-90' },
        { chapter: 'Nuclear Physics', pages: 'p. 91-130' },
      ],
    },
  ];

  const filters = [
    { id: 'university', label: 'University' },
    { id: 'semester', label: 'Semester' },
    { id: 'subject', label: 'Subject' },
    { id: 'contentType', label: 'Content Type' },
  ];

  const handleBackPress = () => {
    console.log('Back button pressed in Study Material Marketplace');
    if (onBack) {
      onBack();
    }
  };

  const handleMaterialPress = (material) => {
    console.log('Material pressed:', material.title);
    setSelectedMaterial(material);
    setShowBottomSheet(true);
    console.log('Bottom sheet should show now');
  };

  const handleCloseBottomSheet = () => {
    setShowBottomSheet(false);
    setTimeout(() => setSelectedMaterial(null), 300);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA] dark:bg-[#111621]">
      {/* Sticky Header with Filters */}
      <View className="bg-[#FAFAFA] dark:bg-[#111621] pt-4">
        {/* Back Button Row */}
        <View className="flex-row items-center px-4 pb-3">
          <TouchableOpacity
            onPress={handleBackPress}
            className="w-10 h-10 items-center justify-center rounded-full"
            activeOpacity={0.7}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <MaterialIcons name="arrow-back" size={24} color="#212121" />
          </TouchableOpacity>
          <Text className="text-[#212121] dark:text-[#FAFAFA] text-lg font-bold ml-4">
            Study Materials
          </Text>
        </View>

        {/* Filter Buttons */}
        <View className="flex-row items-center gap-2 px-4 pb-3">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-1"
          >
            <View className="flex-row gap-2">
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter.id}
                  onPress={() => setActiveFilter(filter.id)}
                  className={`h-9 flex-row items-center justify-center gap-1.5 rounded-full px-4 ${
                    activeFilter === filter.id
                      ? 'bg-[#3B82F6]/20'
                      : 'bg-gray-200 dark:bg-white/10'
                  }`}
                >
                  <Text
                    className={`text-sm font-semibold ${
                      activeFilter === filter.id
                        ? 'text-[#3B82F6]'
                        : 'text-[#212121] dark:text-[#FAFAFA]'
                    }`}
                  >
                    {filter.label}
                  </Text>
                  <MaterialIcons
                    name="expand-more"
                    size={18}
                    color={activeFilter === filter.id ? '#3B82F6' : '#212121'}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View className="relative">
            <TouchableOpacity className="h-9 flex-row items-center justify-center gap-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-[#FAFAFA] dark:bg-[#111621] px-3">
              <MaterialIcons name="swap-vert" size={18} color="#212121" />
              <Text className="text-sm font-medium text-[#212121] dark:text-[#FAFAFA]">
                Popular
              </Text>
            </TouchableOpacity>
            <View className="absolute -top-1 -right-1 w-4 h-4 items-center justify-center rounded-full bg-[#3B82F6]">
              <Text className="text-xs font-bold text-white">2</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Content Grid */}
      <ScrollView className="flex-1">
        <View className="flex-row flex-wrap p-4 gap-3">
          {materials.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="w-[48%] flex-col gap-2"
              onPress={() => handleMaterialPress(item)}
              activeOpacity={0.7}
            >
              <View className="relative w-full">
                <View
                  className="w-full rounded-lg bg-gray-200 overflow-hidden"
                  style={{ aspectRatio: 3 / 4 }}
                >
                  <Image
                    source={{ uri: item.image }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                {item.isBestSeller && (
                  <View className="absolute top-2 left-2 rounded bg-[#F59E0B] px-2 py-0.5">
                    <Text className="text-xs font-bold text-white">
                      Best Seller
                    </Text>
                  </View>
                )}
              </View>
              <View className="flex-col px-1">
                <Text className="text-sm font-semibold text-[#212121] dark:text-[#FAFAFA]">
                  {item.title}
                </Text>
                <View className="flex-row items-center gap-1.5 mt-1">
                  <View className="w-4 h-4 rounded-full bg-gray-300" />
                  <Text className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                    {item.sellerBadge}
                  </Text>
                </View>
                <View className="flex-row items-center gap-1 mt-1">
                  <Text className="text-[#F59E0B] text-sm">★</Text>
                  <Text className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                    {item.rating} ({item.reviews} reviews)
                  </Text>
                </View>
                <Text className="mt-1 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  Digital ₹{item.digitalPrice} | Printed ₹{item.printedPrice}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Sheet Modal */}
      {selectedMaterial && (
        <Modal
          visible={showBottomSheet}
          transparent={true}
          animationType="slide"
          onRequestClose={handleCloseBottomSheet}
        >
          <View className="flex-1 justify-end bg-black/40">
            <TouchableOpacity
              className="flex-1"
              activeOpacity={1}
              onPress={handleCloseBottomSheet}
            />
            {/* Bottom Sheet Content */}
            <View className="bg-[#FAFAFA] dark:bg-[#111621] rounded-t-xl" style={{ height: screenHeight * 0.9 }}>
              {/* Handle */}
              <View className="flex-row h-5 w-full items-center justify-center">
                <View className="h-1 w-9 rounded-full bg-gray-300 dark:bg-gray-600" />
              </View>

              {/* Scrollable Content */}
              <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                {/* Header Image */}
                <View className="w-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700" style={{ height: 240 }}>
                  <Image
                    source={{ uri: selectedMaterial.image }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                <TouchableOpacity className="mt-3">
                  <Text className="text-center text-sm font-medium text-[#3B82F6]">
                    Preview first 5 pages free
                  </Text>
                </TouchableOpacity>

                {/* Seller Profile */}
                <View className="mt-4 flex-row items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                  <View className="flex-row items-center gap-3">
                    <Image
                      source={{ uri: selectedMaterial.sellerAvatar }}
                      className="w-12 h-12 rounded-full"
                      resizeMode="cover"
                    />
                    <View>
                      <Text className="font-bold text-[#212121] dark:text-[#FAFAFA]">
                        {selectedMaterial.sellerName}
                      </Text>
                      <Text className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                        {selectedMaterial.sellerInfo}
                      </Text>
                    </View>
                  </View>
                  <View className="rounded-md bg-[#F59E0B]/20 px-2 py-1">
                    <Text className="text-xs font-bold text-[#F59E0B]">
                      {selectedMaterial.sellerBadge}
                    </Text>
                  </View>
                </View>

                {/* Description */}
                <View className="mt-4">
                  <Text className="text-lg font-bold text-[#212121] dark:text-[#FAFAFA]">
                    Description
                  </Text>
                  <Text className="mt-1 text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                    {selectedMaterial.description}
                  </Text>
                </View>

                {/* Table of Contents */}
                {selectedMaterial.tableOfContents && (
                  <View className="mt-4">
                    <Text className="text-lg font-bold text-[#212121] dark:text-[#FAFAFA]">
                      Table of Contents
                    </Text>
                    <View className="mt-2 flex-col gap-2">
                      {selectedMaterial.tableOfContents.map((item, index) => (
                        <View
                          key={index}
                          className={`flex-row items-center justify-between pb-1 ${
                            index < selectedMaterial.tableOfContents.length - 1
                              ? 'border-b border-dashed border-gray-200 dark:border-gray-700'
                              : ''
                          }`}
                        >
                          <Text className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                            {item.chapter}
                          </Text>
                          <Text className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                            {item.pages}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}

                {/* Reviews Section */}
                <View className="mt-6 mb-2">
                  <View className="flex-row items-center justify-between">
                    <Text className="text-lg font-bold text-[#212121] dark:text-[#FAFAFA]">
                      Reviews ({selectedMaterial.reviews})
                    </Text>
                    <TouchableOpacity>
                      <Text className="text-sm font-medium text-[#3B82F6]">See All</Text>
                    </TouchableOpacity>
                  </View>
                  <View className="mt-3 flex-col gap-4">
                    <View className="flex-row gap-3">
                      <View className="w-8 h-8 rounded-full bg-gray-300" />
                      <View className="flex-1">
                        <View className="flex-row items-center gap-1">
                          <Text className="text-[#F59E0B] text-base">★★★★★</Text>
                        </View>
                        <Text className="text-sm text-[#212121] dark:text-[#FAFAFA] mt-1">
                          Absolutely life-saving notes. Well-structured and easy to understand.
                          Highly recommend!
                        </Text>
                        <Text className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                          - Priya Singh
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>

              {/* Fixed CTA Buttons */}
              <SafeAreaView edges={['bottom']} className="border-t border-gray-200 dark:border-gray-700 bg-[#FAFAFA] dark:bg-[#111621]">
                <View className="p-4">
                  <View className="flex-row items-center gap-3">
                    <TouchableOpacity className="flex-1 rounded-lg bg-[#3B82F6]/20 py-3">
                      <Text className="text-center text-sm font-bold text-[#3B82F6]">
                        Buy Digital ₹{selectedMaterial?.digitalPrice}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 rounded-lg bg-[#F59E0B] py-3">
                      <Text className="text-center text-sm font-bold text-white">
                        Buy Printed ₹{selectedMaterial?.printedPrice}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </SafeAreaView>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}
