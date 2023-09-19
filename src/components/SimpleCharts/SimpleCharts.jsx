import { LineChart, Line, XAxis, YAxis } from 'recharts';
import PropTypes from 'prop-types';

const SimpleCharts = () => {
    const StudentData = [
        { id: 1, name: 'Student 1', math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: 'Student 2', math: 72, physics: 89, chemistry: 76 },
        { id: 3, name: 'Student 3', math: 94, physics: 81, chemistry: 88 },
        { id: 4, name: 'Student 4', math: 67, physics: 75, chemistry: 80 },
        { id: 5, name: 'Student 5', math: 90, physics: 95, chemistry: 84 },
        { id: 6, name: 'Student 6', math: 78, physics: 82, chemistry: 70 },
        { id: 7, name: 'Student 7', math: 88, physics: 91, chemistry: 73 },
        { id: 8, name: 'Student 8', math: 81, physics: 76, chemistry: 87 },
        { id: 9, name: 'Student 9', math: 75, physics: 83, chemistry: 79 },
        { id: 10, name: 'Student 10', math: 86, physics: 90, chemistry: 94 },
    ];

    return (
        <div>
            <LineChart width={400} height={400} data={StudentData}>
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
                <Line type="monotone" dataKey="physics" stroke="#B0E0E6" />
                <Line type="monotone" dataKey="chemistry" stroke="#90EE90" />
                <XAxis></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

SimpleCharts.propTypes = {

};

export default SimpleCharts;