import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import RouteProgress from '@/components/layout/RouteProgress';
import FloatingActions from '@/components/layout/FloatingActions';
import OrgSchema from '@/components/layout/OrgSchema';
import MotionLayer from '@/components/layout/MotionLayer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:font-semibold focus:shadow-high"
      >
        Skip to content
      </a>
      <MotionLayer />
      <RouteProgress />
      <Navbar />
      <main id="main-content" className="flex-1 pt-[70px] md:pt-[82px]">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <FloatingActions />
      <OrgSchema />
    </div>
  );
}
