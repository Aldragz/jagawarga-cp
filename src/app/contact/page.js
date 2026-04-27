'use client' 

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.message) {
      setSubmitted(true)
      // Reset form
      setFormData({ name: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="py-16 container mx-auto px-5 max-w-2xl">
      <h1 className="fw-bold mb-4">Hubungi JagaWarga</h1>
      <p className="text-muted mb-8">
        Tertarik menggunakan JagaWarga di komplek Anda? Atau punya pertanyaan teknis? Kirim pesan kepada kami.
      </p>

      {submitted && (
        <div className="alert alert-success mb-4" role="alert">
          Terima kasih, {formData.name || 'Pesan Anda'} telah terkirim! Tim kami akan segera menghubungi Anda.
        </div>
      )}

      <div className="card p-5 border-0 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-bold">Nama Lengkap / Jabatan (RT/RW)</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control" 
              placeholder="Contoh: Budi (Ketua RT 02)" 
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label small fw-bold">Pesan Anda</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control" 
              rows="4" 
              placeholder="Tuliskan pertanyaan atau detail komplek Anda..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100 py-2 fw-bold">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  )
}