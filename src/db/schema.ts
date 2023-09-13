import { InferInsertModel, InferModel, InferSelectModel } from 'drizzle-orm';
import { boolean, pgTable, serial, varchar } from 'drizzle-orm/pg-core';


export const todosTable = pgTable('todos', {
  id: serial('id').primaryKey(),
  content: varchar('content', { length: 256 }).notNull(),
  completed: boolean("completed").notNull().default(false),
});

export type TodoInsert = InferInsertModel<typeof todosTable>
export type TodoSelect = InferSelectModel<typeof todosTable>

