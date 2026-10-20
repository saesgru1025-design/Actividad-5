import React, { useState } from 'react';
import { X, HelpCircle, MessageSquare, AlertTriangle, Send } from 'lucide-react';

export default function SupportModal({ isOpen, onClose, onAddTicket }) {
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('Soporte Técnico');
  const [priority, setPriority] = useState('Media');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject.trim()) return;

    const newTicket = {
      id: `TK-${Math.floor(5000 + Math.random() * 4000)}`,
      subject,
      category,
      created: 'Hace un momento',
      status: 'En Revisión',
      priority,
      agent: 'Equipo de Soporte ServiPlus',
      lastMessage: description || 'Ticket registrado. Un asesor técnico revisará tu caso en breve.',
    };

    onAddTicket(newTicket);
    setSubject('');
    setDescription('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>
              Crear Nuevo Ticket de Soporte
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#64748b' }}>
              Centro de Atención y Mesa de Ayuda ServiPlus
            </p>
          </div>
          <button onClick={onClose} style={{ padding: '6px', color: '#64748b', background: '#f1f5f9', borderRadius: '6px' }}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Asunto */}
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
              Título o Asunto del Caso:
            </label>
            <input
              type="text"
              placeholder="Ej: Inconsistencia en cobro o falla en el router"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
              required
            />
          </div>

          {/* Categoría y Prioridad */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
                Categoría:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
              >
                <option value="Soporte Técnico">Soporte Técnico</option>
                <option value="Pagos y Facturación">Pagos y Facturación</option>
                <option value="Gestión de Cuenta">Gestión de Cuenta</option>
                <option value="Quejas y Reclamos">Quejas y Reclamos</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
                Nivel de Urgencia:
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
              >
                <option value="Baja">Baja (Consulta general)</option>
                <option value="Media">Media (Afectación parcial)</option>
                <option value="Alta">Alta (Sin servicio / Urgente)</option>
              </select>
            </div>
          </div>

          {/* Descripción */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
              Descripción detallada de la situación:
            </label>
            <textarea
              rows="3"
              placeholder="Explica qué ocurrió, mensajes de error o detalles relevantes..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', resize: 'vertical' }}
              required
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
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Send size={15} />
              Enviar Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
