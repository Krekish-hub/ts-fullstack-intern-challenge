// src/components/CatGallery.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { sendCatData } from '..//..//..//api/src/utils/apiUtils';
import '../index.css';

interface Cat {
  id: string;
  url: string;
  name: string;
  isFavorite: boolean;
}

const CatGallery: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/cats');
        setCats(response.data);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();
  }, []);

  const toggleFavorite = async (id: string) => {
    try {
      const catToUpdate = cats.find((cat) => cat.id === id);
      if (catToUpdate) {
        const updatedCat = { ...catToUpdate, isFavorite: !catToUpdate.isFavorite };

        await axios.post(`http://localhost:3001/api/cats/${id}/favorite`);

        setCats((prevCats) =>
          prevCats.map((cat) =>
            cat.id === id ? updatedCat : cat
          )
        );

        await sendCatData(updatedCat);
      }
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };

  return (
    <div className="cat-gallery">
      <h1>Котики</h1>
      <div className="cats-grid">
        {cats.map((cat) => (
          <div key={cat.id} className="cat-card">
            <img src={cat.url} alt="Cute cat" />
            <button onClick={() => toggleFavorite(cat.id)}>
              {cat.isFavorite ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatGallery;