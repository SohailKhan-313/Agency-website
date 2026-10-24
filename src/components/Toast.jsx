import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast.show) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 size={18} color="#10B981" />;
      case 'error':
        return <AlertCircle size={18} color="#EF4444" />;
      default:
        return <Info size={18} color="var(--pink-500)" />;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1100,
        animation: 'slideUpFade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        background: '#FFFFFF',
        color: 'var(--slate-800)',
        padding: '0.85rem 1.4rem',
        borderRadius: 'var(--radius-full)',
        boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.2), 0 0 0 1px var(--pink-border)',
        fontSize: '0.92rem',
        fontWeight: 600,
        maxWidth: '90vw'
      }}
    >
      {getIcon()}
      <span>{toast.message}</span>
    </div>
  );
};
