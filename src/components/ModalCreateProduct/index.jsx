import { useState } from "react"
import { Form } from "../Form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function ModalCreateProduct({ areas, brands }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    brand: "",
    area: "",
    state: "",
  });

  const handleChange = (e, value) => {
    const name = e.target?.name || e;
    const newValue = value || e.target.value;
    
    setNewProduct((prev) => ({ ...prev, [name]: newValue }));
  };

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
          <form onSubmit={console.log(newProduct)}>
            <Form 
              onChange={handleChange} 
              areas={areas} 
              brands={brands}
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
