import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getTeamMember(id) {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data.team.find(member => member.id === id);
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  
  return data.team.map((member) => ({
    id: member.id,
  }));
}

export default async function TeamDetailPage({ params }) {
  const { id } = await params;

  const member = await getTeamMember(id);

  if (!member) {
    notFound();
  }

  return (
    <div className="py-16 container mx-auto px-5 max-w-xl">
      <Link href="/about" className="text-success no-underline small mb-4 d-inline-block">
        &larr; Kembali
      </Link>
      
      <div className="card p-5 border-0 shadow text-center">
        <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold mx-auto mb-4" style={{width: '100px', height: '100px', fontSize: '2rem'}}>
          {member.name.substring(0,2).toUpperCase()}
        </div>
        <h1 className="fw-bold mb-1">{member.name}</h1>
        <p className="text-success lead mb-4">{member.role}</p>
        <hr className="my-4" />
        <p className="text-muted">
          "{member.bio} {member.name} berkomitmen penuh membangun solusi teknologi yang efisien untuk warga perumahan."
        </p>
      </div>
    </div>
  )
}