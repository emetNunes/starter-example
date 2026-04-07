"use server";

import { z } from "zod";

export async function createInvoices(formData: FormData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  };

  console.log(typeof rawFormData.amount);
}
