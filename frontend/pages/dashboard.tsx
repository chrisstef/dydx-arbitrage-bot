import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://YOUR_EC2_INSTANCE_IP/programa/bot_agents.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            {data.length > 0 ? (
                <ul className="space-y-2">
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className="border p-4 rounded-md bg-white shadow"
                        >
                            <pre>{JSON.stringify(item, null, 2)}</pre>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className=''>Loading data...</p>
            )}
        </div>
    );
};

export default Dashboard;
