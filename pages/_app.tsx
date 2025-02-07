import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Loader from "@/components/common/loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isMounted = useRef(false);

  const handleStart = useMemo(() => () => setLoading(true), []);
  const handleStop = useMemo(() => () => setLoading(false), []);

  useEffect(() => {
    if (isMounted.current) return; 
    isMounted.current = true;

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router, handleStart, handleStop]);

  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
