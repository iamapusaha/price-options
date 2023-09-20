import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Phones = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        phone: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                });
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData)
            })
    }, [])
    return (
        <div>
            <h1>{phones.length}</h1>
            <BarChart
                width={1200}
                height={300}
                data={phones}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="phone" />
                <YAxis dataKey="price" />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
                <Bar dataKey="phone" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

Phones.propTypes = {

};

export default Phones;