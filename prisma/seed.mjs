import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

async function main() {
  let cases = [
    {
      firstName: "Andrew",
      lastName: "Wiggin",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      firstName: "Valentine",
      lastName: "Wiggin",
      description: "Ipsum dolor sit amet",
    },
  ];

  await prisma.case.createMany({
    data: cases,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
