// Asset entry points. The full tagged catalog lives in lib/image-catalog.ts;
// this file exposes the small set of helpers components actually reach for.

import { CATALOG, pickByRole, pickOneByRole, filterByRole } from "./image-catalog";

// Pinned, non-random imagery — change these to swap a hero / OG image.
export const HERO_IMAGE = "/assets/806100141.jpg";
// export const HERO_IMAGE = "/assets/806101451.jpg";
// export const HERO_IMAGE = "/assets/806101287.jpg";
export const OG_IMAGE = "/assets/806100140.jpg";

// Back-compat: full list of public asset paths (used to be the only export).
export const HOTEL_PHOTOS: readonly string[] = CATALOG.map((e) => e.src);

// Catalog-aware pickers (preferred). Re-exported so components can stick to
// importing from "@/lib/assets".
export { pickByRole, pickOneByRole, filterByRole };
export type { Role, Category, Orientation, CatalogEntry } from "./image-catalog";

/**
 * Legacy helper kept so old call-sites keep working. New code should call
 * `pickByRole('gallery', n)` etc. instead.
 */
export function pickPhoto(seed: number): string {
  return pickOneByRole("gallery", seed);
}

export function pickPhotos(count: number, startSeed = 0): string[] {
  return pickByRole("gallery", count, { seed: startSeed });
}
