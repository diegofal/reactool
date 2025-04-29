import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorDisplay = ({ error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorTitle}>Error</Text>
      <Text style={styles.errorMessage}>{error?.message || 'An unknown error occurred'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFEBEE',
    borderRadius: 8,
    margin: 8,
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 8
  },
  errorMessage: {
    fontSize: 14,
    color: '#424242'
  }
});

export default ErrorDisplay;
