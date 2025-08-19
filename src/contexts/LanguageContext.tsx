import React, { createContext, useContext, useState } from 'react';

export type Language = 'es' | 'pt-BR';

export interface Translations {
  // Navigation
  dashboard: string;
  clients: string;
  properties: string;
  employees: string;
  calendar: string;
  chat: string;
  reports: string;
  
  // Common
  search: string;
  add: string;
  edit: string;
  delete: string;
  save: string;
  cancel: string;
  actions: string;
  status: string;
  
  // Client Management
  clientManagement: string;
  clientName: string;
  phone: string;
  email: string;
  propertyPreferences: string;
  leadStatus: string;
  assignedAgent: string;
  addClient: string;
  
  // Property Management
  propertyManagement: string;
  address: string;
  propertyType: string;
  price: string;
  propertyStatus: string;
  available: string;
  sold: string;
  reserved: string;
  interestedClients: string;
  
  // Employee Management
  employeeManagement: string;
  employeeName: string;
  role: string;
  administrator: string;
  agent: string;
  assistant: string;
  assignedClients: string;
  
  // Calendar & Tasks
  calendarTasks: string;
  appointment: string;
  task: string;
  completed: string;
  pending: string;
  
  // Chat
  internalChat: string;
  newMessage: string;
  typeMessage: string;
  
  // Reports
  reportsStatistics: string;
  salesByAgent: string;
  propertyPerformance: string;
  exportCSV: string;
  
  // Settings
  language: string;
  theme: string;
  lightMode: string;
  darkMode: string;
  systemDefault: string;
}

const translations: Record<Language, Translations> = {
  'es': {
    // Navigation
    dashboard: 'Panel de Control',
    clients: 'Clientes',
    properties: 'Propiedades',
    employees: 'Empleados',
    calendar: 'Calendario',
    chat: 'Chat',
    reports: 'Reportes',
    
    // Common
    search: 'Buscar',
    add: 'Agregar',
    edit: 'Editar',
    delete: 'Eliminar',
    save: 'Guardar',
    cancel: 'Cancelar',
    actions: 'Acciones',
    status: 'Estado',
    
    // Client Management
    clientManagement: 'Gestión de Clientes',
    clientName: 'Nombre del Cliente',
    phone: 'Teléfono',
    email: 'Correo Electrónico',
    propertyPreferences: 'Preferencias de Inmueble',
    leadStatus: 'Estado del Lead',
    assignedAgent: 'Agente Asignado',
    addClient: 'Agregar Cliente',
    
    // Property Management
    propertyManagement: 'Gestión de Propiedades',
    address: 'Dirección',
    propertyType: 'Tipo de Inmueble',
    price: 'Precio',
    propertyStatus: 'Estado de Propiedad',
    available: 'Disponible',
    sold: 'Vendido',
    reserved: 'Reservado',
    interestedClients: 'Clientes Interesados',
    
    // Employee Management
    employeeManagement: 'Gestión de Empleados',
    employeeName: 'Nombre del Empleado',
    role: 'Rol',
    administrator: 'Administrador',
    agent: 'Agente',
    assistant: 'Asistente',
    assignedClients: 'Clientes Asignados',
    
    // Calendar & Tasks
    calendarTasks: 'Calendario y Tareas',
    appointment: 'Cita',
    task: 'Tarea',
    completed: 'Completado',
    pending: 'Pendiente',
    
    // Chat
    internalChat: 'Chat Interno',
    newMessage: 'Nuevo Mensaje',
    typeMessage: 'Escribe un mensaje...',
    
    // Reports
    reportsStatistics: 'Reportes y Estadísticas',
    salesByAgent: 'Ventas por Agente',
    propertyPerformance: 'Rendimiento de Propiedades',
    exportCSV: 'Exportar CSV',
    
    // Settings
    language: 'Idioma',
    theme: 'Tema',
    lightMode: 'Modo Claro',
    darkMode: 'Modo Oscuro',
    systemDefault: 'Sistema por Defecto',
  },
  'pt-BR': {
    // Navigation
    dashboard: 'Painel de Controle',
    clients: 'Clientes',
    properties: 'Imóveis',
    employees: 'Funcionários',
    calendar: 'Calendário',
    chat: 'Chat',
    reports: 'Relatórios',
    
    // Common
    search: 'Buscar',
    add: 'Adicionar',
    edit: 'Editar',
    delete: 'Excluir',
    save: 'Salvar',
    cancel: 'Cancelar',
    actions: 'Ações',
    status: 'Status',
    
    // Client Management
    clientManagement: 'Gestão de Clientes',
    clientName: 'Nome do Cliente',
    phone: 'Telefone',
    email: 'E-mail',
    propertyPreferences: 'Preferências de Imóvel',
    leadStatus: 'Status do Lead',
    assignedAgent: 'Corretor Responsável',
    addClient: 'Adicionar Cliente',
    
    // Property Management
    propertyManagement: 'Gestão de Imóveis',
    address: 'Endereço',
    propertyType: 'Tipo de Imóvel',
    price: 'Preço',
    propertyStatus: 'Status do Imóvel',
    available: 'Disponível',
    sold: 'Vendido',
    reserved: 'Reservado',
    interestedClients: 'Clientes Interessados',
    
    // Employee Management
    employeeManagement: 'Gestão de Funcionários',
    employeeName: 'Nome do Funcionário',
    role: 'Cargo',
    administrator: 'Administrador',
    agent: 'Corretor',
    assistant: 'Assistente',
    assignedClients: 'Clientes Atribuídos',
    
    // Calendar & Tasks
    calendarTasks: 'Calendário e Tarefas',
    appointment: 'Compromisso',
    task: 'Tarefa',
    completed: 'Concluído',
    pending: 'Pendente',
    
    // Chat
    internalChat: 'Chat Interno',
    newMessage: 'Nova Mensagem',
    typeMessage: 'Digite uma mensagem...',
    
    // Reports
    reportsStatistics: 'Relatórios e Estatísticas',
    salesByAgent: 'Vendas por Corretor',
    propertyPerformance: 'Performance dos Imóveis',
    exportCSV: 'Exportar CSV',
    
    // Settings
    language: 'Idioma',
    theme: 'Tema',
    lightMode: 'Modo Claro',
    darkMode: 'Modo Escuro',
    systemDefault: 'Padrão do Sistema',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};