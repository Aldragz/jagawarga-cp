'use client' 

import { useState } from 'react';
import { sendContact } from './actions'; // Pastikan fungsi ini sudah terhubung ke Supabase

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State untuk loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.name && formData.message) {
      setIsLoading(true); // Mulai loading
      
      try {
        // Konversi formData ke format yang dibutuhkan Server Action
        const data = new FormData();
        data.append('name', formData.name);
        data.append('message', formData.message);

        // Memanggil Server Action untuk simpan data ke Supabase
        await sendContact(data);

        setSubmitted(true);
        setFormData({ name: '', message: '' }); // Reset form
        
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        console.error("Gagal mengirim pesan:", error);
        alert("Terjadi kesalahan saat mengirim pesan.");
      } finally {
        setIsLoading(false); // Matikan loading setelah selesai
      }
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="py-16 container mx-auto px-5 max-w-2xl">
      <h1 className="fw-bold mb-4">Hubungi JagaWarga</h1>
      <p className="text-muted mb-8">
        Tertarik menggunakan JagaWarga di komplek Anda? Atau punya pertanyaan teknis? Kirim pesan kepada kami.
      </p>

      {/* UX Feedback: Notifikasi Sukses */}
      {submitted && (
        <div className="alert alert-success mb-4" role="alert">
          Pesan Anda telah berhasil terkirim ke sistem JagaWarga! Tim kami akan segera menghubungi Anda.
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
              disabled={isLoading} // Disable input saat loading
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
              disabled={isLoading} // Disable input saat loading
              required
            ></textarea>
          </div>
          
          {/* Tombol dengan Loading State */}
          <button 
            type="submit" 
            className="btn btn-success w-100 py-2 fw-bold"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Mengirim...
              </>
            ) : 'Kirim Pesan'}
          </button>
        </form>
      </div>
    </div>
  );
}