"use client";
import { useState } from "react";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

import { Abel } from "next/font/google";

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

const equipCards = [
  { name: "Adventurer's Bandana", img: "/equip-cards/adventurers-bandana.webp", categories: "Artifact" },
  { name: "Lucky Dog's Silver Circlet", img: "/equip-cards/lucky-dogs-silver-circlet.webp", categories: "Artifact" },
  { name: "Traveling Doctor's Handkerchief", img: "/equip-cards/traveling-doctors-handkerchief.webp", categories: "Artifact" },
  { name: "Gambler's Earrings", img: "/equip-cards/gamblers-earrings.webp", categories: "Artifact" },
  { name: "Instructor's Cap", img: "/equip-cards/instructors-cap.webp", categories: "Artifact" },
  { name: "Exile's Circlet", img: "/equip-cards/exiles-circlet.webp", categories: "Artifact" },
  { name: "Ornate Kabuto", img: "/equip-cards/ornate-kabuto.webp", categories: "Artifact" },
  { name: "Emblem of Severed Fate", img: "/equip-cards/emblem-of-severed-fate.webp", categories: "Artifact" },
  { name: "General's Ancient Helm", img: "/equip-cards/generals-ancient-helm.webp", categories: "Artifact" },
  { name: "Tenacity of the Millelith", img: "/equip-cards/tenacity-of-the-millelith.webp", categories: "Artifact" },
  { name: "Thundering Poise", img: "/equip-cards/thundering-poise.webp", categories: "Artifact" },
  { name: "Vermillion Hereafter", img: "/equip-cards/vermillion-hereafter.webp", categories: "Artifact" },
  { name: "Capricious Visage", img: "/equip-cards/capricious-visage.webp", categories: "Artifact" },
  { name: "Shimenawa's Reminiscence", img: "/equip-cards/shimenawas-reminiscence.webp", categories: "Artifact" },
  { name: "Crown of Watatsumi", img: "/equip-cards/crown-of-watatsumi.webp", categories: "Artifact" },
  { name: "Ocean-Hued Clam", img: "/equip-cards/ocean-hued-clam.webp", categories: "Artifact" },
  { name: "Shadow of the Sand King", img: "/equip-cards/shadow-of-the-sand-king.webp", categories: "Artifact" },
  { name: "Gilded Dreams", img: "/equip-cards/gilded-dreams.webp", categories: "Artifact" },
  { name: "Flowing Rings", img: "/equip-cards/flowing-rings.webp", categories: "Artifact" },
  { name: "Echoes of an Offering", img: "/equip-cards/echoes-of-an-offering.webp", categories: "Artifact" },
  { name: "Heart of Khvarena's Brilliance", img: "/equip-cards/heart-of-khvarenas-brilliance.webp", categories: "Artifact" },
  { name: "Vourukasha's Glow", img: "/equip-cards/vourukashas-glow.webp", categories: "Artifact" },
  { name: "Veteran's Visage", img: "/equip-cards/veterans-visage.webp", categories: "Artifact" },
  { name: "Marechaussee Hunter", img: "/equip-cards/marechaussee-hunter.webp", categories: "Artifact" },
  { name: "Golden Troupe's Reward", img: "/equip-cards/golden-troupes-reward.webp", categories: "Artifact" },
  { name: "Golden Troupe", img: "/equip-cards/golden-troupe.webp", categories: "Artifact" },
  { name: "Amethyst Crown", img: "/equip-cards/amethyst-crown.webp", categories: "Artifact" },
  { name: "Flower of Paradise Lost", img: "/equip-cards/flower-of-paradise-lost.webp", categories: "Artifact" },
  { name: "Demon-Warrior's Feather Mask", img: "/equip-cards/demon-warriors-feather-mask.webp", categories: "Artifact" },
  { name: "Scroll of the Hero of Cinder City", img: "/equip-cards/scroll-of-the-hero-of-cinder-city.webp", categories: "Artifact" },
  { name: "Royal Masque", img: "/equip-cards/royal-masque.webp", categories: "Artifact" },
  { name: "Noblesse Oblige", img: "/equip-cards/noblesse-oblige.webp", categories: "Artifact" },
  { name: "Gladiator's Triumphus", img: "/equip-cards/gladiators-triumphus.webp", categories: "Artifact" },
  { name: "Gladiator's Finale", img: "/equip-cards/gladiators-finale.webp", categories: "Artifact" },
  { name: "Conductor's Top Hat", img: "/equip-cards/conductors-top-hat.webp", categories: "Artifact" },
  { name: "Maiden's Fading Beauty", img: "/equip-cards/maidens-fading-beauty.webp", categories: "Artifact" },
  { name: "Crown of the Saints", img: "/equip-cards/crown-of-the-saints.webp", categories: "Artifact" },
  { name: "Crownless Crown", img: "/equip-cards/crownless-crown.webp", categories: "Artifact" },
  { name: "Unfinished Reverie", img: "/equip-cards/unfinished-reverie.webp", categories: "Artifact" },
  { name: "Whimsical Dance of the Withered", img: "/equip-cards/whimsical-dance-of-the-withered.webp", categories: "Artifact" },
  { name: "Fragment of Harmonic Whimsy", img: "/equip-cards/fragment-of-harmonic-whimsy.webp", categories: "Artifact" },
  { name: "Fell Dragon's Monocle", img: "/equip-cards/fell-dragons-monocle.webp", categories: "Artifact" },
  { name: "Nymph's Dream", img: "/equip-cards/nymphs-dream.webp", categories: "Artifact" },
  { name: "Dyed Tassel", img: "/equip-cards/dyed-tassel.webp", categories: "Artifact" },
  { name: "Broken Rime's Echo", img: "/equip-cards/broken-rimes-echo.webp", categories: "Artifact" },
  { name: "Blizzard Strayer", img: "/equip-cards/blizzard-strayer.webp", categories: "Artifact" },
  { name: "Wine-Stained Tricorne", img: "/equip-cards/wine-stained-tricorne.webp", categories: "Artifact" },
  { name: "Heart of Depth", img: "/equip-cards/heart-of-depth.webp", categories: "Artifact" },
  { name: "Witch's Scorching Hat", img: "/equip-cards/witchs-scorching-hat.webp", categories: "Artifact" },
  { name: "Crimson Witch of Flames", img: "/equip-cards/crimson-witch-of-flames.webp", categories: "Artifact" },
  { name: "Thunder Summoner's Crown", img: "/equip-cards/thunder-summoners-crown.webp", categories: "Artifact" },
  { name: "Thundering Fury", img: "/equip-cards/thundering-fury.webp", categories: "Artifact" },
  { name: "Viridescent Venerer's Diadem", img: "/equip-cards/viridescent-venerers-diadem.webp", categories: "Artifact" },
  { name: "Viridescent Venerer", img: "/equip-cards/viridescent-venerer.webp", categories: "Artifact" },
  { name: "Mask of Solitude Basalt", img: "/equip-cards/mask-of-solitude-basalt.webp", categories: "Artifact" },
  { name: "Archaic Petra", img: "/equip-cards/archaic-petra.webp", categories: "Artifact" },
  { name: "Laurel Coronet", img: "/equip-cards/laurel-coronet.webp", categories: "Artifact" },
  { name: "Deepwood Memories", img: "/equip-cards/deepwood-memories.webp", categories: "Artifact" },
  { name: "Blubberbeast", img: "/equip-cards/blubberbeast.webp", categories: "Technique" },
  { name: "Iktomisaurus", img: "/equip-cards/iktomisaurus.webp", categories: "Technique" },
  { name: "Koholasaurus", img: "/equip-cards/koholasaurus.webp", categories: "Technique" },
  { name: "Qucusaurus", img: "/equip-cards/qucusaurus.webp", categories: "Technique" },
  { name: "Rawr! Rawr!", img: "/equip-cards/rawr.webp", categories: "Technique" },
  { name: "Tatankasaurus", img: "/equip-cards/tatankasaurus.webp", categories: "Technique" },
  { name: "Tepetlisaurus", img: "/equip-cards/tepetlisaurus.webp", categories: "Technique" },
  { name: "Waverider", img: "/equip-cards/waverider.webp", categories: "Technique" },
  { name: "Xenochromatic Hunter's Ray", img: "/equip-cards/xenochromatic.webp", categories: "Technique" },
  { name: "Yumkasaurus", img: "/equip-cards/yumkasaurus.webp", categories: "Technique" },
  { name: "Aqua Simulacra", img: "/equip-cards/aqua-simulacra.webp", categories: ["Weapon", "Bow"] },
  { name: "Elegy for the End", img: "/equip-cards/elegy-for-the-end.webp", categories: ["Weapon", "Bow"] },
  { name: "End of the Line", img: "/equip-cards/end-of-the-line.webp", categories: ["Weapon", "Bow"] },
  { name: "King's Squire", img: "/equip-cards/kings-squire.webp", categories: ["Weapon", "Bow"] },
  { name: "Raven Bow", img: "/equip-cards/raven-bow.webp", categories: ["Weapon", "Bow"] },
  { name: "Sacrificial Bow", img: "/equip-cards/sacrificial-bow.webp", categories: ["Weapon", "Bow"] },
  { name: "Skyward Harp", img: "/equip-cards/skyward-harp.webp", categories: ["Weapon", "Bow"] },
  { name: "Snare Hook", img: "/equip-cards/snare-hook.webp", categories: ["Weapon", "Bow"] },
  { name: "A Thousand Floating Dreams", img: "/equip-cards/a-thousand-floating-dreams.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Cashflow Supervision", img: "/equip-cards/cashflow-supervision.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Everlasting Moonglow", img: "/equip-cards/everlasting-moonglow.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Flowing Purity", img: "/equip-cards/flowing-purity.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Fruit of Fulfillment", img: "/equip-cards/fruit-of-fulfillment.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Lost Prayer to the Sacred Winds", img: "/equip-cards/lost-prayer-to-the-sacred-winds.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Magic Guide", img: "/equip-cards/magic-guide.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Sacrificial Fragments", img: "/equip-cards/sacrificial-fragments.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Skyward Atlas", img: "/equip-cards/skyward-atlas.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Starcaller's Watch", img: "/equip-cards/starcallers-watch.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Tome of the Eternal Flow", img: "/equip-cards/tome-of-the-eternal-flow.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Tulaytullah's Rememberance", img: "/equip-cards/tulaytullahs-rememberance.webp", categories: ["Weapon", "Catalyst"] },
  { name: "Ultimate Overlord's Mega Magic Sword", img: "/equip-cards/ultimate-overlords-mega-magic-sword.webp", categories: ["Weapon", "Claymore"] },
  { name: "Beacon of the Reed Sea", img: "/equip-cards/beacon-of-the-reed-sea.webp", categories: ["Weapon", "Claymore"] },
  { name: "Flame-Forged Insight", img: "/equip-cards/flame-forged-insight.webp", categories: ["Weapon", "Claymore"] },
  { name: "Forest Regalia", img: "/equip-cards/forest-regalia.webp", categories: ["Weapon", "Claymore"] },
  { name: "Portable Power Saw", img: "/equip-cards/portable-power-saw.webp", categories: ["Weapon", "Claymore"] },
  { name: "Sacrificial Greatsword", img: "/equip-cards/sacrificial-greatsword.webp", categories: ["Weapon", "Claymore"] },
  { name: "Skyward Pride", img: "/equip-cards/skyward-pride.webp", categories: ["Weapon", "Claymore"] },
  { name: "The Bell", img: "/equip-cards/the-bell.webp", categories: ["Weapon", "Claymore"] },
  { name: "White Iron Greatsword", img: "/equip-cards/white-iron-greatsword.webp", categories: ["Weapon", "Claymore"] },
  { name: "Wolf's Gravestone", img: "/equip-cards/wolfs-gravestone.webp", categories: ["Weapon", "Claymore"] },
  { name: "Engulfing Lightning", img: "/equip-cards/engulfing-lightning.webp", categories: ["Weapon", "Polearm"] },
  { name: "Lithic Spear", img: "/equip-cards/lithic-spear.webp", categories: ["Weapon", "Polearm"] },
  { name: "Moonpiercer", img: "/equip-cards/moonpiercer.webp", categories: ["Weapon", "Polearm"] },
  { name: "Primordial Jade Winged-Spear", img: "/equip-cards/primordial-jade-winged-spear.webp", categories: ["Weapon", "Polearm"] },
  { name: "Prospector's Drill", img: "/equip-cards/prospectors-drill.webp", categories: ["Weapon", "Polearm"] },
  { name: "Rightful Reward", img: "/equip-cards/rightful-reward.webp", categories: ["Weapon", "Polearm"] },
  { name: "Skyward Spine", img: "/equip-cards/skyward-spine.webp", categories: ["Weapon", "Polearm"] },
  { name: "Vortex Vanquisher", img: "/equip-cards/vortex-vanquisher.webp", categories: ["Weapon", "Polearm"] },
  { name: "White Tassel", img: "/equip-cards/white-tassel.webp", categories: ["Weapon", "Polearm"] },
  { name: "Aquila Favonia", img: "/equip-cards/aquila-favonia.webp", categories: ["Weapon", "Sword"] },
  { name: "Favonius Sword", img: "/equip-cards/favonius-sword.webp", categories: ["Weapon", "Sword"] },
  { name: "Light of Foliar Incision", img: "/equip-cards/light-of-foliar-incision.webp", categories: ["Weapon", "Sword"] },
  { name: "Sacrificial Sword", img: "/equip-cards/sacrificial-sword.webp", categories: ["Weapon", "Sword"] },
  { name: "Sapwood Blade", img: "/equip-cards/sapwood-blade.webp", categories: ["Weapon", "Sword"] },
  { name: "Skyward Blade", img: "/equip-cards/skyward-blade.webp", categories: ["Weapon", "Sword"] },
  { name: "Splendor of Tranquil Waters", img: "/equip-cards/splendor-of-tranquil-waters.webp", categories: ["Weapon", "Sword"] },
  { name: "The Dockhand's Assistant", img: "/equip-cards/the-dockhands-assistant.webp", categories: ["Weapon", "Sword"] },
  { name: "Traveler's Handy Sword", img: "/equip-cards/travelers-handy-sword.webp", categories: ["Weapon", "Sword"] },
];

const filteredEquipCards = equipCards
  .filter((card) =>
    filter === "All" ? true : card.categories?.includes(filter)
  )
  .filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

const categories = [
  { name: "All", icon: null },
  { name: "Artifact", icon: "/card-icons/artifact.png" },
  { name: "Technique", icon: "/card-icons/technique.png" },
  { name: "Weapon", icon: "/card-icons/weapon.png" },
  { name: "Bow", icon: "/card-icons/bow.png" },
  { name: "Catalyst", icon: "/card-icons/catalyst.png" },
  { name: "Claymore", icon: "/card-icons/claymore.png" },
  { name: "Polearm", icon: "/card-icons/polearm.png" },
  { name: "Sword", icon: "/card-icons/sword.png" },
];

return (
  <div className="text-[#E5E5E5]">
    <div className="min-h-screen p-8 bg-main-gradient bg-fixed">

      <h1 className={`${outfit.className} text-3xl font-semibold mb-4`}>
        Equipment Cards
</h1>

      {/* FILTER + SEARCH BOX */}
      <div className="bg-[#18181B]/70 backdrop-blur-md border border-[#27272A] rounded-2xl p-4 mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] space-y-4">

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search equipment cards..."
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
        {filteredEquipCards.map((char) => (
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