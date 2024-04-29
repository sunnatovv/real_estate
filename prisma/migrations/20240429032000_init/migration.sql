-- CreateTable
CREATE TABLE "realtor" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "is_active" BOOLEAN NOT NULL,
    "deactive_date" TIMESTAMP(3) NOT NULL,
    "photo" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "realtor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "firma" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "realtorId" INTEGER,

    CONSTRAINT "firma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "building_condition" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "building_condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "building_seria" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "building_seria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water_supply" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "water_supply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parking" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "parking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resident_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "resident_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "residentTypeId" INTEGER,
    "objectId" INTEGER,

    CONSTRAINT "object_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object_category" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "object_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object_status" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "object_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "rate" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "renovation" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "renovation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "window_side" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "window_side_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "root_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "root_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owner_ship" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "owner_ship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reason_deleting" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "reason_deleting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owner_coorperation" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "owner_coorperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relationship_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "relationship_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "districtId" INTEGER,
    "objectId" INTEGER,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "district" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "district_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metro" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "metro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wall_material" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "wall_material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "heating_system" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "heating_system_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "neighborhood" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "neighborhood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Street" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "Street_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "overlaps" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "objectId" INTEGER,

    CONSTRAINT "overlaps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "is_studio" BOOLEAN NOT NULL,
    "floor" INTEGER NOT NULL,
    "floor_in_building" INTEGER NOT NULL,
    "total_area" DECIMAL(65,30) NOT NULL,
    "live_area" DECIMAL(65,30) NOT NULL,
    "kitchen_area" DECIMAL(65,30) NOT NULL,
    "rooms_area" DECIMAL(65,30) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "price_per_square" DECIMAL(65,30) NOT NULL,
    "price_type" TEXT NOT NULL,
    "is_apartment" BOOLEAN NOT NULL,
    "is_luxury" BOOLEAN NOT NULL,
    "ceiling_height" INTEGER NOT NULL,
    "combined_bath_count" INTEGER NOT NULL,
    "separate_bath_count" INTEGER NOT NULL,
    "loggia_count" INTEGER NOT NULL,
    "loggia_desciption" TEXT NOT NULL,
    "balcony_count" INTEGER NOT NULL,
    "balcony_description" TEXT NOT NULL,
    "general_description" TEXT NOT NULL,
    "cadastral_number" INTEGER NOT NULL,
    "document" TEXT NOT NULL,
    "layout" TEXT NOT NULL,
    "fotos" TEXT NOT NULL,
    "online_show" BOOLEAN NOT NULL,
    "video" TEXT NOT NULL,
    "commision_amount" DECIMAL(65,30) NOT NULL,
    "commision_comment" TEXT NOT NULL,
    "deposit_amount" DECIMAL(65,30) NOT NULL,
    "deposit_paid" DECIMAL(65,30) NOT NULL,
    "owner_price_ideal" DECIMAL(65,30) NOT NULL,
    "owner_price_real" DECIMAL(65,30) NOT NULL,
    "owner_price_minimal" DECIMAL(65,30) NOT NULL,
    "area_id" TEXT NOT NULL,
    "house_number" INTEGER NOT NULL,
    "apartment_id" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "location_description" TEXT NOT NULL,
    "building_year" INTEGER NOT NULL,
    "is_gas" BOOLEAN NOT NULL,
    "is_electric" BOOLEAN NOT NULL,
    "passeger_elevators_count" INTEGER NOT NULL,
    "freight_elevators_count" INTEGER NOT NULL,
    "is_building_security" BOOLEAN NOT NULL,
    "is_demolition_planned" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "object_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "realtor" ADD CONSTRAINT "realtor_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "firma" ADD CONSTRAINT "firma_realtorId_fkey" FOREIGN KEY ("realtorId") REFERENCES "realtor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building_condition" ADD CONSTRAINT "building_condition_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "building_seria" ADD CONSTRAINT "building_seria_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_supply" ADD CONSTRAINT "water_supply_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking" ADD CONSTRAINT "parking_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resident_type" ADD CONSTRAINT "resident_type_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object_type" ADD CONSTRAINT "object_type_residentTypeId_fkey" FOREIGN KEY ("residentTypeId") REFERENCES "resident_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object_type" ADD CONSTRAINT "object_type_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object_category" ADD CONSTRAINT "object_category_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object_status" ADD CONSTRAINT "object_status_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "currency" ADD CONSTRAINT "currency_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "renovation" ADD CONSTRAINT "renovation_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "window_side" ADD CONSTRAINT "window_side_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "root_type" ADD CONSTRAINT "root_type_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner_ship" ADD CONSTRAINT "owner_ship_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reason_deleting" ADD CONSTRAINT "reason_deleting_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owner_coorperation" ADD CONSTRAINT "owner_coorperation_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationship_type" ADD CONSTRAINT "relationship_type_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "district"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "district" ADD CONSTRAINT "district_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metro" ADD CONSTRAINT "metro_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wall_material" ADD CONSTRAINT "wall_material_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heating_system" ADD CONSTRAINT "heating_system_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "neighborhood" ADD CONSTRAINT "neighborhood_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Street" ADD CONSTRAINT "Street_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "overlaps" ADD CONSTRAINT "overlaps_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE SET NULL ON UPDATE CASCADE;
