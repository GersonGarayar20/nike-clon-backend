import { Router } from 'express';
import { findAll, findOne, create, update, remove } from '@/shoe/shoe.controller';
import { requireApiKey } from '@/middleware/auth';

export const shoe = Router()

shoe
  .get("/", findAll)
  .get("/:id", findOne)
  .post("/", requireApiKey, create)
  .patch("/:id", requireApiKey, update)
  .delete("/:id", requireApiKey, remove)