import { CardItem } from '@/components/card-item';
import { CategoryButton } from '@/components/category-button';
import {
  AnalyticsIcon,
  BonusIcon,
  ChatsIcon,
  DeliveryIcon,
  HistoryIcon,
  HomeIcon,
  NotificationIcon,
  SupportIcon,
  TravelIcon
} from '@/components/icons';
import { TransactionItem } from '@/components/transaction-item';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <View>
            <Text style={styles.headerName}>Charlotte ›</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.qrButton}>
          <Text style={styles.qrIcon}>▦</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryButton icon={<TravelIcon size={28} color="#FF6B35" />} label="Travel" />
            <CategoryButton icon={<DeliveryIcon size={28} color="#FF6B35" />} label="Delivery" />
            <CategoryButton icon={<BonusIcon size={28} color="#FF6B35" />} label="Bonuses" />
            <CategoryButton icon={<SupportIcon size={28} color="#FF6B35" />} label="Support" />
          </ScrollView>
        </View>

        <View style={styles.cardsSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll}>
            <CardItem type="debit" balance="$4,098.12" lastDigits="4385" />
            <CardItem type="virtual" balance="$14.71" lastDigits="9081" />
            <View style={styles.addCard}>
              <Text style={styles.addCardIcon}>+</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.expensesSection}>
          <View style={styles.expensesHeader}>
            <Text style={styles.expensesTitle}>
              Expenses in <Text style={styles.expensesMonth}>June</Text>
            </Text>
            <Text style={styles.expensesAmount}>$5,091</Text>
          </View>
          <View style={styles.expensesBar}>
            <View style={[styles.expensesSegment, { flex: 2, backgroundColor: '#D84315' }]} />
            <View style={[styles.expensesSegment, { flex: 2, backgroundColor: '#FF6B35' }]} />
            <View style={[styles.expensesSegment, { flex: 1.5, backgroundColor: '#FFA726' }]} />
            <View style={[styles.expensesSegment, { flex: 1, backgroundColor: '#FFD54F' }]} />
          </View>
        </View>

        <View style={styles.transactionsSection}>
          <Text style={styles.sectionTitle}>Today</Text>
          <TransactionItem
            name="Matthew Billson"
            category="Money Transfer"
            amount="56.19"
            date="Jun 9, 12:08"
            icon={<Image source={require('@/assets/images/Avatar.png')} style={{ width: 56, height: 56, borderRadius: 28 }} />}
            iconBg="transparent"
          />
        </View>

        <View style={styles.transactionsSection}>
          <Text style={styles.sectionTitle}>Yesterday</Text>
          <TransactionItem
            name="Starbucks"
            category="Food"
            amount="122.47"
            date="Jun 8, 19:21"
            icon={<Image source={require('@/assets/images/Avatar (1).png')} style={{ width: 56, height: 56, borderRadius: 28 }} />}
            iconBg="transparent"
          />
          <TransactionItem
            name="Netflix"
            category="Entertainment"
            amount="13.17"
            date="Jun 8, 08:53"
            icon={<Image source={require('@/assets/images/Avatar (2).png')} style={{ width: 56, height: 56, borderRadius: 28 }} />}
            iconBg="transparent"
          />
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <HomeIcon size={24} color="#FF6B35" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Home</Text>
        </View>
        <Link href="/explore" asChild>
          <TouchableOpacity style={styles.navItem}>
            <NotificationIcon size={24} color="rgba(255, 255, 255, 0.5)" />
            <Text style={styles.navLabel}>Notifications</Text>
          </TouchableOpacity>
        </Link>
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  headerName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerArrow: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  qrButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  categoriesContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingLeft: 20,
  },
  cardsSection: {
    marginBottom: 24,
  },
  cardsScroll: {
    paddingLeft: 20,
  },
  addCard: {
    width: 120,
    height: 180,
    borderRadius: 20,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  addCardIcon: {
    fontSize: 48,
    color: 'rgba(255, 255, 255, 0.3)',
  },
  expensesSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  expensesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  expensesTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  expensesMonth: {
    color: '#FF6B35',
  },
  expensesAmount: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  expensesBar: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    gap: 4,
  },
  expensesSegment: {
    borderRadius: 4,
  },
  transactionsSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
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
