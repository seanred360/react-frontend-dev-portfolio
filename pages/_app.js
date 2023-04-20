import { useDarkMode } from "../components/styled-components/useDarkMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/styled-components/Themes";
import { GlobalStyles } from "../components/styled-components/GlobalStyles";
import DataProvider from "../components/DataContext";
import "../styles/globals.scss";
import "../styles/Slider.scss";
import "../styles/Projects.scss";
import "../styles/Footer.module.scss";

import { useRouter } from "next/router";
import { useEffect } from "react";
import * as GoogleAnalytics from "../lib/GoogleAnalytics";

function MyApp({ Component, pageProps }) {
  const [theme, handleToggleTheme, isMounted] = useDarkMode();
  const themeMode = theme === "dark" ? lightTheme : darkTheme;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      GoogleAnalytics.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DataProvider>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          {isMounted && (
            <Component
              {...pageProps}
              theme={theme}
              onToggleTheme={handleToggleTheme}
            />
          )}
        </ThemeProvider>
      </DataProvider>
    </>
  );
}

export default MyApp;
