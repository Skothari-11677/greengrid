import React, { createContext, useContext } from 'react';
import { useBlockchain } from '../hooks/useBlockchain';

const BlockchainContext = createContext(null);

export function BlockchainProvider({ children }) {
    const blockchain = useBlockchain();
    return (
        <BlockchainContext.Provider value={blockchain}>
            {children}
        </BlockchainContext.Provider>
    );
}

export function useBlockchainContext() {
    const ctx = useContext(BlockchainContext);
    if (!ctx) throw new Error('useBlockchainContext must be used inside BlockchainProvider');
    return ctx;
}
