import { ModalCreateProduct } from "./ModalCreateProduct";
import logoImg from "../assets/logo-techshop.svg";

export function Header({ areas, brands, addProduct }) {
  return (
    <header className="border-b mb-5 bg-white">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logoImg} alt="Logo do site TechShop" width={200} />
        <ModalCreateProduct areas={areas} brands={brands} addProduct={addProduct}/>
      </div>
    </header>
  );
}
