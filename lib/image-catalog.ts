/**
 * Pinemont image catalog.
 *
 * Hand-tagged from a visual audit of every file in /public/assets/. Update
 * this file whenever new imagery is dropped in — the rest of the app picks
 * from `pickByRole(...)` so adding a photo + tagging it here automatically
 * makes it available to the right sections.
 *
 * Conventions
 * -----------
 *  category   = primary subject of the photo
 *  orientation= image aspect — used to filter for portrait vs landscape slots
 *  roles      = section slots this photo is allowed to appear in
 *  branded    = has hard-baked text/logo overlay (Pinemont watermark,
 *               marketing copy). Do NOT mix these in clean grids; use only
 *               in hero or "branded poster" slots.
 *  desc       = short note for humans / future AI maintaining this file
 */

export type Orientation = "landscape" | "portrait" | "square";

export type Category =
  | "exterior"     // building, facade, aerial
  | "room"         // bedroom interiors
  | "bathroom"
  | "lobby"        // lobby, reception, lounge
  | "restaurant"   // dining hall, outdoor dining, food
  | "amenity"      // recreation, conference, kids, pool, gym...
  | "view"         // mountain / valley views, scenery
  | "detail"       // artistic close-ups, decor stills
  | "lifestyle";   // people enjoying the property

export type Role =
  | "hero"        // full-bleed landing hero
  | "finalCta"    // closing CTA full-bleed band
  | "intro"       // single tall portrait next to copy (intro band)
  | "roomCard"    // bedroom card in the Rooms grid (must be clean landscape)
  | "restaurant"  // restaurant section imagery
  | "gallery"     // mixed gallery grid (no heavy text overlays)
  | "decor"       // decor / celebration packages cards
  | "amenityPhoto"// photo-driven amenity highlights
  | "lobby"       // lobby / lounge moments
  | "view"        // mountain / scenery
  | "lifestyle"   // people-driven storytelling
  | "branded";    // standalone with text/logo overlay

export type CatalogEntry = {
  src: string;
  category: Category;
  orientation: Orientation;
  roles: Role[];
  branded: boolean;
  desc: string;
};

export const CATALOG: readonly CatalogEntry[] = [
  // ---------- EXTERIORS ----------
  {
    src: "/assets/14a39e71.webp",
    category: "exterior",
    orientation: "landscape",
    roles: ["hero", "finalCta", "gallery"],
    branded: false,
    desc: "Aerial — red-roofed Pinemont property in pine forest at dusk.",
  },
  {
    src: "/assets/806100140.jpg",
    category: "exterior",
    orientation: "landscape",
    roles: ["hero", "finalCta", "gallery", "branded"],
    branded: true,
    desc: "Dusk aerial of building with glowing PINEMONT sign + lit balconies.",
  },
  {
    src: "/assets/806100141.jpg",
    category: "exterior",
    orientation: "landscape",
    roles: ["hero", "finalCta", "gallery", "branded"],
    branded: true,
    desc: "Twin of 140 — pinned as HERO_IMAGE. Strong evening exterior.",
  },
  {
    src: "/assets/806100582.jpg",
    category: "exterior",
    orientation: "portrait",
    roles: ["branded", "intro"],
    branded: true,
    desc: "Night facade with lit balconies + tagline 'escape the ordinary'.",
  },
  {
    src: "/assets/806100636.jpg",
    category: "detail",
    orientation: "landscape",
    roles: ["gallery", "branded"],
    branded: true,
    desc: "Yellow PINEMONT entrance sign against forest canopy.",
  },
  {
    src: "/assets/806100646.jpg",
    category: "exterior",
    orientation: "landscape",
    roles: ["hero", "finalCta", "gallery", "decor"],
    branded: false,
    desc: "Front facade at dusk with festive light-wrapped tree.",
  },
  {
    src: "/assets/730474018_17914495056408467_7302387136562543880_n.jpeg",
    category: "exterior",
    orientation: "portrait",
    roles: ["branded", "intro"],
    branded: true,
    desc: "Aerial with 'Before You Visit, Take A Look Inside' overlay.",
  },

  // ---------- ROOMS (the 6 cards on the Rooms grid map cleanly here) ----------
  {
    src: "/assets/806104134.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery"],
    branded: false,
    desc: "Deluxe — quilted black headboard, king bed, wood-flanked alcove.",
  },
  {
    src: "/assets/806104168.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery"],
    branded: false,
    desc: "Deluxe Plus — twin windows, navy curtains, sofa nook, TV+desk.",
  },
  {
    src: "/assets/806104171.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery"],
    branded: false,
    desc: "Executive — wide window, sofa, framed landscape art.",
  },
  {
    src: "/assets/806104177.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery"],
    branded: false,
    desc: "Standard — brown leather headboard, tall window, abstract art.",
  },
  {
    src: "/assets/806104181.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery"],
    branded: false,
    desc: "Family — quilted black headboard, ottoman, ceiling fan, rust sofa.",
  },
  {
    src: "/assets/806104198.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery", "decor"],
    branded: false,
    desc: "Presidential — gilt baroque chairs, king bed, persian rug.",
  },
  {
    src: "/assets/806106977.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery"],
    branded: false,
    desc: "Executive — quilted grey headboard, abstract framed art, sofa.",
  },
  {
    src: "/assets/806108126.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery"],
    branded: false,
    desc: "Family twin — two beds, central rust armchair.",
  },
  {
    src: "/assets/806116043.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery", "view", "hero"],
    branded: false,
    desc: "Mountain-view king bedroom — floor-to-ceiling balcony view. Top tier.",
  },
  {
    src: "/assets/806116044.jpg",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery", "branded"],
    branded: true,
    desc: "Standard king + sofa, PINEMONT corner watermark.",
  },
  {
    src: "/assets/822343775.jpg",
    category: "room",
    orientation: "portrait",
    roles: ["intro", "gallery", "branded"],
    branded: true,
    desc: "Vertical bedroom — striped sheets, balcony view, PINEMONT watermark.",
  },
  {
    src: "/assets/94b03f5f.webp",
    category: "room",
    orientation: "landscape",
    roles: ["roomCard", "gallery"],
    branded: false,
    desc: "Two-bed room with round mirror, large balcony window.",
  },
  {
    src: "/assets/728457384_17914495092408467_1268128237267241117_n.jpeg",
    category: "room",
    orientation: "portrait",
    roles: ["intro", "gallery", "branded"],
    branded: true,
    desc: "Room detail — TV unit, blue rug, desk; PINEMONT watermark.",
  },

  // ---------- BATHROOMS ----------
  {
    src: "/assets/806105746.jpg",
    category: "bathroom",
    orientation: "landscape",
    roles: ["gallery"],
    branded: false,
    desc: "Bathroom — stone-brick accent wall, toilet + vanity.",
  },
  {
    src: "/assets/806105752.jpg",
    category: "bathroom",
    orientation: "landscape",
    roles: ["gallery"],
    branded: false,
    desc: "Bathroom — grey textured tile, mirror, shower.",
  },

  // ---------- LOBBY / LOUNGE ----------
  {
    src: "/assets/806101287.jpg",
    category: "lobby",
    orientation: "landscape",
    roles: ["lobby", "gallery"],
    branded: false,
    desc: "Lobby — pillared atrium with glass lift, gold accents.",
  },
  {
    src: "/assets/806101292.jpg",
    category: "lobby",
    orientation: "landscape",
    roles: ["lobby", "gallery"],
    branded: false,
    desc: "Lobby hallway — double-height atrium, plants, white marble.",
  },
  {
    src: "/assets/525613867_17870551389408467_7401026065006564517_n.jpg",
    category: "lobby",
    orientation: "landscape",
    roles: ["lobby", "gallery"],
    branded: false,
    desc: "Suite living area — brown leather sofas, mountain view, dusk.",
  },
  {
    src: "/assets/728606785_17914495119408467_6719823539187270752_n.jpeg",
    category: "lobby",
    orientation: "portrait",
    roles: ["lobby", "intro", "branded"],
    branded: true,
    desc: "Reception lobby — marble columns, velvet armchairs (PINEMONT watermark).",
  },
  {
    src: "/assets/728882852_17914495047408467_7356170283552989142_n.jpeg",
    category: "lobby",
    orientation: "portrait",
    roles: ["lobby", "intro", "branded"],
    branded: true,
    desc: "Black-marble reception counter, gold ring lights (PINEMONT watermark).",
  },
  {
    src: "/assets/729973791_17914495110408467_8468518547483952458_n.jpeg",
    category: "lobby",
    orientation: "portrait",
    roles: ["lobby", "intro", "branded"],
    branded: true,
    desc: "Lounge — grey velvet sofa, nested coffee tables (PINEMONT watermark).",
  },

  // ---------- RESTAURANT / DINING ----------
  {
    src: "/assets/806101282.jpg",
    category: "restaurant",
    orientation: "landscape",
    roles: ["restaurant", "gallery"],
    branded: false,
    desc: "Indoor dining hall — wood-slat wall, navy chairs, buffet station.",
  },
  {
    src: "/assets/806101451.jpg",
    category: "restaurant",
    orientation: "landscape",
    roles: ["restaurant", "gallery", "view", "hero"],
    branded: false,
    desc: "Rooftop terrace dining — white wicker, mountain panorama.",
  },
  {
    src: "/assets/494982459_17859579642408467_6697627494709002200_n.jpg",
    category: "restaurant",
    orientation: "landscape",
    roles: ["restaurant", "lifestyle", "branded"],
    branded: true,
    desc: "Family at terrace dining, mountains behind; PINEMONT HOTEL text.",
  },
  {
    src: "/assets/720192456_17912195691408467_5006625040467933394_n.jpeg",
    category: "lifestyle",
    orientation: "portrait",
    roles: ["restaurant", "lifestyle", "intro"],
    branded: false,
    desc: "Guest enjoying breakfast — french toast, orange juice, eggs.",
  },

  // ---------- AMENITIES ----------
  {
    src: "/assets/527112042_17871162792408467_8852706340714827340_n.jpg",
    category: "amenity",
    orientation: "landscape",
    roles: ["amenityPhoto", "gallery", "branded"],
    branded: true,
    desc: "Game room with ping-pong table (PINEMONT watermark in window).",
  },
  {
    src: "/assets/806101272.jpg",
    category: "amenity",
    orientation: "portrait",
    roles: ["amenityPhoto", "branded"],
    branded: true,
    desc: "Ping-pong room with 'turn moments into memories' overlay.",
  },
  {
    src: "/assets/806101284.jpg",
    category: "amenity",
    orientation: "portrait",
    roles: ["amenityPhoto", "gallery"],
    branded: false,
    desc: "Kids playroom — soft toys, alphabet rug, plush seats.",
  },
  {
    src: "/assets/806101267.jpg",
    category: "amenity",
    orientation: "portrait",
    roles: ["amenityPhoto", "branded"],
    branded: true,
    desc: "Conference room with 'Business trip in Murree?' overlay.",
  },

  // ---------- EXTERIOR / GARDENS / OUTDOOR ----------
  {
    src: "/assets/806101479.jpg",
    category: "exterior",
    orientation: "landscape",
    roles: ["gallery", "decor"],
    branded: false,
    desc: "Lawn with stone path, tall trees, sunset sky.",
  },
  {
    src: "/assets/806101490.jpg",
    category: "exterior",
    orientation: "landscape",
    roles: ["gallery", "decor"],
    branded: false,
    desc: "Garden seating with green check chairs and blossom tree.",
  },
  {
    src: "/assets/822345231.jpg",
    category: "exterior",
    orientation: "portrait",
    roles: ["branded", "intro"],
    branded: true,
    desc: "Snow-covered tree house with 'PINEMONT by Sukoon' sign.",
  },
  {
    src: "/assets/523102209_17869582824408467_8074553930627850646_n.jpg",
    category: "lifestyle",
    orientation: "landscape",
    roles: ["lifestyle", "gallery"],
    branded: false,
    desc: "Group of guests posing on hotel lawn (events / family stay).",
  },

  // ---------- VIEWS / SEASONAL ----------
  {
    src: "/assets/624224776_17892025725408467_567494605529946445_n.jpg",
    category: "view",
    orientation: "portrait",
    roles: ["view", "gallery"],
    branded: false,
    desc: "Snowy outdoor view through a tall corridor window (winter).",
  },

  // ---------- LIFESTYLE / BRANDED MARKETING ----------
  {
    src: "/assets/714303819_17911190265408467_7293468900794543287_n.jpeg",
    category: "lifestyle",
    orientation: "portrait",
    roles: ["branded", "intro", "lifestyle"],
    branded: true,
    desc: "Guest at window — 'A Slower Morning in the Mountains' poster.",
  },

  // ---------- DECOR / ARTISTIC ----------
  {
    src: "/assets/730921066_17915793024408467_2815085025742782207_n.jpeg",
    category: "detail",
    orientation: "portrait",
    roles: ["decor", "gallery", "branded"],
    branded: true,
    desc: "Branch arrangement in vase by sunlit window (PINEMONT watermark).",
  },

  // ---------- UNREAD ----------
  {
    src: "/assets/d035b06f.avif",
    category: "exterior",
    orientation: "landscape",
    roles: ["gallery"],
    branded: false,
    desc: "AVIF file too large to render in this audit — review manually before pinning.",
  },
];

/* -----------------------------------------------------------------
 * Helpers
 * --------------------------------------------------------------- */

function seeded(index: number): number {
  let x = (index + 1) * 9301 + 49297;
  x = x ^ (x << 13);
  x = x ^ (x >>> 17);
  x = x ^ (x << 5);
  return Math.abs(x);
}

export type PickOptions = {
  orientation?: Orientation;
  includeBranded?: boolean;   // default false — exclude watermarked/poster images
  category?: Category;
};

/**
 * Filter the catalog by role + optional constraints. Returns the *full* set,
 * preserving catalog order (which is roughly best-first by category).
 */
export function filterByRole(role: Role, opts: PickOptions = {}): CatalogEntry[] {
  const { orientation, includeBranded = false, category } = opts;
  return CATALOG.filter((e) => {
    if (!e.roles.includes(role)) return false;
    if (orientation && e.orientation !== orientation) return false;
    if (category && e.category !== category) return false;
    if (!includeBranded && e.branded) return false;
    return true;
  });
}

/**
 * Deterministically pick `count` distinct src strings whose tags match the
 * role + options. Seed makes the choice stable across SSR/CSR renders.
 */
export function pickByRole(
  role: Role,
  count: number,
  opts: PickOptions & { seed?: number } = {}
): string[] {
  const pool = filterByRole(role, opts);
  if (pool.length === 0) return [];
  const { seed = 0 } = opts;
  const out: string[] = [];
  const used = new Set<number>();
  let s = seed;
  while (out.length < count && used.size < pool.length) {
    const idx = seeded(s++) % pool.length;
    if (!used.has(idx)) {
      used.add(idx);
      out.push(pool[idx].src);
    }
  }
  return out;
}

/** Convenience — single image, deterministic. */
export function pickOneByRole(role: Role, seed = 0, opts: PickOptions = {}): string {
  const [first] = pickByRole(role, 1, { ...opts, seed });
  return first ?? CATALOG[0].src;
}

/** Total count for the role (for diagnostics / "+N more" labels). */
export function countByRole(role: Role, opts: PickOptions = {}): number {
  return filterByRole(role, opts).length;
}
