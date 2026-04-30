"use client";
import { useState } from "react";

import { Abel } from "next/font/google";

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

const supportCards = [
  { name: "Adventurers' Guild", img: "/supp-cards/advent.webp", categories: "Location" },
  { name: "Atea", img: "/supp-cards/atea.webp", categories: "Companion" },
  { name: "Bona and Cocouik", img: "/supp-cards/bona.webp", categories: "Companion" },
  { name: "Calligraphy Tavern", img: "/supp-cards/calligraphy.webp", categories: "Location" },
  { name: "Central Laboratory Ruins", img: "/supp-cards/centlab.webp", categories: "Location" },
  { name: "Chang the Ninth", img: "/supp-cards/chang.webp", categories: "Companion" },
  { name: "Chef Mao", img: "/supp-cards/chefmao.webp", categories: "Companion" },
  { name: "Chinju Forest", img: "/supp-cards/chinju.webp", categories: "Location" },
  { name: "'Collective of Plenty'", img: "/supp-cards/collplenty.webp", categories: "Location" },
  { name: "Constellation Metropole", img: "/supp-cards/constellation.webp", categories: "Location" },
  { name: "Dawn Winery", img: "/supp-cards/dawnwinery.webp", categories: "Location" },
  { name: "Dunyarzad", img: "/supp-cards/dunyarzad.webp", categories: "Companion" },
  { name: "Elemental Transfiguration: Bloom Blessing", img: "/supp-cards/watergrass.webp", categories: "Elemental Transfiguration" },
  { name: "Elemental Transfiguration: Lava Blessing", img: "/supp-cards/firerock.webp", categories: "Elemental Transfiguration" },
  { name: "Elemental Transfiguration: Rimegrass Blessing", img: "/supp-cards/rimegrass.webp", categories: "Elemental Transfiguration" },
  { name: "Elemental Transfiguration: Stormgale Blessing", img: "/supp-cards/windelec.webp", categories: "Elemental Transfiguration" },
  { name: "Elemental Transfiguration: Superconduct Blessing", img: "/supp-cards/superconduct.webp", categories: "Elemental Transfiguration" },
  { name: "Elemental Transfiguration: Vaporize Blessing", img: "/supp-cards/waterfire.webp", categories: "Elemental Transfiguration" },
  { name: "Ellin", img: "/supp-cards/ellin.webp", categories: "Companion" },
  { name: "Favonius Cathedral", img: "/supp-cards/favoniuscathedral.webp", categories: "Location" },
  { name: "'Flower Feather Clan'", img: "/supp-cards/flowerfeatherclan.webp", categories: "Location" },
  { name: "Forest Blessing", img: "/supp-cards/forestblessing.webp", categories: "Companion" },
  { name: "Fortress of Meropide", img: "/supp-cards/fortmero.webp", categories: "Location" },
  { name: "Frostmoon Enclave", img: "/supp-cards/frostmoonenclave.webp", categories: "Location" },
  { name: "Gandharva Ville", img: "/supp-cards/gandharva.webp", categories: "Location" },
  { name: "Gift of the Goddess of Prophecy", img: "/supp-cards/giftgoddess.webp", categories: "Companion" },
  { name: "Golden House", img: "/supp-cards/goldenhouse.webp", categories: "Location" },
  { name: "Grand Narukami Shrine", img: "/supp-cards/narukami.webp", categories: "Location" },
  { name: "Hanachirusato", img: "/supp-cards/hana.webp", categories: "Companion" },
  { name: "Iron Tongue Tian", img: "/supp-cards/tian.webp", categories: "Companion" },
  { name: "Jade Chamber", img: "/supp-cards/jadechamber.webp", categories: "Location" },
  { name: "Jeht", img: "/supp-cards/jeht.webp", categories: "Companion" },
  { name: "Katheryne", img: "/supp-cards/katheryne.webp", categories: "Companion" },
  { name: "Kid Kujirai", img: "/supp-cards/kidkujirai.webp", categories: "Companion" },
  { name: "Knights of Favonius Library", img: "/supp-cards/favoniuslibrary.webp", categories: "Location" },
  { name: "Kusava", img: "/supp-cards/kusava.webp", categories: "Item" },
  { name: "Kuuvahki Experimental Design Bureau", img: "/supp-cards/kuuvahkiedb.webp", categories: "Location" },
  { name: "Lepine-Pauline", img: "/supp-cards/lepine.webp", categories: "Companion" },
  { name: "Liben", img: "/supp-cards/liben.webp", categories: "Companion" },
  { name: "Liu Su", img: "/supp-cards/liusu.webp", categories: "Companion" },
  { name: "Liyue Harbor Wharf", img: "/supp-cards/liyueharbor.webp", categories: "Location" },
  { name: "Lumenstone Adjuvant", img: "/supp-cards/lumenstone.webp", categories: "Item" },
  { name: "Mamere", img: "/supp-cards/mamere.webp", categories: "Companion" },
  { name: "Master Zhang", img: "/supp-cards/zhang.webp", categories: "Companion" },
  { name: "'Masters of the Night-Wind'", img: "/supp-cards/mastersnight.webp", categories: "Location" },
  { name: "Memento Lens", img: "/supp-cards/mementolens.webp", categories: "Item" },
  { name: "Nasha Town", img: "/supp-cards/nashatown.webp", categories: "Location" },
  { name: "Netochka", img: "/supp-cards/netochka.webp", categories: "Companion" },
  { name: "NRE", img: "/supp-cards/nre.webp", categories: "Item" },
  { name: "Opera Epiclese", img: "/supp-cards/opera.webp", categories: "Location" },
  { name: "Paimon", img: "/supp-cards/paimon.webp", categories: "Companion" },
  { name: "Parametric Transformer", img: "/supp-cards/paratrans.webp", categories: "Item" },
  { name: "'People of the Springs'", img: "/supp-cards/peoplesprings.webp", categories: "Location" },
  { name: "Rana", img: "/supp-cards/rana.webp", categories: "Companion" },
  { name: "Red Feather Fan", img: "/supp-cards/redfan.webp", categories: "Item" },
  { name: "Sangonomiya Shrine", img: "/supp-cards/sangoshrine.webp", categories: "Location" },
  { name: "'Scions of the Canopy'", img: "/supp-cards/scions.webp", categories: "Location" },
  { name: "Seed Dispensary", img: "/supp-cards/seed.webp", categories: "Item" },
  { name: "Seirai Island", img: "/supp-cards/seirai.webp", categroy: "Location" },
  { name: "Serene", img: "/supp-cards/serene.webp", categories: "Companion" },
  { name: "Setaria", img: "/supp-cards/setaria.webp", categories: "Companion" },
  { name: "Seymour", img: "/supp-cards/seymour.webp", categories: "Companion" },
  { name: "Silver and Melus", img: "/supp-cards/silvermelus.webp", categories: "Companion" },
  { name: "Silvermoon Hall", img: "/supp-cards/silverhall.webp", categories: "Location" },
  { name: "Sir Arthur", img: "/supp-cards/sirarthur.webp", categories: "Companion" },
  { name: "Stadium of the Sacred Flame", img: "/supp-cards/stadiumsacred.webp", categories: "Location" },
  { name: "Stage Tepetl", img: "/supp-cards/stagetepetl.webp", categories: "Location" },
  { name: "Stormterror's Lair", img: "/supp-cards/stormterrorslair.webp", categories: "Location" },
  { name: "Sumeru City", img: "/supp-cards/sumerucity.webp", categories: "Location" },
  { name: "Taroumaru", img: "/supp-cards/taroumaru.webp", categories: "Companion" },
  { name: "Tenshukaku", img: "/supp-cards/tenshukaku.webp", categories: "Location" },
  { name: "The Mausoleum of King Deshret", img: "/supp-cards/mausoleum.webp", categories: "Location" },
  { name: "The White Glove and Fisherman", img: "/supp-cards/whiteglove.webp", categories: "Companion" },
  { name: "Tideseal Stone", img: "/supp-cards/tidesealstone.webp", categories: "Location" },
  { name: "Timaeus", img: "/supp-cards/timaeus.webp", categories: "Companion" },
  { name: "Timmie", img: "/supp-cards/timmie.webp", categories: "Companion" },
  { name: "Treasure-Seeking Seelie", img: "/supp-cards/seelie.webp", categories: "Item" },
  { name: "Tubby", img: "/supp-cards/tubby.webp", categories: "Companion" },
  { name: "Vanarana", img: "/supp-cards/vanarana.webp", categories: "Location" },
  { name: "Wagner", img: "/supp-cards/wagner.webp", categories: "Companion" },
  { name: "Wangshu Inn", img: "/supp-cards/wangshuinn.webp", categories: "Location" },
  { name: "Weeping Willow of the Lake", img: "/supp-cards/weepingwillow.webp", categories: "Location" },
  { name: "Xudong", img: "/supp-cards/xudong.webp", categories: "Companion" },
  { name: "Yayoi Nanatsuki", img: "/supp-cards/yayoi.webp", categories: "Companion" },
];

const filteredSupportCards = supportCards
  .filter((card) =>
    filter === "All" ? true : card.categories?.includes(filter)
  )
  .filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

const categories = [
  { name: "All", icon: null },
  { name: "Companion", icon: "/card-icons/companion.png" },
  { name: "Elemental Transfiguration", icon: "/card-icons/elemental.png" },
  { name: "Item", icon: "/card-icons/item.png" },
  { name: "Location", icon: "/card-icons/location.png" },
];

return (
  <div className="text-[#E5E5E5]">
    <div className="min-h-screen p-8 bg-main-gradient bg-fixed">

      <h1 className={`${outfit.className} text-3xl font-semibold mb-4`}>Support Cards</h1>

      {/* FILTER + SEARCH BOX */}
      <div className="bg-[#18181B]/70 backdrop-blur-md border border-[#27272A] rounded-2xl p-4 mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] space-y-4">

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search support cards..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-[#18181B]/60 backdrop-blur-md border border-[#27272A] text-[#E0FF4F] placeholder-[#829C6C] outline-none focus:border-[#829C6C] focus:bg-[#18181B]/80 transition duration-200"
        />

        {/* FILTER BUTTONS */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((el) => (
            <button
              key={el.name}
              onClick={() => setFilter(el.name)}
              className={`cursor-pointer group flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full border transition duration-200 ${
                filter === el.name
                  ? "bg-[#E0FF4F] text-[#09090B] border-[#E0FF4F] shadow-[0_0_10px_rgba(224,255,79,0.3)]"
                  : "bg-[#09090B]/50 backdrop-blur-md text-[#E5E5E5] border-[#27272A] hover:bg-[#09090B]/70 hover:border-[#E0FF4F]/50 hover:shadow-[0_0_12px_rgba(224,255,79,0.2)]"
              }`}
            >
              {el.icon && (
                <img
                  src={el.icon}
                  alt={el.name}
                  className="w-5 h-5 group-hover:scale-110 transition"
                />
              )}
              {el.name}
            </button>
          ))}
        </div>

      </div>

      {/* CHARACTER GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-2">
        {filteredSupportCards.map((char) => (
          <button
            key={char.name}
            className="cursor-pointer group relative rounded-xl text-left transition-all duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.65)]"
          >
            <div className="relative rounded-xl overflow-hidden w-full transform group-hover:scale-[1.03] transition-all duration-300 ease-out shadow-lg">

              <img
                src={char.img}
                alt={char.name}
                className="w-full h-auto block"
              />

              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-white/10 via-transparent to-white/5" />

              {/* LABEL */}
              <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5
                bg-gradient-to-t from-black/90 via-black/60 to-transparent
                backdrop-blur-[1px]">
                <h2 className={`${abel.className} text-sm font-bold truncate tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-[#FFFFFF]`}>
                  {char.name}
                </h2>
              </div>

            </div>
          </button>
        ))}
      </div>

    </div>
  </div>
);
}