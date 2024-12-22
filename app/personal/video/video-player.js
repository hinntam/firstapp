import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function VideoPlayer({url,title}) {
  return (
    <div className="w-full">
      <ReactPlayer url={url} controls width="100%" height="500px" />
    </div>
  );
}
