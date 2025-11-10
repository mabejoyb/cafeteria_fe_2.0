import coffee from './assets/coffee.png'

// Componente totalmente estático: Ya no acepta props ni maneja estado
function Login() {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className='card shadow-lg border-0' style={{ maxWidth: '450px', width: '100%' }}>
        
        {/* Header con imagen para estética */}
        <div className='card-header bg-dark text-white text-center rounded-top p-4'>
          <img src={coffee} alt='Logo' style={{ height: '60px' }} className='mb-2 filter-invert' />
          <h4 className='mb-0 fw-bold'>Acceso Empleados</h4>
        </div>

        <div className='card-body p-5'>
          <p className='text-muted text-center mb-4'>Inicia sesión para acceder al sistema de gestión.</p>
          
          {/* Formulario Estático */}
          <form method='POST'>
            {/* Nombre de usuario */}
            <div className='form-floating mb-3'>
              <input type='text' className='form-control' id='floatingInput' name='username' placeholder='Nombre de usuario' required />
              <label htmlFor='floatingInput'>Nombre de usuario</label>
            </div>

            {/* Contraseña */}
            <div className='form-floating mb-4'>
              <input type='password' className='form-control' id='floatingPassword' name='password' placeholder='Contraseña' required />
              <label htmlFor='floatingPassword'>Contraseña</label>
            </div>

            {/* Checkbox (estático) */}
            <div className='d-flex justify-content-between mb-4'>
                <div className='form-check'>
                    <input className='form-check-input' type='checkbox' id='chkRecuerdame' name='chkRecuerdame' />
                    <label className='form-check-label' htmlFor='chkRecuerdame'>Recuérdame</label>
                </div>
                <a href='#!' className='text-decoration-none small text-muted'>¿Olvidó la contraseña?</a>
            </div>

            {/* Botón de Submit (estático) */}
            <div className='d-grid'>
              <button type='submit' className='btn btn-success btn-lg'>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login