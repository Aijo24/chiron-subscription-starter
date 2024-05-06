import React, { useState, useEffect } from 'react';

export default function LogoCloud() {
  const images = [
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg',
    '/image7.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <p className="uppercase text-zinc-400 text-center font-bold tracking-[0.3em] mb-10">
        Chiron Invest
      </p>
      <h2 className="font-bold lg:text-5xl sm:text-4xl text-2xl text-center lg:pb-16 md:pb-10 pb-6">Notre <span className="text-lime-400">Indicateur</span></h2>
      <div className="mt-8 relative" style={{ height: '500px' }}>
        {images.map((image, index) => (
          <div
            key={image}
            className={`transition-opacity duration-500 ease-linear ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } absolute inset-0 flex justify-center items-center`}
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`}
              className="max-w-full max-h-full" 
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }} 
            />
          </div>
        ))}
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 uppercase text-center font-bold mb-16">
        <p className="mt-4">
          C’est un outil puissant qui se présente sous la forme d’une ligne verte sur votre graphique. Conçu pour les
          traders et les investisseurs, ChironTrend utilise des algorithmes avancés pour vous aider à naviguer sur les marchés financiers.
          ChironTrend est conçu pour s’adapter aux conditions changeantes du marché, offrant ainsi une flexibilité inégalée.
        </p>
        <p className="mt-4">
          Découvrez notre nouvel indicateur, ChironNael!
        </p>
        <p className="mt-4">
          Que vous soyez un trader débutant ou
          expérimenté, ChironTrend peut vous aider à prendre des décisions de trading plus éclairées.
          N’attendez plus, ajoutez l’indicateur ChironTrend à votre plateforme de trading dès aujourd’hui et découvrez la différence qu’un indicateur de qualité
          supérieure peut faire dans votre trading!
        </p>
      </div>
    </div>
  );
}
