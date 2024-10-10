import React, { useState, useEffect } from 'react';
import './peserta.css';
import { apiGet } from '../../api';

const Peserta = () => {
    const [currentParticipants, setCurrentParticipants] = useState([]);
    const [finishedParticipants, setFinishedParticipants] = useState([]);

    useEffect(() => {
        // Fungsi untuk mengambil data dari API atau database
        const fetchData = async () => {
            try {
                const responseCurrent = await apiGet('http://localhost:3000/Peserta'); // Ganti dengan URL API untuk peserta saat ini
                const dataCurrent = await responseCurrent.json();
                setCurrentParticipants(dataCurrent);

                const responseFinished = await apiGet('http://localhost:3000/Peserta'); // Ganti dengan URL API untuk peserta yang sudah selesai
                const dataFinished = await responseFinished.json();
                setFinishedParticipants(dataFinished);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="peserta-magang">
              <div className="content">
            <h1 className='magangHead'>Peserta magang saat ini</h1>
            <table className='magang'>
                <thead>
                    <tr>
                        <th>Nama Peserta</th>
                        <th>Penilaian</th>
                        <th>Performance</th>
                        <th>Status masa magang</th>
                    </tr>
                </thead>
                <tbody>
                    {currentParticipants.map((participant) => (
                        <tr key={participant.id}>
                            <td>{participant.name}</td>
                            <td><button>Nilai</button></td>
                            <td>{participant.performance}</td>
                            <td>{participant.statusMasaMagang}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className="content2">
            <h1 className='Done'>Peserta magang yang sudah selesai</h1>
            <table className='selesaiMagang'>
                <thead>
                    <tr>
                        <th>Nama Lengkap</th>
                        <th>Upload sertifikat magang</th>
                    </tr>
                </thead>
                <tbody>
                    {finishedParticipants.map((participant) => (
                        <tr key={participant.id}>
                            <td>{participant.name}</td>
                            <td>{participant.uploadSertifikat ? 'Sudah diupload' : 'Belum diupload'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Peserta;
