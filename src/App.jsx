import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import InvestmentPortal from './pages/InvestmentPortal';
import CommunityHub from './pages/CommunityHub';
import BlockchainDashboard from './pages/BlockchainDashboard';
import NFTGallery from './pages/NFTGallery';
import InvestmentTokens from './pages/InvestmentTokens';
import Governance from './pages/Governance';
import ChainActivityFeed from './pages/ChainActivityFeed';
import GovernmentHub from './pages/GovernmentHub';

function App() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/producer" element={<Dashboard />} />
          <Route path="/dashboard/consumer" element={<Dashboard />} />
          <Route path="/invest" element={<InvestmentPortal />} />
          <Route path="/community" element={<CommunityHub />} />
          <Route path="/dashboard/blockchain" element={<BlockchainDashboard />} />
          <Route path="/nfts" element={<NFTGallery />} />
          <Route path="/investments/tokens" element={<InvestmentTokens />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/chain-activity" element={<ChainActivityFeed />} />
          <Route path="/government" element={<GovernmentHub />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
