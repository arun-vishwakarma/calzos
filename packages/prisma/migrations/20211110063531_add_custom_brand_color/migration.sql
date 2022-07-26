-- AlterTable
ALTER TABLE "users" ADD COLUMN     "brandColor" TEXT NOT NULL DEFAULT E'#8f6cc9';
UPDATE "users" SET "brandColor" = '#8f6cc9';
