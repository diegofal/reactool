import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// When running on a real device, 'localhost' refers to the device itself, not your development machine
// For Android emulators, you can use 10.0.2.2 to refer to the host's localhost
// For iOS simulators, you can use localhost since it can directly access the host's localhost
const devServerIP = '10.0.2.2'; // Use your computer's IP address when testing on a real device

const httpLink = createHttpLink({
  uri: `http://${devServerIP}:4000/graphql`, // This will be our server endpoint
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
