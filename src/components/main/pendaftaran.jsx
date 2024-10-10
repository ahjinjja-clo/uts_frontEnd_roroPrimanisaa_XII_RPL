import React, { useState } from 'react';
import { apiPost } from '../../api';
import {useEffect} from 'react';

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
    const [data, setData] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiPost('/pendaftaran', formData);
            console.log(response.data);
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await apiPost('http://localhost:3000/api/pendaftaran');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

    if (submitted) {
        return <div>Terima kasih telah mendaftar! Anda akan segera dihubungi.</div>;
    };

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

        {data && (
                <div>
                    <h2>Data Pendaftaran</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Pendaftaran;
