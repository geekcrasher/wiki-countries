import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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


const FormSchema = z.object({
  countryName: z
    .string()
    .min(2, { message: "Please enter at least 2 characters" })
    .toLowerCase()
})

const SearchBar = () => {

  const { setCountrySearch } = useCountries()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      countryName: ""
    }
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setCountrySearch(data.countryName)
    console.log(data)
  }

  const handleCountrySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearch(event.target.value)
    console.log(event.target.value)
  }

  return (
    <section className="flex justify-between items-center gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
          <FormField
            control={form.control}
            name="countryName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center h-fit w-[13rem] md:w-[20rem] gap-2 pl-4 border">
                    <Search strokeWidth={2} size={22} className="text-gray-400 " />
                    <Input
                      {...field}
                      placeholder="Search for a country..."
                      className="border-0 rounded-md placeholder:text-sm sm:placeholder:text-md placeholder:text-gray-400 placeholder:font-normal"
                      autoComplete="off"
                    // onChange={handleCountrySearch}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="sr-only">Submit</Button>
        </form>
      </Form>

      <Select >
        <SelectTrigger className="w-[8rem] md:w-[12rem] font-medium text-xs">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="africa">Africa</SelectItem>
          <SelectItem value="america">America</SelectItem>
          <SelectItem value="asia">Asia</SelectItem>
          <SelectItem value="europe">Europe</SelectItem>
          <SelectItem value="oceania">Oceania</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
}

export default SearchBar;