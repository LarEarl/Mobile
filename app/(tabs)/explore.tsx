import { AnalyticsIcon, ChatsIcon, HistoryIcon, HomeIcon, NotificationIcon, ShieldIcon, TransferIcon, TravelIcon } from '@/components/icons';
import { NotificationItem } from '@/components/notification-item';
import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NotificationsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Payments', 'System', 'Delivery', 'Travel'];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkIcon}>💬</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TODAY, 17 JUNE</Text>
          <NotificationItem
            title="Received from Anna"
            amount="110"
            cardInfo="Debit •• 4385"
            balance="$4,098.12"
            date="17 June 2025, 17:49"
            category="Payments"
            icon={<Image source={require('@/assets/images/Avatar (3).png')} style={{ width: 40, height: 40, borderRadius: 20 }} />}
            iconBg="transparent"
            isIncome={true}
            hasUnreadDot={true}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YESTERDAY, 16 JUNE</Text>
          <NotificationItem
            title="See our limited offer!"
            description="Would you like to visit new countries? Maybe it's your time!"
            date="16 June 2025, 23:08"
            category="Travel"
            icon={<TravelIcon size={28} color="#FF6B35" />}
            iconBg="#1A1A1A"
          />
          <NotificationItem
            title="Sent to •• 2041"
            amount="14.62"
            cardInfo="Debit •• 4385"
            balance="$3,987.5"
            date="16 June 2025, 06:18"
            category="Payments"
            icon={<TransferIcon size={28} color="#FF6B35" />}
            iconBg="#1A1A1A"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>24 MARCH, 2025</Text>
          <NotificationItem
            title="New login into account"
            description="You have logged in from a new location: iOS 26.0.1 · 109.255.84.7 · Spain"
            date="24 March 2025, 15:44"
            category="Security"
            icon={<ShieldIcon size={28} color="#FF6B35" />}
            iconBg="#1A1A1A"
          />
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.navItem}>
            <HomeIcon size={24} color="rgba(255, 255, 255, 0.5)" />
            <Text style={styles.navLabel}>Home</Text>
          </TouchableOpacity>
        </Link>
        <View style={styles.navItem}>
          <NotificationIcon size={24} color="#FF6B35" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Notifications</Text>
        </View>
        <TouchableOpacity style={styles.navItem}>
          <HistoryIcon size={24} color="rgba(255, 255, 255, 0.5)" />
          <Text style={styles.navLabel}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <AnalyticsIcon size={24} color="rgba(255, 255, 255, 0.5)" />
          <Text style={styles.navLabel}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <ChatsIcon size={24} color="rgba(255, 255, 255, 0.5)" />
          <Text style={styles.navLabel}>Chats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 32,
    color: '#FFFFFF',
    marginTop: -4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  checkButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  tabsContainer: {
    paddingVertical: 16,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: 'transparent',
  },
  tabText: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FF6B35',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: 0.5,
    marginBottom: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingBottom: 28,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
    opacity: 0.5,
  },
  navIconActive: {
    opacity: 1,
  },
  navLabel: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  navLabelActive: {
    color: '#FF6B35',
  },
});
