import { useState } from "react"
import { Header } from "./components/Header";

export function App() {
  const areas = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"]
  const brands = [
    {
      name: "HP",
      urlImage: "",
    },
    {
      name: "Dell",
      urlImage: "",
    },
    {
      name: "Positivo",
      urlImage: "",
    },
    {
      name: "Asus",
      urlImage: "",
    },
    {
      name: "Xing Ling",
      urlImage: "",
    },
  ]

  const[products, setProducts] = useState([]);

  return (
    <div>
      <Header areas={areas} brands={ brands.map(brand => brand.name) }/>
    </div>
  )
}
