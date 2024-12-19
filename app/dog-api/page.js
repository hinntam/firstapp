"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageDogAPI() {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        try {
          const response = await fetch('https://hinntam.vercel.app/restapi/part-1/api/dogs');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
            console.log('Data fetched successfully');
        }
      };
    useEffect(() => {
        fetchData();
    },[data]);
    return (
    <div className="flex">
      <nav className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Navigation</h2>
        <ul>
          <li className="mb-2">
            
            <Link href="/">
            Home
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dog-api">
              Dog API
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
    <main className="ml-64 p-8 w-full">
      <h1 className="text-4xl font-bold mb-8 text-center">Dog API</h1>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dog Breeds</h1>
        <p className="mb-4">End-point API dogs</p>
        <label>https://hinntam.vercel.app/restapi/part-1/api/dogs</label>
        <img src="https://hinntam.vercel.app/dogs/akita_dog.jpg" alt="Dog Breeds" />
        <div>
        {JSON.stringify(data, null, 2)}
        </div>
        <button className="p-5 rounded bg-slate-900 text-cyan-50 mt-5">Fetch data</button>

    </div>
    </main>
  </div>
  );
}