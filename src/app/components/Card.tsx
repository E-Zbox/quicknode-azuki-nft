"use client";
import React from "react";
// store
import { useStore } from "@/store";
// styles
import { MainCard, TokenId } from "../styles/Card.styles";

interface ICardProps {
  collectionTokenId: string;
  imageUrl: string;
  name: string;
}

const Card = ({ name, collectionTokenId, imageUrl }: ICardProps) => {
  const { selectedTokenId, setSelectedTokenId } = useStore(
    ({ selectedTokenId, setSelectedTokenId }) => ({
      selectedTokenId,
      setSelectedTokenId,
    })
  );

  const isSelected = collectionTokenId === selectedTokenId;
  return (
    <MainCard
      $bgImg={imageUrl}
      $selected={isSelected}
      onClick={() => setSelectedTokenId(collectionTokenId)}
    >
      <TokenId $selected={isSelected}>
        {isSelected ? name : collectionTokenId}
      </TokenId>
    </MainCard>
  );
};

export default Card;
