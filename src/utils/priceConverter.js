/**
 * ETH/INR Price Conversion Utility
 * 
 * In production, this would fetch from a Chainlink oracle or CoinGecko API.
 * For local development, we use a mock rate.
 * 
 * Usage:
 *   import { ethToInr, inrToEth, ETH_INR_RATE, formatDualPrice } from '../utils/priceConverter';
 */

// Mock exchange rate: 1 ETH = ₹2,00,000 INR
// In production, replace with a live API call or Chainlink oracle feed
export const ETH_INR_RATE = 200000;

/**
 * Convert ETH amount to INR
 * @param {number|string} ethAmount
 * @returns {number}
 */
export function ethToInr(ethAmount) {
    return parseFloat(ethAmount) * ETH_INR_RATE;
}

/**
 * Convert INR amount to ETH
 * @param {number|string} inrAmount
 * @returns {number}
 */
export function inrToEth(inrAmount) {
    return parseFloat(inrAmount) / ETH_INR_RATE;
}

/**
 * Format a price in both INR and ETH for display
 * @param {number} inrPrice - Price in Rupees
 * @returns {{ inr: string, eth: string }}
 */
export function formatDualPrice(inrPrice) {
    const ethPrice = inrToEth(inrPrice);
    return {
        inr: `₹${inrPrice.toFixed(2)}`,
        eth: ethPrice < 0.0001
            ? `${(ethPrice * 1e6).toFixed(2)} μETH`
            : ethPrice < 1
                ? `${ethPrice.toFixed(6)} ETH`
                : `${ethPrice.toFixed(4)} ETH`,
    };
}

/**
 * Format a raw ETH price with its INR equivalent
 * @param {number|string} ethPrice
 * @returns {{ inr: string, eth: string }}
 */
export function formatEthWithInr(ethPrice) {
    const inr = ethToInr(ethPrice);
    return {
        eth: `${parseFloat(ethPrice).toFixed(6)} ETH`,
        inr: `≈ ₹${inr.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`,
    };
}
