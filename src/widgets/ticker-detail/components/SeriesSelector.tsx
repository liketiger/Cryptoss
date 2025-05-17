import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { seriesOptions } from "../lib/constants";
import CandleIcon from "@/assets/icons/candle.svg?react";
import AreaIcon from "@/assets/icons/area.svg?react";
import { ChartType } from "@/shared/types";

interface Props {
  value: string;
  setValue: (value: ChartType) => void;
}

export default function SeriesSelector({ value, setValue }: Props) {
  return (
    <Select
      value={value}
      onValueChange={(value) => setValue(value as ChartType)}
    >
      <SelectTrigger className="w-[120px]" icon={false}>
        <SelectValue>
          {value === "candle" ? <CandleIcon /> : <AreaIcon />}
          차트모양
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-background-toss-secondary border-0">
        {seriesOptions.map((option, index) => (
          <SelectItem
            key={option.value + index}
            value={option.value}
            className="capitalize"
          >
            {option.value === "candle" ? <CandleIcon /> : <AreaIcon />}
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
