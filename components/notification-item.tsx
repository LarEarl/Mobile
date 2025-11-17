import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NotificationItemProps {
  title: string;
  description?: string;
  amount?: string;
  cardInfo?: string;
  balance?: string;
  date: string;
  category: string;
  icon: string | React.ReactNode;
  iconBg: string;
  isIncome?: boolean;
  hasUnreadDot?: boolean;
}

export function NotificationItem({
  title,
  description,
  amount,
  cardInfo,
  balance,
  date,
  category,
  icon,
  iconBg,
  isIncome,
  hasUnreadDot,
}: NotificationItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
          {typeof icon === 'string' ? <Text style={styles.icon}>{icon}</Text> : icon}
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          {amount && (
            <Text style={[styles.amount, isIncome && styles.incomeAmount]}>
              {isIncome ? '+' : '-'}${amount}
            </Text>
          )}
          {description && <Text style={styles.description}>{description}</Text>}
          {cardInfo && <Text style={styles.cardInfo}>{cardInfo}</Text>}
          {balance && <Text style={styles.balance}>{balance}</Text>}
          <Text style={styles.date}>
            {date} · {category}
          </Text>
        </View>
      </View>
      {hasUnreadDot && <View style={styles.unreadDot} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    borderRadius: 0,
    marginBottom: 12,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 24,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  incomeAmount: {
    color: '#FF6B35',
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
    lineHeight: 20,
  },
  cardInfo: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 2,
  },
  balance: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6B35',
    marginTop: 8,
  },
});
