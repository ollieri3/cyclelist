CREATE TABLE IF NOT EXISTS "constituent_countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"country_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "cities" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cities" ALTER COLUMN "country_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "countries" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cities" ADD COLUMN "constituent_country_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cities" ADD CONSTRAINT "cities_constituent_country_id_constituent_countries_id_fk" FOREIGN KEY ("constituent_country_id") REFERENCES "constituent_countries"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "constituent_countries" ADD CONSTRAINT "constituent_countries_country_id_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
