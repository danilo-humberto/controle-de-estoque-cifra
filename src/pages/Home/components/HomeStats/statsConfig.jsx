import { Users, Voicemail, Smartphone, Laptop, Tablet, Printer, MonitorCheck, BringToFront } from 'lucide-react';

const statsItems = [
  { icon: <Users />, label: "Funcionários", color: "text-sky-700", shadow: "bg-sky-700", key: 'func' },
  { icon: <Voicemail />, label: "Linhas", color: "text-pink-700", shadow: "bg-pink-700", key: 'linhas' },
  { icon: <Smartphone />, label: "Celulares", color: "text-emerald-700", shadow: "bg-emerald-700", tipo: "Celular" },
  { icon: <Laptop />, label: "Notebooks", color: "text-purple-700", shadow: "bg-purple-700", tipo: "Notebook" },
  { icon: <Tablet />, label: "Tablet", color: "text-purple-300", shadow: "bg-purple-300", tipo: "Tablet" },
  { icon: <Printer />, label: "Impressora", color: "text-yellow-200", shadow: "bg-yellow-200", tipo: "Impressora" },
  { icon: <MonitorCheck />, label: "Desktop", color: "text-indigo-600", shadow: "bg-indigo-600", tipo: "Desktop" },
  { icon: <BringToFront />, label: "Acessórios", color: "text-rose-400", shadow: "bg-rose-400", tipo: "Acessórios" },
];

export default statsItems