"use client";
// store
import { useStore } from "@/store";
// styles
import {
  ContentBody,
  ContentImage,
  MainModal,
  MainTitle,
  TokenOwner,
  TraitCard,
  TraitIcon,
  TraitType,
  TraitValue,
  TraitsContainer,
  TraitsScroller,
  TraitsTitle,
} from "../styles/Modal.styles";
import { FlexContainer, PositionContainer } from "../styles/Container.styles";

const Modal = () => {
  const { selectedTokenId, setSelectedTokenId, tokenState } = useStore(
    ({ selectedTokenId, setSelectedTokenId, tokenState }) => ({
      selectedTokenId,
      setSelectedTokenId,
      tokenState,
    })
  );

  if (selectedTokenId.length > 0) {
    const { imageUrl, name, traits } = tokenState[selectedTokenId];

    return (
      <PositionContainer
        $bgColor={"#000d"}
        $position="fixed"
        $top="0px"
        $left="0px"
        $height={"100vh"}
        $alignItems="center"
        $justifyContent="center"
        onClick={() => setSelectedTokenId("")}
      >
        <MainModal>
          <ContentImage src={imageUrl} />
          <ContentBody>
            <MainTitle>{name}</MainTitle>
            <TraitsTitle>Traits</TraitsTitle>
            <TraitsScroller>
              <TraitsContainer>
                {traits.map(({ trait_type, value }, key) => (
                  <TraitCard key={key}>
                    <TraitIcon
                      src={`https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2F${trait_type}.png&w=64&q=75`}
                    />
                    <FlexContainer
                      $justifyContent="space-around"
                      $height="80%"
                      $width="fit-content"
                      $padding="5px 0px"
                    >
                      <TraitType>{trait_type}</TraitType>
                      <TraitValue>{value}</TraitValue>
                    </FlexContainer>
                  </TraitCard>
                ))}
              </TraitsContainer>
            </TraitsScroller>
            {/* <TokenOwner>
              <span>Owner: </span>0xd4
            </TokenOwner> */}
          </ContentBody>
        </MainModal>
      </PositionContainer>
    );
  }

  return <></>;
};

export default Modal;
