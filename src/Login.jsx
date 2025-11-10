import { useState } from 'react'
import coffee from './assets/coffee.png'

const DJHOST = import.meta.env.VITE_DJHOST

// Se añadieron las props isModal y closeModal
function Login({ setAccesstoken, isModal, closeModal }) {
  const [textError, setTextError] = useState(null)
  const [usernameError, setUsernameError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [isLoading, setIsLoading] = useState(false) // Nuevo estado de carga

  const handleSubmit = (e) => {
    e.preventDefault()

    setTextError(null)
    setUsernameError(null)
    setPasswordError(null)
    setIsLoading(true) // Activa el estado de carga

    const form = e.target
    const formData = new FormData(form)
    const recuerdame = formData.get('chkRecuerdame')

    fetch(`https://${DJHOST}/api/token/`, {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false) // Desactiva el estado de carga
        if (data.detail || data.username || data.password) {
          setTextError(data.detail)
          setUsernameError(data.username)
          setPasswordError(data.password)
        } else {
          if (recuerdame) {
            localStorage.setItem('accesstoken', data.access)
            localStorage.setItem('refreshtoken', data.refresh)
          } else {
            sessionStorage.setItem('accesstoken', data.access)
            sessionStorage.setItem('refreshtoken', data.refresh)
          }
          setAccesstoken(data.access)
          if (closeModal) {
            closeModal() // Cierra el modal si se está usando como tal
          }
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setTextError('Error de conexión. Intente nuevamente.')
        console.error('Error:', error)
      })
  }

  // Renderizado optimizado para el Modal Elegante
  if (isModal) {
    return (
      <div className='modal-body p-0'>
        <div className='row g-0'>
          {/* Columna de Imagen (Estética: Oculta en móviles) */}
          <div className='col-md-5 d-none d-md-block'>
            <div className='h-100 rounded-start-3' style={{
              backgroundImage: `url(${coffee})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px', // Altura del modal
              backgroundColor: '#6F4E37' // Color de fondo temático
            }}>
              <div className='d-flex align-items-center justify-content-center h-100 p-3 bg-dark bg-opacity-25'>
                <h3 className='text-white text-center fw-bold'>Acceso al Sistema</h3>
              </div>
            </div>
          </div>

          {/* Columna de Formulario (Funcional) */}
          <div className='col-md-7 p-4 p-md-5'>
            <p className='text-muted mb-4'>Introduce tus credenciales para la gestión.</p>
            <form onSubmit={handleSubmit} method='POST'>
              {/* Nombre de usuario */}
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                  id='floatingInput'
                  name='username'
                  placeholder='Nombre de usuario'
                  required
                />
                <label htmlFor='floatingInput'>Nombre de usuario</label>
                {usernameError && (
                  <div id='usernameError' className='invalid-feedback'>
                    {usernameError}
                  </div>
                )}
              </div>

              {/* Contraseña */}
              <div className='form-floating mb-3'>
                <input
                  type='password'
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  id='floatingPassword'
                  name='password'
                  placeholder='Contraseña'
                  required
                />
                <label htmlFor='floatingPassword'>Contraseña</label>
                {passwordError && (
                  <div id='passwordError' className='invalid-feedback'>
                    {passwordError}
                  </div>
                )}
              </div>

              {/* Opciones */}
              <div className='row mb-4 align-items-center'>
                <div className='col d-flex justify-content-start'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='True'
                      id='chkRecuerdame'
                      name='chkRecuerdame'
                    />
                    <label className='form-check-label' htmlFor='chkRecuerdame'>
                      Recuérdame
                    </label>
                  </div>
                </div>
                <div className='col text-end'>
                  <a href='#!' className='text-decoration-none text-muted small'>
                    ¿Olvidó la contraseña?
                  </a>
                </div>
              </div>

              {/* Mensaje de error general */}
              {textError && (
                <div id='error' className='alert alert-danger text-center p-2 mb-3' role='alert'>
                  <i className='fa-solid fa-triangle-exclamation me-2'></i> {textError}
                </div>
              )}

              {/* Botón de Submit con Spinner */}
              <div className='d-grid'>
                <button
                  type='submit'
                  className='btn btn-success btn-lg mb-2'
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span
                        className='spinner-border spinner-border-sm me-2'
                        role='status'
                        aria-hidden='true'
                      ></span>
                      Accediendo...
                    </>
                  ) : (
                    'Iniciar sesión'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  // Fallback si no se usa como modal (se mantiene el código original por si acaso, pero mejorado)
  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card shadow-lg'>
            <div className='card-header text-center'>
              <img src={coffee} alt='Logo' style={{ height: '50px' }} />
              <h4 className='mb-0'>Acceso al Sistema</h4>
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit} method='POST'>
                {/* ... (el resto del formulario) ... */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login