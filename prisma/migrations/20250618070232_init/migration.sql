-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telegramId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAr" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilmingPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "executor" TEXT NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3),
    "time_start" TIMESTAMP(3) NOT NULL,
    "time_end" TIMESTAMP(3) NOT NULL,
    "place" TEXT NOT NULL,
    "contacts" TEXT NOT NULL,
    "conditions" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cloth" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "technical_department" TEXT NOT NULL,
    "sound_department" TEXT NOT NULL,

    CONSTRAINT "FilmingPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FilmingPost" ADD CONSTRAINT "FilmingPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
