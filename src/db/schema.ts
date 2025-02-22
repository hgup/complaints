import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const compliant = sqliteTable("complaints", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  regdNo: int("regd_no").notNull(),
  complaint: text().notNull(),
  issued_at: text().default(sql`(CURRENT_DATE)`),
});
