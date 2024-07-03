"use client";
import { useEffect } from "react";
// api
import { fetchTokens } from "@/api";
// components
import Card from "../components/Card";
import Modal from "../components/Modal";
// store
import { useStore } from "@/store";
// styles
import { CardContainer, MainHome } from "../styles/Home.styles";
import { Loader } from "../styles/Loader.styles";
// utils
import { screens } from "@/utils/data";
import { FlexContainer } from "../styles/Container.styles";

const LOCAL_STORAGE_TOKEN_STATE = "tokenState";

const Home = () => {
  const {
    default: {
      assets: { loaderGif },
    },
  } = screens;
  const { loadingState, tokenState, setTokenState, updateTokenState } =
    useStore(
      ({ loadingState, tokenState, setTokenState, updateTokenState }) => ({
        loadingState,
        tokenState,
        setTokenState,
        updateTokenState,
      })
    );

  useEffect(() => {
    // first render
    const localStorageTokenState = localStorage.getItem(
      LOCAL_STORAGE_TOKEN_STATE
    );

    if (localStorageTokenState) {
      setTokenState(JSON.parse(localStorageTokenState));
    } else {
      fetchTokens()
        .then((res) => {
          const { data, error, success } = res;

          if (!success) throw error;

          updateTokenState(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    const tokenStateKeys = Object.getOwnPropertyNames(tokenState);

    if (tokenStateKeys.length > 0) {
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN_STATE,
        JSON.stringify(tokenState)
      );
    }
  }, [tokenState]);

  const tokenStateKeys = Object.getOwnPropertyNames(tokenState);

  if (tokenStateKeys.length > 0) {
    return (
      <MainHome>
        <CardContainer>
          {tokenStateKeys.map((key) => {
            const { collectionTokenId, imageUrl, name } = tokenState[key];

            return (
              <Card
                key={key}
                collectionTokenId={collectionTokenId}
                imageUrl={imageUrl}
                name={name}
              />
            );
          })}
        </CardContainer>
        {loadingState ? (
          <FlexContainer
            $height="70px"
            $alignItems="center"
            $justifyContent="flex-start"
          >
            <Loader src={loaderGif.src} $size={"50px"} />
          </FlexContainer>
        ) : (
          <></>
        )}
        <Modal />
      </MainHome>
    );
  }

  return <></>;
};

export default Home;
