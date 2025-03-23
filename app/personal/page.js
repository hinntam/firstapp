"use client";
import { useEffect, useState } from "react";
import VideoPlayer from "./video/video-player";
import itemsData from "./dataielts.json";
import Item from "./items";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Home() {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=Ofux_4c94FI");
  const [title, setTitle] = useState("Click on the left side to view the content");
  const [audio, setAudio] = useState("");
  const [img, setImg] = useState("");
  const [img1, setImg1] = useState("");
  const [answer, setAnswer] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [items, setItems] = useState(itemsData);
  const [lstGroup, setLstGroup] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedWeek, setExpandedWeek] = useState(null); // Track which week is expanded

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleWeek = (weekId) => {
    setExpandedWeek(expandedWeek === weekId ? null : weekId); // Toggle the expanded week
  };

  const ListGroup = () =>
    items.reduce((groupCategory, item) => {
      let category = item.name;
      if (groupCategory[category] == null) groupCategory[category] = [];
      groupCategory[category].push(item);
      return groupCategory;
    }, {});

  useEffect(() => {
    setLstGroup(ListGroup());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-3xl font-bold text-center">Learning IELTS</h1>
      </header>

      <main className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-1/4 bg-white shadow-lg p-4">
          {/* Toggle Button for Mobile */}
          <button
            className="md:hidden p-4 bg-blue-500 text-white w-full mb-4"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "Close Menu" : "Open Menu"}
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block space-y-4`}
          >
            {items.map((item) => (
              <div key={item.id} className="border-b pb-2">
                <h2
                  className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-blue-500"
                  onClick={() => toggleWeek(item.id)} // Toggle dropdown on click
                >
                  {item.name}
                </h2>
                {expandedWeek === item.id && ( // Show content if the week is expanded
                  <ul className="space-y-2 mt-2">
                    {item.content.map((i) => (
                      <li key={i.id} className="text-sm text-gray-600">
                        <h3 className="font-bold">{i.name}</h3>
                        <ul className="pl-4 space-y-1">
                          {i.detail.map((idtail) => (
                            <li
                              key={idtail.id}
                              className="cursor-pointer hover:text-blue-500"
                            >
                              <Item
                                itemObj={idtail}
                                handleClick={(url, title) => {
                                  setUrl(url);
                                  setTitle(title + " " + i.name);
                                  setAudio(idtail.audio);
                                  setImg(idtail.image);
                                  setImg1(idtail.image1);
                                  setAnswer(idtail.answer);
                                  setLink1(idtail.link1);
                                  setLink2(idtail.link2);
                                  setLink3(idtail.link3);
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <section className="md:w-1/2 p-6 bg-white shadow-lg">
          <div className="mb-4">
            <h2
              className="text-2xl font-bold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          {/* Images */}
          {img && <img src={img} alt="image" className="w-full mb-4 rounded-lg" />}
          {img1 && (
            <img src={img1} alt="image" className="w-full mb-4 rounded-lg" />
          )}

          {/* Audio Player */}
          {audio && (
            <AudioPlayer
              autoPlay
              src={audio}
              onPlay={(e) => console.log("onPlay")}
              className="mb-4"
            />
          )}

          {/* Answer */}
          <div
            className="text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: answer }}
          />

          {/* Links */}
          {link3 && (
            <iframe
              src={link3}
              width="100%"
              height="500px"
              className="mb-4 border rounded-lg"
            ></iframe>
          )}
          {link1 && (
            <iframe
              src={link1}
              width="100%"
              height="500px"
              className="mb-4 border rounded-lg"
            ></iframe>
          )}
          {link2 && (
            <iframe
              src={link2}
              width="100%"
              height="500px"
              className="mb-4 border rounded-lg"
            ></iframe>
          )}
        </section>

        {/* Right Sidebar */}
        <aside className="md:w-1/4 p-6 bg-white shadow-lg">
          <h2 className="text-lg font-bold mb-4">Q&A</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">
              Key takeaways for this video
            </h3>
            <p className="text-gray-600">
              Summary and key points from the video.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              Help me understand this better
            </h3>
            <p className="text-gray-600">
              Questions and explanations to clarify the content.
            </p>
            <a
              className="text-blue-500 hover:underline"
              target="_blank"
              href="https://drive.google.com/drive/folders/1AgidfS0hiSGDGKV9CU17HI5gXzmfUr6Z?fbclid=IwY2xjawI9FCdleHRuA2FlbQIxMAABHRSvi72yZMzhmGKl0-g6_uBxy5a_sR0QvcZiWHQZiILfNKn4tbGo1OuT2w_aem_9lrIAGZYJsreNRsafkDrsA"
            >
              Google Drive IELTS GENERAL
            </a>
          </div>
        </aside>
      </main>
    </div>
  );
}