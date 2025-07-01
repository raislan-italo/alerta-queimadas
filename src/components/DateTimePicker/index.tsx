import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

export default function DateTimePicker({ date, setDate, time, setTime }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="date-picker" className="px-1 text-sm font-medium">Data</label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-full justify-between font-normal"
            >
              {date ? date.toLocaleDateString("pt-BR") : "Selecionar data"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="time-picker" className="px-1 text-sm font-medium">Hora</label>
        <Input
          type="time"
          id="time-picker"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
    </div>
  );
}
