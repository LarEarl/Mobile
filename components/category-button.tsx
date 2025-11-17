import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CategoryButtonProps {
  icon: string | React.ReactNode;
  label: string;
}

export function CategoryButton({ icon, label }: CategoryButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        {typeof icon === 'string' ? <Text style={styles.icon}>{icon}</Text> : icon}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 24,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 107, 53, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 28,
  },
  label: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
