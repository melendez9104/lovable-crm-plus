import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building, 
  UserCheck, 
  Calendar, 
  MessageCircle, 
  BarChart3,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export const Sidebar = () => {
  const { t } = useLanguage();

  const navigation = [
    {
      name: t.dashboard,
      href: '/',
      icon: LayoutDashboard,
    },
    {
      name: t.clients,
      href: '/clients',
      icon: Users,
    },
    {
      name: t.properties,
      href: '/properties',
      icon: Building,
    },
    {
      name: t.employees,
      href: '/employees',
      icon: UserCheck,
    },
    {
      name: t.calendar,
      href: '/calendar',
      icon: Calendar,
    },
    {
      name: t.chat,
      href: '/chat',
      icon: MessageCircle,
    },
    {
      name: t.reports,
      href: '/reports',
      icon: BarChart3,
    },
  ];

  return (
    <aside className="glass border-r border-border/50 w-64 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <Home className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            InmoHub CRM
          </span>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200',
                    'hover:bg-primary/10 hover:scale-105',
                    isActive
                      ? 'bg-gradient-primary text-primary-foreground shadow-lg'
                      : 'text-foreground/80 hover:text-foreground'
                  )
                }
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};