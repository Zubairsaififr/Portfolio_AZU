import React from "react";
import HoverCard from "../HoverCard.css";

const cardData = [
  {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    points: ["React & JS", "Fast UI", "SEO Friendly"],
  },
  {
    title: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    points: ["Android & iOS", "Smooth UX", "High Performance"],
  },
  {
    title: "AI Solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    points: ["ML Models", "Automation", "Smart Systems"],
  },
];

const Cards = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {cardData.map((card, index) => (
        <HoverCard
          key={index}
          title={card.title}
          image={card.image}
          points={card.points}
        />
      ))}
    </div>
  );
};

export default Cards;
