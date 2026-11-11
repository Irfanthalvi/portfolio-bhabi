'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

import SectionHeader from './SectionHeader';

interface VideoProject {
  title: string;
  thumbnailUrl: string;
  videoId?: string;
  videoUrl?: string;
}

const creatorVideos: VideoProject[] = [
  {
    title: 'Don’t Quit Yet — You’re Closer Than You Think',
    thumbnailUrl: 'https://i.ytimg.com/vi/Z44o36KiEKk/hqdefault.jpg',
    videoId: 'Z44o36KiEKk',
  },
  {
    title: 'The Two Kind Dolls and the Lonely Teddy Bear',
    thumbnailUrl: 'https://i.ytimg.com/vi/Wpu07-7oiZQ/hq2.jpg',
    videoId: 'Wpu07-7oiZQ',
  },
  {
    title: 'One Day, They’ll Ask How',
    thumbnailUrl: 'https://i.ytimg.com/vi/jZyC-felugc/hq2.jpg',
    videoId: 'jZyC-felugc',
  },
  {
    title: 'Stop Waiting for Someone to Change Your Life',
    thumbnailUrl: 'https://i.ytimg.com/vi/ZCSUZG4Tx_o/hq2.jpg',
    videoId: 'ZCSUZG4Tx_o',
  },
  {
    title: 'Clean Up Song for Kids',
    thumbnailUrl: 'https://i.ytimg.com/vi/jfe92n7FQqA/hqdefault.jpg',
    videoId: 'jfe92n7FQqA',
  },
  {
    title: 'My Happy Day',
    thumbnailUrl: 'https://i.ytimg.com/vi/TO1EaZnmxNE/hq2.jpg',
    videoId: 'TO1EaZnmxNE',
  },
  {
    title: 'Cars Song for Kids',
    thumbnailUrl: 'https://i.ytimg.com/vi/9T6UUv81IWc/hq2.jpg',
    videoId: '9T6UUv81IWc',
  },
];

const appVideos: VideoProject[] = [
  {
    title: 'Arrow Puzzle App Promo',
    thumbnailUrl:
      'https://play-lh.googleusercontent.com/8CB0EZWQnPHCbj8YDUss0q_UXo--0m1jCqAtQvLt0YUZljtUZMr78f9HPUx_0gJWOHjduAZ2KxA3uFOwtEDS=w1052-h592-rw',
    videoUrl:
      'https://play-games.googleusercontent.com/vp/mp4/1280x720/XKDtPxYrVhs.mp4',
  },
  {
    title: 'Bounzo Panda App Promo',
    thumbnailUrl:
      'https://play-lh.googleusercontent.com/h_h68vAT5o287lvnVgginEQgjQiBm7NswoyaHtiktCFjw3qCghKpHrvj0hmXp1RFo9r6irUxlZsb6mJXOBwbLw=w1052-h592-rw',
    videoUrl:
      'https://play-games.googleusercontent.com/vp/mp4/1280x720/WKsX7K4be1Y.mp4',
  },
  {
    title: 'Arrow Drift App Promo',
    thumbnailUrl:
      'https://play-lh.googleusercontent.com/SoMQMg3wGdzhX3IkI5zamYUVDALnLz0hEOrWvbtRGZUXQZrvEZapGZRQr7u2k0bfLkfP7ogqSExipcwD9CZq=w1052-h592-rw',
    videoUrl:
      'https://play-games.googleusercontent.com/vp/mp4/1280x720/lP3V3KDNDXY.mp4',
  },
];

export default function Projects() {
  const [activeVideoKey, setActiveVideoKey] = useState<string | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <SectionHeader
          label="Portfolio"
          title="Featured"
          highlight="Work"
        />

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {creatorVideos.map((project) => (
            <VideoCard
              key={project.title}
              project={project}
              isPlaying={activeVideoKey === (project.videoId ?? project.videoUrl)}
              onPlay={() =>
                setActiveVideoKey(project.videoId ?? project.videoUrl ?? null)
              }
            />
          ))}
        </div>
        <div className="mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {appVideos.map((project) => (
            <VideoCard
              key={project.title}
              project={project}
              isPlaying={activeVideoKey === (project.videoId ?? project.videoUrl)}
              onPlay={() =>
                setActiveVideoKey(project.videoId ?? project.videoUrl ?? null)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  project,
  isPlaying = false,
  onPlay,
}: {
  project: VideoProject;
  isPlaying?: boolean;
  onPlay?: () => void;
}) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-xl bg-muted">
      {isPlaying && project.videoUrl ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={project.videoUrl}
          poster={project.thumbnailUrl}
          controls
          autoPlay
          playsInline
        />
      ) : isPlaying && project.videoId ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0`}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={project.thumbnailUrl}
            alt=""
            width={480}
            height={360}
            unoptimized
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={onPlay}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Play size={24} fill="currentColor" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}