import React, { useState } from 'react';
import { X, CreditCard, Landmark, Smartphone, CheckCircle, Shield, AlertCircle } from 'lucide-react';

export default function PaymentModal({ isOpen, bill, onClose, onConfirmPayment }) {
  const [method, setMethod] = useState('pse');
  const [bank, setBank] = useState('Bancolombia');
  const [phoneNumber, setPhoneNumber] = useState('310 987 6543');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4092');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen || !bill) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onConfirmPayment(bill.id, method);
      onClose();
    }, 800);
  };

  const formattedAmount = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(bill.amount);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>
              Pagar Servicio Digital
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#64748b' }}>
              ServiPlus Pagos Seguros en Línea
            </p>
          </div>
          <button onClick={onClose} style={{ padding: '6px', color: '#64748b', background: '#f1f5f9', borderRadius: '6px' }}>
            <X size={18} />
          </button>
        </div>

        {/* Resumen de la Factura */}
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Concepto:</span>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>{bill.title}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Referencia de Pago:</span>
            <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#334155' }}>{bill.reference}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Fecha Límite:</span>
            <span style={{ fontSize: '13px', color: '#e11d48', fontWeight: '500' }}>{bill.dueDate}</span>
          </div>
          <div style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '10px', marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>Total a Pagar:</span>
            <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>{formattedAmount}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Métodos de Pago */}
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>
            Selecciona tu método de pago preferido:
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '16px' }}>
            <button
              type="button"
              onClick={() => setMethod('pse')}
              style={{
                border: method === 'pse' ? '2px solid #2563eb' : '1px solid #cbd5e1',
                background: method === 'pse' ? '#eff6ff' : '#ffffff',
                padding: '10px 8px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: '600',
                color: method === 'pse' ? '#1d4ed8' : '#475569'
              }}
            >
              <Landmark size={20} />
              PSE Bancos
            </button>

            <button
              type="button"
              onClick={() => setMethod('card')}
              style={{
                border: method === 'card' ? '2px solid #2563eb' : '1px solid #cbd5e1',
                background: method === 'card' ? '#eff6ff' : '#ffffff',
                padding: '10px 8px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: '600',
                color: method === 'card' ? '#1d4ed8' : '#475569'
              }}
            >
              <CreditCard size={20} />
              Tarjeta Débito/Crédito
            </button>

            <button
              type="button"
              onClick={() => setMethod('wallet')}
              style={{
                border: method === 'wallet' ? '2px solid #2563eb' : '1px solid #cbd5e1',
                background: method === 'wallet' ? '#eff6ff' : '#ffffff',
                padding: '10px 8px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: '600',
                color: method === 'wallet' ? '#1d4ed8' : '#475569'
              }}
            >
              <Smartphone size={20} />
              Billetera (Nequi/Daviplata)
            </button>
          </div>

          {/* Formulario condicional según método */}
          {method === 'pse' && (
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#64748b', marginBottom: '4px' }}>
                Entidad Financiera / Banco:
              </label>
              <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
              >
                <option value="Bancolombia">Bancolombia (Personas / Negocios)</option>
                <option value="Davivienda">Davivienda</option>
                <option value="Banco de Bogotá">Banco de Bogotá</option>
                <option value="BBVA Colombia">BBVA Colombia</option>
                <option value="Scotiabank Colpatria">Scotiabank Colpatria</option>
              </select>
            </div>
          )}

          {method === 'card' && (
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#64748b', marginBottom: '4px' }}>
                Número de Tarjeta Registrada:
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
              />
            </div>
          )}

          {method === 'wallet' && (
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#64748b', marginBottom: '4px' }}>
                Número de Celular para Autorización:
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px' }}
              />
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#16a34a', marginBottom: '20px' }}>
            <Shield size={16} />
            <span>Transacción encriptada con certificado SSL de 256 bits</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              disabled={isProcessing}
              style={{ padding: '9px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', fontWeight: '500', color: '#475569' }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isProcessing}
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
              {isProcessing ? 'Procesando pago seguro...' : `Confirmar y Pagar ${formattedAmount}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
