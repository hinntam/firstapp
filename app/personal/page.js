"use client"
import { useEffect, useState } from "react";
import VideoPlayer from "./video/video-player";
import itemsData from './dataielts.json';
import Item from "./items";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export default function Home() {
  const[url,setUrl]= useState('https://www.youtube.com/watch?v=Ofux_4c94FI');
  const[title,setTitle]=useState('Click on the left side to view the content');
  const[audio,setAudio]=useState('');
  const[img,setImg]=useState('');
  const[img1,setImg1]=useState('');
  const[answer,setanswer]=useState('');
  const[link1,setLink1]=useState('');
  const[link2,setLink2]=useState('');
  const[link3,setLink3]=useState('');
  
  const[items ,setItems]=useState(itemsData);
  const[lstGroup,setLstGroup]=useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };
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
    <div className="nextra-nav-container nx-sticky nx-top-0 nx-z-20 nx-w-full nx-bg-transparent print:nx-hidden">
      <h2 className=" text-black text-center font-bold justify-center">Learning IELTS</h2>
      <main className="flex flex-col md:flex-row">
         {/* Toggle Button for Mobile */}
         <button
                className="md:hidden p-4 bg-blue-500 text-white"
                onClick={toggleMenu}
            >
                {isMenuOpen ? 'Close Menu' : 'Open Menu'}
            </button>
      {/* Left Sidebar - Contents */}
      
                
      <div className="md:w-1/4 p-4">
        {
          
          <div className={`nx-flex nx-flex-col nx-gap-1 nextra-menu-desktop ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          {
            items.map((item) =>(
              
              <div key={item.id} className="nx-flex nx-flex-col nx-gap-1 nextra-menu-desktop max-md:nx-hidden">
                
               <ul>
                {
                    item.content.map((i)=>(
                      <li key={i.id} className="nx-items-center nx-justify-between nx-gap-2 nx-text-left nx-w-full nx-flex">
                        <h2 className="text-sm font-bold text-black ml-2">{i.name}</h2>
                        {
                          <ul>
                            {
                              i.detail.map((idtail)=>(
                                <li key={idtail.id} className="pl-3 cursor-pointer">
                                  <Item itemObj={idtail} handleClick={(url,title)=>
                                    {
                                      setUrl(url)
                                      setTitle(title + " " + i.name);
                                      setAudio(idtail.audio);
                                      setImg(idtail.image);
                                      setImg1(idtail.image1);
                                      setanswer(idtail.answer);
                                      setLink1(idtail.link1);
                                      setLink2(idtail.link2);
                                      setLink3(idtail.link3);
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
        
        {/**Content */}
        <div dangerouslySetInnerHTML={{ __html: title }} />
        {/**Right handside */}
        {
          img && <img src={img} alt="image" className="w-full"/>
        }
        {
          img1 && <img src={img1} alt="image" className="w-full"/>
        }
        
        {
        audio && <AudioPlayer
          autoPlay
          src={audio}
          onPlay={e => console.log("onPlay")}
          // other props here
          />
        }
        <div dangerouslySetInnerHTML={{ __html: answer }} />
        {link3 && <iframe src={link3} width="100%" height="1000px"></iframe>}
        {link1 && <iframe src={link1} width="100%" height="1000px"></iframe>}
        {link2 && <iframe src={link2} width="100%" height="1000px"></iframe>}
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
          <a className="text-blue-900" target="_blank" href="https://drive.google.com/drive/folders/1AgidfS0hiSGDGKV9CU17HI5gXzmfUr6Z?fbclid=IwY2xjawI9FCdleHRuA2FlbQIxMAABHRSvi72yZMzhmGKl0-g6_uBxy5a_sR0QvcZiWHQZiILfNKn4tbGo1OuT2w_aem_9lrIAGZYJsreNRsafkDrsA"
          >Google Drive IELTS GENERAL</a>
        </div>
      </div>
      </main>
    </div>
  );
}
