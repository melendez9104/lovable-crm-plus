import { Moon, Sun, Monitor, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const getLanguageLabel = (lang: Language) => {
    return lang === 'es' ? 'Español' : 'Português (BR)';
  };

  return (
    <header className="glass border-b border-border/50 h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          {title}
        </h1>
      </div>

      <div className="flex items-center space-x-2">
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="glass-subtle">
              <Globe className="h-4 w-4 mr-2" />
              {getLanguageLabel(language)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass border-border/50">
            <DropdownMenuItem 
              onClick={() => setLanguage('es')}
              className={language === 'es' ? 'bg-primary/20' : ''}
            >
              Español
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setLanguage('pt-BR')}
              className={language === 'pt-BR' ? 'bg-primary/20' : ''}
            >
              Português (BR)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="glass-subtle">
              {getThemeIcon()}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass border-border/50">
            <DropdownMenuItem 
              onClick={() => setTheme('light')}
              className={theme === 'light' ? 'bg-primary/20' : ''}
            >
              <Sun className="h-4 w-4 mr-2" />
              {t.lightMode}
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setTheme('dark')}
              className={theme === 'dark' ? 'bg-primary/20' : ''}
            >
              <Moon className="h-4 w-4 mr-2" />
              {t.darkMode}
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setTheme('system')}
              className={theme === 'system' ? 'bg-primary/20' : ''}
            >
              <Monitor className="h-4 w-4 mr-2" />
              {t.systemDefault}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};