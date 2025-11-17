import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CardItemProps {
  type: 'debit' | 'virtual';
  balance: string;
  lastDigits: string;
}

export function CardItem({ type, balance, lastDigits }: CardItemProps) {
  const isDebit = type === 'debit';
  
  return (
    <LinearGradient
      colors={isDebit ? ['#FF6B35', '#FF8F50'] : ['#AAAAAA', '#CCCCCC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <View style={styles.logoCircle} />
          <View style={[styles.logoCircle, styles.logoCircleOverlap]} />
        </View>
      </View>
      
      <Text style={styles.balance}>{balance}</Text>
      <View style={styles.footer}>
        <Text style={styles.cardType}>
          {isDebit ? 'Debit' : 'Virtual'}
        </Text>
        <Text style={styles.cardNumber}>•• {lastDigits}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 180,
    borderRadius: 20,
    padding: 20,
    marginRight: 16,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'flex-start',
  },
  logo: {
    flexDirection: 'row',
    width: 50,
    height: 30,
  },
  logoCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  logoCircleOverlap: {
    marginLeft: -10,
  },
  balance: {
    fontSize: 36,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardType: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  cardNumber: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  },
});
