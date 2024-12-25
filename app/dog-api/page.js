"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageDogAPI() {
    const [data, setData] = useState(null);
    const [imageSrc, setImageSrc] = useState('');
    const [id, setId] = useState(1);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://hinntam.vercel.app/restapi/part-1/api/dogs/${id}`);
            const result = await response.json();
            console.log(result);

            // Randomly select between 0 and 1
            const randomIndex = Math.floor(Math.random() * 2);

            // Assuming the image data is in result[randomIndex].img and is a buffer
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
    }, [id]);

    const handleInputChange = (event) => {
        setId(event.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <nav className="w-full md:w-64 h-auto md:h-screen bg-gray-800 text-white fixed md:relative">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Navigation</h2>
                    <ul>
                        <li className="mb-2 border-b-2 border-blue-400">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="mb-2 border-b-2 border-blue-400">
                            <Link href="/dog-api">
                                Dog API
                            </Link>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </nav>
            <main className="ml-0 md:ml-10 p-4 w-full">
                <h1 className="text-4xl font-bold mb-8 text-center">Dog API</h1>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4 mt-5">End-point API dogs</h1>
                    <ul className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <li className="border-b-2 border-blue-400 pb-2 font-bold">
                            <Link href="/dog-api/all">List all of dogs</Link>
                        </li>
                        <li className="border-b-2 border-blue-400 pb-2 font-bold">
                            <Link href="/dog-api/keyword">List dogs by keyword</Link>
                            
                        </li>
                        <li className="border-b-2 border-blue-400 pb-2">List category dogs</li>
                        <li className="border-b-2 border-blue-400 pb-2 font-bold">
                            <Link href="/dog-api/">Detail of dog by ID</Link>
                        </li>
                        <li className="border-b-2 border-blue-400 pb-2 font-bold">
                            <Link href="/dog-api/random">Random 5 dogs</Link>
                        </li>
                    </ul>
                    <h1 className="text-3xl font-bold mb-4 mt-5">
                        <Link href="/dog-api/">Display dog by ID</Link>
                    </h1>
                    <p className="mb-4 border-b-2 border-gray-500">
                        https://hinntam.vercel.app/restapi/part-1/api/dogs/:id
                    </p>
                    <p className="mb-4 font-bold">
                        Display dog detail by ID
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="border-b-2 border-gray-300 pb-2">
                            <h2 className="font-bold">JSON</h2>
                            <pre className="max-w-full md:max-w-1/2 overflow-auto h-64">
                                {JSON.stringify(data, null, 2)}
                            </pre>
                        </li>
                        <li className="border-b-2 border-gray-300 pb-2">
                            <h1 className="font-bold">RESULT</h1>
                            {data && (
                                <div>
                                   {imageSrc && <img src={imageSrc} alt="Dog" className="w-1/2" />}
                                </div>
                            )}
                        </li>
                    </ul>

                    
                    
                  
                    
                </div>
            </main>
        </div>
    );
}