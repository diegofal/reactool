// Mock data to simulate database responses
const mockData = {
  // Total revenue data similar to the screenshot
  totalRevenue: {
    value: 6717686.12,
    subValue: 3398437.1,
    date: "01/01/2025"
  },
  
  // Account balance data
  accountBalance: {
    value: 7387469.59
  },
  
  // Total debt data 
  totalDebt: {
    value: 2763271.038
  },
  
  // Sales data
  salesData: {
    value: 20242823.502,
    subValue: 4467684.13
  },
  
  // Sales by category for the data grid
  salesByCategory: [
    { name: "INDUSTRIAL EVA", sales: 737986.15, salesVariation: 15 },
    { name: "POLLERA", sales: 359260.87, salesVariation: 15 },
    { name: "INDUSTRIAL CORVER", sales: 614215.27, salesVariation: 5 },
    { name: "PRONERIE", sales: 356851.58, salesVariation: 27.48 },
    { name: "CANTILEVER", sales: 712066.96, salesVariation: 0.0 },
    { name: "BERCAIL", sales: 1341114.84, salesVariation: 0.0 },
    { name: "METCAN", sales: 226481.28, salesVariation: 0.0 },
    { name: "FERNADEZ", sales: 723493.64, salesVariation: 0.0 },
    { name: "PATAMAR", sales: 455112.36, salesVariation: 0.0 },
    { name: "KEILAR", sales: 523487.57, salesVariation: 0.0 },
    { name: "HERILSER", sales: 160220.36, salesVariation: 0.0 },
  ]
};

module.exports = mockData;
