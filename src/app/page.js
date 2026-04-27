import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="py-20 bg-light">
      <div className="container mx-auto px-5 text-center">
        <h1 className="display-4 fw-bold mb-3">Solusi Keamanan Lingkungan Modern</h1>
        <p className="lead text-muted mb-5 max-w-2xl mx-auto">
          JagaWarga menghubungkan warga dan satpam untuk menciptakan lingkungan yang lebih aman, nyaman, dan terintegrasi secara digital.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link href="/services" className="btn btn-success btn-lg px-4 fw-bold">
            Lihat Layanan
          </Link>
          <Link href="/about" className="btn btn-outline-secondary btn-lg px-4">
            Tentang Kami
          </Link>
        </div>
      </div>
    </div>
  )
}