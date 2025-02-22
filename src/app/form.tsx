"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createComplaint, deleteComplaint } from "./action";

export default function Form() {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md">
      <form
        action={(formData: FormData) => {
          if (
            formData.get("name") &&
            formData.get("regd") &&
            formData.get("complaint")
          ) {
            createComplaint(
              formData.get("name") as string,
              Number(formData.get("regd")) as number,
              formData.get("complaint") as string
            );
          }
        }}
        className="p-8 flex flex-col gap-y-5"
      >
        <h1 className="font-bold text-xl">Submit your complain</h1>
        <div className="space-y-2">
          <Label htmlFor="name">Enter your name</Label>
          <Input name="name" placeholder="Hursh Gupta" className="h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="regd">Enter Regd. Number</Label>
          <Input
            type="number"
            name="regd"
            placeholder="211219"
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="complaint">{`What's your complaint?`}</Label>
          <Textarea
            name="complaint"
            placeholder="A brief description of your issue"
            className="h-80"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export function DeleteButton({id}: {id: number}){
   return(
    <Button className="text-red-500" variant={'ghost'} type="button" onClick={() => deleteComplaint(id)}>x</Button>
   ) 

}