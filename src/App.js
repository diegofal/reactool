import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA'
  }
});

export default App;
