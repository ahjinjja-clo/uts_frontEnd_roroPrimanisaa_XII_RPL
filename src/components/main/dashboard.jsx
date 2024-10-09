import React from 'react'
import './dasboard.css'
function Dashboard() {
  return (
    <div className="dashboard">
        <div className="greeting-message">
          <h1>Hai, Pegawai</h1>
          <p>Kamu punya 10+ laporan pematangan <a href="#">lihat selengkapnya</a></p>
        </div>
        <div className="department-needs">
          <h2>Departemen Yang Membutuhkan</h2>
          <div className="department-card">
            <i className="icon-ciso"></i>
            <p>CISO</p>
            <span>1 Orang</span>
          </div>
          <div className="department-card">
            <i className="icon-human-capital"></i>
            <p>Human Capital Services</p>
            <span>1 Orang</span>
          </div>
          </div>
          <div className="department-needs">

          <div className="department-card">
            <p>Business Capital Partner</p>
            <span>1 Orang</span>
          </div>
          <div className="department-card">
            <p>IT Infrastructure</p>
            <span>1 Orang</span>
          </div>

        </div>
      </div>
  );
}

export default Dashboard;