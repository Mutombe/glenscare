import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Package,
  Globe,
  Truck,
  Building2,
  Archive,
  Warehouse,
  Train,
  Ship,
  Plane,
  CheckCircle,
  Shield,
  Users,
  Clock,
  Award,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import ServicePage from "./services";
import HomePage from "./home";
import AboutPage from "./about";
import FAQPage from "./faq";
import OffersPage from "./offers";
import PoliciesPage from "./policies";
import Footer from "./footer";
import ContactPage from "./contact";
import Navigation from "./nav";
import { IoArchiveOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { GiTruck } from "react-icons/gi";
import { PiTruckTrailerThin } from "react-icons/pi";
import { GiOfficeChair } from "react-icons/gi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { PiPackageThin } from "react-icons/pi";
import { PiWarehouseThin } from "react-icons/pi";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GiIronHulledWarship } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen gellix-font">
        <style jsx>{`
          @font-face {
            font-family: "Gravesend Sans";
            src: url("./fonts/fonnts.com-Gravesend_Sans_Light.otf")
              format("opentype");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gravesend Sans";
            src: url("./fonts/fonnts.com-Gravesend_Sans_Medium.otf")
              format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gravesend Sans";
            src: url("./fonts/fonnts.com-Gravesend_Sans_Bold.otf")
              format("opentype");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }

          /* Century Gothic Font Face */
          @font-face {
            font-family: "Century Gothic Custom";
            src: url("./fonts/weezerfont.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gellix";
            src: url("./fonts/Gellix-Light.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Gellix";
            src: url("./fonts/Gellix-Regular.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          /* Font utility classes */
          .gravesend-sans {
            font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
              Verdana, sans-serif;
          }

          .roboto-font {
            font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
              sans-serif;
          }

          .century-gothic {
            font-family: "Century Gothic Custom", "Century Gothic", "Arial",
              sans-serif;
          }

          .gellix-font {
            font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
              sans-serif;
          }

          .gravita-font {
            font-family: "GravitaHUM", "Inter", "Segoe UI", Tahoma, Geneva,
              Verdana, sans-serif;
          }

          body {
            overflow-x: hidden;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <Toaster position="top-right" richColors />
        <ScrollToTop />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/services/archiving"
            element={
              <ServicePage
                layoutType={1}
                title="Digital Document Archiving & Storage"
                icon={IoArchiveOutline}
                description="Drowning in paper files? Go digital with our secure Document Archiving & Storage solutions."
                features={[
                  "Secure digital transformation of physical documents",
                  "Cloud-based storage with 24/7 access",
                  "Compliance with data protection regulations",
                  "Easy retrieval and search functionality",
                  "Long-term preservation of important records",
                ]}
              />
            }
          />

          <Route
            path="/services/global-moves"
            element={
              <ServicePage
                layoutType={2}
                title="Global Moves"
                icon={GiWorld}
                description="Relocating across borders? We handle international moves with precision and care."
                features={[
                  "FIDI and IAM accredited international moving",
                  "Door-to-door service to any country worldwide",
                  "Professional packing and crating",
                  "Customs clearance assistance",
                  "Real-time shipment tracking",
                  "Full insurance coverage options",
                ]}
              />
            }
          />

          <Route
            path="/services/regional-moves"
            element={
              <ServicePage
                layoutType={3}
                title="Regional Moves"
                icon={PiTruckTrailerThin}
                description="SADC Move Masters: Moving across borders in Southern Africa with ease."
                features={[
                  "Extensive network across SADC countries",
                  "Cross-border expertise and documentation",
                  "Fast and efficient regional transportation",
                  "Offices in Zimbabwe, South Africa, Zambia, Malawi, and Mozambique",
                  "Competitive regional rates",
                ]}
              />
            }
          />

          <Route
            path="/services/workspace"
            element={
              <ServicePage
                layoutType={1}
                title="Workspace Transition Services"
                icon={PiBuildingOfficeLight}
                description="Whether you are moving offices between towns or countries, Glens is well equipped to move you."
                features={[
                  "Minimal business disruption",
                  "After-hours and weekend moves available",
                  "IT equipment handling and setup",
                  "Furniture disassembly and reassembly",
                  "Project management and coordination",
                  "Storage solutions during transition",
                ]}
              />
            }
          />

          <Route
            path="/services/door-to-door"
            element={
              <ServicePage
                layoutType={2}
                title="Door-to-Door Relocations"
                icon={PiPackageThin}
                description="From your old doorstep to your new one — completely hassle-free relocation."
                features={[
                  "Complete end-to-end moving service",
                  "Professional packing at origin",
                  "Safe transportation and handling",
                  "Unpacking and setup at destination",
                  "Single point of contact throughout",
                  "Stress-free moving experience",
                ]}
              />
            }
          />

          <Route
            path="/services/packing"
            element={
              <ServicePage
                layoutType={3}
                title="Packing & Crating"
                icon={PiPackageThin}
                description="Need it packed right? Our expert team secures everything from fragile items to heavy equipment."
                features={[
                  "Professional packing materials and techniques",
                  "Custom crating for valuable items",
                  "Fragile item specialists",
                  "Heavy equipment handling",
                  "Labeling and inventory management",
                  "Unpacking services available",
                ]}
              />
            }
          />

          <Route
            path="/services/storage"
            element={
              <ServicePage
                layoutType={1}
                title="Storage Solutions"
                icon={PiWarehouseThin}
                description="We provide secure storage for household and personal effects, short or long-term."
                features={[
                  "Climate-controlled facilities",
                  "24/7 security monitoring",
                  "Flexible storage periods",
                  "Easy access to your belongings",
                  "Insurance options available",
                  "Container and warehouse storage",
                ]}
              />
            }
          />

          <Route
            path="/services/intercity"
            element={
              <ServicePage
                layoutType={2}
                title="Inter City Transport"
                icon={GiTruck}
                description="Going city to city? We offer fast, secure, and affordable intercity transportation."
                features={[
                  "Regular scheduled services",
                  "Modern fleet of vehicles",
                  "Goods of all sizes accommodated",
                  "Real-time tracking",
                  "Competitive pricing",
                  "Reliable delivery schedules",
                ]}
              />
            }
          />

          <Route
            path="/services/warehousing"
            element={
              <ServicePage
                layoutType={3}
                title="Bonded and General Warehousing"
                icon={PiWarehouseThin}
                description="We have reliable secure warehouses throughout Zimbabwe and the region."
                features={[
                  "Bonded warehouse facilities",
                  "General warehousing solutions",
                  "Customs clearance on-site",
                  "Inventory management systems",
                  "Distribution services",
                  "Strategic locations across the region",
                ]}
              />
            }
          />

          <Route
            path="/services/freight"
            element={
              <ServicePage
                layoutType={1}
                title="Specialized Freight & Intermodal Solutions"
                icon={GiIronHulledWarship}
                description="Our intermodal and specialized logistics solutions combine road, rail, sea, and air."
                features={[
                  "Multi-modal transportation options",
                  "Heavy and oversized cargo handling",
                  "Project cargo management",
                  "Road, rail, sea, and air freight",
                  "IATA and FIATA membership",
                  "Direct airline and shipping line access",
                ]}
              />
            }
          />

          <Route path="/offers" element={<OffersPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
