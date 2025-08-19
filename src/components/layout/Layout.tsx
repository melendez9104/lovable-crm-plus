import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  title: string;
}

export const Layout = ({ title }: LayoutProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
      
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header title={title} />
          <main className="flex-1 p-6 overflow-auto">
            <div className="animate-fade-in">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};