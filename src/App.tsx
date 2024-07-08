import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages";
import ContactPage from "./pages/ContactPage";
import USOverview from "./pages/us";
import USProductsPage from "./pages/us/ProductsPage";
import USMetricsPage from "./pages/us/MetricsPage";
import KylinOverviewPage from "./pages/kylin";
import KylinValuePropositionPage from "./pages/kylin/PropositionPage";
import KylinModelPage from "./pages/kylin/ModelPage";
import IRStockPage from "./pages/ir/StockPage";
import IRReleasesPage from "./pages/ir/ReleasesPage";
import IRPresentationPage from "./pages/ir/PresentationPage";
import IRFilingsPage from "./pages/ir/FilingsPage";
import IRBoardPage from "./pages/ir/BoardPage";
import IRGovernancePage from "./pages/ir/GovernancePage";
import IRFAQPage from "./pages/ir/FAQPage";
import NotFoundPage from "./pages/404NotFoundPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="mt-14">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/aehl-us/overview" element={<USOverview />} />
            <Route path="/aehl-us/products" element={<USProductsPage />} />
            <Route path="/aehl-us/metrics" element={<USMetricsPage />} />

            <Route
              path="/aehl-kylin/overview"
              element={<KylinOverviewPage />}
            />
            <Route
              path="/aehl-kylin/value"
              element={<KylinValuePropositionPage />}
            />
            <Route path="/aehl-kylin/model" element={<KylinModelPage />} />

            <Route path="/ir/stock" element={<IRStockPage />} />
            <Route path="/ir/releases" element={<IRReleasesPage />} />
            <Route path="/ir/presentation" element={<IRPresentationPage />} />
            <Route path="/ir/filings" element={<IRFilingsPage />} />
            <Route path="/ir/board" element={<IRBoardPage />} />
            <Route path="/ir/governance" element={<IRGovernancePage />} />
            <Route path="/ir/faq" element={<IRFAQPage />} />

            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
