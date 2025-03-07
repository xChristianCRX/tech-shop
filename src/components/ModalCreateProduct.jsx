import { useState } from "react"
import { Form } from "./Form";

import { Button } from "./ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function ModalCreateProduct({ areas, brands, addProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    brand: "",
    area: "",
    state: "",
  });

  const handleChange = (e, value) => {
    const name = e.target?.name || e;
    let newValue = value || e.target.value;
    if(name == "brand"){
      newValue = brands.find(brand => brand.name === value) || null;
    } 
    
    setNewProduct((prev) => ({ ...prev, [name]: newValue }));
  };

  function handleCreateNewProduct(event){
    event.preventDefault();
    if (newProduct.name.trim() === "") {
      toast.error("O nome do produto deve ser preenchido!");
      return;
    }

    if (newProduct.price.trim() === "") {
      toast.error("O preço do produto deve ser preenchido!");
      return;
    }

    if (newProduct.brand === "") {
      toast.error("A marca do produto deve ser informada!");
      return;
    }

    if (newProduct.area.trim() === "") {
      toast.error("A seção do produto deve ser informada!");
      return;
    }

    if (newProduct.state.trim() === "") {
      toast.error("O estado do produto deve ser informado!");
      return;
    }

    addProduct(newProduct);
    
    setNewProduct({ 
      name: "", 
      price: "", 
      brand: "", 
      area: "", 
      state: "" 
    });
  }

  return (
    <div className="ml-auto flex items-center gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Cadastrar Produto</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cadastro de novo produto</DialogTitle>
            <DialogDescription>
              Insira as informações do novo produto.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateNewProduct}>
            <Form 
              onChange={handleChange} 
              areas={areas} 
              brands={brands}
              product={newProduct}
            />
            <DialogFooter className="mt-3">
              <Button type="submit">Cadastrar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
