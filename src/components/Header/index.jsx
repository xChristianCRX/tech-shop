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

import logoImg from "../../assets/logo-techshop.svg";
import styles from "./header.module.css";
import { Form } from "../Form";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logoImg} alt="Logo do site TechShop" width={200} />

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
              <Form />
              <DialogFooter>
                <Button type="submit">Cadastrar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
