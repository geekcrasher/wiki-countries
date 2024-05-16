import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from "lucide-react";
import { useCountries } from "@/context/CountriesContext";
import { regions } from "./region";

const FormSchema = z.object({
  countryName: z
    .string()
    .min(2, { message: "Please enter at least 2 characters" })
    .toLowerCase()
})

const SearchBar = () => {

  const { setCountrySearch, setRegion } = useCountries()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      countryName: ""
    }
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    try {
      setCountrySearch(data.countryName)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCountrySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearch(event.target.value)
  }

  const handleRegionChange = (value: string) => {
    setRegion(value);
  }

  return (
    <section className="sm:flex justify-between items-center gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="countryName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center h-fit gap-2 w-full sm:w-[20rem] pl-4 border dark:border-0 bg-white dark:bg-[#2b3945]">
                    <Search strokeWidth={2} size={18} className="text-gray-400 " />
                    <Input
                      // {...field}
                      placeholder="Search for a country..."
                      className=" border-0 rounded-md placeholder:text-sm sm:placeholder:text-md dark:text-slate-50 placeholder:text-gray-400 placeholder:font-normal"
                      autoComplete="off"
                      onChange={handleCountrySearch}
                    />
                  </div>
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <Button type="submit" className="sr-only">Submit</Button>
        </form>
      </Form>

      <Select onValueChange={handleRegionChange}>
        <SelectTrigger className="mt-8 sm:mt-0 w-[9rem] sm:w-[12rem] dark:text-slate-50 sm:font-medium text-xs shadow-sm">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent>
          {regions.map(region => (
            <SelectItem key={region.value} value={`${region.value}`}>{region.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}

export default SearchBar;