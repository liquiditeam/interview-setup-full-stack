-- migrate:up
CREATE TYPE "resource_type" AS ENUM ('GOLD', 'HELIUM', 'IRON');

CREATE TABLE "resources" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "resourceType" "resource_type" NOT NULL,
  "amount" integer NOT NULL
);

-- migrate:down
DROP TABLE "resources";

DROP TYPE "resource_type";
