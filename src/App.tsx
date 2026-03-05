import "./App.scss";
import Background from "@/components/Background";
import PageSection from "@/components/PageSection";
import { GlobalSettingsProvider } from "@/context/GlobalSettingsContext";

function App() {
  return (
    <>
      <GlobalSettingsProvider>
        <main className="w-screen h-screen">
          <Background />
          <PageSection />
        </main>
      </GlobalSettingsProvider>
    </>
  );
}

export default App;
