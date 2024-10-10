import React, { useState, useEffect } from 'react';
import './recruitment.css';
import { apiGet } from '../../api.js';

const Recruitment = () => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        // Fungsi untuk mengambil data dari API atau database
        const fetchData = async () => {
            try {
                const response = await apiGet('http://localhost:3000'); // Ganti dengan URL API Anda
                const data = await response.json();
                setApplicants(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div className="tabel-pendaftaran">
            <h1>Lamaran Magang Baru</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nama Pelamar</th>
                        <th>Kontak</th>
                        <th>Checking-In</th>
                        <th>Tambah ke dept</th>
                        <th>Interview</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {applicants.map((applicant) => (
                        <tr key={applicant.NIM}>
                            <td>{applicant.name}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.checkingIn}</td>
                            <td>{applicant.tambahDept}</td>
                            <td>{applicant.interview}</td>
                            <td>{applicant.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Recruitment;
