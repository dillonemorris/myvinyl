import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, artist, year, genre } = req.body;

  const session = await getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    const newRecord = await prisma.record.create({
      data: {
        title,
        artist,
        year,
        genre,
        user: { connect: { email: session?.user?.email || "" } },
      },
    });

    res.json(newRecord);
  } else {
    const records = await prisma.record.findMany({
      where: {
        user: { email: session?.user?.email },
      },
    });

    res.json(records);
  }
}
