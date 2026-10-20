export const initialUser = {
  name: 'Carlos Andrés Mendoza',
  email: 'carlos.mendoza@serviplus.com.co',
  accountId: 'SP-849204',
  plan: 'ServiPlus Familiar & Hogar',
  memberSince: 'Mayo 2024',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
};

export const initialBills = [
  {
    id: 'FAC-101',
    title: 'Energía Eléctrica Enel',
    reference: 'REF-884920',
    category: 'Energía',
    amount: 145000,
    dueDate: '28 Oct 2026',
    status: 'Pendiente',
    icon: 'Zap',
    isUrgent: true,
  },
  {
    id: 'FAC-102',
    title: 'Internet Fibra Óptica 300MB',
    reference: 'REF-309112',
    category: 'Internet & Telecom',
    amount: 89900,
    dueDate: '25 Oct 2026',
    status: 'Pendiente',
    icon: 'Wifi',
    isUrgent: false,
  },
  {
    id: 'FAC-103',
    title: 'Acueducto y Alcantarillado',
    reference: 'REF-771923',
    category: 'Agua',
    amount: 62300,
    dueDate: '02 Nov 2026',
    status: 'Pendiente',
    icon: 'Droplets',
    isUrgent: false,
  },
  {
    id: 'FAC-104',
    title: 'Gas Natural Domiciliario',
    reference: 'REF-119280',
    category: 'Gas',
    amount: 41800,
    paidDate: '12 Oct 2026',
    status: 'Pagado',
    icon: 'Flame',
    isUrgent: false,
  },
  {
    id: 'FAC-105',
    title: 'Soporte Técnico ServiPlus Care',
    reference: 'REF-550189',
    category: 'Membresía',
    amount: 25000,
    paidDate: '05 Oct 2026',
    status: 'Pagado',
    icon: 'ShieldCheck',
    isUrgent: false,
  },
];

export const initialAppointments = [
  {
    id: 'CIT-201',
    service: 'Asesoría en Facturación y Tarifas',
    specialist: 'Dra. Diana Carolina Rivas',
    mode: 'Virtual (Videollamada segura)',
    location: 'Enlace enviado a tu correo',
    date: '24 de Octubre, 2026',
    time: '10:30 AM',
    status: 'Confirmada',
    notes: 'Tener a mano el último extracto o recibo digital.',
  },
  {
    id: 'CIT-202',
    service: 'Mantenimiento Preventivo de Conexión',
    specialist: 'Ing. Mateo Morales',
    mode: 'Presencial',
    location: 'Sede Principal ServiPlus (Cra 7ma #45-10, Bogotá)',
    date: '03 de Noviembre, 2026',
    time: '03:00 PM',
    status: 'Programada',
    notes: 'Presentar documento de identidad y código de reserva.',
  },
];

export const initialTickets = [
  {
    id: 'TK-4092',
    subject: 'Aclaración de cobro doble PSE en factura septiembre',
    category: 'Pagos y Facturación',
    created: 'Ayer, 16:40',
    status: 'En Revisión',
    priority: 'Alta',
    agent: 'Mariana Gómez (Soporte Financiero)',
    lastMessage: 'Validamos con el banco receptor y tu saldo a favor se aplicará en el próximo corte.',
  },
  {
    id: 'TK-3812',
    subject: 'Solicitud de ampliación de cobertura Wi-Fi en segundo piso',
    category: 'Soporte Técnico',
    created: '14 Oct 2026',
    status: 'Resuelto',
    priority: 'Media',
    agent: 'Camilo Torres',
    lastMessage: 'Se calibró la potencia del router remotamente. Pruebas de velocidad satisfactorias.',
  },
  {
    id: 'TK-3501',
    subject: 'Actualización de datos personales y teléfono de contacto',
    category: 'Gestión de Cuenta',
    created: '28 Sep 2026',
    status: 'Resuelto',
    priority: 'Baja',
    agent: 'Sistema Automático',
    lastMessage: 'Tus datos fueron actualizados en la base central ServiPlus.',
  },
];

export const faqList = [
  {
    q: '¿Cómo puedo pagar varias facturas en una sola transacción?',
    a: 'En la sección de Pagos, selecciona las casillas de verificación de las facturas pendientes y haz clic en "Pagar Selección" mediante PSE, tarjeta de crédito o billetera digital.',
  },
  {
    q: '¿Con cuánta anticipación puedo cancelar o reprogramar una cita?',
    a: 'Puedes reprogramar o cancelar tus citas sin penalidad hasta 2 horas antes del horario reservado desde tu panel de usuario.',
  },
  {
    q: '¿Cuál es el tiempo promedio de respuesta en soporte técnico?',
    a: 'Nuestros asesores responden en menos de 15 minutos en horario hábil y el chat inteligente está disponible 24/7 para gestiones inmediatas.',
  },
];

export const academicComparison = [
  {
    prototipo: 'Prototipo 1',
    estilo: 'Minimalismo / Flat Design',
    objetivo: 'Eliminar toda distracción visual, priorizando la legibilidad, la jerarquía tipográfica y la rapidez de ejecución operativa.',
    principiosClave: [
      'Estética bidimensional pura (sin gradientes ni sombras 3D artificiales)',
      'Espacio negativo generoso (whitespace) como elemento activo de separación',
      'Paleta cromática reducida y sobria con contrastes nítidos',
      'Iconografía outline limpia y tipografía sans-serif neutral (Inter)',
    ],
    psicologiaColor: 'Blanco puro, gris pizarra (#0f172a / #f8fafc) y azul cobalto (#1d4ed8) que proyecta sobriedad, eficiencia y transparencia bancaria.',
    audienciaIdeal: 'Usuarios analíticos o que buscan resolver trámites de forma inmediata sin carga cognitiva ni adornos.',
  },
  {
    prototipo: 'Prototipo 2',
    estilo: 'Material Design / Neumorfismo',
    objetivo: 'Aportar tridimensionalidad y metáforas tangibles del mundo físico mediante elevaciones (dp), superficies interactuables y componentes táctiles.',
    principiosClave: [
      'Metáfora del papel digital y capas elevadas con sombras realistas de Material You (M3)',
      'Botón de Acción Flotante (FAB) y State Layers (efectos ripple/onda al pulsar)',
      'Chips de filtrado contextual y contenedores tonales para jerarquía visual',
      'Modo complementario de Neumorfismo (Soft UI) con sombras cóncavas/convexas extruidas',
    ],
    psicologiaColor: 'Azul Google M3 (#005ac1), tonal container (#d8e2ff) y fondo neutral suave (#fdfcff) que transmiten tecnología moderna y predictibilidad.',
    audienciaIdeal: 'Usuarios acostumbrados a ecosistemas móviles (Android/Google) y amantes de la respuesta táctil interactiva.',
  },
  {
    prototipo: 'Prototipo 3',
    estilo: 'Diseño Centrado en el Usuario + Inclusivo / Emocional',
    objetivo: 'Garantizar accesibilidad universal (WCAG AAA) y conectar empáticamente con el usuario, reduciendo el estrés ante pagos o trámites.',
    principiosClave: [
      'Panel de accesibilidad interactivo (escalador tipográfico, alto contraste, fuente para dislexia)',
      'Asistente de lectura por voz (Web Speech API) y doble codificación (icono + texto claro)',
      'Diseño emocional con microcopia humana, empática y libre de tecnicismos intimidantes',
      'Feedback celebratorio positivo (confeti y felicitaciones) que refuerza el alivio tras pagar o agendar',
    ],
    psicologiaColor: 'Tonos cálidos y reconfortantes (verde esperanza suave #15803d, ámbar reconfortante y azul accesible #1e40af) con contrastes AAA validados.',
    audienciaIdeal: 'Población diversa, adultos mayores, personas con baja visión, dislexia o usuarios que buscan un trato humano y cero ansiedad.',
  },
];
