-- CreateEnum
CREATE TYPE "AccountRole" AS ENUM ('Admin', 'Technician');

-- CreateEnum
CREATE TYPE "PickupStatus" AS ENUM ('ANTAR_SENDIRI', 'BELUM_DIAMBIL', 'SUDAH_DIAMBIL', 'DIBATALKAN');

-- CreateEnum
CREATE TYPE "ServiceJobStatus" AS ENUM ('DALAM_ANTRIAN', 'TUNGGU_SPAREPART', 'PROSES_PENGERJAAN', 'SELESAI', 'DIBATALKAN', 'DALAM_PENGIRIMAN');

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "AccountRole" NOT NULL DEFAULT 'Technician',

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "device_id" TEXT NOT NULL,
    "merk_id" TEXT NOT NULL,
    "device_photo" TEXT NOT NULL,
    "complaint" TEXT NOT NULL,
    "preferred_pickup_date" TIMESTAMP(3),
    "preferred_pickup_time" TEXT,
    "pickup_status" "PickupStatus" NOT NULL,
    "request_for_delivery" BOOLEAN NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "merks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "merks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_jobs" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer_id" TEXT NOT NULL,
    "account_id" TEXT,
    "status" "ServiceJobStatus" NOT NULL,
    "description_of_damage" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "end_at" TIMESTAMP(3),

    CONSTRAINT "service_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_name_key" ON "accounts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_password_key" ON "accounts"("password");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "devices_name_key" ON "devices"("name");

-- CreateIndex
CREATE UNIQUE INDEX "merks_name_key" ON "merks"("name");

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_merk_id_fkey" FOREIGN KEY ("merk_id") REFERENCES "merks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_jobs" ADD CONSTRAINT "service_jobs_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_jobs" ADD CONSTRAINT "service_jobs_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
