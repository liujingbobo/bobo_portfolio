'use client';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export default function VideoEmbed({ videoId, title = 'BiliBili Video' }: VideoEmbedProps) {
  // BiliBili embed URL format
  const embedUrl = `https://player.bilibili.com/player.html?bvid=${videoId}&page=1&autoplay=0`;

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
      <iframe
        src={embedUrl}
        title={title}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{ border: 'none' }}
      />
    </div>
  );
}
