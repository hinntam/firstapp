"use client"
import { useEffect, useState } from "react";
import VideoPlayer from "./video/video-player";
import itemsData from './data.json';
import Item from "./items";
export default function Home() {
  const[url,setUrl]= useState('https://www.youtube.com/watch?v=Ofux_4c94FI');
  const[title,setTitle]=useState('');
  const[items ,setItems]=useState(itemsData);
  const[lstGroup,setLstGroup]=useState({});
  const ListGroup=()=>items.reduce((groupCategory,item)=>{
    let category=item.name;
    if(groupCategory[category]==null) groupCategory[category]=[];
    groupCategory[category].push(item);
    return groupCategory;
 },{})
 useEffect(()=>{
    setLstGroup(ListGroup());
 })
  return (
    <div className="container mx-auto px-4">
      <main className="flex flex-col md:flex-row">
      {/* Left Sidebar - Contents */}

      <div className="md:w-1/4 p-4">
        {
          
          <div className="bg-black">
          {
            items.map((item) =>(
              <div key={item.id} className="nx-flex nx-flex-col nx-gap-1 nextra-menu-desktop max-md:nx-hidden">
                <h2 className="nx-flex nx-flex-col nx-gap-1 active text-cyan-50 text-center font-bold">{item.name}</h2>
                <ul>
                {
                    item.content.map((i)=>(
                      <li key={i.id} >
                        <h2 className="text-sm font-bold text-blue-50 ml-2">{i.name}</h2>
                        {
                          <ul>
                            {
                              i.detail.map((idtail)=>(
                                <li key={idtail.id} className="p-2 m-4 bg-slate-900 max-w-sm cursor-pointer">
                                  <Item itemObj={idtail} handleClick={(url,title)=>
                                    {
                                      setUrl(url)
                                      setTitle(title);
                                    }}/>
                                </li>
                              ))
                            }
                          
                          </ul>
                        }
                      </li>  
                    ))
                }
              </ul>
              </div>
            ))
          }
          </div>
        }
      
      </div>

      {/* Center - Video Player */}
      <div className="md:w-1/2 p-4">
        <VideoPlayer url={url}
        
        />
        {/**Content */}
        <div dangerouslySetInnerHTML={{ __html: title }} />
        {/**Right handside */}
        <div className="flex justify-between items-center w-full max-w-2xl mt-4">
          <button className=" hover:underline bg-gray-500 border p-1 text-cyan-50">Overview</button>
          <button className="hover:underline bg-gray-500 border p-1 text-cyan-50">Q&A</button>
          <button className=" hover:underline bg-gray-500 border p-1 text-cyan-50">Notebook</button>
          <button className=" hover:underline bg-gray-500 border p-1 text-cyan-50">Transcript</button>
        </div>
        
      </div>

      {/* Right Sidebar - Q&A */}
      <div className="md:w-1/4 p-4">
        <h2 className="text-lg font-bold mb-4">Q&A</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Key takeaways for this video</h3>
          <p className="text-gray-700">Summary and key points from the video.</p>
        </div>
        <div>
          <h3 className="font-semibold">Help me understand this better</h3>
          <p className="text-gray-700">Questions and explanations to clarify the content.</p>
        </div>
      </div>
      </main>
    </div>
  );
}
