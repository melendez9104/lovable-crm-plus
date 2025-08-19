// Mock data for the CRM application

export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  propertyPreferences: string;
  leadStatus: 'nuevo' | 'contactado' | 'interesado' | 'negociando' | 'cerrado';
  assignedAgent: string;
  createdAt: Date;
}

export interface Property {
  id: string;
  address: string;
  propertyType: 'casa' | 'apartamento' | 'oficina' | 'terreno' | 'comercial';
  price: number;
  status: 'available' | 'sold' | 'reserved';
  interestedClients: string[];
  createdAt: Date;
  photos: string[];
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'administrator' | 'agent' | 'assistant';
  assignedClients: string[];
  createdAt: Date;
}

export interface CalendarEvent {
  id: string;
  title: string;
  type: 'appointment' | 'task';
  date: Date;
  time: string;
  status: 'completed' | 'pending';
  assignedTo: string;
  clientId?: string;
  propertyId?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: Date;
  channelId: string;
}

export interface ChatChannel {
  id: string;
  name: string;
  type: 'direct' | 'group';
  participants: string[];
  lastMessage?: ChatMessage;
}

// Mock Clients
export const mockClients: Client[] = [
  {
    id: '1',
    name: 'María González',
    phone: '+34 612 345 678',
    email: 'maria.gonzalez@email.com',
    propertyPreferences: 'Apartamento 2-3 habitaciones, centro ciudad',
    leadStatus: 'interesado',
    assignedAgent: 'Ana García',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'João Silva',
    phone: '+55 11 98765-4321',
    email: 'joao.silva@email.com',
    propertyPreferences: 'Casa com jardim, bairro residencial',
    leadStatus: 'negociando',
    assignedAgent: 'Carlos Santos',
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    name: 'Andrea López',
    phone: '+34 654 321 987',
    email: 'andrea.lopez@email.com',
    propertyPreferences: 'Oficina comercial, zona empresarial',
    leadStatus: 'contactado',
    assignedAgent: 'Ana García',
    createdAt: new Date('2024-02-01'),
  },
  {
    id: '4',
    name: 'Pedro Oliveira',
    phone: '+55 21 91234-5678',
    email: 'pedro.oliveira@email.com',
    propertyPreferences: 'Apartamento luxo, vista mar',
    leadStatus: 'nuevo',
    assignedAgent: 'Carlos Santos',
    createdAt: new Date('2024-02-10'),
  },
];

// Mock Properties
export const mockProperties: Property[] = [
  {
    id: '1',
    address: 'Calle Mayor 123, Madrid',
    propertyType: 'apartamento',
    price: 350000,
    status: 'available',
    interestedClients: ['1', '3'],
    createdAt: new Date('2024-01-10'),
    photos: ['photo1.jpg', 'photo2.jpg'],
  },
  {
    id: '2',
    address: 'Rua das Flores 456, São Paulo',
    propertyType: 'casa',
    price: 450000,
    status: 'reserved',
    interestedClients: ['2'],
    createdAt: new Date('2024-01-18'),
    photos: ['photo3.jpg', 'photo4.jpg'],
  },
  {
    id: '3',
    address: 'Avenida Empresarial 789, Barcelona',
    propertyType: 'oficina',
    price: 250000,
    status: 'available',
    interestedClients: ['3'],
    createdAt: new Date('2024-02-05'),
    photos: ['photo5.jpg'],
  },
  {
    id: '4',
    address: 'Copacabana Beach 321, Rio de Janeiro',
    propertyType: 'apartamento',
    price: 800000,
    status: 'sold',
    interestedClients: [],
    createdAt: new Date('2024-01-25'),
    photos: ['photo6.jpg', 'photo7.jpg', 'photo8.jpg'],
  },
];

// Mock Employees
export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Ana García',
    email: 'ana.garcia@inmohub.com',
    phone: '+34 600 123 456',
    role: 'agent',
    assignedClients: ['1', '3'],
    createdAt: new Date('2023-06-01'),
  },
  {
    id: '2',
    name: 'Carlos Santos',
    email: 'carlos.santos@inmohub.com',
    phone: '+55 11 99999-8888',
    role: 'agent',
    assignedClients: ['2', '4'],
    createdAt: new Date('2023-08-15'),
  },
  {
    id: '3',
    name: 'Isabel Rodríguez',
    email: 'isabel.rodriguez@inmohub.com',
    phone: '+34 610 987 654',
    role: 'administrator',
    assignedClients: [],
    createdAt: new Date('2023-05-01'),
  },
  {
    id: '4',
    name: 'Lucas Fernandes',
    email: 'lucas.fernandes@inmohub.com',
    phone: '+55 21 97777-6666',
    role: 'assistant',
    assignedClients: [],
    createdAt: new Date('2023-10-01'),
  },
];

// Mock Calendar Events
export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Visita apartamento - María González',
    type: 'appointment',
    date: new Date('2024-02-20'),
    time: '10:00',
    status: 'pending',
    assignedTo: 'Ana García',
    clientId: '1',
    propertyId: '1',
  },
  {
    id: '2',
    title: 'Llamar a João Silva',
    type: 'task',
    date: new Date('2024-02-19'),
    time: '14:30',
    status: 'completed',
    assignedTo: 'Carlos Santos',
    clientId: '2',
  },
  {
    id: '3',
    title: 'Preparar contrato',
    type: 'task',
    date: new Date('2024-02-21'),
    time: '09:00',
    status: 'pending',
    assignedTo: 'Ana García',
    propertyId: '1',
  },
];

// Mock Chat Channels
export const mockChatChannels: ChatChannel[] = [
  {
    id: '1',
    name: 'General',
    type: 'group',
    participants: ['1', '2', '3', '4'],
  },
  {
    id: '2',
    name: 'Equipo Ventas',
    type: 'group',
    participants: ['1', '2'],
  },
  {
    id: '3',
    name: 'Ana García',
    type: 'direct',
    participants: ['3', '1'],
  },
];

// Mock Chat Messages
export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    senderId: '1',
    senderName: 'Ana García',
    message: 'Buenos días! ¿Cómo va la visita de hoy?',
    timestamp: new Date('2024-02-19T09:30:00'),
    channelId: '1',
  },
  {
    id: '2',
    senderId: '2',
    senderName: 'Carlos Santos',
    message: 'Todo perfecto, el cliente está muy interesado',
    timestamp: new Date('2024-02-19T09:35:00'),
    channelId: '1',
  },
  {
    id: '3',
    senderId: '3',
    senderName: 'Isabel Rodríguez',
    message: 'Excelente! Mantengamos el seguimiento',
    timestamp: new Date('2024-02-19T09:40:00'),
    channelId: '1',
  },
];