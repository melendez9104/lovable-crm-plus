import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockClients } from '@/lib/mockData';

export const Clients = () => {
  const { t } = useLanguage();

  return (
    <Card className="glass border-border/50">
      <CardHeader>
        <CardTitle>{t.clientManagement}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockClients.map((client) => (
            <div key={client.id} className="p-4 glass-subtle rounded-lg">
              <h3 className="font-semibold">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{client.email}</p>
              <p className="text-sm">{client.propertyPreferences}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};