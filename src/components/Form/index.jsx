import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function Form() {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Nome
        </Label>
        <Input id="name" placeholder="Nome do produto" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="price" className="text-right">
          Preço
        </Label>
        <Input id="price" type="number" className="col-span-3" />
      </div>
    </div>
  );
}
