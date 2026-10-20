import React, { useState } from 'react';
import { 
  Plus, CreditCard, Calendar, Headphones, Zap, Wifi, Droplets, Flame, 
  ShieldCheck, ArrowUpRight, Check, AlertCircle, Info, Sparkles, SlidersHorizontal
} from 'lucide-react';

export default function Prototype2Material({
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
  const [styleVariant, setStyleVariant] = useState('material'); // 'material' | 'neumorphic'
  const [activeChip, setActiveChip] = useState('all');
  const [showTheory, setShowTheory] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);

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
      case 'Zap': return <Zap size={20} color="#005ac1" />;
      case 'Wifi': return <Wifi size={20} color="#005ac1" />;
      case 'Droplets': return <Droplets size={20} color="#005ac1" />;
      case 'Flame': return <Flame size={20} color="#005ac1" />;
      default: return <ShieldCheck size={20} color="#005ac1" />;
    }
  };

  const filteredBills = bills.filter(b => {
    if (activeChip === 'pending') return b.status === 'Pendiente';
    if (activeChip === 'paid') return b.status === 'Pagado';
    return true;
  });

  const isNeu = styleVariant === 'neumorphic';

  return (
    <div className={`proto2-container ${isNeu ? 'proto2-neumorphic' : 'proto2-material'}`}>
      {/* Banner Académico */}
      <div 
        className="prototype-academic-banner" 
        style={{ 
          background: isNeu ? '#e2e8f0' : '#e8f0fe', 
          borderColor: isNeu ? '#cbd5e1' : '#c2e7ff',
          color: isNeu ? '#1e293b' : '#041e49'
        }}
      >
        <div className="banner-content">
          <span 
            className="banner-tag"
            style={{ 
              background: isNeu ? '#475569' : '#005ac1', 
              color: '#ffffff' 
            }}
          >
            Prototipo 2
          </span>
          <span className="banner-text">
            <strong>Estilo: {isNeu ? 'Neumorfismo (Soft UI)' : 'Material Design 3 (Google M3)'}</strong> — 
            {isNeu 
              ? 'Superficies táctiles extruidas y rehundidas con iluminación dual simulada.' 
              : 'Metáfora del papel digital con capas elevadas (dp), Contenedores Tonales y FAB.'
            }
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Selector de Variante dentro de Prototipo 2 */}
          <div style={{ display: 'flex', alignItems: 'center', background: isNeu ? '#d1d5db' : '#d3e3fd', padding: '2px', borderRadius: '12px' }}>
            <button
              onClick={() => setStyleVariant('material')}
              style={{
                padding: '4px 10px',
                fontSize: '11px',
                fontWeight: '700',
                borderRadius: '10px',
                background: !isNeu ? '#005ac1' : 'transparent',
                color: !isNeu ? '#ffffff' : '#4b5563',
              }}
            >
              Material Design 3
            </button>
            <button
              onClick={() => setStyleVariant('neumorphic')}
              style={{
                padding: '4px 10px',
                fontSize: '11px',
                fontWeight: '700',
                borderRadius: '10px',
                background: isNeu ? '#1e293b' : 'transparent',
                color: isNeu ? '#ffffff' : '#4b5563',
              }}
            >
              Neumorfismo
            </button>
          </div>

          <button 
            onClick={() => setShowTheory(!showTheory)}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '600', color: isNeu ? '#1e293b' : '#005ac1' }}
          >
            <Info size={14} />
            {showTheory ? 'Ocultar Justificación' : 'Justificación de Estilo'}
          </button>
        </div>
      </div>

      {showTheory && (
        <div style={{ background: isNeu ? '#dbe1ea' : '#f0f4f9', padding: '16px 32px', fontSize: '13px', color: '#1e293b', borderBottom: '1px solid #cbd5e1' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div>
              <strong>{isNeu ? '1. Iluminación y Sombra Dual (Neumorfismo):' : '1. Elevación y Sombras Físicas (Material Design 3):'}</strong>
              <p style={{ margin: '4px 0 0', lineHeight: '1.5', color: '#475569' }}>
                {isNeu 
                  ? 'Usa dos sombras opuestas (una clara a -8px y una oscura a +8px) sobre el mismo color de fondo para simular plástico extruido suave.'
                  : 'Aplica el sistema de elevaciones dp (densidad de píxeles) para indicar jerarquía de superficie flotante sobre el lienzo principal.'
                }
              </p>
            </div>
            <div>
              <strong>{isNeu ? '2. Estados Inset Táctiles:' : '2. Contenedores Tonales y Chips M3:'}</strong>
              <p style={{ margin: '4px 0 0', lineHeight: '1.5', color: '#475569' }}>
                {isNeu
                  ? 'Al presionar un botón o enfocar un campo, la sombra se vuelve interior (inset), dando la sensación de hundimiento físico.'
                  : 'Los estados se distinguen por matices de color tonal (tonal palettes) y microinteracciones de ripple.'
                }
              </p>
            </div>
            <div>
              <strong>{isNeu ? '3. Experiencia Sensorial:' : '3. Floating Action Button (FAB):'}</strong>
              <p style={{ margin: '4px 0 0', lineHeight: '1.5', color: '#475569' }}>
                {isNeu
                  ? 'Diseño suave y tridimensional ideal para dashboards especializados o productos de estilo de vida táctil.'
                  : 'El botón flotante (FAB) provee la acción primaria inmediata según las guías oficiales de Google Material.'
                }
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header del Prototipo 2 */}
      <header 
        style={{ 
          background: isNeu ? '#e8ecf2' : '#ffffff', 
          boxShadow: isNeu ? 'none' : '0 2px 4px rgba(0,0,0,0.06)',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: isNeu ? '1px solid #cbd5e1' : 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div 
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: isNeu ? '12px' : '14px', 
              background: isNeu ? '#e8ecf2' : '#005ac1', 
              color: isNeu ? '#005ac1' : '#ffffff',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: '800', 
              fontSize: '18px',
              boxShadow: isNeu ? '4px 4px 10px #caced4, -4px -4px 10px #ffffff' : 'none'
            }}
          >
            SP
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: isNeu ? '#1e293b' : '#001a41', letterSpacing: '-0.3px' }}>
              ServiPlus
            </div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              {isNeu ? 'Panel de Control Neumórfico' : 'Material Design 3 Digital Center'}
            </div>
          </div>
        </div>

        {/* Chips de Categoría */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            className={isNeu ? `neu-btn ${activeChip === 'all' ? 'active' : ''}` : `m3-chip ${activeChip === 'all' ? 'active' : ''}`}
            onClick={() => setActiveChip('all')}
          >
            Todos los Servicios
          </button>
          <button 
            className={isNeu ? `neu-btn ${activeChip === 'pending' ? 'active' : ''}` : `m3-chip ${activeChip === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveChip('pending')}
          >
            Facturas Pendientes ({pendingBills.length})
          </button>
          <button 
            className={isNeu ? `neu-btn ${activeChip === 'paid' ? 'active' : ''}` : `m3-chip ${activeChip === 'paid' ? 'active' : ''}`}
            onClick={() => setActiveChip('paid')}
          >
            Pagados ({paidBills.length})
          </button>
        </div>

        {/* Perfil */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b' }}>{user.name}</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>{user.plan}</div>
          </div>
          <div 
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: isNeu ? '#e8ecf2' : '#d8e2ff',
              color: '#005ac1',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: '700',
              boxShadow: isNeu ? '3px 3px 6px #caced4, -3px -3px 6px #ffffff' : 'none'
            }}
          >
            CM
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main style={{ padding: '32px', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        {/* Resumen Superior con elevaciones o sombras suaves */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div className={isNeu ? 'neu-box' : 'm3-card'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b' }}>Total a Liquidar</span>
              <div style={{ padding: '8px', borderRadius: '12px', background: isNeu ? '#e8ecf2' : '#fee2e2', boxShadow: isNeu ? 'inset 2px 2px 4px #caced4, inset -2px -2px 4px #fff' : 'none' }}>
                <CreditCard size={18} color="#b91c1c" />
              </div>
            </div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: isNeu ? '#1e293b' : '#001a41' }}>
              {formatCOP(totalPendingAmount)}
            </div>
            <div style={{ fontSize: '12px', color: '#b91c1c', marginTop: '6px', fontWeight: '500' }}>
              {pendingBills.length} facturas por pagar este mes
            </div>
          </div>

          <div className={isNeu ? 'neu-box' : 'm3-card'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b' }}>Próxima Cita Reservada</span>
              <div style={{ padding: '8px', borderRadius: '12px', background: isNeu ? '#e8ecf2' : '#e0e9f8', boxShadow: isNeu ? 'inset 2px 2px 4px #caced4, inset -2px -2px 4px #fff' : 'none' }}>
                <Calendar size={18} color="#005ac1" />
              </div>
            </div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: isNeu ? '#1e293b' : '#001a41', margin: '6px 0 4px' }}>
              {appointments[0] ? appointments[0].service : 'No hay citas'}
            </div>
            <div style={{ fontSize: '12px', color: '#059669', fontWeight: '500' }}>
              {appointments[0] ? `${appointments[0].date} — ${appointments[0].time}` : 'Agenda disponible'}
            </div>
          </div>

          <div className={isNeu ? 'neu-box' : 'm3-card'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b' }}>Soporte Técnico</span>
              <div style={{ padding: '8px', borderRadius: '12px', background: isNeu ? '#e8ecf2' : '#d8e2ff', boxShadow: isNeu ? 'inset 2px 2px 4px #caced4, inset -2px -2px 4px #fff' : 'none' }}>
                <Headphones size={18} color="#005ac1" />
              </div>
            </div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: isNeu ? '#1e293b' : '#001a41' }}>
              {tickets.filter(t => t.status !== 'Resuelto').length}
            </div>
            <div style={{ fontSize: '12px', color: '#005ac1', marginTop: '6px', fontWeight: '500' }}>
              Casos en resolución activa
            </div>
          </div>
        </div>

        {/* 1. MÓDULO DE PAGOS */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: isNeu ? '#1e293b' : '#001a41', margin: 0 }}>
                1. Pagos de Servicios Digitales
              </h2>
              <span style={{ fontSize: '13px', color: '#64748b' }}>
                Paga de forma ágil tus recibos o consulta tus pagos anteriores
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {filteredBills.map((bill) => (
              <div key={bill.id} className={isNeu ? 'neu-box' : 'm3-card'} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div 
                        style={{ 
                          padding: '10px', 
                          borderRadius: '12px', 
                          background: isNeu ? '#e8ecf2' : '#e0e9f8',
                          boxShadow: isNeu ? 'inset 2px 2px 4px #caced4, inset -2px -2px 4px #fff' : 'none'
                        }}
                      >
                        {getBillIcon(bill.icon)}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: isNeu ? '#1e293b' : '#001a41', margin: 0 }}>
                          {bill.title}
                        </h3>
                        <span style={{ fontSize: '11px', color: '#64748b' }}>{bill.reference}</span>
                      </div>
                    </div>

                    <span 
                      style={{ 
                        fontSize: '11px', 
                        fontWeight: '700', 
                        padding: '4px 10px', 
                        borderRadius: '20px',
                        background: bill.status === 'Pendiente' ? '#fee2e2' : '#dcfce7',
                        color: bill.status === 'Pendiente' ? '#b91c1c' : '#15803d'
                      }}
                    >
                      {bill.status}
                    </span>
                  </div>

                  <div style={{ margin: '14px 0', padding: '12px', borderRadius: '12px', background: isNeu ? '#e0e5ec' : '#f0f4f9' }}>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      {bill.status === 'Pendiente' ? 'Fecha de Vencimiento:' : 'Pagado el:'}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>
                      {bill.dueDate || bill.paidDate}
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#005ac1', marginTop: '6px' }}>
                      {formatCOP(bill.amount)}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '12px' }}>
                  {bill.status === 'Pendiente' ? (
                    <button
                      onClick={() => onPayBill(bill)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: isNeu ? '12px' : '24px',
                        background: isNeu ? '#e8ecf2' : '#005ac1',
                        color: isNeu ? '#005ac1' : '#ffffff',
                        fontWeight: '700',
                        fontSize: '13px',
                        boxShadow: isNeu ? '4px 4px 8px #caced4, -4px -4px 8px #ffffff' : '0 2px 6px rgba(0, 90, 193, 0.3)'
                      }}
                    >
                      Pagar con PSE / Tarjeta
                    </button>
                  ) : (
                    <div style={{ textAlign: 'center', fontSize: '12px', color: '#16a34a', fontWeight: '600', padding: '8px' }}>
                      ✓ Factura Pagada al Día
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. MÓDULO DE CITAS */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: isNeu ? '#1e293b' : '#001a41', margin: 0 }}>
                2. Citas Programadas
              </h2>
              <span style={{ fontSize: '13px', color: '#64748b' }}>
                Gestión de citas virtuales y presenciales
              </span>
            </div>
            <button
              onClick={onOpenAppointmentModal}
              style={{
                padding: '10px 18px',
                borderRadius: isNeu ? '12px' : '20px',
                background: isNeu ? '#e8ecf2' : '#005ac1',
                color: isNeu ? '#005ac1' : '#ffffff',
                fontWeight: '600',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: isNeu ? '4px 4px 10px #caced4, -4px -4px 10px #ffffff' : '0 2px 6px rgba(0, 90, 193, 0.3)'
              }}
            >
              <Plus size={16} /> Agendar Cita
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
            {appointments.map((app) => (
              <div key={app.id} className={isNeu ? 'neu-box' : 'm3-card'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: '700', 
                      padding: '4px 8px', 
                      borderRadius: '8px', 
                      background: isNeu ? '#dbe1ea' : '#d8e2ff',
                      color: '#005ac1' 
                    }}
                  >
                    {app.mode}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#15803d' }}>
                    {app.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: '700', color: isNeu ? '#1e293b' : '#001a41', margin: '4px 0 8px' }}>
                  {app.service}
                </h3>

                <div style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', marginBottom: '14px' }}>
                  <div><strong>Especialista:</strong> {app.specialist}</div>
                  <div><strong>Horario:</strong> {app.date} • {app.time}</div>
                  <div><strong>Lugar:</strong> {app.location}</div>
                </div>

                <div style={{ display: 'flex', gap: '10px', borderTop: '1px solid #cbd5e1', paddingTop: '12px' }}>
                  <button
                    onClick={() => onCancelAppointment(app.id)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: isNeu ? '10px' : '16px',
                      background: isNeu ? '#e8ecf2' : '#fee2e2',
                      color: '#b91c1c',
                      fontSize: '12px',
                      fontWeight: '600',
                      boxShadow: isNeu ? '2px 2px 5px #caced4, -2px -2px 5px #ffffff' : 'none'
                    }}
                  >
                    Cancelar Cita
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. MÓDULO DE SOPORTE */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: isNeu ? '#1e293b' : '#001a41', margin: 0 }}>
                3. Mesa de Ayuda y Tickets
              </h2>
              <span style={{ fontSize: '13px', color: '#64748b' }}>
                Resuelve incidentes técnicos y requerimientos de soporte
              </span>
            </div>
            <button
              onClick={onOpenSupportModal}
              style={{
                padding: '10px 18px',
                borderRadius: isNeu ? '12px' : '20px',
                background: isNeu ? '#e8ecf2' : '#005ac1',
                color: isNeu ? '#005ac1' : '#ffffff',
                fontWeight: '600',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: isNeu ? '4px 4px 10px #caced4, -4px -4px 10px #ffffff' : '0 2px 6px rgba(0, 90, 193, 0.3)'
              }}
            >
              <Plus size={16} /> Crear Ticket
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {tickets.map((t) => (
              <div key={t.id} className={isNeu ? 'neu-box' : 'm3-card'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>{t.id}</span>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: '700', 
                      padding: '3px 8px', 
                      borderRadius: '12px',
                      background: t.status === 'Resuelto' ? '#f1f5f9' : '#d8e2ff',
                      color: t.status === 'Resuelto' ? '#475569' : '#005ac1'
                    }}
                  >
                    {t.status}
                  </span>
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: isNeu ? '#1e293b' : '#001a41', margin: '0 0 6px 0' }}>
                  {t.subject}
                </h4>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', margin: '0 0 8px 0' }}>
                  {t.lastMessage}
                </p>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                  Asesor: {t.agent} • Creado: {t.created}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Action Button (FAB) característico de Material Design */}
      {!isNeu && (
        <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1000 }}>
          {fabOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px', alignItems: 'flex-end' }}>
              <button
                onClick={() => { onOpenAppointmentModal(); setFabOpen(false); }}
                style={{
                  padding: '8px 14px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  color: '#005ac1',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  fontSize: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Calendar size={15} /> Agendar Cita
              </button>
              <button
                onClick={() => { onOpenSupportModal(); setFabOpen(false); }}
                style={{
                  padding: '8px 14px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  color: '#005ac1',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  fontSize: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Headphones size={15} /> Crear Ticket
              </button>
            </div>
          )}
          <button 
            className="m3-fab" 
            onClick={() => setFabOpen(!fabOpen)}
            title="Acción Rápida ServiPlus"
          >
            <Plus size={26} style={{ transform: fabOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }} />
          </button>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: isNeu ? '1px solid #cbd5e1' : 'none', padding: '24px 32px', textAlign: 'center', fontSize: '13px', color: '#64748b', background: isNeu ? '#e2e8f0' : '#ffffff', marginTop: 'auto' }}>
        ServiPlus • Prototipo 2: {isNeu ? 'Neumorfismo (Soft UI)' : 'Google Material Design 3 (M3)'} • Actividad Académica 5
      </footer>
    </div>
  );
}
