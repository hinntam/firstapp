import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function VideoPlayer({url,title}) {
  return (
    <div>
      <ReactPlayer url={url} controls />
      <h2>{title}</h2>
    </div>
  );
}
