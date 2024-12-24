"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageDogAPI() {
    const [data, setData] = useState(null);
    const [imageSrc, setImageSrc] = useState('');
    const fetchData = async () => {
        try {
          const response = await fetch('https://hinntam.vercel.app/restapi/part-1/api/dogs/1');
          const result = await response.json();
            // Assuming the image data is in result.img and is a buffer
             // Randomly select between 0 and 1
             //const randomIndex = Math.floor(Math.random() * 2);

            if (result.img) {
              const base64String = Buffer.from(result.img).toString('base64');
              setImageSrc(`data:image/jpeg;base64,${base64String}`);
          }
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
                {data && (
                    <div>
                        <p className="mb-4">End-point API dogs</p>
                        <p className="mb-4">https://hinntam.vercel.app/restapi/part-1/api/dogs
                          <input type="text" value="1" className="border-2 border-gray-500" />
                        </p>
                        <p className="mb-4">Dog ID: {data.id}</p>
                        <p className="mb-4">Dog Name: {data.name}</p>
                        <p className="mb-4">Dog Age: {data.age}</p>
                        {imageSrc && <img src={imageSrc} alt="Dog" />}
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Edit
                        </button>
                    </div>
                )}
    </div>
    </main>
  </div>
  );
}