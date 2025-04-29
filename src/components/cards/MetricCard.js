import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Note: In a complete implementation, you would import icons like this:
// import Icon from 'react-native-vector-icons/FontAwesome';

const MetricCard = ({ title, value, subValue, iconName = 'dollar', color = '#FF5722' }) => {
  const formattedValue = typeof value === 'number' 
    ? value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    : value;

  const formattedSubValue = typeof subValue === 'number'
    ? subValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    : subValue;

  // Determine if the subValue is positive or negative for styling
  const isPositiveSubValue = typeof subValue === 'number' ? subValue >= 0 : true;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          {/* In a complete implementation with react-native-vector-icons: */}
          {/* <Icon name={iconName} size={20} color="#FFFFFF" /> */}
          <Text style={styles.icon}>$</Text>
        </View>
      </View>
      <Text style={styles.value}>{formattedValue}</Text>
      {subValue !== undefined && subValue !== null && (
        <Text style={[styles.subValue, isPositiveSubValue ? styles.positiveValue : styles.negativeValue]}>
          {isPositiveSubValue ? '+' : ''}{formattedSubValue}
        </Text>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 8,
    minHeight: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 4,
  },
  subValue: {
    fontSize: 16,
    marginBottom: 8,
  },
  positiveValue: {
    color: '#4CAF50',
  },
  negativeValue: {
    color: '#F44336',
  },
  title: {
    fontSize: 14,
    color: '#9E9E9E',
    marginTop: 8,
  },
});

export default MetricCard;
