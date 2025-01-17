import { useEffect, useState } from "react";
import Main from "./layout/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

export const queryClient = new QueryClient();

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // app componentinin did mount
    // tüm uygulama çalıştırıldı ve yüklendi
    // Sadece 1 kere çalışır
    console.warn("APP DID MOUNT! UYGULAMA YÜKLENDİ!");

    toast.error("Sayfama hoşgeldin!");

    const token = localStorage.getItem("token");

    if (token) {
      // auto login
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("Auto Login oldu: ", res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", res.data.name);
          setUserName(res.data.name);
        })
        .catch((err) => {
          console.error("Login Hata: ", err);
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Main userName={userName} setUserName={setUserName} />
      <ToastContainer position="bottom-center" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

// Linting - ESLint - EcmaScript Lint

// .env
