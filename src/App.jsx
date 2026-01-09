import "./App.css";
import { useState } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header />
      <NavBar />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Gallery searchTerm={searchTerm} />
    </>
  );
}
