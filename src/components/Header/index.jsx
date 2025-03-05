import logoImg from "../../assets/logo-techshop.svg";
import { Button } from "../ui/button";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logoImg} alt="Logo do site TechShop" width={200} />
        
        <div className="ml-auto flex items-center gap-2">
          <Button>Adicionar Produto</Button>
        </div>
      </div>
    </header>
  );
}
