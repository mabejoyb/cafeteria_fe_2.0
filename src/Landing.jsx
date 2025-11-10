import { useState } from 'react'
import coffee from './assets/coffee.png'
import Login from './Login'

export default function Landing({ setAccesstoken }) {
  const [showLogin, setShowLogin] = useState(false)
  const [contactMsg, setContactMsg] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  // Data de ejemplo (Se mantiene tu data original)
  const menu = [
    { id: 1, nombre: 'Café filtro', precio: '12.000' },
    { id: 2, nombre: 'Capuccino', precio: '18.000' },
    { id: 3, nombre: 'Latte', precio: '18.000' },
    { id: 4, nombre: 'Té herbal', precio: '10.000' }
  ]

  const destacados = [
    { id: 1, nombre: 'Muffin artesanal', precio: '8.500' },
    { id: 2, nombre: 'Medialuna rellena', precio: '6.000' }
  ]

  const resenias = [
    { id: 1, autor: 'Ana P.', texto: 'Ambiente cálido y excelente café.' },
    { id: 2, autor: 'Carlos M.', texto: 'Perfecto para trabajar y relajarse.' },
    { id: 3, autor: 'Sofía R.', texto: 'La mejor pastelería de la ciudad.' }
  ]

  const handleContactChange = (e) =>
    setContactMsg({ ...contactMsg, [e.target.name]: e.target.value })

  const handleContactSubmit = (e) => {
    e.preventDefault()
    alert(
      `Mensaje de ${contactMsg.nombre} (${contactMsg.email}) enviado:\n${contactMsg.mensaje}`
    )
    setContactMsg({ nombre: '', email: '', mensaje: '' })
  }

  // Funciones para el modal de Login
  const handleLoginClick = () => setShowLogin(true)
  const handleCloseLogin = () => setShowLogin(false)

  // Clases dinámicas para simular el comportamiento de un modal de Bootstrap
  const modalClass = showLogin ? 'modal fade show d-block' : 'modal fade'
  const backdropClass = showLogin ? 'modal-backdrop fade show' : ''

  return (
    <div className='landing-page'>
      {/* 1. MODAL DE INICIO DE SESIÓN ELEGANTE (FIX) */}
      {showLogin && (
        <>
          {/* Contenedor del Modal */}
          <div className={modalClass} tabIndex='-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='modal-dialog modal-dialog-centered modal-lg'> {/* modal-lg para tener espacio para el diseño de 2 columnas */}
              <div className='modal-content border-0 shadow-lg rounded-3'>
                <div className='modal-header p-4 border-bottom-0'>
                  <h5 className='modal-title fw-bold text-dark'>Acceso para Empleados</h5>
                  <button
                    type='button'
                    className='btn-close'
                    aria-label='Close'
                    onClick={handleCloseLogin}
                  ></button>
                </div>
                {/* Se pasa isModal={true} y closeModal al componente Login */}
                <Login setAccesstoken={setAccesstoken} isModal={true} closeModal={handleCloseLogin} />
              </div>
            </div>
          </div>
          {/* Backdrop (Fondo oscuro) */}
          <div className={backdropClass}></div>
        </>
      )}

      {/* 2. BARRA DE NAVEGACIÓN */}
      <nav className='navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm'>
        <div className='container'>
          <a className='navbar-brand fw-bold text-success' href='#'>
            Fe — Café & Encuentros ☕
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#landingNavbar'
            aria-controls='landingNavbar'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='landingNavbar'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='#inicio'>Inicio</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#menu'>Menú</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contacto'>Contacto</a>
              </li>
            </ul>
            <div className='d-flex ms-lg-3'>
              <button
                className='btn btn-success shadow-sm'
                type='button'
                onClick={handleLoginClick}
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* 3. SECCIÓN HERO (IMPACTANTE) */}
        <section
          id='inicio'
          className='text-center text-white p-5'
          style={{
            backgroundImage: `url(${coffee})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Overlay para legibilidad */}
          <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}></div>
          <div className='container position-relative'>
            <h1 className='display-1 fw-bolder mb-3 text-shadow'>
              Fe — Café & Encuentros
            </h1>
            <p className='lead mb-4'>
              Tu lugar de calma y el mejor café. Pide en línea o reserva tu mesa.
            </p>
            <button
              className='btn btn-light btn-lg shadow-sm me-3'
              type='button'
              onClick={handleLoginClick}
            >
              Acceso Empleados <i className='fa-solid fa-lock ms-2'></i>
            </button>
          </div>
        </section>

        {/* 4. SECCIÓN DE DESTACADOS (CARDS) */}
        <section id='destacados' className='py-5 bg-light'>
          <div className='container'>
            <h2 className='text-center mb-5 fw-bold'>Nuestros Favoritos</h2>
            <div className='row g-4 justify-content-center'>
              {destacados.map((item) => (
                <div key={item.id} className='col-sm-6 col-md-4 col-lg-3'>
                  <div className='card h-100 shadow border-0 text-center p-3'>
                    <i className='fa-solid fa-mug-hot fa-3x text-info mb-3'></i>
                    <div className='card-body'>
                      <h5 className='card-title fw-bold'>{item.nombre}</h5>
                      <p className='card-text text-muted'>₲ {item.precio}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className='col-sm-6 col-md-4 col-lg-3'>
                  <div className='card h-100 shadow border-0 p-3 bg-success text-white'>
                      <div className='card-body text-center d-flex flex-column justify-content-center'>
                          <h5 className='card-title fw-bold'>¡Ordena Ahora!</h5>
                          <p className='card-text'>Ver nuestro menú completo.</p>
                          <a href='#menu' className='btn btn-light mt-auto'>Menú Completo <i className='fa-solid fa-chevron-right'></i></a>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SECCIÓN DE MENÚ Y RESEÑAS */}
        <section id='menu' className='py-5'>
          <div className='container'>
            <div className='row g-5'>
                {/* Menú */}
                <div className='col-lg-6'>
                    <h2 className='mb-4 fw-bold'>Nuestro Menú de Café</h2>
                    <ul className='list-group list-group-flush shadow-lg rounded-3'>
                        {menu.map((item) => (
                        <li
                            key={item.id}
                            className='list-group-item d-flex justify-content-between align-items-center p-3'
                        >
                            <span className='fw-semibold'>{item.nombre}</span>
                            <span className='badge bg-info text-dark border p-2'>₲ {item.precio}</span>
                        </li>
                        ))}
                    </ul>
                </div>

                {/* Reseñas (Carrusel) */}
                <div className='col-lg-6'>
                    <h2 className='mb-4 fw-bold'>Lo que dicen de nosotros</h2>
                    <div id='reseniasCarousel' className='carousel slide shadow-lg rounded-3' data-bs-ride='carousel'>
                        <div className='carousel-inner rounded-3'>
                            {resenias.map((resenia, index) => (
                                <div key={resenia.id} className={`carousel-item p-4 ${index === 0 ? 'active bg-white' : 'bg-white'}`}>
                                    <blockquote className='blockquote mb-0'>
                                        <p className='fst-italic'>"{resenia.texto}"</p>
                                        <footer className='blockquote-footer mt-2'>
                                            {resenia.autor}
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#reseniasCarousel' data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon bg-dark rounded-circle p-3'></span>
                            <span className='visually-hidden'>Anterior</span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#reseniasCarousel' data-bs-slide='next'>
                            <span className='carousel-control-next-icon bg-dark rounded-circle p-3'></span>
                            <span className='visually-hidden'>Siguiente</span>
                        </button>
                    </div>
                </div>

            </div>
          </div>
        </section>

        {/* 6. SECCIÓN DE CONTACTO */}
        <section id='contacto' className='py-5 bg-light'>
          <div className='container'>
            <h2 className='text-center mb-5 fw-bold'>Contáctanos y Ubicación</h2>
            <div className='row g-4'>
              <div className='col-md-6'>
                <h4 className='mb-3'>Envíanos un mensaje</h4>
                <form className='p-4 border rounded-3 bg-white shadow-sm' onSubmit={handleContactSubmit}>
                  {/* Formulario usando form-floating */}
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='nombre'
                      name='nombre'
                      placeholder='Tu Nombre'
                      value={contactMsg.nombre}
                      onChange={handleContactChange}
                      required
                    />
                    <label htmlFor='nombre'>Tu Nombre</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      placeholder='name@example.com'
                      value={contactMsg.email}
                      onChange={handleContactChange}
                      required
                    />
                    <label htmlFor='email'>Correo Electrónico</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <textarea
                      className='form-control'
                      id='mensaje'
                      name='mensaje'
                      placeholder='Escribe tu consulta...'
                      style={{ height: '100px' }}
                      value={contactMsg.mensaje}
                      onChange={handleContactChange}
                      required
                    />
                    <label htmlFor='mensaje'>Mensaje</label>
                  </div>
                  <div className='d-flex gap-2'>
                    <button type='submit' className='btn btn-success'>
                      Enviar mensaje
                    </button>
                    <a
                      className='btn btn-outline-secondary'
                      href='mailto:info@fe-cafe.com'
                    >
                      Email
                    </a>
                  </div>
                </form>
              </div>
              <div className='col-md-6'>
                <h4 className='mb-3'>Nuestra Ubicación</h4>
                <div className='card p-4 h-100 shadow-sm border-0'>
                    <p className='mb-1 text-muted'>Dirección: Calle Falsa 123, Ciudad del Este</p>
                    <div
                      style={{ height: '300px' }}
                      className='bg-light d-flex align-items-center justify-content-center border rounded'
                    >
                      <span className='text-muted'>
                        Aquí puedes insertar un iframe de Google Maps
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className='bg-dark text-white py-4 text-center'>
        <div className='container'>
          <small>© {new Date().getFullYear()} Fe — Café & Encuentros | Desarrollado para uso interno.</small>
        </div>
      </footer>
    </div>
  )
}