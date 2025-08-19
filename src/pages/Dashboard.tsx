import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Building, Calendar, TrendingUp, Plus, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockClients, mockProperties, mockCalendarEvents } from '@/lib/mockData';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const { t } = useLanguage();

  // Calculate statistics
  const totalClients = mockClients.length;
  const activeClients = mockClients.filter(c => c.leadStatus !== 'cerrado').length;
  const totalProperties = mockProperties.length;
  const availableProperties = mockProperties.filter(p => p.status === 'available').length;
  const upcomingEvents = mockCalendarEvents.filter(e => e.date >= new Date()).length;
  const pendingTasks = mockCalendarEvents.filter(e => e.status === 'pending').length;

  const stats = [
    {
      title: t.clients,
      value: totalClients,
      subtitle: `${activeClients} activos`,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: t.properties,
      value: totalProperties,
      subtitle: `${availableProperties} disponibles`,
      icon: Building,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Eventos',
      value: upcomingEvents,
      subtitle: `${pendingTasks} pendientes`,
      icon: Calendar,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Ventas',
      value: 2,
      subtitle: 'Este mes',
      icon: TrendingUp,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  const recentClients = mockClients.slice(0, 3);
  const recentProperties = mockProperties.filter(p => p.status === 'available').slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="glass border-border/50 hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.subtitle}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Clients */}
        <Card className="glass border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">{t.clients} Recientes</CardTitle>
            <Link to="/clients">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Ver todos
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentClients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-between p-3 rounded-lg glass-subtle"
                >
                  <div>
                    <p className="font-medium text-foreground">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.email}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      client.leadStatus === 'interesado' 
                        ? 'bg-green-500/20 text-green-600'
                        : client.leadStatus === 'negociando'
                        ? 'bg-yellow-500/20 text-yellow-600'
                        : 'bg-blue-500/20 text-blue-600'
                    }`}>
                      {client.leadStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Properties */}
        <Card className="glass border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">{t.properties} Disponibles</CardTitle>
            <Link to="/properties">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Ver todas
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex items-center justify-between p-3 rounded-lg glass-subtle"
                >
                  <div>
                    <p className="font-medium text-foreground">{property.address}</p>
                    <p className="text-sm text-muted-foreground capitalize">{property.propertyType}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">
                      €{property.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {property.interestedClients.length} interesados
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="glass border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/clients">
              <Button className="w-full h-16 bg-gradient-primary hover:scale-105 transition-all">
                <Plus className="h-5 w-5 mr-2" />
                {t.addClient}
              </Button>
            </Link>
            <Link to="/properties">
              <Button className="w-full h-16 bg-gradient-secondary hover:scale-105 transition-all">
                <Plus className="h-5 w-5 mr-2" />
                Agregar Propiedad
              </Button>
            </Link>
            <Link to="/calendar">
              <Button className="w-full h-16 glass-subtle border hover:scale-105 transition-all">
                <Calendar className="h-5 w-5 mr-2" />
                Ver {t.calendar}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};