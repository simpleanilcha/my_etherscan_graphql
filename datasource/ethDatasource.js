const { RESTDataSource } = require("apollo-datasource-rest");

// Define constant to store Vitalik Buterin's public Ethereum address
// We will use this address in our Etherscan API requests
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Create EtherDataSource class extending base RESTDataSource 
// Handles calling Etherscan API endpoints
class EtherDataSource extends RESTDataSource {
  // Call superclass constructor
  constructor() {
    super();
    // Set base URL for all Etherscan API requests
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Get ETH balance for the defined address
  async etherBalanceByAddress() {
    // Return API response using predefined address
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get total ETH supply in circulation
  async totalSupplyOfEther() {
    // Return API response
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get latest ETH price in USD
  async getLatestEthereumPrice() {
    // Return API response 
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get estimated block confirmation time
  async getBlockConfirmationTime() {
    // Return API response
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

// Export EtherDataSource class
module.exports = EtherDataSource;
