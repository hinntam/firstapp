"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageDogAPI() {
    const [data, setData] = useState(null);
    const [imageSrc, setImageSrc] = useState('');
    const [id, setId] = useState(1);
    const [text, setText] = useState('');

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
        setText(event.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <nav className="w-full md:w-64 h-auto md:h-screen bg-gray-800 text-white fixed md:relative">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Navigation</h2>
                    <ul>
                        <li className="mb-2">
                            <Link href="/">
                                <a className="hover:underline">Home</a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/dog-api">
                                <a className="hover:underline">Dog API</a>
                            </Link>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </nav>
            <main className="ml-0 md:ml-64 p-4 w-full">
                <h1 className="text-4xl font-bold mb-8 text-center">Dog API</h1>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4">Dog Breeds</h1>
                    <input
                        type="text"
                        value={id}
                        onChange={handleInputChange}
                        placeholder="Enter text"
                        className="mb-4 p-2 border border-gray-300 w-full md:w-auto"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={() => fetchData()}
                    >
                        Fetch Dog
                    </button>
                    {data && (
                        <div>
                            <p className="mb-4">End-point API dogs</p>
                            {data.name && <h2 className="text-xl font-semibold">{data.name}</h2>}
                            {imageSrc && <img src={imageSrc} alt="Dog" className="w-full md:w-auto" />}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}