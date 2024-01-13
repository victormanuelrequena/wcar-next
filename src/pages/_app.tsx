import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import "../styles/App.scss";

// scss
import "../components/carCard/CardComponentStyles.scss";
import "../components/cardCarousel/cardCarouselStyles.scss";
import "../components/carousel/carouselStyles.scss";
import "../components/navbar/NavbarStyles.scss";
import "../components/navbar/components/cardFavorite/CardFavoriteComponentStyles.scss";
import "../components/slider/SliderStyles.scss";
import "../layouts/LayoutStyles.scss";
import "../styles/HomeStyles.scss";
import "../styles/AboutUsPageStyles.scss";
import "../styles/ContactPageStyles.scss";
import "../styles/InsurancePageStyles.scss";
import AllyProvider from "@/context/ally/AllyProvider";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Trebuchet+MS&display=swap"
        />
      </Head>
      <AllyProvider>
        <div className="app">
          <Component {...pageProps} />
        </div>
      </AllyProvider>
    </>
  );
}
