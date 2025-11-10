import coffee from './assets/coffee.png'
import Login from './Login'

// Datos de ejemplo estáticos
const menu = [
  { id: 1, nombre: 'Café filtro', precio: '12.000' },
  { id: 2, nombre: 'Capuccino', precio: '18.000' },
  { id: 3, nombre: 'Latte', precio: '18.000' },
  { id: 4, nombre: 'Té herbal', precio: '10.000' }
]

const destacados = [
  { id: 1, nombre: 'Muffin artesanal', precio: '8.500', icon: 'fa-muffin' },
  { id: 2, nombre: 'Medialuna rellena', precio: '6.000', icon: 'fa-croissant' },
  { id: 3, nombre: 'Tarta de manzana', precio: '10.000', icon: 'fa-pie' }
]

const resenias = [
  { id: 1, autor: 'Ana P.', texto: 'Ambiente cálido y excelente café.' },
  { id: 2, autor: 'Carlos M.', texto: 'Perfecto para trabajar y relajarse.' },
  { id: 3, autor: 'Sofía R.', texto: 'La mejor pastelería de la ciudad.' }
]

export default function Landing() {
  return (
    <div className='landing-page'>
      {/* 2. BARRA DE NAVEGACIÓN */}
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow'>
        <div className='container'>
          <a className='navbar-brand fw-bold text-success' href='#'>
            Fe — Café & Encuentros ☕
          </a>
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
              >
                Iniciar Sesión (Placeholder)
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* 3. SECCIÓN HERO */}
        <section
          id='inicio'
          className='text-center text-white p-5' 
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(15,15,15,0.85), rgba(15,15,15,0.6)), url(${coffee})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className='container position-relative'>
            <h1 className='display-1 fw-bolder mb-3' style={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
              Fe — Café & Encuentros
            </h1>
            <p className='lead mb-4'>
              Tu lugar de calma y el mejor café. Pide en línea o reserva tu mesa.
            </p>
            <a
              className='btn btn-light btn-lg shadow-sm me-3'
              href='#menu'
            >
              Ver Menú <i className='fa-solid fa-mug-hot ms-2'></i>
            </a>
          </div>
        </section>

        {/* 4. SECCIÓN DE DESTACADOS */}
        <section id='destacados' className='py-5 bg-light'>
          <div className='container'>
            <h2 className='text-center mb-5 fw-bold'>Nuestros Favoritos</h2>
            <div className='row g-4 justify-content-center'>
              {destacados.map((item) => (
                <div key={item.id} className='col-sm-6 col-md-4 col-lg-4'>
                  <div className='card h-100 shadow border-0 text-center p-4'>
                    <i className={`fa-solid ${item.icon} fa-3x text-info mb-3`}></i>
                    <div className='card-body'>
                      <h5 className='card-title fw-bold'>{item.nombre}</h5>
                      <p className='card-text text-muted'>₲ {item.precio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SECCIÓN DE MENÚ y RESEÑAS */}
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

                {/* Reseñas */}
                <div className='col-lg-6'>
                    <h2 className='mb-4 fw-bold'>Lo que dicen de nosotros</h2>
                    <div className='bg-white p-4 shadow-lg rounded-3'>
                        {resenias.map((resenia, index) => (
                            <div key={resenia.id} className={`p-3 ${index < resenias.length - 1 ? 'border-bottom' : ''}`}>
                                <blockquote className='blockquote mb-0'>
                                    <p className='fst-italic small'>"{resenia.texto}"</p>
                                    <footer className='blockquote-footer mt-2'>
                                        {resenia.autor}
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* 6. SECCIÓN DE CONTACTO */}
        <section id='contacto' className='py-5 bg-dark text-white'>
          <div className='container'>
            <h2 className='text-center mb-5 fw-bold'>Contáctanos</h2>
            <div className='row g-4'>
              <div className='col-md-6'>
                <h4 className='mb-3'>Envíanos un mensaje</h4>
                {/* Formulario Estático - Se quita el manejo de estado */}
                <form className='p-4 border rounded-3 bg-white text-dark shadow-sm'>
                  <div className='form-floating mb-3'><input type='text' className='form-control' id='nombre' placeholder='Tu Nombre' required/><label htmlFor='nombre'>Tu Nombre</label></div>
                  <div className='form-floating mb-3'><input type='email' className='form-control' id='email' placeholder='name@example.com' required/><label htmlFor='email'>Correo Electrónico</label></div>
                  <div className='form-floating mb-3'><textarea className='form-control' id='mensaje' placeholder='Escribe tu consulta...' style={{ height: '100px' }} required/> <label htmlFor='mensaje'>Mensaje</label></div>
                  <button type='submit' className='btn btn-success'>Enviar mensaje</button>
                </form>
              </div>
              <div className='col-md-6'>
                <h4 className='mb-3'>Ubicación y Horarios</h4>
                <div className='card p-4 h-100 shadow-sm border-0 bg-light text-dark'>
                    <p className='mb-1 fw-bold'>Dirección:</p>
                    <p>Calle Falsa 123, Ciudad del Este</p>
                    <p className='mb-1 fw-bold mt-3'>Horario:</p>
                    <p>Lunes a Sábado: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className='bg-dark text-white border-top py-3 text-center'>
        <div className='container'>
          <small>© {new Date().getFullYear()} Fe — Café & Encuentros</small>
        </div>
      </footer>
    </div>
  )
}