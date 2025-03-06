import { Label } from "../ui/label";
import { Input } from "../ui/input";
import CurrencyInput from "react-currency-input-field";
import { Dropdown } from "../Dropdown";

export function Form({ onChange, areas }) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="area" className="text-right">
          Seção
        </Label>
        <Dropdown name="area" list={areas}/>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Nome
        </Label>
        <Input
          id="name"
          placeholder="Nome do produto"
          name="name"
          className="col-span-3"
          onChange={onChange}
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="price" className="text-right">
          Preço
        </Label>
        <CurrencyInput
          id="price-input"
          name="price"
          placeholder="R$ 0,00"
          decimalsLimit={2}
          decimalSeparator=","
          groupSeparator="."
          prefix="R$ "
          onValueChange={onChange}
          className="border p-2 w-full rounded-md col-span-3"
        />
      </div>
    </div>
  );
}
