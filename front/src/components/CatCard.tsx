import React from 'react';

interface CatProps {
  id: number;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const CatCard: React.FC<CatProps> = ({ id, name, imageUrl, isFavorite, onToggleFavorite }) => {
  return (
    <div className="cat-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <button onClick={() => onToggleFavorite(id)}>
        {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  );
};

export default CatCard;
