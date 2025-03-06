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

export function ModalCreateProduct({ areas }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    brand: "",
    area: "",
    state: "",
  });
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
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
          <form>
            <Form onChange={handleChange} areas={areas}/>
            <DialogFooter>
              <Button type="submit">Cadastrar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
