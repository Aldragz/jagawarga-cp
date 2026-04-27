import Link from 'next/link'
import fs from 'fs/promises'
import path from 'path'

async function getTeamData() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data.team;
}

export default async function AboutPage() {
  const teamMembers = await getTeamData();

  return (
    <div className="py-16 container mx-auto px-5">
      <h1 className="fw-bold mb-4">Tentang JagaWarga</h1>
      <p className="text-muted lead mb-10 max-w-3xl">
        Bermula dari kepedulian terhadap keamanan komplek perumahan yang seringkali masih konvensional. Kami hadir memberikan sentuhan teknologi untuk mempermudah koordinasi warga dan petugas keamanan.
      </p>
      <h2 className="py-10 fw-bold mb-6">Tim Kunci Kami</h2>
      <div className="row g-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                {/* Placeholder Avatar */}
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width: '50px', height: '50px'}}>
                  {member.name.substring(0,2).toUpperCase()}
                </div>
                <div>
                  <h5 className="fw-bold mb-0">{member.name}</h5>
                  <p className="text-success small mb-0">{member.role}</p>
                </div>
              </div>
              <p className="text-muted small mb-3">{member.bio}</p>
              <Link href={`/about/team/${member.id}`} className="btn btn-sm btn-outline-success">
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}