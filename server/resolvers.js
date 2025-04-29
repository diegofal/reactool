const mockData = require('./mockData');

// Define resolvers to map queries to data
const resolvers = {
  Query: {
    // Resolver for Total Revenue card
    totalRevenue: () => {
      // In a real app, this would execute a SQL query like:
      // SELECT SUM(amount) as value, SUM(previous_period) as subValue, MAX(date) as date FROM revenues WHERE date > '2025-01-01'
      return mockData.totalRevenue;
    },
    
    // Resolver for Account Balance card
    accountBalance: () => {
      // In a real app: SELECT SUM(balance) as value FROM accounts
      return mockData.accountBalance;
    },
    
    // Resolver for Total Debt card
    totalDebt: () => {
      // In a real app: SELECT SUM(amount) as value FROM debts WHERE status = 'overdue'
      return mockData.totalDebt;
    },
    
    // Resolver for Sales Data card
    salesData: () => {
      // In a real app: SELECT SUM(amount) as value, SUM(cost) as subValue FROM sales WHERE date = CURRENT_DATE
      return mockData.salesData;
    },
    
    // Resolver for the Sales By Category data grid
    salesByCategory: () => {
      // In a real app: 
      // SELECT category as name, SUM(amount) as sales, 
      //   (SUM(amount) - LAG(SUM(amount)) OVER (PARTITION BY category ORDER BY date)) / LAG(SUM(amount)) * 100 as salesVariation
      // FROM sales GROUP BY category
      return mockData.salesByCategory;
    }
  }
};

module.exports = resolvers;
