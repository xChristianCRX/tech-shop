import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import CurrencyInput from "react-currency-input-field";
import { Dropdown } from "./Dropdown";

export function Form({ onChange, areas, brands, product }) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="area" className="text-right">
          Seção
        </Label>
        <Dropdown 
          name="area" 
          list={areas}
          className="col-span-3"
          onChange={ onChange }
          value={product.area}
          label={"area"}
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="brand" className="text-right">
          Marca
        </Label>
        <Dropdown 
          name="brand"
          list={ brands.map(brand => brand.name) }
          className="col-span-3"
          onChange={ onChange }
          value={product.brand.name}
          label={"brand"}
        />
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
          value={product.name}
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="price" className="text-right">
          Preço
        </Label>
        <CurrencyInput
          id="price"
          name="price"
          placeholder="R$ 0,00"
          decimalsLimit={2}
          decimalSeparator=","
          groupSeparator="."
          prefix="R$ "
          value={product.price}
          onValueChange={(value) => onChange("price", value)}
          className="border p-2 w-full rounded-md col-span-3"
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="price" className="text-right">
          Estado
        </Label>
        <RadioGroup
          className="flex flex-row"
          name="state"
          value={product.state}
          onValueChange={(value) => onChange({ target: { name: "state", value } })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="new" id="new" />
            <Label htmlFor="new">Novo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="used" id="used" />
            <Label htmlFor="used">Usado</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
