import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Loading from '../common/Loading';
import ErrorDisplay from '../common/ErrorDisplay';

const DataGridCard = ({ title, data, loading, error }) => {
  if (loading) return <Loading />;
  if (error) return <ErrorDisplay error={error} />;

  // Ensure data is available
  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noData}>No data available</Text>
      </View>
    );
  }

  // Extract column names from the first row of data
  const columns = Object.keys(data[0]);

  return (
    <View style={styles.cardContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      
      <ScrollView horizontal>
        <View>
          {/* Header Row */}
          <View style={styles.headerRow}>
            {columns.map((column, index) => (
              <Text key={`header-${index}`} style={styles.headerCell}>
                {column.charAt(0).toUpperCase() + column.slice(1)}
              </Text>
            ))}
          </View>
          
          {/* Data Rows */}
          <ScrollView>
            {data.map((row, rowIndex) => (
              <View key={`row-${rowIndex}`} style={[styles.dataRow, rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow]}>
                {columns.map((column, cellIndex) => {
                  const cellValue = row[column];
                  const isNumeric = typeof cellValue === 'number';
                  const isNegative = isNumeric && cellValue < 0;
                  
                  return (
                    <Text 
                      key={`cell-${rowIndex}-${cellIndex}`} 
                      style={[
                        styles.dataCell, 
                        isNumeric ? styles.numericCell : null,
                        isNegative ? styles.negativeValue : null
                      ]}
                    >
                      {isNumeric && column.toLowerCase().includes('sales') 
                        ? cellValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                        : cellValue.toString()}
                    </Text>
                  );
                })}
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#212121',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 12,
    backgroundColor: '#F5F5F5',
  },
  headerCell: {
    width: 120,
    fontWeight: 'bold',
    color: '#424242',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 12,
  },
  evenRow: {
    backgroundColor: '#FFFFFF',
  },
  oddRow: {
    backgroundColor: '#F9F9F9',
  },
  dataCell: {
    width: 120,
    fontSize: 14,
    color: '#616161',
    paddingHorizontal: 10,
  },
  numericCell: {
    textAlign: 'right',
  },
  negativeValue: {
    color: '#F44336',
  },
  noData: {
    textAlign: 'center',
    padding: 20,
    color: '#9E9E9E',
    fontSize: 16,
  },
});

export default DataGridCard;
