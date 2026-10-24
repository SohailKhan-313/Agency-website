import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState('All Services');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Contact Info - Phone number is kept for internal WhatsApp link redirection only (hidden from UI text)
  const agencyInfo = {
    name: "Doorstep Solutions",
    tagline: "Delivering Digital Excellence Right to Your Doorstep",
    whatsappRawNumber: "03470232059",
    whatsappLink: "https://wa.me/923470232059",
    email: "Skpattan850911@gmail.com",
    emailLink: "mailto:Skpattan850911@gmail.com",
    gmailWebLink: "https://mail.google.com/mail/?view=cm&fs=1&to=Skpattan850911@gmail.com",
    officeHours: "24/7 Response & Rapid Delivery"
  };

  const showToast = useCallback((message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  }, []);

  const openContactModal = useCallback((service = 'General Inquiry') => {
    setModalInitialService(service);
    setContactModalOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setContactModalOpen(false);
  }, []);

  const openWhatsApp = useCallback((customMessage) => {
    const defaultText = `Hi Doorstep Solutions! I would like to discuss a project.`;
    const message = customMessage ? encodeURIComponent(customMessage) : encodeURIComponent(defaultText);
    window.open(`https://wa.me/923470232059?text=${message}`, '_blank', 'noopener,noreferrer');
  }, []);

  // Opens Gmail webmail or standard mailto reliably
  const openEmail = useCallback((subject = 'Project Inquiry - Doorstep Solutions', body = '') => {
    const encSubject = encodeURIComponent(subject);
    const encBody = encodeURIComponent(body || 'Hi Doorstep Solutions Team,\n\nI would like to discuss a project.\n\nBest regards,');
    
    // Direct Gmail webmail compose link (reliable across all browsers without requiring local Outlook/desktop mail app)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Skpattan850911@gmail.com&su=${encSubject}&body=${encBody}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <AppContext.Provider
      value={{
        agencyInfo,
        contactModalOpen,
        modalInitialService,
        openContactModal,
        closeContactModal,
        selectedProject,
        setSelectedProject,
        activeFilter,
        setActiveFilter,
        toast,
        showToast,
        openWhatsApp,
        openEmail
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
