'use client';

import Image from 'next/image';

const images = [
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306175/box5_iqxhla.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306175/box4_q0xsbj.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306175/box2_kfgkgb.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306175/box6_or9c2s.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306176/box8_osyqgr.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306176/box3_v26kg6.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306176/box7_ph3lcd.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306178/box13_wfmq8w.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306177/box9_pvc5sj.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306178/box12_ezxfla.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306178/box11_l6tloh.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306179/box15_iqcuwn.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306178/box14_i5nzmg.jpg',
  'https://res.cloudinary.com/dtrrsp1ll/image/upload/v1749306178/box10_rbie7n.jpg'
];

// Shuffle the images array
const shuffledImages = images
  .map((src) => ({ src, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ src }) => src);

export default function WeddingGallery() {
  return (
    <div className="p-4 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold italic">
          Wedding Gallery
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
        {shuffledImages.map((src, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <Image
              src={src}
              alt={`Wedding image ${index + 1}`}
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
