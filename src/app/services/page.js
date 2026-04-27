import fs from 'fs/promises'
import path from 'path'

async function getServicesData() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data.services;
}

export default async function ServicesPage() {
  const services = await getServicesData();

  return (
    <div className="py-16 bg-light">
      <div className="container mx-auto px-5">
        <h1 className="fw-bold text-center mb-10">Layanan Unggulan Kami</h1>
        <div className="row g-4 justify-content-center">
          {services.map((service) => (
            <div key={service.id} className="col-md-5">
              <div className="card h-100 border-0 shadow-sm p-5 text-center">
                <h4 className="fw-bold text-success mb-3">{service.title}</h4>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}