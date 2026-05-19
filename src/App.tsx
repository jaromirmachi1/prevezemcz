import { useEffect } from "react";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { injectOrganizationSchema } from "./seo/jsonLd";
import { getPageMeta, setPageMeta } from "./seo/siteMeta";
import FacebookPeek from "./components/FacebookPeek";
import FloatingNav from "./components/FloatingNav";
import SiteFooter from "./components/SiteFooter";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import FleetPage from "./pages/FleetPage";
import PneuServicePage from "./pages/PneuServicePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import RealizationsSection from "./sections/RealizationsSection";
import ReferencesSection from "./sections/ReferencesSection";
import ServicesSection from "./sections/ServicesSection";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    injectOrganizationSchema();
  }, []);

  useEffect(() => {
    setPageMeta(getPageMeta(pathname));
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <Page>
      <FloatingNav />
      <FacebookPeek />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <HeroSection />
                <ReferencesSection />
                <ServicesSection />
                <RealizationsSection />
              </main>
              <ContactSection />
            </>
          }
        />
        <Route path="/sluzby" element={<ServicesPage />} />
        <Route path="/vozovy-park" element={<FleetPage />} />
        <Route path="/pneuservis" element={<PneuServicePage />} />
        <Route path="/kariera" element={<CareerPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </Page>
  );
}

export default App;

const Page = styled.div`
  background: radial-gradient(
    circle at top,
    #222228 0%,
    #0c0c0d 45%,
    #080809 100%
  );
  color: #f6f6f7;
  min-height: 100vh;
`;
