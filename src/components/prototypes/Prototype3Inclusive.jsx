import React, { useState } from 'react';
import { 
  Heart, Volume2, ZoomIn, Eye, Sparkles, CheckCircle2, AlertTriangle, 
  Smile, ShieldCheck, Calendar, CreditCard, Headphones, Plus, Info, 
  HelpCircle, MessageCircle, ThumbsUp, ArrowRight, User
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Prototype3Inclusive({
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
  // Configuración de Accesibilidad en Vivo
  const [fontSizeScale, setFontSizeScale] = useState('100'); // '100' | '115' | '130'
  const [contrastMode, setContrastMode] = useState('standard'); // 'standard' | 'high-contrast'
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showTheory, setShowTheory] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const pendingBills = bills.filter(b => b.status === 'Pendiente');
  const paidBills = bills.filter(b => b.status === 'Pagado');
  const totalPendingAmount = pendingBills.reduce((acc, curr) => acc + curr.amount, 0);

  const formatCOP = (num) => new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(num);

  // Asistente de Audio (Lector de pantalla Web Speech API)
  const handleReadAloud = () => {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta síntesis de voz en tiempo real.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToSpeak = `Hola ${user.name}. Bienvenido a tu portal ServiPlus. Tienes ${pendingBills.length} facturas pendientes de pago por un total de ${totalPendingAmount} pesos. Tu próxima cita está agendada para el ${appointments[0] ? appointments[0].date : 'ninguna fecha próxima'}. ¿Deseas que te guiemos para realizar un pago?`;
    
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'es-CO';
    utterance.rate = 0.95; // Un poco más pausado para mayor comprensión
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Acción de pago con feedback emocional
  const handlePayWithEmpathy = (bill) => {
    onPayBill(bill);
    // Lanzar confeti suave para reforzar el diseño emocional positivo (sensación de alivio y logro)
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const isHighContrast = contrastMode === 'high-contrast';

  return (
    <div 
      className={`proto3-container ${isHighContrast ? 'proto3-high-contrast' : 'proto3-standard'} font-scale-${fontSizeScale}`}
      style={{
        fontFamily: isDyslexicFont ? "'Lexend', sans-serif" : "'Inter', sans-serif",
        letterSpacing: isDyslexicFont ? '0.04em' : 'normal',
        lineHeight: isDyslexicFont ? '1.7' : '1.5'
      }}
    >
      {/* Banner de Enfoque Teórico DCU + Inclusivo */}
      <div 
        className="prototype-academic-banner" 
        style={{ 
          background: isHighContrast ? '#1f2937' : '#ecfdf5', 
          borderColor: isHighContrast ? '#374151' : '#a7f3d0',
          color: isHighContrast ? '#f9fafb' : '#065f46'
        }}
      >
        <div className="banner-content">
          <span 
            className="banner-tag"
            style={{ 
              background: '#15803d', 
              color: '#ffffff' 
            }}
          >
            Prototipo 3
          </span>
          <span className="banner-text">
            <strong>Estilo: Diseño Centrado en el Usuario (DCU) + Inclusivo y Emocional</strong> — 
            Accesibilidad universal WCAG AAA, soporte de voz, microcopia empática y refuerzo positivo.
          </span>
        </div>

        <button 
          onClick={() => setShowTheory(!showTheory)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: isHighContrast ? '#fde047' : '#047857' }}
        >
          <Info size={14} />
          {showTheory ? 'Ocultar Justificación' : 'Justificación de Estilo'}
        </button>
      </div>

      {showTheory && (
        <div style={{ background: isHighContrast ? '#111827' : '#f0fdf4', borderBottom: '1px solid #cbd5e1', padding: '16px 32px', fontSize: '13px', color: isHighContrast ? '#e5e7eb' : '#1e293b' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div>
              <strong style={{ color: isHighContrast ? '#fde047' : '#15803d' }}>1. Diseño Inclusivo y Accesibilidad (WCAG 2.1 AAA):</strong>
              <p style={{ margin: '4px 0 0', lineHeight: '1.5' }}>
                Zonas táctiles amplias (mínimo 48px), soporte de lector de voz interactivo, alto contraste para baja visión y tipografía especial anti-dislexia con alto espaciado.
              </p>
            </div>
            <div>
              <strong style={{ color: isHighContrast ? '#fde047' : '#15803d' }}>2. Diseño Emocional (Don Norman):</strong>
              <p style={{ margin: '4px 0 0', lineHeight: '1.5' }}>
                Nivel visceral (interfaz amable y tranquilizadora), conductual (cero tecnicismos confusos, pasos claros) y reflexivo (celebración con confeti al saldar deudas, reforzando la paz mental).
              </p>
            </div>
            <div>
              <strong style={{ color: isHighContrast ? '#fde047' : '#15803d' }}>3. Diseño Centrado en el Humano (HCD):</strong>
              <p style={{ margin: '4px 0 0', lineHeight: '1.5' }}>
                La asistente virtual empática "Sofía" guía en lenguaje natural, y todos los datos importantes cuentan con doble codificación visual (icono + texto explicativo).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* BARRA DE HERRAMIENTAS DE ACCESIBILIDAD VIVA */}
      <div 
        style={{ 
          background: isHighContrast ? '#1e1e1e' : '#f1f5f9', 
          borderBottom: '2px solid',
          borderColor: isHighContrast ? '#fde047' : '#e2e8f0',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '700', color: isHighContrast ? '#fde047' : '#334155' }}>
          <Eye size={18} />
          <span>Panel de Accesibilidad e Inclusión:</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          {/* Ajuste de Tamaño de Fuente */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: isHighContrast ? '#2d2d2d' : '#ffffff', padding: '3px 8px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
            <span style={{ fontSize: '11px', fontWeight: '600', color: isHighContrast ? '#fff' : '#64748b' }}>Tamaño de Texto:</span>
            <button 
              onClick={() => setFontSizeScale('100')} 
              style={{ padding: '3px 7px', borderRadius: '4px', fontWeight: fontSizeScale === '100' ? '800' : '400', background: fontSizeScale === '100' ? '#2563eb' : 'transparent', color: fontSizeScale === '100' ? '#fff' : 'inherit' }}
            >
              A
            </button>
            <button 
              onClick={() => setFontSizeScale('115')} 
              style={{ padding: '3px 7px', borderRadius: '4px', fontSize: '14px', fontWeight: fontSizeScale === '115' ? '800' : '400', background: fontSizeScale === '115' ? '#2563eb' : 'transparent', color: fontSizeScale === '115' ? '#fff' : 'inherit' }}
            >
              A+
            </button>
            <button 
              onClick={() => setFontSizeScale('130')} 
              style={{ padding: '3px 7px', borderRadius: '4px', fontSize: '16px', fontWeight: fontSizeScale === '130' ? '800' : '400', background: fontSizeScale === '130' ? '#2563eb' : 'transparent', color: fontSizeScale === '130' ? '#fff' : 'inherit' }}
            >
              A++
            </button>
          </div>

          {/* Modo Alto Contraste */}
          <button
            onClick={() => setContrastMode(contrastMode === 'standard' ? 'high-contrast' : 'standard')}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              background: isHighContrast ? '#fde047' : '#0f172a',
              color: isHighContrast ? '#000000' : '#ffffff',
              fontSize: '12px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Eye size={15} />
            {isHighContrast ? 'Modo Estándar Amable' : 'Alto Contraste WCAG AAA'}
          </button>

          {/* Tipografía para Dislexia */}
          <button
            onClick={() => setIsDyslexicFont(!isDyslexicFont)}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              background: isDyslexicFont ? '#15803d' : (isHighContrast ? '#374151' : '#ffffff'),
              color: isDyslexicFont ? '#ffffff' : (isHighContrast ? '#ffffff' : '#334155'),
              border: '1px solid #cbd5e1',
              fontSize: '12px',
              fontWeight: '700'
            }}
          >
            {isDyslexicFont ? '✓ Fuente Hiperlegible Activada' : 'Activar Fuente Anti-Dislexia'}
          </button>

          {/* Lector de Audio en Tiempo Real */}
          <button
            onClick={handleReadAloud}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              background: isSpeaking ? '#dc2626' : '#2563eb',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Volume2 size={16} />
            {isSpeaking ? 'Detener Voz' : 'Escuchar Resumen por Voz'}
          </button>
        </div>
      </div>

      {/* Encabezado Cálido & Empático */}
      <header 
        style={{ 
          background: isHighContrast ? '#000000' : '#ffffff', 
          borderBottom: '2px solid',
          borderColor: isHighContrast ? '#fde047' : '#e2e8f0',
          padding: '20px 32px'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div 
              style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '16px', 
                background: '#15803d', 
                color: '#ffffff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: '800', 
                fontSize: '22px' 
              }}
            >
              S+
            </div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a' }}>
                ServiPlus Contigo
              </div>
              <div style={{ fontSize: '13px', color: isHighContrast ? '#fde047' : '#15803d', fontWeight: '600' }}>
                Servicios digitales pensados para ti y tu tranquilidad
              </div>
            </div>
          </div>

          {/* Saludo Humano Personalizado */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: isHighContrast ? '#ffffff' : '#0f172a' }}>
                ¡Qué bueno verte, {user.name.split(' ')[0]}!
              </div>
              <div style={{ fontSize: '12px', color: isHighContrast ? '#cbd5e1' : '#64748b' }}>
                Plan ServiPlus Hogar Protegido
              </div>
            </div>
            <div 
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '50%', 
                background: '#dcfce7', 
                color: '#15803d', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: '700',
                fontSize: '18px',
                border: '2px solid #86efac'
              }}
            >
              😊
            </div>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ padding: '32px 24px', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        
        {/* ASISTENTE EMOCIONAL "SOFÍA" */}
        <div 
          className="inc-card"
          style={{ 
            marginBottom: '32px', 
            background: isHighContrast ? '#111111' : '#f0fdf4', 
            borderColor: isHighContrast ? '#fde047' : '#86efac',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >
          <div 
            style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              background: '#15803d', 
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '24px'
            }}
          >
            👩‍💼
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ fontSize: '13px', fontWeight: '800', color: isHighContrast ? '#fde047' : '#15803d', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Sofía • Tu Asesora ServiPlus
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: isHighContrast ? '#ffffff' : '#14532d', margin: '2px 0 4px' }}>
              "Hoy todo marcha bien. Tienes {pendingBills.length} facturas por pagar y 1 cita confirmada. Estamos contigo para lo que necesites."
            </div>
            <div style={{ fontSize: '13px', color: isHighContrast ? '#cbd5e1' : '#475569' }}>
              ¿Tienes alguna duda o prefieres asistencia guiada? Haz clic en soporte o déjanos un mensaje.
            </div>
          </div>
          <button
            className="inc-touch-btn"
            onClick={onOpenSupportModal}
            style={{
              background: '#15803d',
              color: '#ffffff',
              fontSize: '13px',
              border: isHighContrast ? '2px solid #ffffff' : 'none'
            }}
          >
            <MessageCircle size={18} />
            Hablar con Sofía
          </button>
        </div>

        {/* TARJETAS RESUMEN CLARAS Y TRANSPARENTES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '36px' }}>
          
          {/* Resumen de Pagos */}
          <div className="inc-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ padding: '8px', background: '#fee2e2', borderRadius: '10px' }}>
                <CreditCard size={22} color="#b91c1c" />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: isHighContrast ? '#fde047' : '#64748b' }}>
                Saldo Pendiente por Liquidar
              </span>
            </div>
            <div style={{ fontSize: '30px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a', margin: '6px 0' }}>
              {formatCOP(totalPendingAmount)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: isHighContrast ? '#fca5a5' : '#b91c1c', fontWeight: '600' }}>
              <AlertTriangle size={16} />
              {pendingBills.length > 0 ? `${pendingBills.length} servicios pendientes de pago` : '¡Estás completamente al día!'}
            </div>
          </div>

          {/* Resumen de Citas */}
          <div className="inc-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ padding: '8px', background: '#dbeafe', borderRadius: '10px' }}>
                <Calendar size={22} color="#1d4ed8" />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: isHighContrast ? '#fde047' : '#64748b' }}>
                Tu Próxima Cita de Asistencia
              </span>
            </div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a', margin: '8px 0 4px' }}>
              {appointments[0] ? appointments[0].service : 'No tienes citas agendadas'}
            </div>
            <div style={{ fontSize: '13px', color: isHighContrast ? '#93c5fd' : '#1d4ed8', fontWeight: '600' }}>
              {appointments[0] ? `📅 ${appointments[0].date} a las ${appointments[0].time}` : 'Puedes agendar cuando quieras'}
            </div>
          </div>

          {/* Resumen de Soporte */}
          <div className="inc-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ padding: '8px', background: '#dcfce7', borderRadius: '10px' }}>
                <Headphones size={22} color="#15803d" />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: isHighContrast ? '#fde047' : '#64748b' }}>
                Atención y Seguimiento
              </span>
            </div>
            <div style={{ fontSize: '30px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a', margin: '6px 0' }}>
              {tickets.length} Casos
            </div>
            <div style={{ fontSize: '13px', color: isHighContrast ? '#86efac' : '#15803d', fontWeight: '600' }}>
              ✓ Asesor disponible para responderte
            </div>
          </div>
        </div>

        {/* 1. MÓDULO DE PAGOS EMPÁTICOS */}
        <section style={{ marginBottom: '44px' }}>
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a', margin: 0 }}>
              1. Pagar mis Servicios Digitales
            </h2>
            <p style={{ fontSize: '14px', color: isHighContrast ? '#cbd5e1' : '#64748b', margin: '4px 0 0' }}>
              Sin cobros ocultos ni pasos difíciles. Paga con total seguridad y recibe tu comprobante de inmediato.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {bills.map((bill) => (
              <div 
                key={bill.id} 
                className="inc-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  background: bill.status === 'Pagado' 
                    ? (isHighContrast ? '#0a1f0a' : '#f0fdf4') 
                    : (isHighContrast ? '#111111' : '#ffffff')
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div 
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '12px', 
                      background: bill.status === 'Pendiente' ? '#fee2e2' : '#dcfce7',
                      color: bill.status === 'Pendiente' ? '#b91c1c' : '#15803d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '20px'
                    }}
                  >
                    {bill.status === 'Pendiente' ? '📄' : '✓'}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h3 style={{ fontSize: '17px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a', margin: 0 }}>
                        {bill.title}
                      </h3>
                      <span 
                        style={{ 
                          fontSize: '11px', 
                          fontWeight: '800', 
                          padding: '3px 8px', 
                          borderRadius: '6px',
                          background: bill.status === 'Pendiente' ? '#fee2e2' : '#dcfce7',
                          color: bill.status === 'Pendiente' ? '#991b1b' : '#15803d'
                        }}
                      >
                        {bill.status === 'Pendiente' ? '⚠️ PENDIENTE' : '✓ AL DÍA'}
                      </span>
                    </div>

                    <div style={{ fontSize: '13px', color: isHighContrast ? '#cbd5e1' : '#475569', marginTop: '4px' }}>
                      <strong>Referencia:</strong> {bill.reference} • <strong>Categoría:</strong> {bill.category}
                    </div>

                    <div style={{ fontSize: '13px', color: bill.status === 'Pendiente' ? '#dc2626' : '#15803d', fontWeight: '600', marginTop: '2px' }}>
                      {bill.status === 'Pendiente' ? `Fecha de corte: ${bill.dueDate}` : `Completado el ${bill.paidDate}`}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', color: isHighContrast ? '#cbd5e1' : '#64748b' }}>Monto total:</div>
                    <div style={{ fontSize: '22px', fontWeight: '900', color: isHighContrast ? '#fde047' : '#1e3a8a' }}>
                      {formatCOP(bill.amount)}
                    </div>
                  </div>

                  {bill.status === 'Pendiente' ? (
                    <button
                      className="inc-touch-btn"
                      onClick={() => handlePayWithEmpathy(bill)}
                      style={{
                        background: '#2563eb',
                        color: '#ffffff',
                        fontSize: '14px',
                        border: isHighContrast ? '2px solid #ffffff' : 'none'
                      }}
                    >
                      <CreditCard size={18} />
                      Pagar Factura
                    </button>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#15803d', fontWeight: '700', fontSize: '14px' }}>
                      <CheckCircle2 size={20} />
                      <span>Pago Recibido</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. MÓDULO DE CITAS ACCESIBLE */}
        <section style={{ marginBottom: '44px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a', margin: 0 }}>
                2. Mis Citas de Atención
              </h2>
              <p style={{ fontSize: '14px', color: isHighContrast ? '#cbd5e1' : '#64748b', margin: '4px 0 0' }}>
                Programa con quién y cómo deseas ser atendido (videollamada o visita presencial)
              </p>
            </div>
            <button
              className="inc-touch-btn"
              onClick={onOpenAppointmentModal}
              style={{
                background: '#15803d',
                color: '#ffffff',
                fontSize: '14px',
                border: isHighContrast ? '2px solid #ffffff' : 'none'
              }}
            >
              <Plus size={18} />
              Agendar Nueva Cita
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
            {appointments.map((app) => (
              <div key={app.id} className="inc-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', padding: '4px 10px', borderRadius: '8px', background: '#dbeafe', color: '#1e40af' }}>
                    {app.mode}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#15803d' }}>
                    ✓ {app.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a', margin: '4px 0 10px' }}>
                  {app.service}
                </h3>

                <div style={{ fontSize: '14px', color: isHighContrast ? '#e5e7eb' : '#334155', lineHeight: '1.7', marginBottom: '16px' }}>
                  <div><strong>👤 Te atenderá:</strong> {app.specialist}</div>
                  <div><strong>📅 Cuándo:</strong> {app.date} a las {app.time}</div>
                  <div><strong>📍 Dónde:</strong> {app.location}</div>
                  {app.notes && <div style={{ color: isHighContrast ? '#cbd5e1' : '#64748b', marginTop: '6px' }}>💡 <em>{app.notes}</em></div>}
                </div>

                <div style={{ display: 'flex', gap: '10px', borderTop: '2px solid #e2e8f0', paddingTop: '14px' }}>
                  <button
                    className="inc-touch-btn"
                    style={{
                      background: isHighContrast ? '#374151' : '#fee2e2',
                      color: isHighContrast ? '#fca5a5' : '#b91c1c',
                      fontSize: '13px'
                    }}
                    onClick={() => onCancelAppointment(app.id)}
                  >
                    Cancelar o Cambiar Cita
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. MÓDULO DE SOPORTE & PREGUNTAS FRECUENTES CLARAS */}
        <section style={{ marginBottom: '44px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a', margin: 0 }}>
                3. Centro de Ayuda y Preguntas
              </h2>
              <p style={{ fontSize: '14px', color: isHighContrast ? '#cbd5e1' : '#64748b', margin: '4px 0 0' }}>
                Respuestas inmediatas y acompañamiento personalizado si tienes cualquier inconveniente
              </p>
            </div>
            <button
              className="inc-touch-btn"
              onClick={onOpenSupportModal}
              style={{
                background: '#2563eb',
                color: '#ffffff',
                fontSize: '14px',
                border: isHighContrast ? '2px solid #ffffff' : 'none'
              }}
            >
              <Plus size={18} />
              Enviar Pregunta a Soporte
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {/* Tickets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: isHighContrast ? '#fde047' : '#0f172a', margin: 0 }}>
                Mis Consultas Activas
              </h3>
              {tickets.map((t) => (
                <div key={t.id} className="inc-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: isHighContrast ? '#fde047' : '#2563eb' }}>
                      Código: {t.id}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', background: '#e0e7ff', color: '#3730a3' }}>
                      {t.status}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', color: isHighContrast ? '#ffffff' : '#0f172a', margin: '4px 0' }}>
                    {t.subject}
                  </h4>
                  <p style={{ fontSize: '13px', color: isHighContrast ? '#cbd5e1' : '#475569', lineHeight: '1.5', margin: '6px 0' }}>
                    <strong>Respuesta de tu asesor:</strong> "{t.lastMessage}"
                  </p>
                  <div style={{ fontSize: '11px', color: isHighContrast ? '#9ca3af' : '#64748b' }}>
                    Atendido por: {t.agent}
                  </div>
                </div>
              ))}
            </div>

            {/* Preguntas Frecuentes Amables */}
            <div className="inc-card">
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: isHighContrast ? '#fde047' : '#0f172a', margin: '0 0 14px 0' }}>
                Preguntas Frecuentes Explicadas Fácil
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {faqList.map((faq, idx) => (
                  <div 
                    key={idx}
                    style={{
                      border: '1px solid #cbd5e1',
                      borderRadius: '10px',
                      padding: '12px',
                      background: isHighContrast ? '#1f2937' : '#ffffff'
                    }}
                  >
                    <div style={{ fontSize: '14px', fontWeight: '700', color: isHighContrast ? '#ffffff' : '#1e293b', marginBottom: '6px' }}>
                      ❓ {faq.q}
                    </div>
                    <div style={{ fontSize: '13px', color: isHighContrast ? '#cbd5e1' : '#475569', lineHeight: '1.5' }}>
                      💡 {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Inclusivo */}
      <footer 
        style={{ 
          borderTop: '2px solid',
          borderColor: isHighContrast ? '#fde047' : '#e2e8f0', 
          padding: '24px 32px', 
          textAlign: 'center', 
          fontSize: '13px', 
          color: isHighContrast ? '#ffffff' : '#64748b', 
          background: isHighContrast ? '#000000' : '#ffffff', 
          marginTop: 'auto' 
        }}
      >
        ServiPlus Accesible • Prototipo 3: Diseño Centrado en el Usuario + Inclusivo & Emocional (WCAG AAA) • Actividad Académica 5
      </footer>
    </div>
  );
}
