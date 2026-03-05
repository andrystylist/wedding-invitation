import AOS from "aos";
import "aos/dist/aos.css";
import Background from "@/components/Background";
import Page from "@/components/Page";
import { GlobalSettingsProvider } from "@/context/GlobalSettingsContext";
import { useEffect } from "react";

function App() {
  AOS.init();

  // start allways at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalSettingsProvider>
        <main>
          <Background />
          <Page />
        </main>
      </GlobalSettingsProvider>
    </>
  );
}

export default App;
