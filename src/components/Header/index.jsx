import { ModalCreateProduct } from "../ModalCreateProduct";
import logoImg from "../../assets/logo-techshop.svg";

export function Header({ areas }) {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logoImg} alt="Logo do site TechShop" width={200} />
        <ModalCreateProduct areas={areas}/>
      </div>
    </header>
  );
}
