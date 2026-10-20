import React from 'react';
import { X, BookOpen, Award, CheckCircle2, Layers, Heart, Sparkles } from 'lucide-react';
import { academicComparison } from '../../data/serviplusData';

export default function AcademicDocModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '850px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ background: '#2563eb', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>
                DOCUMENTO TÉCNICO
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                Fase 2: Comparativa de Paradigmas de Diseño — ServiPlus
              </h2>
            </div>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
              Análisis comparativo de los 3 prototipos de la misma interfaz según los requerimientos de la actividad.
            </p>
          </div>
          <button 
            onClick={onClose} 
            style={{ padding: '6px', borderRadius: '8px', color: '#64748b', background: '#f1f5f9' }}
            title="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Resumen del Contexto de Negocio */}
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Award size={16} color="#2563eb" /> Caso de Estudio: Rediseño Integral de ServiPlus
          </h3>
          <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
            ServiPlus centraliza tres servicios críticos para el usuario: <strong>Pagos digitales</strong> (servicios públicos y suscripciones), <strong>Citas de atención</strong> (canales presenciales y virtuales) y <strong>Soporte</strong> (tickets y asistencia). Para este ejercicio práctico, se implementó la <em>misma arquitectura funcional y datos</em> sobre tres filosofías de diseño de interacción (HCI):
          </p>
        </div>

        {/* Comparativa detallada de los 3 Prototipos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {academicComparison.map((item, idx) => (
            <div 
              key={idx} 
              style={{ 
                border: '1px solid #e2e8f0', 
                borderRadius: '12px', 
                padding: '18px', 
                background: idx === 0 ? '#fafafa' : idx === 1 ? '#f8fafc' : '#fcfbf7' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ 
                    fontWeight: '800', 
                    fontSize: '12px', 
                    background: idx === 0 ? '#0f172a' : idx === 1 ? '#005ac1' : '#15803d',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}>
                    {item.prototipo}
                  </span>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>
                    {item.estilo}
                  </h4>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#334155', marginBottom: '12px', lineHeight: '1.5' }}>
                <strong>Propósito de UX:</strong> {item.objetivo}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase' }}>
                    Principios y Heurísticas:
                  </span>
                  <ul style={{ margin: '6px 0 0 0', paddingLeft: '18px', fontSize: '12.5px', color: '#475569', lineHeight: '1.6' }}>
                    {item.principiosClave.map((p, pIdx) => (
                      <li key={pIdx}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase' }}>
                      Cromática y Percepción:
                    </span>
                    <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#475569', lineHeight: '1.5' }}>
                      {item.psicologiaColor}
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase' }}>
                      Audiencia Objetivo:
                    </span>
                    <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#475569', lineHeight: '1.5' }}>
                      {item.audienciaIdeal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabla de Heurísticas de Usabilidad de Nielsen */}
        <div style={{ marginTop: '24px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
            Cumplimiento Heurístico Transversal (Jakob Nielsen)
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', fontSize: '12px', color: '#475569' }}>
            <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '8px' }}>
              <strong>1. Visibilidad del Estado del Sistema:</strong> Estados en tiempo real para facturas (Pagado / Pendiente) y tickets.
            </div>
            <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '8px' }}>
              <strong>2. Control y Libertad del Usuario:</strong> Modales cancelables, opciones de reprogramar citas y confirmaciones.
            </div>
            <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '8px' }}>
              <strong>3. Prevención de Errores:</strong> Formularios guiados paso a paso con validaciones previas al envío.
            </div>
          </div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            onClick={onClose}
            style={{ 
              background: '#0f172a', 
              color: '#ffffff', 
              padding: '10px 20px', 
              borderRadius: '8px', 
              fontSize: '13px', 
              fontWeight: '600' 
            }}
          >
            Entendido, volver a los prototipos
          </button>
        </div>
      </div>
    </div>
  );
}
