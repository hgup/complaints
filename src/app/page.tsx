import { db } from "@/db";
import { compliant } from "@db/schema";
import Form, { DeleteButton } from "./form";

export default async function Home() {
  const data = await db.select().from(compliant).all();
  return (
    <main className="grid grid-cols-2 gap-x-4 w-full max-w-5xl mx-auto p-5">
      <Form />
      <div className="flex flex-col gap-y-2">
        {data.map((d) => (
          <div
            key={d.id}
            className="w-[500px] bg-gray-100 rounded-lg px-4 py-2"
          >
            <span>{d.id}</span>
            <p>{d.name}</p>
            <span>{d.issued_at}</span>
            <p>{d.complaint}</p>
            <DeleteButton id={d.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
