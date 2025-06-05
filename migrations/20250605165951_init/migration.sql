/*
  Warnings:

  - Added the required column `cidade` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `aluno` ADD COLUMN `cidade` VARCHAR(191) NOT NULL,
    ADD COLUMN `estado` VARCHAR(191) NOT NULL,
    ADD COLUMN `rua` VARCHAR(191) NOT NULL;
