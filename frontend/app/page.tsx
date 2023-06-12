"use client"
import { mockData } from '../data/index';

export default function Dashboard() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <ul className="space-y-4">
                {mockData.map((item, index) => (
                    <li key={index} className="border p-4 rounded-md bg-white shadow text-black">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h2 className="text-lg font-bold mb-2">Market 1: {item.market_1}</h2>
                                <p>Hedge Ratio: {item.hedge_ratio}</p>
                                <p>Z-Score: {item.z_score}</p>
                                <p>Half Life: {item.half_life}</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold mb-2">Market 2: {item.market_2}</h2>
                                <p>Order ID M1: {item.order_id_m1}</p>
                                <p>Order M1 Size: {item.order_m1_size}</p>
                                <p>Order M1 Side: {item.order_m1_side}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

