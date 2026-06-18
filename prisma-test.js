require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function test() {
  try {
    const users = await prisma.user.findMany();
    console.log("SUCCESS");
    console.log(users);
  } catch (error) {
    console.error("ERROR");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

test();