import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Video, UserCheck, AlertCircle } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, onAddAppointment }) {
  const [service, setService] = useState('Asesoría en Facturación y Tarifas');
  const [mode, setMode] = useState('Virtual');
  const [date, setDate] = useState('2026-10-29');
  const [time, setTime] = useState('09:00 AM');
  const [location, setLocation] = useState('Sede Principal (Cra 7ma #45-10, Bogotá)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: `CIT-${Math.floor(100 + Math.random() * 900)}`,
      service,
      specialist: mode === 'Virtual' ? 'Dra. Patricia Gómez' : 'Ing. Hernán Caicedo',
      mode: mode === 'Virtual' ? 'Virtual (Videollamada en línea)' : `Presencial — ${location}`,
      location: mode === 'Virtual' ? 'Enlace remitido al correo registrado' : location,
      date: new Date(date).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' }),
      time,
      status: 'Confirmada',
      notes: notes || 'Sin notas adicionales.',
    };

    onAddAppointment(newAppointment);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>
              Agendar Nueva Cita de Atención
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#64748b' }}>
              ServiPlus Agenda de Servicios Digitales y Presenciales
            </p>
          </div>
          <button onClick={onClose} style={{ padding: '6px', color: '#64748b', background: '#f1f5f9', borderRadius: '6px' }}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Tipo de Servicio */}
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
              Servicio Requerido:
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
            >
              <option value="Asesoría en Facturación y Tarifas">Asesoría en Facturación y Tarifas</option>
              <option value="Soporte Técnico de Fibra y Conectividad">Soporte Técnico de Fibra y Conectividad</option>
              <option value="Gestión de Cuentas y Contratos Digitales">Gestión de Cuentas y Contratos Digitales</option>
              <option value="Atención al Cliente Especializada">Atención al Cliente Especializada</option>
            </select>
          </div>

          {/* Modalidad: Virtual vs Presencial */}
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
              Modalidad de Atención:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setMode('Virtual')}
                style={{
                  border: mode === 'Virtual' ? '2px solid #2563eb' : '1px solid #cbd5e1',
                  background: mode === 'Virtual' ? '#eff6ff' : '#ffffff',
                  color: mode === 'Virtual' ? '#1d4ed8' : '#475569',
                  padding: '10px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600'
                }}
              >
                <Video size={16} />
                Virtual (En línea)
              </button>

              <button
                type="button"
                onClick={() => setMode('Presencial')}
                style={{
                  border: mode === 'Presencial' ? '2px solid #2563eb' : '1px solid #cbd5e1',
                  background: mode === 'Presencial' ? '#eff6ff' : '#ffffff',
                  color: mode === 'Presencial' ? '#1d4ed8' : '#475569',
                  padding: '10px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600'
                }}
              >
                <MapPin size={16} />
                Presencial en Sede
              </button>
            </div>
          </div>

          {mode === 'Presencial' && (
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
                Selecciona la Sede ServiPlus:
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
              >
                <option value="Sede Principal (Cra 7ma #45-10, Bogotá)">Sede Principal (Cra 7ma #45-10, Bogotá)</option>
                <option value="Sede Norte (Calle 100 #19-45, Bogotá)">Sede Norte (Calle 100 #19-45, Bogotá)</option>
                <option value="Sede Poblado (Cra 43A #5A-113, Medellín)">Sede Poblado (Cra 43A #5A-113, Medellín)</option>
              </select>
            </div>
          )}

          {/* Fecha y Hora */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
                Fecha Deseada:
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ width: '100%', padding: '9px 10px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
                Hora Disponible:
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ width: '100%', padding: '9px 10px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
              >
                <option value="08:30 AM">08:30 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:30 PM">04:30 PM</option>
              </select>
            </div>
          </div>

          {/* Notas */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
              Comentario o detalle para el asesor (opcional):
            </label>
            <textarea
              rows="2"
              placeholder="Indica brevemente el motivo o pregunta para preparar tu cita..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{ padding: '9px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', fontWeight: '500', color: '#475569' }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                padding: '9px 20px',
                borderRadius: '8px',
                background: '#2563eb',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '600'
              }}
            >
              Confirmar Cita en ServiPlus
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
