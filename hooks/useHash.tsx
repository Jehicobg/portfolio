"use client";

import { useState, useEffect } from "react";

const getHash = () =>
  typeof window !== "undefined" ? window.location.hash : "";

const useHash = () => {
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const handleHashChange = () => {
        console.log('aca',window.location.hash)
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { currentHash: hash };
};

export default useHash;
