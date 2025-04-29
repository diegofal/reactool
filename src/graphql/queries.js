import { gql } from '@apollo/client';

// Query for the total revenue card
export const GET_TOTAL_REVENUE = gql`
  query GetTotalRevenue {
    totalRevenue {
      value
      subValue
      date
    }
  }
`;

// Query for the account balance card
export const GET_ACCOUNT_BALANCE = gql`
  query GetAccountBalance {
    accountBalance {
      value
    }
  }
`;

// Query for the debt metrics card
export const GET_TOTAL_DEBT = gql`
  query GetTotalDebt {
    totalDebt {
      value
    }
  }
`;

// Query for sales data
export const GET_SALES_DATA = gql`
  query GetSalesData {
    salesData {
      value
      subValue
    }
  }
`;

// Query for the data grid
export const GET_SALES_BY_CATEGORY = gql`
  query GetSalesByCategory {
    salesByCategory {
      name
      sales
      salesVariation
    }
  }
`;
