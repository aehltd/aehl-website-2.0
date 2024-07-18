import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FullNavBar from "./components/FullNavBar";
import Footer from "./components/Footer";

import HomePage from "./pages";
import ContactPage from "./pages/ContactPage";

import USOverview from "./pages/us";
import USProductsPage from "./pages/us/ProductsPage";
import USMetricsPage from "./pages/us/MetricsPage";

import KylinOverviewPage from "./pages/kylin";
import KylinModelPage from "./pages/kylin/ModelPage";

import IRFinancialsPage from "./pages/ir/FinancialsPage";
import IRNewsPage from "./pages/ir/NewsPage";
import IRDocumentsPage from "./pages/ir/DocumentsPage";
import IRFAQPage from "./pages/ir/FAQPage";
import NotFoundPage from "./pages/404NotFoundPage";
import IRBoardPage from "./pages/ir/BoardPage";
import IROverviewPage from "./pages/ir/OverviewPage";
import IRContactPage from "./pages/ir/ContactPage";
import IRCompositionPage from "./pages/ir/CompositionPage";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Router>
        <FullNavBar />
        <div className="overflow-y-auto w-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/aehl-us/overview" element={<USOverview />} />
            <Route path="/aehl-us/products" element={<USProductsPage />} />
            <Route path="/aehl-us/metrics" element={<USMetricsPage />} />

            {/* <Route
              path="/aehl-kylin/overview"
              element={<KylinOverviewPage />}
            /> */}
            <Route
              path="/aehl-kylin/overview"
              element={<KylinOverviewPage />}
            />
            <Route path="/aehl-kylin/model" element={<KylinModelPage />} />

            <Route path="/ir" element={<IROverviewPage />} />
            <Route path="/ir/overview" element={<IROverviewPage />} />
            <Route path="/ir/press-releases" element={<IRNewsPage />} />
            <Route path="/ir/events-presentations" element={<IRNewsPage />} />
            <Route path="/ir/sec-filings" element={<IRFinancialsPage />} />
            <Route path="/ir/stock-information" element={<IRFinancialsPage />} />
            <Route path="/ir/financials" element={<IRFinancialsPage />} />
            <Route
              path="/ir/documents"
              element={<IRDocumentsPage />}
            />
            <Route
              path="/ir/committee-composition"
              element={<IRCompositionPage />}
            />
            <Route path="/ir/board" element={<IRBoardPage />} />
            <Route path="/ir/contact-us" element={<IRContactPage />} />
            <Route path="/ir/faqs" element={<IRFAQPage />} /> 

            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
