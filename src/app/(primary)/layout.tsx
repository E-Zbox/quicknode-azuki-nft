"use client";
import React, { MutableRefObject, useEffect, useRef } from "react";
// api
import { fetchTokens } from "@/api";
// components
import Navbar from "../components/Navbar";
// store
import { useStore } from "@/store";
// styles
import { MainApp } from "../styles/App.styles";

export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { setLoadingState, tokenState, updateTokenState } = useStore(
    ({ setLoadingState, tokenState, updateTokenState }) => ({
      setLoadingState,
      tokenState,
      updateTokenState,
    })
  );

  const handleInfiniteScroll = () => {
    const target = appRef.current;

    const { clientHeight, scrollHeight, scrollTop } = target;

    if (scrollTop + clientHeight >= scrollHeight * 0.8) {
      const tokenStateKeys = Object.getOwnPropertyNames(tokenState);
      const nextPage = Number((tokenStateKeys.length / 40).toFixed(0)) + 1;
      setLoadingState(true);
      fetchTokens(nextPage)
        .then((res) => {
          const { data, error, success } = res;

          if (!success) throw error;

          updateTokenState(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoadingState(false);
        });
    }
  };

  useEffect(() => {
    if (appRef.current) {
      appRef.current.addEventListener("scrollend", handleInfiniteScroll);
    }

    return () => {
      appRef.current?.removeEventListener("scrollend", handleInfiniteScroll);
    };
  }, [tokenState]);

  return (
    <MainApp ref={appRef}>
      <Navbar />
      {children}
    </MainApp>
  );
}
