import React, { useEffect, useState } from 'react';
import { getCats, toggleFavorite } from '../api';
import CatCard from '../components/CatCard';

interface Cat {
  id: number;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
}

const AllCats: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    getCats().then(response => {
      setCats(response.data);
    }).catch(error => {
      console.error('Error fetching cats:', error);
    });
  }, []);

  const handleToggleFavorite = (catId: number) => {
    toggleFavorite(catId).then(() => {
      setCats(prevCats =>
        prevCats.map(cat =>
          cat.id === catId ? { ...cat, isFavorite: !cat.isFavorite } : cat
        )
      );
    }).catch(error => {
      console.error('Error toggling favorite:', error);
    });
  };

  return (
    <div className="cats-grid">
      {cats.map(cat => (
        <CatCard
          key={cat.id}
          id={cat.id}
          name={cat.name}
          imageUrl={cat.imageUrl}
          isFavorite={cat.isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
};

export default AllCats;
