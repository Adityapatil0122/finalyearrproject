import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import App from './App.jsx';
import { LenisProvider } from '@/lib/lenis';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import AiSolutions from '@/pages/AiSolutions';
import Products from '@/pages/Products';
import Clients from '@/pages/Clients';
import Blogs from '@/pages/Blogs';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import NotFound from '@/pages/NotFound';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LenisProvider>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="ai-solutions" element={<AiSolutions />} />
            <Route path="products" element={<Products />} />
            <Route path="clients" element={<Clients />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:slug" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LenisProvider>
    </BrowserRouter>
  </StrictMode>
);
