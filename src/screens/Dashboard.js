import React from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useQuery } from '@apollo/client';
import { 
  GET_TOTAL_REVENUE, 
  GET_ACCOUNT_BALANCE, 
  GET_TOTAL_DEBT, 
  GET_SALES_DATA,
  GET_SALES_BY_CATEGORY 
} from '../graphql/queries';
import MetricCard from '../components/cards/MetricCard';
import DataGridCard from '../components/cards/DataGridCard';
import Loading from '../components/common/Loading';
import ErrorDisplay from '../components/common/ErrorDisplay';

const Dashboard = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  // Fetch total revenue data
  const { 
    data: revenueData, 
    loading: revenueLoading, 
    error: revenueError,
    refetch: refetchRevenue 
  } = useQuery(GET_TOTAL_REVENUE);

  // Fetch account balance data
  const { 
    data: balanceData, 
    loading: balanceLoading, 
    error: balanceError,
    refetch: refetchBalance 
  } = useQuery(GET_ACCOUNT_BALANCE);

  // Fetch debt metrics data
  const { 
    data: debtData, 
    loading: debtLoading, 
    error: debtError,
    refetch: refetchDebt 
  } = useQuery(GET_TOTAL_DEBT);

  // Fetch sales data
  const { 
    data: salesData, 
    loading: salesLoading, 
    error: salesError,
    refetch: refetchSales 
  } = useQuery(GET_SALES_DATA);

  // Fetch category sales for data grid
  const { 
    data: gridData, 
    loading: gridLoading, 
    error: gridError,
    refetch: refetchGrid 
  } = useQuery(GET_SALES_BY_CATEGORY);

  // Handle pull-to-refresh
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      await Promise.all([
        refetchRevenue(),
        refetchBalance(),
        refetchDebt(),
        refetchSales(),
        refetchGrid()
      ]);
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setRefreshing(false);
    }
  }, [refetchRevenue, refetchBalance, refetchDebt, refetchSales, refetchGrid]);

  // If all queries are loading, show a loading screen
  if (revenueLoading && balanceLoading && debtLoading && salesLoading && gridLoading) {
    return <Loading />;
  }

  // If there's a critical error in all queries, show an error screen
  if (revenueError && balanceError && debtError && salesError && gridError) {
    return <ErrorDisplay error={{ message: 'Failed to load dashboard data' }} />;
  }

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.dashboardTitle}>Financial Dashboard</Text>
      
      <View style={styles.cardsRow}>
        {/* Total Revenue Card */}
        <View style={styles.cardContainer}>
          <MetricCard 
            title="Total de Ingresos" 
            value={revenueData?.totalRevenue?.value || 0} 
            subValue={revenueData?.totalRevenue?.subValue || 0}
            iconName="dollar-sign"
            color="#E53935"
          />
        </View>

        {/* Account Balance Card */}
        <View style={styles.cardContainer}>
          <MetricCard 
            title="Balance en Cuenta" 
            value={balanceData?.accountBalance?.value || 0} 
            iconName="bank"
            color="#1E88E5"
          />
        </View>
      </View>

      <View style={styles.cardsRow}>
        {/* Total Debt Card */}
        <View style={styles.cardContainer}>
          <MetricCard 
            title="Total Deuda Vencida" 
            value={debtData?.totalDebt?.value || 0} 
            iconName="credit-card"
            color="#EF6C00"
          />
        </View>

        {/* Sales Card */}
        <View style={styles.cardContainer}>
          <MetricCard 
            title="Facturación Hoy" 
            value={salesData?.salesData?.value || 0} 
            subValue={salesData?.salesData?.subValue || 0}
            iconName="shopping-cart"
            color="#4CAF50"
          />
        </View>
      </View>

      {/* Data Grid Component */}
      <DataGridCard 
        title="Ventas por Categoría" 
        data={gridData?.salesByCategory || []} 
        loading={gridLoading} 
        error={gridError} 
      />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F7FA',
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#212121',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardContainer: {
    flex: 1,
    maxWidth: '48%',
  },
});

export default Dashboard;
