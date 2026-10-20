import React, { useState } from 'react';
import { 
  initialUser, initialBills, initialAppointments, initialTickets, faqList 
} from './data/serviplusData';
import Prototype1Flat from './components/prototypes/Prototype1Flat';
import Prototype2Material from './components/prototypes/Prototype2Material';
import Prototype3Inclusive from './components/prototypes/Prototype3Inclusive';
import AcademicDocModal from './components/common/AcademicDocModal';
import PaymentModal from './components/common/PaymentModal';
import AppointmentModal from './components/common/AppointmentModal';
import SupportModal from './components/common/SupportModal';
import { BookOpen, Layers, CheckCircle2, Award } from 'lucide-react';

export default function App() {
  // Selector del prototipo activo requerido por la rúbrica
  const [activePrototype, setActivePrototype] = useState('prototipo1'); // 'prototipo1' | 'prototipo2' | 'prototipo3'

  // Estado compartido de la MISMA interfaz (ServiPlus: pagos, citas, soporte)
  const [user, setUser] = useState(initialUser);
  const [bills, setBills] = useState(initialBills);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [tickets, setTickets] = useState(initialTickets);

  // Estados de Modales
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [paymentBill, setPaymentBill] = useState(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Manejador de Pago
  const handleConfirmPayment = (billId, method) => {
    setBills(prev => prev.map(bill => {
      if (bill.id === billId) {
        return {
          ...bill,
          status: 'Pagado',
          paidDate: 'Hoy (' + new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' }) + ')',
          paymentMethod: method
        };
      }
      return bill;
    }));
    showToast(`✓ Pago procesado exitosamente mediante ${method.toUpperCase()}. Comprobante generado.`);
  };

  // Manejador para Agendar Cita
  const handleAddAppointment = (newApp) => {
    setAppointments(prev => [newApp, ...prev]);
    showToast(`✓ Cita agendada: ${newApp.service} para el ${newApp.date} a las ${newApp.time}.`);
  };

  // Manejador para Cancelar Cita
  const handleCancelAppointment = (appId) => {
    if (window.confirm('¿Deseas cancelar esta cita agendada?')) {
      setAppointments(prev => prev.filter(a => a.id !== appId));
      showToast('Cita cancelada con éxito.');
    }
  };

  // Manejador para Crear Ticket de Soporte
  const handleAddTicket = (newTicket) => {
    setTickets(prev => [newTicket, ...prev]);
    showToast(`✓ Ticket #${newTicket.id} creado. Nuestro equipo de soporte responderá pronto.`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* BARRA SUPERIOR DE EVALUACIÓN ACADÉMICA / NAVEGACIÓN ENTRE PROTOTIPOS */}
      <header className="global-eval-bar">
        <div className="eval-brand">
          <div className="eval-badge-tag">Actividad 5</div>
          <div>
            <div className="eval-title">ServiPlus — Rediseño UX/UI</div>
            <div className="eval-subtitle">Fase 2: 3 Prototipos de la Misma Interfaz</div>
          </div>
        </div>

        {/* NAVEGACIÓN EXACTA SEGÚN SOLICITUD: Prototipo 1, Prototipo 2, Prototipo 3 */}
        <nav className="eval-prototype-selector" aria-label="Selector de prototipos">
          <button
            className={`proto-tab-btn ${activePrototype === 'prototipo1' ? 'active' : ''}`}
            onClick={() => setActivePrototype('prototipo1')}
            id="btn-prototipo-1"
          >
            <span>Prototipo 1</span>
            <small style={{ opacity: 0.8 }}>(Minimalismo / Flat)</small>
          </button>

          <button
            className={`proto-tab-btn ${activePrototype === 'prototipo2' ? 'active' : ''}`}
            onClick={() => setActivePrototype('prototipo2')}
            id="btn-prototipo-2"
          >
            <span>Prototipo 2</span>
            <small style={{ opacity: 0.8 }}>(Material / Neumorfismo)</small>
          </button>

          <button
            className={`proto-tab-btn ${activePrototype === 'prototipo3' ? 'active' : ''}`}
            onClick={() => setActivePrototype('prototipo3')}
            id="btn-prototipo-3"
          >
            <span>Prototipo 3</span>
            <small style={{ opacity: 0.8 }}>(DCU + Inclusivo / Emocional)</small>
          </button>
        </nav>

        {/* Botón de Documentación y Justificación Teórica */}
        <div className="eval-actions">
          <button
            className="eval-info-btn"
            onClick={() => setIsDocModalOpen(true)}
            title="Ver justificación técnica y comparativa teórica"
          >
            <BookOpen size={15} />
            <span>Justificación Teórica</span>
          </button>
        </div>
      </header>

      {/* Toast Notificación Global */}
      {toastMessage && (
        <div 
          style={{
            position: 'fixed',
            top: '70px',
            right: '24px',
            background: '#0f172a',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '10px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
            zIndex: 99999,
            fontSize: '13px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeIn 0.2s ease-in'
          }}
        >
          <CheckCircle2 size={16} color="#4ade80" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* RENDERIZADO DEL PROTOTIPO ACTIVO */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {activePrototype === 'prototipo1' && (
          <Prototype1Flat
            user={user}
            bills={bills}
            appointments={appointments}
            tickets={tickets}
            faqList={faqList}
            onPayBill={(bill) => setPaymentBill(bill)}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
            onOpenSupportModal={() => setIsSupportModalOpen(true)}
            onCancelAppointment={handleCancelAppointment}
          />
        )}

        {activePrototype === 'prototipo2' && (
          <Prototype2Material
            user={user}
            bills={bills}
            appointments={appointments}
            tickets={tickets}
            faqList={faqList}
            onPayBill={(bill) => setPaymentBill(bill)}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
            onOpenSupportModal={() => setIsSupportModalOpen(true)}
            onCancelAppointment={handleCancelAppointment}
          />
        )}

        {activePrototype === 'prototipo3' && (
          <Prototype3Inclusive
            user={user}
            bills={bills}
            appointments={appointments}
            tickets={tickets}
            faqList={faqList}
            onPayBill={(bill) => setPaymentBill(bill)}
            onOpenAppointmentModal={() => setIsAppointmentModalOpen(true)}
            onOpenSupportModal={() => setIsSupportModalOpen(true)}
            onCancelAppointment={handleCancelAppointment}
          />
        )}
      </div>

      {/* MODALES INTERACTIVOS GLOBALES */}
      <AcademicDocModal
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
      />

      <PaymentModal
        isOpen={!!paymentBill}
        bill={paymentBill}
        onClose={() => setPaymentBill(null)}
        onConfirmPayment={handleConfirmPayment}
      />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        onAddAppointment={handleAddAppointment}
      />

      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
        onAddTicket={handleAddTicket}
      />
    </div>
  );
}
