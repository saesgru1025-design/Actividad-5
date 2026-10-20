import React, { useState } from 'react';
import { 
  CreditCard, Calendar, Headphones, Zap, Wifi, Droplets, Flame, ShieldCheck, 
  ChevronRight, AlertCircle, CheckCircle2, Clock, Plus, ExternalLink, Info, Filter
} from 'lucide-react';

export default function Prototype1Flat({ 
  user, 
  bills, 
  appointments, 
  tickets, 
  faqList, 
  onPayBill, 
  onOpenAppointmentModal, 
  onOpenSupportModal,
  onCancelAppointment
}) {
  const [activeTab, setActiveTab] = useState('todos');
  const [billFilter, setBillFilter] = useState('all');
  const [showTheory, setShowTheory] = useState(false);

  // Totales
  const pendingBills = bills.filter(b => b.status === 'Pendiente');
  const paidBills = bills.filter(b => b.status === 'Pagado');
  const totalPendingAmount = pendingBills.reduce((acc, curr) => acc + curr.amount, 0);

  const formatCOP = (num) => new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(num);

  const getBillIcon = (iconName) => {
    switch (iconName) {
      case 'Zap': return <Zap size={18} color="#2563eb" />;
      case 'Wifi': return <Wifi size={18} color="#2563eb" />;
      case 'Droplets': return <Droplets size={18} color="#2563eb" />;
      case 'Flame': return <Flame size={18} color="#2563eb" />;
      default: return <ShieldCheck size={18} color="#2563eb" />;
    }
  };

  const filteredBills = bills.filter(b => {
    if (billFilter === 'pending') return b.status === 'Pendiente';
    if (billFilter === 'paid') return b.status === 'Pagado';
    return true;
  });

  return (
    <div className="proto1-flat-container">
      {/* Banner de Enfoque Teórico Minimalista */}
      <div className="prototype-academic-banner proto1-banner">
        <div className="banner-content">
          <span className="banner-tag">Prototipo 1</span>
          <span className="banner-text">
            <strong>Estilo: Minimalismo / Flat Design</strong> — Prioridad en claridad tipográfica, ausencia de sombras 3D y máxima eficiencia operativa.
          </span>
        </div>
        <button 
          onClick={() => setShowTheory(!showTheory)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '600', color: '#2563eb' }}
        >
          <Info size={14} />
          {showTheory ? 'Ocultar Justificación' : 'Ver Justificación de Estilo'}
        </button>
      </div>

      {showTheory && (
        <div style={{ background: '#f1f5f9', borderBottom: '1px solid #cbd5e1', padding: '16px 32px', fontSize: '13px', color: '#334155' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div>
              <strong style={{ color: '#0f172a' }}>1. Filosofía Bidimensional (2D):</strong>
              <p style={{ margin: '4px 0 0', lineHeight: '1.5' }}>
                Se eliminan todas las texturas, biseles y sombras ficticias. La jerarquía se establece con el peso y escala de la tipografía <em>Inter</em> y delimitadores de 1px.
              </p>
            </div>
            <div>
              <strong style={{ color: '#0f172a' }}>2. Espacio Negativo (Whitespace):</strong>
              <p style={{ margin: '4px 0 0', lineHeight: '1.5' }}>
                El espacio en blanco actúa como elemento activo de descanso visual, reduciendo el tiempo de escaneo visual (Ley de Hick-Hyman).
              </p>
            </div>
            <div>
              <strong style={{ color: '#0f172a' }}>3. Funcionalidad Sin Distracciones:</strong>
              <p style={{ margin: '4px 0 0', lineHeight: '1.5' }}>
                Botones con colores sólidos corporativos (#2563eb) y estados planos directos para resolver pagos, citas y tickets al instante.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header del Prototipo 1 */}
      <header className="proto1-header">
        <div className="proto1-brand">
          <div className="proto1-logo-icon">S+</div>
          <span>ServiPlus</span>
          <span style={{ fontSize: '12px', fontWeight: '400', color: '#64748b', marginLeft: '6px', borderLeft: '1px solid #cbd5e1', paddingLeft: '8px' }}>
            Portal de Servicios Digitales
          </span>
        </div>

        <nav className="proto1-nav">
          <button 
            className={`proto1-nav-item ${activeTab === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            Vista Integral
          </button>
          <button 
            className={`proto1-nav-item ${activeTab === 'pagos' ? 'active' : ''}`}
            onClick={() => setActiveTab('pagos')}
          >
            Pagos ({pendingBills.length})
          </button>
          <button 
            className={`proto1-nav-item ${activeTab === 'citas' ? 'active' : ''}`}
            onClick={() => setActiveTab('citas')}
          >
            Citas ({appointments.length})
          </button>
          <button 
            className={`proto1-nav-item ${activeTab === 'soporte' ? 'active' : ''}`}
            onClick={() => setActiveTab('soporte')}
          >
            Soporte ({tickets.length})
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>{user.name}</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>Cuenta: {user.accountId}</div>
          </div>
          <div style={{ width: '36px', height: '36px', background: '#0f172a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px' }}>
            CM
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main style={{ padding: '32px', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        {/* Métricas / KPIs Planos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div className="proto1-kpi">
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Saldo Pendiente de Pago
            </span>
            <div className="proto1-kpi-value">{formatCOP(totalPendingAmount)}</div>
            <div style={{ fontSize: '12px', color: '#e11d48', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <AlertCircle size={14} />
              {pendingBills.length} facturas requieren pago
            </div>
          </div>

          <div className="proto1-kpi">
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Próxima Cita Agendada
            </span>
            <div className="proto1-kpi-value" style={{ fontSize: '20px', margin: '14px 0 4px' }}>
              {appointments[0] ? appointments[0].date : 'Sin citas agendadas'}
            </div>
            <div style={{ fontSize: '12px', color: '#059669', fontWeight: '500' }}>
              {appointments[0] ? `${appointments[0].time} — ${appointments[0].service}` : 'Agenda disponible hoy'}
            </div>
          </div>

          <div className="proto1-kpi">
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Casos de Soporte Activos
            </span>
            <div className="proto1-kpi-value">
              {tickets.filter(t => t.status !== 'Resuelto').length}
            </div>
            <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: '500' }}>
              Último caso en revisión técnica
            </div>
          </div>
        </div>

        {/* SECCIÓN 1: PAGOS DIGITALES */}
        {(activeTab === 'todos' || activeTab === 'pagos') && (
          <section style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '2px solid #0f172a', paddingBottom: '10px' }}>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                  1. Módulo de Pagos Digitales
                </h2>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Liquidación, pago inmediato y registro histórico de servicios públicos y digitales
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setBillFilter('all')}
                  style={{
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    border: '1px solid #cbd5e1',
                    background: billFilter === 'all' ? '#0f172a' : '#fff',
                    color: billFilter === 'all' ? '#fff' : '#475569'
                  }}
                >
                  Todas ({bills.length})
                </button>
                <button
                  onClick={() => setBillFilter('pending')}
                  style={{
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    border: '1px solid #cbd5e1',
                    background: billFilter === 'pending' ? '#0f172a' : '#fff',
                    color: billFilter === 'pending' ? '#fff' : '#475569'
                  }}
                >
                  Pendientes ({pendingBills.length})
                </button>
                <button
                  onClick={() => setBillFilter('paid')}
                  style={{
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    border: '1px solid #cbd5e1',
                    background: billFilter === 'paid' ? '#0f172a' : '#fff',
                    color: billFilter === 'paid' ? '#fff' : '#475569'
                  }}
                >
                  Pagadas ({paidBills.length})
                </button>
              </div>
            </div>

            <div style={{ border: '1px solid #e2e8f0', background: '#fff' }}>
              <table className="proto1-table">
                <thead>
                  <tr>
                    <th>Servicio / Factura</th>
                    <th>Referencia</th>
                    <th>Categoría</th>
                    <th>Fecha Límite / Pago</th>
                    <th>Monto</th>
                    <th>Estado</th>
                    <th style={{ textAlign: 'right' }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBills.map((bill) => (
                    <tr key={bill.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ padding: '6px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                            {getBillIcon(bill.icon)}
                          </div>
                          <span style={{ fontWeight: '600', color: '#0f172a' }}>{bill.title}</span>
                        </div>
                      </td>
                      <td style={{ fontFamily: 'monospace', color: '#475569' }}>{bill.reference}</td>
                      <td>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>{bill.category}</span>
                      </td>
                      <td>
                        <span style={{ color: bill.status === 'Pendiente' ? '#e11d48' : '#64748b', fontSize: '13px' }}>
                          {bill.dueDate || bill.paidDate}
                        </span>
                      </td>
                      <td style={{ fontWeight: '700', color: '#0f172a', fontSize: '15px' }}>
                        {formatCOP(bill.amount)}
                      </td>
                      <td>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.5px',
                            padding: '4px 8px',
                            background: bill.status === 'Pendiente' ? '#fee2e2' : '#dcfce7',
                            color: bill.status === 'Pendiente' ? '#991b1b' : '#166534',
                          }}
                        >
                          {bill.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        {bill.status === 'Pendiente' ? (
                          <button
                            className="proto1-btn-primary"
                            onClick={() => onPayBill(bill)}
                          >
                            Pagar Ahora
                          </button>
                        ) : (
                          <span style={{ fontSize: '12px', color: '#16a34a', fontWeight: '600' }}>
                            Comprobante Listo ✓
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* SECCIÓN 2: GESTIÓN DE CITAS */}
        {(activeTab === 'todos' || activeTab === 'citas') && (
          <section style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '2px solid #0f172a', paddingBottom: '10px' }}>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                  2. Módulo de Citas y Atención
                </h2>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Programación de citas para asesoría técnica, presencial o virtual
                </span>
              </div>
              <button
                className="proto1-btn-primary"
                onClick={onOpenAppointmentModal}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Plus size={16} /> Agendar Cita
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '16px' }}>
              {appointments.map((app) => (
                <div key={app.id} className="proto1-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: '#2563eb', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        {app.id} • {app.mode}
                      </span>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '4px 0 0' }}>
                        {app.service}
                      </h3>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: '700', background: '#dcfce7', color: '#15803d', padding: '3px 8px' }}>
                      {app.status}
                    </span>
                  </div>

                  <div style={{ fontSize: '13px', color: '#475569', marginBottom: '16px', lineHeight: '1.6' }}>
                    <div><strong>Especialista:</strong> {app.specialist}</div>
                    <div><strong>Fecha:</strong> {app.date} a las {app.time}</div>
                    <div><strong>Ubicación:</strong> {app.location}</div>
                    {app.notes && <div style={{ color: '#64748b', marginTop: '4px' }}><em>Nota: {app.notes}</em></div>}
                  </div>

                  <div style={{ display: 'flex', gap: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
                    <button
                      className="proto1-btn-secondary"
                      style={{ fontSize: '12px', padding: '6px 12px' }}
                      onClick={() => alert(`Enlace de acceso a la cita ${app.id} copiado al portapapeles.`)}
                    >
                      Copiar Enlace
                    </button>
                    <button
                      className="proto1-btn-secondary"
                      style={{ fontSize: '12px', padding: '6px 12px', color: '#b91c1c' }}
                      onClick={() => onCancelAppointment(app.id)}
                    >
                      Cancelar Cita
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECCIÓN 3: SOPORTE Y MESA DE AYUDA */}
        {(activeTab === 'todos' || activeTab === 'soporte') && (
          <section style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '2px solid #0f172a', paddingBottom: '10px' }}>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                  3. Módulo de Soporte y Atención
                </h2>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Tickets de seguimiento técnico, reclamos y preguntas frecuentes
                </span>
              </div>
              <button
                className="proto1-btn-primary"
                onClick={onOpenSupportModal}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Plus size={16} /> Crear Ticket de Soporte
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
              {/* Lista de Tickets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tickets.map((t) => (
                  <div key={t.id} className="proto1-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div>
                        <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>{t.id} • {t.category}</span>
                        <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '2px 0 0' }}>
                          {t.subject}
                        </h4>
                      </div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          padding: '3px 8px',
                          background: t.status === 'Resuelto' ? '#f1f5f9' : '#dbeafe',
                          color: t.status === 'Resuelto' ? '#475569' : '#1d4ed8'
                        }}
                      >
                        {t.status}
                      </span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 10px 0', lineHeight: '1.5' }}>
                      <strong>Respuesta de {t.agent}:</strong> {t.lastMessage}
                    </p>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                      Registrado: {t.created} • Prioridad: {t.priority}
                    </div>
                  </div>
                ))}
              </div>

              {/* Preguntas Frecuentes Rápidas */}
              <div className="proto1-card">
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', marginBottom: '14px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                  Preguntas Frecuentes (FAQ)
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {faqList.map((faq, fIdx) => (
                    <div key={fIdx}>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>
                        {faq.q}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer Plano */}
      <footer style={{ borderTop: '1px solid #e2e8f0', padding: '24px 32px', textAlign: 'center', fontSize: '13px', color: '#64748b', background: '#f8fafc', marginTop: 'auto' }}>
        ServiPlus S.A.S. • Prototipo 1: Implementación estricta de Minimalismo / Flat Design • Actividad Académica 5
      </footer>
    </div>
  );
}
