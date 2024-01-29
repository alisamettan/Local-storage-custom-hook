import { useEffect } from "react";
import Main from "./layout/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./context/Providers";

function App() {
  useEffect(() => {
    // app componentinin did mount
    // tüm uygulama çalıştırıldı ve yüklendi
    // Sadece 1 kere çalışır
    console.warn("APP DID MOUNT! UYGULAMA YÜKLENDİ!");

    toast.error("Sayfama hoşgeldin!");
  }, []);

  return (
    <Providers>
      <Main />
      <ToastContainer position="bottom-center" />
    </Providers>
  );
}

export default App;

// Linting - ESLint - EcmaScript Lint
