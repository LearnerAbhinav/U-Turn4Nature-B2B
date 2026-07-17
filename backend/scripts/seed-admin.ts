import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = "admin@u-turn.in";
  
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail }
  });

  if (existingAdmin) {
    console.log("Admin already exists!");
    return;
  }

  const hashedPassword = await bcrypt.hash("Admin@1234", 10);

  const admin = await prisma.user.create({
    data: {
      companyName: "U-Turn4Nature",
      contactPerson: "System Admin",
      email: adminEmail,
      phone: "+910000000000",
      businessType: "other",
      yearsInBusiness: "10+",
      street: "HQ",
      city: "Greater Noida",
      state: "UP",
      pincode: "201306",
      estimatedVolume: "small",
      paymentTerms: "advance",
      password: hashedPassword,
      status: "approved",
      role: "admin",
    },
  });

  console.log("Admin created successfully!", admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
