import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./pages/Feed";
import Signup from "./pages/Signup";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
