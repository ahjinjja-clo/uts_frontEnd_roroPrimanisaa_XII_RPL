import React, { useState } from 'react';
import './pendaftaran.css';

const Pendaftaran = () => {
    const [formData, setFormData] = useState({
        name: '',
        Jurusan: '',
        univ: '',
        email: '',
        notelp: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk menyimpan data ke database
        console.log(formData);
        setSubmitted(true);
    };

    if (submitted) {
        return <div>Terima kasih telah mendaftar! Anda akan segera dihubungi.</div>;
    }

    return (
        <div className="daftar">
            <h1 className='head'>Pendaftaran magang</h1>
        <form onSubmit={handleSubmit} className="form-pendaftaran">
            <label>
               <p>Nama</p>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                <p>Jurusan</p>
                <input type="text" name="Jurusan" value={formData.Jurusan} onChange={handleChange} required />
            </label>
            <label>
                <p>Universitas</p>
                <input type="text" name="univ" value={formData.univ} onChange={handleChange} required />
            </label>
            <label>
               <p> Email</p>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                <p>No. Telepon</p>
                <input type="text" name="notelp" value={formData.notelp} onChange={handleChange} required />
            </label>
            <button type="submit">Daftar</button>
        </form>
        </div>
    );
};

export default Pendaftaran;
