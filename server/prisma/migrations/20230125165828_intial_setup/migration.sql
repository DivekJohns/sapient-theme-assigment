-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "primaryTheme" TEXT NOT NULL DEFAULT '00ea8d'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
