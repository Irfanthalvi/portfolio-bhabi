
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
    title: 'Cars Song for Kids',
    thumbnailUrl: 'https://i.ytimg.com/vi/9T6UUv81IWc/hq2.jpg',
    videoId: '9T6UUv81IWc',
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
    title: 'My Happy Day',
    thumbnailUrl: 'https://i.ytimg.com/vi/TO1EaZnmxNE/hq2.jpg',
    videoId: 'TO1EaZnmxNE',
  },
  {
    title: 'Clean Up Song for Kids',
    thumbnailUrl: 'https://i.ytimg.com/vi/jfe92n7FQqA/hqdefault.jpg',
    videoId: 'jfe92n7FQqA',
  },
];

const appVideos: VideoProject[] = [
  {
    title: 'Signature Maker & eSign PDF App Promo',
    thumbnailUrl: 'https://i.ytimg.com/vi/DJvf-XqmJXc/hqdefault.jpg',
    videoId: 'DJvf-XqmJXc',
  },
  {
    title: 'Bounzo Panda App Promo',
    thumbnailUrl: 'https://i.ytimg.com/vi/WKsX7K4be1Y/hqdefault.jpg',
    videoId: 'WKsX7K4be1Y',
  },
  {
    title: 'Arrow Drift App Promo',
    thumbnailUrl:
      'https://play-lh.googleusercontent.com/SoMQMg3wGdzhX3IkI5zamYUVDALnLz0hEOrWvbtRGZUXQZrvEZapGZRQr7u2k0bfLkfP7ogqSExipcwD9CZq=w1052-h592-rw',
    videoId: 'lP3V3KDNDXY',
  },
];

// Four local MP4 videos
const extraVideos: VideoProject[] = [
  {
    title: 'Video 1',
    thumbnailUrl: '',
    videoUrl: '/videoNo-4.mp4',
  },
  {
    title: 'Video 2',
    thumbnailUrl: '',
    videoUrl: '/videoNo-3.mp4',
  },
  {
    title: 'Video 3',
    thumbnailUrl: '',
    videoUrl: '/videoNo-2.mp4',
  },
  {
    title: 'Video 4',
    thumbnailUrl: '',
    videoUrl: '/videoNo-1.mp4',
  },
];

// All videos in one continuous list.
// Video 11 and Video 12 are excluded.
const allVideos = [
  ...appVideos,
  ...extraVideos,
  ...creatorVideos,
].filter((_, index) => index !== 10 && index !== 11);

export default function Projects() {
  const [activeVideoKey, setActiveVideoKey] = useState<string | null>(null);

  const playVideo = (project: VideoProject) => {
    const videoKey = project.videoId ?? project.videoUrl ?? null;

    // Switching videos unmounts the previous player.
    setActiveVideoKey(videoKey);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <SectionHeader
          label="Portfolio"
          title="Featured"
          highlight="Work"
        />

        {/* All Videos - 3 Videos Per Row */}

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allVideos.map((project) => (
            <VideoCard
              key={project.videoId ?? project.videoUrl ?? project.title}
              project={project}
              isPlaying={
                activeVideoKey === (project.videoId ?? project.videoUrl)
              }
              onPlay={() => playVideo(project)}
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

      {/* Active Local MP4 Video */}

      {isPlaying && project.videoUrl ? (
        <video
          key={`active-${project.videoUrl}`}
          className="absolute inset-0 h-full w-full object-cover"
          src={project.videoUrl}
          controls
          autoPlay
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      ) : isPlaying && project.videoId ? (

        /* Active YouTube Video */

        <iframe
          key={`youtube-${project.videoId}`}
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0`}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      ) : (

        /* Video Thumbnail / Preview */

        <>
          {project.thumbnailUrl ? (
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              width={480}
              height={360}
              unoptimized
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          ) : (
            <video
              className="h-full w-full object-cover"
              src={project.videoUrl}
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          )}

          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play ${project.title}`}
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
