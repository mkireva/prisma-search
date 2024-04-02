"use server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const EmployeeSchema = z.object({
  name: z.string().min(6),
  email: z.string().min(6),
  phone: z.string().min(11),
});

export const getData = async (query: string) => {
  try {
    const employees = await prisma.employee.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return employees;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
