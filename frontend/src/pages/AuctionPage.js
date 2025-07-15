import React from 'react';
import { useParams } from 'react-router-dom';

const AuctionPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Auction Details for {id}</h1>
      {/* Auction details and bid functionality here */}
    </div>
  );
};

export default AuctionPage;
