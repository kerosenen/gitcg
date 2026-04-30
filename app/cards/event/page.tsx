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

const eventCards = [
  { name: "A Blessing From 'M'", img: "/event-cards/a-blessing-from-m.webp" },
  { name: "I'd Rather Lose Money Myself", img: "/event-cards/id-rather-lose-money-myself.webp" },
  { name: "Revelrous Beats", img: "/event-cards/revelrous-beats.webp" },
  { name: "Abundant Phlogiston", img: "/event-cards/abundant-phlogiston.webp" },
  { name: "Abyssal Summons", img: "/event-cards/abyssal-summons.webp" },
  { name: "Adeptus' Temptation", img: "/event-cards/adeptus-temptation.webp", categories: "Food" },
  { name: "An Adventure Through the Morning Mist", img: "/event-cards/an-adventure-through-the-morning-mist.webp" },
  { name: "An Ancient Sacrifice of Sacred Brocade", img: "/event-cards/an-ancient.webp" },
  { name: "Ancient Courtyard", img: "/event-cards/ancient-courtyard.webp", categories: "Arcane Legend" },
  { name: "Art of Sleepy Meditation", img: "/event-cards/art-of-sleepy-meditation.webp" },
  { name: "Awesome, Bro", img: "/event-cards/awesome-bro.webp" },
  { name: "Blessing of the Divine Relic's Installation", img: "/event-cards/blessing-of-the-divine-relics-installation.webp" },
  { name: "Broken Sea", img: "/event-cards/broken-sea.webp" },
  { name: "Butter Crab", img: "/event-cards/butter-crab.webp", categories: "Food" },
  { name: "Calx's Arts", img: "/event-cards/calxs-arts.webp" },
  { name: "Changing Shifts", img: "/event-cards/changing-shifts.webp" },
  { name: "Chenyu Brew", img: "/event-cards/chenyu-brew.webp", categories: "Food" },
  { name: "Cleaning Time", img: "/event-cards/cleaning-time.webp" },
  { name: "Clink Clank Legion", img: "/event-cards/clink-clank-legion.webp" },
  { name: "Controlled Directional Blast", img: "/event-cards/controlled-directional-blast.webp" },
  { name: "Countdown to the Show", img: "/event-cards/countdown-to-the-show.webp" },
  { name: "Covenant of Rock", img: "/event-cards/covenant-of-rock.webp", categories: "Arcane Legend" },
  { name: "Day of Resistance: Moment of Shattered Dreams", img: "/event-cards/day-of-resistance.webp", categories: "Arcane Legend" },
  { name: "Edict of Absolution", img: "/event-cards/edict-of-absolution.webp", categories: "Arcane Legend" },
  { name: "Elemental Resonance: Enduring Rock", img: "/event-cards/enduring-rock.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Fervent Flames", img: "/event-cards/fervent-flames.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: High Voltage", img: "/event-cards/high-voltage.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Impetuous Winds", img: "/event-cards/impetuous-winds.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Shattering Ice", img: "/event-cards/shattering-ice.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Soothing Water", img: "/event-cards/soothing-water.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Sprawling Greenery", img: "/event-cards/sprawling-greenery.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Woven Flames", img: "/event-cards/woven-flames.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Woven Ice", img: "/event-cards/woven-ice.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Woven Stone", img: "/event-cards/woven-stone.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Woven Thunder", img: "/event-cards/woven-thunder.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Woven Waters", img: "/event-cards/woven-waters.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Woven Weeds", img: "/event-cards/woven-weeds.webp", categories: "Elemental Resonance" },
  { name: "Elemental Resonance: Woven Winds", img: "/event-cards/woven-winds.webp", categories: "Elemental Resonance" },
  { name: "Eremite Teatime", img: "/event-cards/eremite-teatime.webp" },
  { name: "Falls and Fortune", img: "/event-cards/falls-and-fortune.webp" },
  { name: "Fatui Conspiracy", img: "/event-cards/fatui-conspiracy.webp" },
  { name: "Fell Dragon's Awakening", img: "/event-cards/fell-dragons-awakening.webp" },
  { name: "Fight for Death", img: "/event-cards/fight-for-death.webp", categories: "Arcane Legend" },
  { name: "Fire and War", img: "/event-cards/fire-and-war.webp" },
  { name: "Fish and Chips", img: "/event-cards/fish-and-chips.webp", categories: "Food" },
  { name: "Flickering Four-Leaf Sigil", img: "/event-cards/flickering-four-leaf-sigil.webp" },
  { name: "Flying Squad, Attack!", img: "/event-cards/flying-squad-attack.webp" },
  { name: "Fresh Wind of Freedom", img: "/event-cards/fresh-wind-of-freedom.webp" },
  { name: "Friendship Eternal", img: "/event-cards/friendship-eternal.webp" },
  { name: "Fruits of Training", img: "/event-cards/fruits-of-training.webp" },
  { name: "Genius's Upgrade Technique", img: "/event-cards/geniuss-upgrade-technique.webp" },
  { name: "Glittering Gemstones", img: "/event-cards/glittering-gemstones.webp", categories: "Food" },
  { name: "Guardian's Oath", img: "/event-cards/guardians-oath.webp" },
  { name: "Harvest Time", img: "/event-cards/harvest-time.webp" },
  { name: "Harvest's Boon", img: "/event-cards/harvests-boon.webp", categories: "Food" },
  { name: "Heavy Strike", img: "/event-cards/heavy-strike.webp" },
  { name: "Hot Spring O'Clock", img: "/event-cards/hot-spring-oclock.webp", categories: "Food" },
  { name: "I Haven't Lost Yet!", img: "/event-cards/i-havent-lost-yet.webp" },
  { name: "In Every House a Stove", img: "/event-cards/in-every-house-a-stove.webp", categories: "Arcane Legend" },
  { name: "In The Name of the Extreme", img: "/event-cards/in-the-name-of-the-extreme.webp" },
  { name: "Joyous Celebration", img: "/event-cards/joyous-celebration.webp", categories: "Arcane Legend" },
  { name: "Jueyun Guoba", img: "/event-cards/jueyun-guoba.webp", categories: "Food" },
  { name: "Leave It to Me!", img: "/event-cards/leave-it-to-me.webp" },
  { name: "Little Tepetlisaur - Treasure Hunter at Large", img: "/event-cards/little-tepetlisaur.webp" },
  { name: "Lost Legacies in the Sand", img: "/event-cards/lost-legacies-in-the-sand.webp", categories: "Arcane Legend" },
  { name: "Lotus Flower Crisp", img: "/event-cards/lotus-flower-crisp.webp", categories: "Food" },
  { name: "Lyresong", img: "/event-cards/lyresong.webp" },
  { name: "Machine Assembly Line", img: "/event-cards/machine-assembly-line.webp" },
  { name: "Master of Weaponry", img: "/event-cards/master-of-weaponry.webp" },
  { name: "Matsutake Meat Rolls", img: "/event-cards/matsutake-meat-rolls.webp", categories: "Food" },
  { name: "Minty Meat Rolls", img: "/event-cards/minty-meat-rolls.webp", categories: "Food" },
  { name: "Mondstadt Hash Brown", img: "/event-cards/mondstadt-hash-brown.webp", categories: "Food" },
  { name: "Moon and Homeland", img: "/event-cards/moon-and-homeland.webp" },
  { name: "Moonsign: Ascendant Gleam", img: "/event-cards/moonsign-ascendant-gleam.webp" },
  { name: "Mushroom Pizza", img: "/event-cards/mushroom-pizza.webp", categories: "Food" },
  { name: "Mystique Soup", img: "/event-cards/mystique-soup.webp", categories: "Food" },
  { name: "Narration Footnotes", img: "/event-cards/narration-footnotes.webp" },
  { name: "Nature and Wisdom", img: "/event-cards/nature-and-wisdom.webp" },
  { name: "Northern Smoked Chicken", img: "/event-cards/northern-smoked-chicken.webp", categories: "Food" },
  { name: "Pankration!", img: "/event-cards/pankration.webp" },
  { name: "Passing of Judgment", img: "/event-cards/passing-of-judgment.webp", categories: "Arcane Legend" },
  { name: "Pilgrimage of the Return of the Sacred Flame", img: "/event-cards/pilgrimage-of-the-return-of-the-sacred-flame.webp", categories: "Arcane Legend" },
  { name: "Plan to Save the World", img: "/event-cards/plan-to-save-the-world.webp" },
  { name: "Plunging Strike", img: "/event-cards/plunging-strike.webp" },
  { name: "Puff Pops", img: "/event-cards/puff-pops.webp", categories: "Food" },
  { name: "Quick Knit", img: "/event-cards/quick-knit.webp" },
  { name: "Rainbow Macarons", img: "/event-cards/rainbow-macarons.webp", categories: "Food" },
  { name: "Rhythm of the Great Dream", img: "/event-cards/rhythm-of-the-great-dream.webp" },
  { name: "Roulette Special", img: "/event-cards/roulette-special.webp", categories: "Food" },
  { name: "Sashimi Platter", img: "/event-cards/sashimi-platter.webp", categories: "Food" },
  { name: "Saurian Dining Buddies", img: "/event-cards/saurian-dining-buddies.webp" },
  { name: "Saurus Crackers", img: "/event-cards/saurus-crackers.webp", categories: "Food" },
  { name: "Send Off", img: "/event-cards/send-off.webp" },
  { name: "Sing Your Heart Out", img: "/event-cards/sing-your-heart-out.webp", categories: "Food" },
  { name: "Starsigns", img: "/event-cards/starsigns.webp" },
  { name: "Stone and Contracts", img: "/event-cards/stone-and-contracts.webp" },
  { name: "Strategize", img: "/event-cards/strategize.webp" },
  { name: "Sunyata Flower", img: "/event-cards/sunyata-flower.webp" },
  { name: "Sweet Madame", img: "/event-cards/sweet-madame.webp", categories: "Food" },
  { name: "Tada!", img: "/event-cards/tada.webp" },
  { name: "Tandoori Roast Chicken", img: "/event-cards/tandoori-roast-chicken.webp", categories: "Food" },
  { name: "Teyvat Fried Egg", img: "/event-cards/teyvat-fried-egg.webp", categories: "Food" },
  { name: "The Bestest Travel Companion!", img: "/event-cards/the-bestest-travel-companion.webp" },
  { name: "The Boar Princess", img: "/event-cards/the-boar-princess.webp" },
  { name: "The Legend of Vennessa", img: "/event-cards/the-legend-of-vennessa.webp" },
  { name: "The Narzissenkreuz Adventure", img: "/event-cards/the-narzissenkreuz-adventure.webp" },
  { name: "The Other Side of the Frostmoon", img: "/event-cards/the-other-side-of-the-frostmoon.webp" },
  { name: "Thunder and Eternity", img: "/event-cards/thunder-and-eternity.webp" },
  { name: "Toss-Up", img: "/event-cards/toss-up.webp" },
  { name: "Ultimate Surfing Buddy!", img: "/event-cards/ultimate-surfing-buddy.webp" },
  { name: "Underwater Treasure Hunt", img: "/event-cards/underwater-treasure-hunt.webp" },
  { name: "Vicious Ancient Battle", img: "/event-cards/vicious-ancient-battle.webp", categories: "Arcane Legend" },
  { name: "Water and Justice", img: "/event-cards/water-and-justice.webp" },
  { name: "When the Crane Returned", img: "/event-cards/when-the-crane-returned.webp" },
  { name: "Where Is the Unseen Razor?", img: "/event-cards/where-is-the-unseen-razor.webp" },
  { name: "Wind and Freedom", img: "/event-cards/wind-and-freedom.webp" },
];

const filteredEventCards = eventCards
  .filter((card) =>
    filter === "All" ? true : card.categories?.includes(filter)
  )
  .filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

const categories = [
  { name: "All", icon: null },
  { name: "Arcane Legend", icon: "/card-icons/arcane-legend.png" },
  { name: "Elemental Resonance", icon: "/card-icons/elemental.png" },
  { name: "Food", icon: "/card-icons/food.png" },
];

return (
  <div className="text-[#E5E5E5]">
    <div className="min-h-screen p-8 bg-main-gradient bg-fixed">

      <h1 className={`${outfit.className} text-3xl font-semibold mb-4`}>
        Event Cards
</h1>

      {/* FILTER + SEARCH BOX */}
      <div className="bg-[#18181B]/70 backdrop-blur-md border border-[#27272A] rounded-2xl p-4 mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] space-y-4">

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search event cards..."
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
        {filteredEventCards.map((char) => (
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