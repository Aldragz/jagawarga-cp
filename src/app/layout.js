import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'JagaWarga - Solusi Keamanan Lingkungan',
  description: 'Sistem integrasi warga dan keamanan perumahan modern.',
}

const Header = () => (
  <header className="bg-white border-bottom sticky-top" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
    <nav className="container mx-auto px-4 py-3 d-flex justify-content-between align-items-center">
      <Link href="/" className="d-flex align-items-center text-decoration-none">
        <span className="fs-4 fw-bold text-success" style={{ letterSpacing: '-1px' }}>JagaWarga</span>
      </Link>
      
      <div className="d-none d-md-flex gap-4">
        <Link href="/" className="text-dark text-decoration-none fw-medium small hover-link">Home</Link>
        <Link href="/about" className="text-dark text-decoration-none fw-medium small hover-link">About</Link>
        <Link href="/services" className="text-dark text-decoration-none fw-medium small hover-link">Service</Link>
      </div>

      <div>
        <Link href="/contact" className="btn btn-success btn-sm px-3 rounded-pill fw-bold">
          Hubungi Kami
        </Link>
      </div>
    </nav>
  </header>
)

const Footer = () => (
  <footer className="py-5 bg-white border-top mt-auto">
    <div className="container mx-auto px-4">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <span className="fw-bold text-success">JagaWarga</span>
          <p className="text-muted small mt-2 mb-0">
            Membangun sistem keamanan digital dengan mudah untuk RT/RW di Indonesia.
          </p>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <p className="text-muted small mb-0">&copy; 2026 JagaWarga Digital. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
)

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <style>{`
          .hover-link:hover { color: #198754 !important; transition: 0.3s; }
          body { font-family: 'Inter', sans-serif; background-color: #fcfcfc; }
          .container { max-width: 1100px; }
          html, body { height: 100%; margin: 0; }
        `}</style>
      </head>
      <body className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}