import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProperties } from '@/lib/mockData';

export const Properties = () => {
  const { t } = useLanguage();

  return (
    <Card className="glass border-border/50">
      <CardHeader>
        <CardTitle>{t.propertyManagement}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockProperties.map((property) => (
            <div key={property.id} className="p-4 glass-subtle rounded-lg">
              <h3 className="font-semibold">{property.address}</h3>
              <p className="text-sm text-muted-foreground capitalize">{property.propertyType}</p>
              <p className="text-lg font-bold text-primary">€{property.price.toLocaleString()}</p>
              <span className={`px-2 py-1 rounded text-xs ${
                property.status === 'available' ? 'bg-green-500/20 text-green-600' : 
                property.status === 'sold' ? 'bg-red-500/20 text-red-600' : 'bg-yellow-500/20 text-yellow-600'
              }`}>
                {property.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};