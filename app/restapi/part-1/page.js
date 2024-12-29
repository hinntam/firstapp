"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DogPage(){
    
    const [dogList,setDogList] = useState([]);
    const [dogName,setDogName] = useState("");
    const [dogAge,setDogAge] = useState(0); 
    const [dogDesc,setDogDesc] = useState("");
    const [file,setFile] = useState()
    const handleChangeName = (event)=>{
        setDogName(event.target.value);
    }
    const handleChangeAge = (event)=>{
        setDogAge(event.target.value);
    }
    const handleChangeDesc = (event)=>{
        setDogDesc(event.target.value);
    }
    async function handleSubmit(event){
        event.preventDefault();
        let formData = new FormData();
        formData.append("name",dogName);
        formData.append("age",dogAge);
        formData.append("desc",dogDesc);
        formData.append("file",file);
        let newObjDog = {
            name: dogName,
            age: dogAge
        }
        console.log(JSON.stringify(newObjDog));
        const request = new Request("https://hinntam.vercel.app/restapi/part-1/api/dogs",{
            method:"POST",
            body: formData
        });
        try {
            const response = await fetch(request); 
            if(response.ok) console.log("Success!");
        } catch (error) {
            console.log(error);
        }
        getAllDogs();
    }
    async function getAllDogs(){
        try {
            const response = await fetch("https://hinntam.vercel.app/restapi/part-1/api/dogs");
            if(!response.ok) console.log(response.error);
            const data = await response.json();
            setDogList(data);
        } catch (error) {
            console.log(error);

        }
    }
    async function deleteDog(idNum) {
        const request = new Request(`https://hinntam.vercel.app/restapi/part-1/api/dogs/${idNum}`,{
            method:"DELETE"
        });
        getAllDogs();
    }
    useEffect(() => {
        getAllDogs();
    },[]);

    return(
        <main className="p-5">
            <header>
            <h1>Dog Control Panel</h1>
            
            </header>
            <section>
                {
                    dogList.map((dog) =>(
                        <div key={dog.id} className="border-b-2 border-gray-300 p-2 flex justify-between items-center">
                            <p className="mr-4">Name:{dog.name}</p>
                            <p className="mr-4">Age:{dog.age}</p>
                            <p className="mr-4">Desc:{dog.description}</p>
                            <p className="mr-4"><Image src={`data:image/jpeg;base64,${Buffer.from(dog.img).toString('base64')}`} alt="dog" className="w-20 h-20"/></p>
                        </div>
                    ))
                }
            </section>
            <form className="max-w-md p-5 rounded-lg bg-green-300 text-black" onSubmit={handleSubmit}>
                <h2 className="text-2xl text-center mb-2">Add New Dog</h2>
                <div className="mb-2">
                    <label className="inline-block w-40">Name:</label>
                    <input type="text" onChange={handleChangeName} value={dogName}/>
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Age:</label>
                    <input type="text" onChange={handleChangeAge} value={dogAge}/>
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Desc:</label>
                    <input type="text" onChange={handleChangeDesc} value={dogDesc}/>
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">File:</label>
                    <input type="file" name="file" onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                <div className="mb-2">
                    <button type="submit" className="p-5 rounded bg-slate-900 text-cyan-50 mt-5">Add dog</button>
                </div>
            </form>
        </main>
    )
}