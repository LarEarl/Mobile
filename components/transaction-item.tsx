import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TransactionItemProps {
  name: string;
  category: string;
  amount: string;
  date: string;
  icon: string | React.ReactNode;
  iconBg: string;
}

export function TransactionItem({ name, category, amount, date, icon, iconBg }: TransactionItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
          {typeof icon === 'string' ? <Text style={styles.icon}>{icon}</Text> : icon}
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.categoryRow}>
            <View style={styles.dot} />
            <Text style={styles.category}>{category}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.amount}>${amount}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    marginBottom: 12,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
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
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF6B35',
    marginRight: 6,
  },
  category: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
  },
});
