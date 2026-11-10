import { useState } from 'react';
import './App.css';

// Módulos del Curso
const COURSE_MODULES = [
  {
    id: 'm1',
    number: 'MÓDULO 01',
    title: 'El Manifiesto del Vibe Coding',
    description: 'Transforma tu mentalidad: pasa de escribir líneas de código a dirigir arquitecturas de software guiadas por IA.',
    topics: [
      'El Bucle de Karpathy: Especificación ➔ Generación ➔ Vibe Check',
      'Configuración de Antigravity IDE y React 19',
      'Desmitificando el Vibe Coding: cuándo delegar y cuándo auditar'
    ]
  },
  {
    id: 'm2',
    number: 'MÓDULO 02',
    title: 'Ingeniería de Prompts para UI React',
    description: 'Aprende a formular prompts deterministas y modulares que producen componentes limpios sin deuda técnica.',
    topics: [
      'Design Tokens y Context Injection en tus prompts',
      'Estructuras de datos y hooks reactivos generados con precisión',
      'Patrones de Glassmorphism, Micro-interacciones y accesibilidad'
    ]
  },
  {
    id: 'm3',
    number: 'MÓDULO 03',
    title: 'Agentes Autónomos & Subagentes en Acción',
    description: 'Multiplica tu capacidad orquestando flujos paralelos con agentes para research, pruebas y refactor.',
    topics: [
      'Delegación de tareas complejas a subagentes especializados',
      'Depuración asistida por terminal y corrección en tiempo real',
      'Integración fluida de APIs externas y librerías modernas'
    ]
  },
  {
    id: 'm4',
    number: 'MÓDULO 04',
    title: 'De Idea a Producción (Vibe Ops)',
    description: 'Cierra el ciclo llevando tus proyectos de React al mundo real con despliegues automatizados y pruebas sólidas.',
    topics: [
      'Generación de tests unitarios y validación estricta',
      'Optimización de bundle, lazy loading y SEO',
      'Deploy continuo en la nube y presentación de proyecto final'
    ]
  }
];

// Presets del simulador de Vibe Coding
const VIBE_PRESETS = [
  {
    id: 'crypto',
    label: '💳 Tarjeta Cripto Neón',
    prompt: 'Genera un componente React de tarjeta cripto con balance animado, gradiente esmeralda/cyan y botón de recarga.'
  },
  {
    id: 'lofi',
    label: '🎵 Reproductor Lofi',
    prompt: 'Crea un reproductor de audio minimalista con visualizador de barras de onda y estado de reproducción.'
  },
  {
    id: 'quantum',
    label: '⚡ Interruptor Cuántico',
    prompt: 'Diseña un toggle interactivo con efecto de sobrecarga cuántica, partículas de energía y cambio de estado.'
  }
];

export default function App() {
  // Estado del Estudiante
  const [studentName, setStudentName] = useState('Alex Dev');
  
  // Estado de los módulos completados
  const [completedModules, setCompletedModules] = useState(['m1']);
  
  // Estado del Simulador Vibe
  const [activePreset, setActivePreset] = useState('crypto');
  const [promptText, setPromptText] = useState(VIBE_PRESETS[0].prompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [activeWidget, setActiveWidget] = useState('crypto');
  
  // Mini estados interactivos para los widgets
  const [cryptoBalance, setCryptoBalance] = useState(2.845);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [isQuantumOn, setIsQuantumOn] = useState(true);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Toggle de módulos
  const toggleModule = (id) => {
    if (completedModules.includes(id)) {
      setCompletedModules(completedModules.filter((mId) => mId !== id));
    } else {
      setCompletedModules([...completedModules, id]);
    }
  };

  // Cálculo de progreso
  const progressPercentage = Math.round((completedModules.length / COURSE_MODULES.length) * 100);

  // Manejador del simulador Vibe Coding
  const handleGenerate = () => {
    setIsGenerating(true);
    setGenerationStep('Analizando intención y contexto de React...');
    
    setTimeout(() => {
      setGenerationStep('Sintetizando componentes JSX y lógica de estado...');
    }, 600);

    setTimeout(() => {
      setGenerationStep('Aplicando diseño glassmorphism y micro-interacciones...');
    }, 1200);

    setTimeout(() => {
      setIsGenerating(false);
      setActiveWidget(activePreset);
      setGenerationStep('');
    }, 1800);
  };

  // Seleccionar preset
  const selectPreset = (preset) => {
    setActivePreset(preset.id);
    setPromptText(preset.prompt);
  };

  // Copiar prompt
  const copyPromptToClipboard = () => {
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="app-container">
      {/* Barra de Navegación */}
      <nav className="navbar">
        <div className="logo-wrapper">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <div className="logo-title">
            VibeCoding<span>.react</span>
          </div>
        </div>

        <div className="nav-badges">
          <div className="badge-live">
            <span className="pulse-dot"></span>
            Cohorte 2026 • Modo Activo
          </div>
        </div>
      </nav>

      {/* Sección Hero */}
      <header className="hero-section">
        <div className="hero-pill">
          <span>✨</span> La Nueva Era del Desarrollo Frontend
        </div>
        
        <h1 className="hero-title">
          Curso Intensivo de <br />
          <span className="gradient-text">Vibe Coding con React</span>
        </h1>

        <p className="hero-description">
          Construye aplicaciones asombrosas a la velocidad del pensamiento. Domina el desarrollo asistido por agentes de inteligencia artificial, arquitectura React 19 y flujos ágiles de prompt-a-producción.
        </p>

        <div className="hero-actions">
          <a href="#syllabus" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Comenzar Ruta de Aprendizaje
          </a>
          <a href="#simulator" className="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
            </svg>
            Probar Simulador de Prompts
          </a>
        </div>
      </header>

      {/* Tira de Estadísticas */}
      <section className="stats-strip">
        <div className="stat-card">
          <div className="stat-number">10x</div>
          <div className="stat-label">Velocidad de Creación y Prototipado</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">React 19</div>
          <div className="stat-label">Hooks Modernos & Server Components</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">AI Pair Programming & Agentes</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">4 Módulos</div>
          <div className="stat-label">Proyectos Prácticos para Producción</div>
        </div>
      </section>

      {/* Grid de Dos Columnas: Pase del Estudiante y Simulador */}
      <section className="grid-two-col" id="simulator">
        {/* Pase VIP del Estudiante */}
        <div className="student-pass-card">
          <div className="pass-header">
            <div className="pass-chip">
              <div className="pass-chip-lines"></div>
            </div>
            <div className="pass-tag">VIP DEVELOPER PASS</div>
          </div>

          <div className="pass-body">
            <div className="student-input-group">
              <label>Personaliza tu Credencial</label>
              <input
                type="text"
                className="student-input"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value || 'Estudiante')}
                placeholder="Ingresa tu nombre o alias"
              />
            </div>

            <div className="pass-meta-grid">
              <div className="pass-meta-item">
                <div className="meta-label">Desarrollador</div>
                <div className="meta-val">{studentName}</div>
              </div>
              <div className="pass-meta-item">
                <div className="meta-label">Rol Asignado</div>
                <div className="meta-val">Vibe Architect</div>
              </div>
              <div className="pass-meta-item">
                <div className="meta-label">ID Credencial</div>
                <div className="meta-val" style={{ fontFamily: 'monospace' }}>VC-2026-REACT</div>
              </div>
              <div className="pass-meta-item">
                <div className="meta-label">Estado de Acceso</div>
                <div className="meta-val" style={{ color: '#34d399' }}>● Autorizado</div>
              </div>
            </div>

            <div style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '4px' }}>
              ✦ Acceso ilimitado a entornos de desarrollo y pair programming con IA
            </div>
          </div>
        </div>

        {/* Simulador Interactivo de Vibe Coding */}
        <div className="vibe-studio-card">
          <div className="card-title-row">
            <div>
              <div className="section-tag">SIMULADOR INTERACTIVO</div>
              <h3 style={{ fontSize: '20px', marginTop: '4px' }}>Laboratorio de Vibe Prompts</h3>
            </div>
            <span style={{ fontSize: '24px' }}>🪄</span>
          </div>

          <div className="preset-pills">
            {VIBE_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className={`preset-pill ${activePreset === preset.id ? 'active' : ''}`}
                onClick={() => selectPreset(preset)}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="prompt-textarea-wrapper">
            <textarea
              className="prompt-textarea"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Escribe lo que quieres construir..."
            ></textarea>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              className="btn-primary"
              style={{ flex: 1, padding: '12px 18px', fontSize: '14px' }}
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generando Vibe...' : '🔮 Ejecutar Prompt a Componente'}
            </button>
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: '12px 16px', fontSize: '13px' }}
              onClick={copyPromptToClipboard}
              title="Copiar prompt"
            >
              {copiedPrompt ? '✓ Copiado' : 'Copiar'}
            </button>
          </div>

          {/* Caja de Renderizado del Componente */}
          <div className="vibe-output-box">
            {isGenerating ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px', animation: 'spin 1.5s infinite linear' }}>⚙️</div>
                <div style={{ color: '#c084fc', fontFamily: 'monospace', fontSize: '13px' }}>
                  {generationStep}
                </div>
              </div>
            ) : (
              <>
                {activeWidget === 'crypto' && (
                  <div className="crypto-widget">
                    <div className="crypto-row">
                      <span style={{ fontWeight: 700, fontSize: '14px' }}>Ethereum Vault</span>
                      <span className="crypto-badge">+14.2%</span>
                    </div>
                    <div className="crypto-balance">{cryptoBalance.toFixed(3)} ETH</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>≈ $8,940.12 USD</div>
                    <button
                      type="button"
                      className="crypto-btn"
                      onClick={() => setCryptoBalance((b) => b + 0.15)}
                    >
                      + Recargar Staking (Interactivo)
                    </button>
                  </div>
                )}

                {activeWidget === 'lofi' && (
                  <div className="lofi-widget">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '14px', fontWeight: 700 }}>🎧 Lofi Study Beats</span>
                      <span style={{ fontSize: '12px', color: isMusicPlaying ? '#34d399' : '#94a3b8' }}>
                        {isMusicPlaying ? '● EN VIVO' : 'PAUSADO'}
                      </span>
                    </div>
                    {isMusicPlaying && (
                      <div className="wave-bars">
                        <div className="wave-bar" style={{ animationDelay: '0s' }}></div>
                        <div className="wave-bar" style={{ animationDelay: '0.2s' }}></div>
                        <div className="wave-bar" style={{ animationDelay: '0.4s' }}></div>
                        <div className="wave-bar" style={{ animationDelay: '0.1s' }}></div>
                        <div className="wave-bar" style={{ animationDelay: '0.3s' }}></div>
                        <div className="wave-bar" style={{ animationDelay: '0.5s' }}></div>
                        <div className="wave-bar" style={{ animationDelay: '0.25s' }}></div>
                      </div>
                    )}
                    <button
                      type="button"
                      className="crypto-btn"
                      onClick={() => setIsMusicPlaying(!isMusicPlaying)}
                    >
                      {isMusicPlaying ? '⏸ Pausar Música' : '▶ Reanudar Vibe'}
                    </button>
                  </div>
                )}

                {activeWidget === 'quantum' && (
                  <div className="quantum-widget">
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>ESTADO DEL REACTOR CUÁNTICO</div>
                    <button
                      type="button"
                      className="quantum-toggle-btn"
                      style={{
                        background: isQuantumOn ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        borderColor: isQuantumOn ? '#c084fc' : '#64748b',
                        color: isQuantumOn ? '#f8fafc' : '#94a3b8',
                        boxShadow: isQuantumOn ? '0 0 25px rgba(168, 85, 247, 0.6)' : 'none'
                      }}
                      onClick={() => setIsQuantumOn(!isQuantumOn)}
                    >
                      {isQuantumOn ? '⚡ REACTOR: SOBRECARGA ACTIVA' : '⚪ REACTOR: STANDBY'}
                    </button>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Haz clic en el botón para alternar el estado</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Sección Temario / Syllabus con Checklist */}
      <section className="syllabus-section" id="syllabus">
        <div className="section-header">
          <div className="section-tag">PLAN DE ESTUDIOS COMPLETO</div>
          <h2 style={{ fontSize: '32px' }}>Ruta de Aprendizaje del Vibe Coder</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px' }}>
            Cada módulo está diseñado para que construyas software funcional desde el minuto uno. Marca los módulos conforme avances.
          </p>
        </div>

        {/* Barra de progreso */}
        <div className="progress-banner">
          <div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>PROGRESO DEL CURSO</div>
            <div style={{ fontSize: '20px', fontWeight: 800 }}>
              {completedModules.length} de {COURSE_MODULES.length} Módulos Dominados ({progressPercentage}%)
            </div>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          {progressPercentage === 100 && (
            <span style={{ color: '#34d399', fontWeight: 700, fontSize: '14px' }}>
              🎉 ¡Felicidades! Todo el temario completado
            </span>
          )}
        </div>

        {/* Grid de Módulos */}
        <div className="modules-grid">
          {COURSE_MODULES.map((mod) => {
            const isCompleted = completedModules.includes(mod.id);
            return (
              <div key={mod.id} className={`module-card ${isCompleted ? 'completed' : ''}`}>
                <div className="module-num">{mod.number}</div>
                <h3 className="module-title">{mod.title}</h3>
                <p className="module-desc">{mod.description}</p>
                <ul className="module-topics">
                  {mod.topics.map((t, idx) => (
                    <li key={idx}>
                      <span className="bullet">▹</span> {t}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`module-check-btn ${isCompleted ? 'checked' : ''}`}
                  onClick={() => toggleModule(mod.id)}
                >
                  {isCompleted ? '✓ Módulo Completado' : 'Marcar como Completado'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Los 3 Principios del Vibe Coding */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="section-header">
          <div className="section-tag">FILOSOFÍA DE DESARROLLO</div>
          <h2 style={{ fontSize: '28px' }}>Los 3 Mandamientos del Vibe Coder</h2>
        </div>

        <div className="rules-grid">
          <div className="rule-card">
            <div className="rule-icon">👁️</div>
            <h4 className="rule-title">1. Claridad Visual Primero</h4>
            <p className="rule-text">
              Antes de pedir código, ten cristalina la experiencia del usuario. La IA es el ejecutor más rápido del mundo, pero tú eres el director de arte y arquitectura.
            </p>
          </div>

          <div className="rule-card">
            <div className="rule-icon">⚡</div>
            <h4 className="rule-title">2. Ciclos Cortos y Sensoriales</h4>
            <p className="rule-text">
              Evita especificaciones gigantescas de 50 páginas. Trabaja en pulsos de 2 minutos: pide una feature, pruébala en pantalla, siente el vibe y ajusta de inmediato.
            </p>
          </div>

          <div className="rule-card">
            <div className="rule-icon">🛡️</div>
            <h4 className="rule-title">3. Arquitectura Limpia e Inmune</h4>
            <p className="rule-text">
              Exige que la IA genere componentes desacoplados, nombres semánticos y tests automatizados. La velocidad nunca debe comprometer la calidad del software.
            </p>
          </div>
        </div>
      </section>

      {/* Pie de Página */}
      <footer className="footer">
        <div>
          © 2026 <strong>Curso Intensivo de Vibe Coding con React</strong> • Construido con Vite & React 19
        </div>
        <div className="footer-links">
          <a href="#simulator">Simulador</a>
          <a href="#syllabus">Temario</a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">React Docs</a>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">Vite</a>
        </div>
      </footer>
    </div>
  );
}
