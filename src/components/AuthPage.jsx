import { useState } from 'react';

export default function AuthPage({
  initialMode = 'login',
  onLoginSuccess,
  registeredUsers = [],
  onRegisterUser,
  onNavigateShop
}) {
  const [mode, setMode] = useState(initialMode); // 'login' or 'register'

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regPasswordConfirm, setRegPasswordConfirm] = useState('');
  const [regPreference, setRegPreference] = useState('Unisex');
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');

  // Manejador de Login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');

    const trimmedEmail = loginEmail.trim().toLowerCase();
    const userFound = registeredUsers.find(
      (u) => u.email.toLowerCase() === trimmedEmail && u.password === loginPassword
    );

    if (userFound) {
      onLoginSuccess(userFound);
    } else {
      setLoginError('Credenciales incorrectas. Verifica tu email y contraseña o regístrate.');
    }
  };

  // Acceso Rápido Demo
  const handleQuickDemo = () => {
    const demoUser = registeredUsers[0] || {
      name: 'Carolina Herrera',
      email: 'carolina@elixir.com',
      password: 'password123',
      preference: 'Nicho & Árabe',
      membership: 'Black Diamond VIP'
    };
    onLoginSuccess(demoUser);
  };

  // Manejador de Registro
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegError('');
    setRegSuccess('');

    if (!regName.trim() || !regEmail.trim() || !regPassword) {
      setRegError('Por favor completa todos los campos requeridos.');
      return;
    }

    if (regPassword !== regPasswordConfirm) {
      setRegError('Las contraseñas no coinciden. Por favor verifícalas.');
      return;
    }

    if (regPassword.length < 6) {
      setRegError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    const trimmedEmail = regEmail.trim().toLowerCase();
    const existing = registeredUsers.find((u) => u.email.toLowerCase() === trimmedEmail);
    if (existing) {
      setRegError('Ya existe una cuenta registrada con este correo electrónico.');
      return;
    }

    const newUser = {
      id: Date.now(),
      name: regName.trim(),
      email: trimmedEmail,
      password: regPassword,
      preference: regPreference,
      membership: 'VIP Member',
      createdAt: new Date().toLocaleDateString()
    };

    onRegisterUser(newUser);
    setRegSuccess('¡Cuenta creada exitosamente! Iniciando tu sesión privada...');
    setTimeout(() => {
      onLoginSuccess(newUser);
    }, 900);
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        {/* Selector de Pestañas Login / Registro */}
        <div className="auth-tabs" role="tablist" aria-label="Modo de autenticación">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'login'}
            className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => {
              setMode('login');
              setLoginError('');
            }}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'register'}
            className={`auth-tab ${mode === 'register' ? 'active' : ''}`}
            onClick={() => {
              setMode('register');
              setRegError('');
            }}
          >
            Crear Cuenta VIP
          </button>
        </div>

        {/* Formulario de Login */}
        {mode === 'login' ? (
          <div className="auth-form-wrapper">
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }} aria-hidden="true">🔐</div>
              <h2 style={{ fontSize: '26px', color: 'white' }}>Bienvenido a ÉLIXIR</h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Ingresa tus credenciales para acceder a la sección privada de envíos y ofertas exclusivas.
              </p>
            </div>

            {loginError && <div className="auth-alert error" role="alert">{loginError}</div>}

            <form onSubmit={handleLoginSubmit} className="auth-form">
              <div>
                <label className="auth-label" htmlFor="login-email">Correo Electrónico</label>
                <input
                  id="login-email"
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  className="search-input"
                  style={{ width: '100%', paddingLeft: '14px' }}
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="auth-label" htmlFor="login-password">Contraseña</label>
                <input
                  id="login-password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="search-input"
                  style={{ width: '100%', paddingLeft: '14px' }}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Iniciar Sesión 🔒
              </button>

              <button
                type="button"
                className="btn-outline-gold"
                style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--gold-primary)', fontSize: '13px' }}
                onClick={handleQuickDemo}
              >
                ⚡ Acceso Rápido con Cuenta Demo
              </button>
            </form>

            <div className="auth-footer-link">
              ¿No tienes una cuenta aún?{' '}
              <button
                type="button"
                className="link-button"
                onClick={() => setMode('register')}
              >
                Regístrate gratis aquí
              </button>
            </div>
          </div>
        ) : (
          /* Formulario de Registro */
          <div className="auth-form-wrapper">
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }} aria-hidden="true">💎</div>
              <h2 style={{ fontSize: '26px', color: 'white' }}>Membresía Exclusiva</h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Crea tu cuenta para desbloquear el portal privado de envíos, tracking satelital y muestras de regalo.
              </p>
            </div>

            {regError && <div className="auth-alert error" role="alert">{regError}</div>}
            {regSuccess && <div className="auth-alert success" role="status">{regSuccess}</div>}

            <form onSubmit={handleRegisterSubmit} className="auth-form">
              <div>
                <label className="auth-label" htmlFor="reg-name">Nombre Completo</label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  placeholder="Ej. Julian Alva"
                  className="search-input"
                  style={{ width: '100%', paddingLeft: '14px' }}
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                />
              </div>

              <div>
                <label className="auth-label" htmlFor="reg-email">Correo Electrónico</label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  placeholder="julian@correo.com"
                  className="search-input"
                  style={{ width: '100%', paddingLeft: '14px' }}
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="auth-label" htmlFor="reg-pwd">Contraseña</label>
                  <input
                    id="reg-pwd"
                    type="password"
                    required
                    placeholder="Mínimo 6 carácteres"
                    className="search-input"
                    style={{ width: '100%', paddingLeft: '14px' }}
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="auth-label" htmlFor="reg-confirm">Confirmar Contraseña</label>
                  <input
                    id="reg-confirm"
                    type="password"
                    required
                    placeholder="Repite la contraseña"
                    className="search-input"
                    style={{ width: '100%', paddingLeft: '14px' }}
                    value={regPasswordConfirm}
                    onChange={(e) => setRegPasswordConfirm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="auth-label" htmlFor="reg-pref">Preferencia Olfativa Principal</label>
                <select
                  id="reg-pref"
                  className="search-input"
                  style={{ width: '100%', paddingLeft: '14px', background: '#0e111a', color: 'white' }}
                  value={regPreference}
                  onChange={(e) => setRegPreference(e.target.value)}
                >
                  <option value="Unisex">Unisex & Maderas Cremosas</option>
                  <option value="Hombre">Hombre (Cuero, Especias & Cítrico)</option>
                  <option value="Mujer">Mujer (Floral, Vainilla & Frutal)</option>
                  <option value="Nicho & Árabe">Nicho, Oud & Ámbar Oriental</option>
                </select>
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Crear Mi Cuenta & Acceder ✦
              </button>
            </form>

            <div className="auth-footer-link">
              ¿Ya tienes una cuenta registrada?{' '}
              <button
                type="button"
                className="link-button"
                onClick={() => setMode('login')}
              >
                Inicia sesión aquí
              </button>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <button
            type="button"
            className="link-button"
            onClick={onNavigateShop}
            style={{ color: 'var(--text-muted)', fontSize: '13px' }}
          >
            ← Volver a la Tienda Principal
          </button>
        </div>
      </div>
    </div>
  );
}
