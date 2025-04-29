const { gql } = require('apollo-server');

// Define our GraphQL schema
const typeDefs = gql`
  type TotalRevenue {
    value: Float!
    subValue: Float
    date: String
  }

  type AccountBalance {
    value: Float!
  }

  type TotalDebt {
    value: Float!
  }

  type SalesData {
    value: Float!
    subValue: Float
  }

  type CategorySales {
    name: String!
    sales: Float!
    salesVariation: Float
  }
  
  type Query {
    # Card queries
    totalRevenue: TotalRevenue
    accountBalance: AccountBalance
    totalDebt: TotalDebt
    salesData: SalesData
    
    # Data grid query
    salesByCategory: [CategorySales!]!
  }
`;

module.exports = typeDefs;
