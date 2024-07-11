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
import IRFinancialsPage from "./pages/ir/FinancialsPage";
import IRNewsPage from "./pages/ir/NewsPage";
import IRGovernancePage from "./pages/ir/GovernancePage";
import IRFAQPage from "./pages/ir/FAQPage";
import NotFoundPage from "./pages/404NotFoundPage";
import IRBoardPage from "./pages/ir/BoardPage";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Router>
        <nav className="w-screen">
          <NavBar />
        </nav>

        <main className="overflow-y-auto w-screen">
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

            <Route path="/ir/finances" element={<IRFinancialsPage />} />
            <Route path="/ir/news" element={<IRNewsPage />} />
            <Route path="/ir/governance" element={<IRGovernancePage />} />
            <Route path="/ir/board" element={<IRBoardPage />} />
            <Route path="/ir/faq" element={<IRFAQPage />} />

            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </div>
  );
};

export default App;
