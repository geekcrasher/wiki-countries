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


const FormSchema = z.object({
  countryName: z
    .string({ required_error: "Please enter a country name" })
    .toLowerCase()
})

const SearchBar = () => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      countryName: ""
    }
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data)
  }

  return (
    <section className="flex justify-between items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex border">
          <FormField
            control={form.control}
            name="countryName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center h-fit border-none w-[20rem] gap-2 pl-4">
                    <Search strokeWidth={2} size={22} className="text-gray-400 " />
                    <Input
                      placeholder="Search for a country..."
                      className="border-0 rounded-md placeholder:text-sm sm:placeholder:text-md placeholder:text-gray-400 placeholder:font-normal"
                      autoComplete="off"
                      {...field}
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
        <SelectTrigger className="w-[12rem] font-medium text-xs">
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