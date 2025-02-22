'use server'

import { db } from "@db/index"
import { compliant } from "@db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function createComplaint(name: string, regd: number, message: string){
    await db.insert(compliant).values({
        name: name,
        regdNo: regd,
        complaint: message
    })
    revalidatePath('/')
}

export async function deleteComplaint(id: number){
    await db.delete(compliant).where(eq(compliant.id, id))
    revalidatePath('/')
}