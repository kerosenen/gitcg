"use client";
import { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

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

import { ReactNode } from "react";

type Character = {
  name: string;
  img: string;
  element: string;

  hp?: number;
  weapon?: string;

  normalAtk?: ReactNode;
  skill?: ReactNode;
  burst?: ReactNode;
  passive?: ReactNode;

  forms?: Character[];
};

function TooltipText({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip.Provider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <b className="cursor-help text-[#E0FF4F] underline decoration-dotted underline-offset-2">
            {label}
          </b>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            align="center"
            sideOffset={8}
            className="z-[9999] max-w-xs rounded-lg border border-[#27272A] bg-[#09090B] p-3 text-sm font-normal text-[#E5E5E5] shadow-[0_0_20px_rgba(0,0,0,0.7)]"
          >
            {children}
            <Tooltip.Arrow className="fill-[#09090B]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

function InfoBox({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#18181B]/70 border border-[#27272A] rounded-xl p-4 backdrop-blur-xl">
      {title && (
        <h3 className="text-sm text-[#E0FF4F] mb-2 font-semibold">
          {title}
        </h3>
      )}
      <div className="text-sm text-[#A1A1AA] space-y-2">
        {children}
      </div>
    </div>
  );
}

type DiceCostItem = {
  icon: string;
  count: number;
  alt: string;
};

function DiceCost({ dice }: { dice: DiceCostItem[] }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      {dice.map((die) => (
        <span
          key={die.alt}
          className="inline-flex items-center gap-1 rounded-full border border-[#27272A] bg-[#09090B]/70 px-2 py-1 text-xs text-[#E5E5E5]"
        >
          <img
            src={die.icon}
            alt={die.alt}
            className="w-4 h-4"
          />
          <span>{die.count}</span>
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState<Character | null>(null);
  const [selectedFormIndex, setSelectedFormIndex] = useState(0);
  const [isFormImageFading, setIsFormImageFading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const characters: Character[] = [
    { name: "Abyss Herald: Wicked Torrents", img: "/characters/abysstorrents.webp", element: "Hydro", weapon: "Unknown", hp: 6, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Rippling Slash</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 1,
            alt: "Hydro die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned dice",
          },
        ]}
      />
    </span>

    Deals 2 <b>Physical DMG</b>.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Vortex Edge</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 3,
            alt: "Hydro dice",
          },
        ]}
      />
    </span>

    Deals 1 <b>Hydro DMG</b>, then performs <b>Prepare Skill</b> for{" "}
    <TooltipText label="Rippling Blades">
      Deals 1 <b>Hydro DMG</b>.
    </TooltipText>
    .
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Torrential Shock</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 3,
            alt: "Hydro dice",
          },
          {
            icon: "/dice/energy.webp",
            count: 2,
            alt: "Energy",
          },
        ]}
      />
    </span>

    Deals 3 <b>Hydro DMG</b>. Creates 1{" "}
    <TooltipText label="Curse of the Undercurrent">
      When character(s) on this side of the playing field use Elemental Skills
      or Elemental Bursts: They must spend 1 extra Elemental Die.
      <br />
      Usage(s): 2
    </TooltipText>{" "}
    on the opponent&apos;s side of the field.
  </>
),

passive: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Watery Rebirth
      <br />
    </span>

    <b>When the character to which this is attached would be defeated:</b>{" "}
    Remove this effect, ensure the character will not be defeated, and heal them
    to 4 HP. After this effect is triggered, <b>Physical DMG</b> this character
    deals is converted to <b>Hydro DMG</b>, and <b>Hydro DMG</b> +1.
  </>
), },
    { name: "Abyss Lector: Fathomless Flames", img: "/characters/abyssflames.webp", element: "Pyro", weapon: "Unknown", hp: 6, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Flame of Salvation</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/pyro.webp",
            count: 1,
            alt: "Pyro die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned dice",
          },
        ]}
      />
    </span>

    Deals 1 <b>Pyro DMG</b>.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Searing Precept</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/pyro.webp",
            count: 3,
            alt: "Pyro dice",
          },
        ]}
      />
    </span>

    Deals 3 <b>Pyro DMG</b>.
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Ominous Star</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/pyro.webp",
            count: 4,
            alt: "Pyro dice",
          },
          {
            icon: "/dice/energy.webp",
            count: 2,
            alt: "Energy",
          },
        ]}
      />
    </span>

    Deals 3 <b>Pyro DMG</b>. Summons 1{" "}
    <TooltipText label="Darkfire Furnace">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          <b>End Phase</b>: Deal 1 <b>Pyro DMG</b>, deal 1{" "}
          <b>Piercing DMG</b> to all opposing characters on standby.
          <br />
          Usage(s): 2
        </div>

        <img
          src="/summons/darkfire-furnace.webp"
          alt="Darkfire Furnace"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>
    .
  </>
),

passive: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Fiery Rebirth
      <br />
    </span>

    <b>When the character to which this is attached would be defeated</b>: Remove
    this effect, ensure the character will not be defeated, and heal them to 4
    HP. After this effect is triggered, this character deals +1{" "}
    <b>Pyro DMG</b>.
  </>
), },
    { name: "Abyss Lector: Violet Lightning", img: "/characters/abysslightning.webp", element: "Electro", weapon: "Unknown", hp: 6, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Den of Thunder</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/electro.webp",
            count: 1,
            alt: "Electro die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned dice",
          },
        ]}
      />
    </span>

    Deals 1 <b>Electro DMG</b>.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Shock of the Enigmatic Abyss</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/electro.webp",
            count: 3,
            alt: "Electro dice",
          },
        ]}
      />
    </span>

    Deals 3 <b>Electro DMG</b>.
    <br />
    If the target is already affected by Electro, steal 1 Energy from them. If
    this character&apos;s Energy is already full, then the stolen Energy will be
    given to the next character who does not have full Energy.
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Wild Thunderburst</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/electro.webp",
            count: 3,
            alt: "Electro dice",
          },
          {
            icon: "/dice/energy.webp",
            count: 2,
            alt: "Energy",
          },
        ]}
      />
    </span>

    Deals 3 <b>Electro DMG</b>.
    <br />
    If the target has no more than 1 Energy, deals +2 DMG.
  </>
),

passive: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Electric Rebirth
      <br />
    </span>

    <b>When the character to which this is attached would be defeated</b>: Remove
    this effect, ensure the character will not be defeated, and heal them to 4
    HP. After this effect is triggered, this character deals +1{" "}
    <b>Electro DMG</b>.
  </>
), },
    { name: "Aino", img: "/characters/aino.webp", element: "Hydro", weapon: "Claymore", hp: 10, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Bish-Bash-Bosh Repair</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 1,
            alt: "Hydro die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned dice",
          },
        ]}
      />
    </span>

    Deals 2 <b>Physical DMG</b>.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Musecatcher</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 3,
            alt: "Hydro dice",
          },
        ]}
      />
    </span>

    Deal 2 <b>Hydro DMG</b> with 1 stack of{" "}
    <TooltipText label="Agile Switch">
      The next time you perform &quot;<b>Switch Character</b>&quot;: This switch
      will be considered a <b>Fast Action</b> instead of a{" "}
      <b>Combat Action</b>. (Can stack, no stack limit)
    </TooltipText>{" "}
    created. If you have a card with{" "}
    <TooltipText label="Empowerment">
      The cost of this card is changed to the corresponding number of Dice from
      any element.
      <br />
      When this card is <b>Tune</b>: the converted element type is changed to{" "}
      <b>Omni Element</b>.
    </TooltipText>{" "}
    in your Hand, deal 3 <b>Hydro DMG</b> instead.
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Precision Hydronic Cooler</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 3,
            alt: "Hydro dice",
          },
          {
            icon: "/dice/energy.webp",
            count: 2,
            alt: "Energy",
          },
        ]}
      />
    </span>

    Deals 2 <b>Hydro DMG</b> and summons{" "}
    <TooltipText label="Cool Your Jets Ducky">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          <b>End Phase</b>: Deal 2 <b>Hydro DMG</b>.
          <br />
          Usage(s): 2
        </div>

        <img
          src="/summons/ducky.webp"
          alt="Cool Your Jets Ducky"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>
    .
  </>
),

passive: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Modular Efficiency Protocol
      <br />
    </span>

    When{" "}
    <TooltipText label="Empowerment">
      The cost of this card is changed to the corresponding number of Dice from
      any element.
      <br />
      When this card is <b>Tune</b>: the converted element type is changed to{" "}
      <b>Omni Element</b>.
    </TooltipText>{" "}
    is attached to your card: If there is{" "}
    <TooltipText label="Cool Your Jets Ducky">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          <b>End Phase</b>: Deal 2 <b>Hydro DMG</b>.
          <br />
          Usage(s): 2
        </div>

        <img
          src="/summons/ducky.webp"
          alt="Cool Your Jets Ducky"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>{" "}
    on your side, it gains 1 Usage, otherwise, gains 1 <b>Energy</b>. (Once per
    Round)
  </>
), },
    { name: "Albedo", img: "/characters/albedo.webp", element: "Geo", weapon: "Sword", hp: 12, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Favonius Bladework - Weiss</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/geo.webp",
            count: 1,
            alt: "Geo die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned dice",
          },
        ]}
      />
    </span>

    Deals 2 <b>Physical DMG</b>.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Abiogenesis: Solar Isotoma</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/geo.webp",
            count: 3,
            alt: "Geo dice",
          },
        ]}
      />
    </span>

    Summons 1{" "}
    <TooltipText label="Solar Isotoma">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          End Phase: Deal 1 <b>Geo DMG</b>.
          <br />
          When you perform &quot;<b>Switch Character</b>&quot; and this Summon
          is on the field: This switch is considered a <b>Fast Action</b>{" "}
          instead of a <b>Combat Action</b>. (Once per Round)
          <br />
          Usage(s): 3.
        </div>

        <img
          src="/summons/solar-isotoma.png"
          alt="Solar Isotoma"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>
    .
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Rite of Progeniture: Tectonic Tide</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/geo.webp",
            count: 3,
            alt: "Geo dice",
          },
          {
            icon: "/dice/energy.webp",
            count: 2,
            alt: "Energy",
          },
        ]}
      />
    </span>

    Deals 4 <b>Geo DMG</b>. If{" "}
    <TooltipText label="Solar Isotoma">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          End Phase: Deal 1 <b>Geo DMG</b>.
          <br />
          When you perform &quot;<b>Switch Character</b>&quot; and this Summon
          is on the field: This switch is considered a <b>Fast Action</b>{" "}
          instead of a <b>Combat Action</b>. (Once per Round)
          <br />
          Usage(s): 3.
        </div>

        <img
          src="/summons/solar-isotoma.png"
          alt="Solar Isotoma"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>{" "}
    is on the field, deals +2 DMG.
  </>
),

passive: null, },
    { name: "Alhaitham", img: "/characters/alhaitham.webp", element: "Dendro", weapon: "Sword", hp: 10, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Abductive Reasoning</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/dendro.webp",
            count: 1,
            alt: "Dendro die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned dice",
          },
        ]}
      />
    </span>

    Deals 2 <b>Physical DMG</b>.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Universality: An Elaboration on Form</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/dendro.webp",
            count: 3,
            alt: "Dendro dice",
          },
        ]}
      />
    </span>

    Deals 2 <b>Dendro DMG</b>. This character gains{" "}
    <TooltipText label="Chisel-Light Mirror">
      <b>Physical DMG</b> dealt by the character is converted to{" "}
      <b>Dendro DMG</b>.
      <br />
      After this character performs a <b>Normal Attack</b>: Deals 1{" "}
      <b>Dendro DMG</b>. If this Skill is a <b>Charged Attack</b>, this
      state&apos;s <b>Duration</b> (Rounds) +1.
      <br />
      Duration (Rounds): 2 (Can stack, max 3 stacks)
    </TooltipText>
    .
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Particular Field: Fetters of Phenomena</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/dendro.webp",
            count: 3,
            alt: "Dendro dice",
          },
          {
            icon: "/dice/energy.webp",
            count: 2,
            alt: "Energy",
          },
        ]}
      />
    </span>

    Deals 4 <b>Dendro DMG</b>, consumes{" "}
    <TooltipText label="Chisel-Light Mirror">
      <b>Physical DMG</b> dealt by the character is converted to{" "}
      <b>Dendro DMG</b>.
      <br />
      After this character performs a <b>Normal Attack</b>: Deals 1{" "}
      <b>Dendro DMG</b>. If this Skill is a <b>Charged Attack</b>, this
      state&apos;s <b>Duration</b> (Rounds) +1.
      <br />
      Duration (Rounds): 2 (Can stack, max 3 stacks)
    </TooltipText>
    , with the DMG bonus based on{" "}
    <TooltipText label="Chisel-Light Mirror">
      <b>Physical DMG</b> dealt by the character is converted to{" "}
      <b>Dendro DMG</b>.
      <br />
      After this character performs a <b>Normal Attack</b>: Deals 1{" "}
      <b>Dendro DMG</b>. If this Skill is a <b>Charged Attack</b>, this
      state&apos;s <b>Duration</b> (Rounds) +1.
      <br />
      Duration (Rounds): 2 (Can stack, max 3 stacks)
    </TooltipText>
    &apos;s Duration (Rounds) consumed.
    <br />
    If{" "}
    <TooltipText label="Chisel-Light Mirror">
      <b>Physical DMG</b> dealt by the character is converted to{" "}
      <b>Dendro DMG</b>.
      <br />
      After this character performs a <b>Normal Attack</b>: Deals 1{" "}
      <b>Dendro DMG</b>. If this Skill is a <b>Charged Attack</b>, this
      state&apos;s <b>Duration</b> (Rounds) +1.
      <br />
      Duration (Rounds): 2 (Can stack, max 3 stacks)
    </TooltipText>{" "}
    Duration (Rounds) consumed is 0/1/2, then apply{" "}
    <TooltipText label="Chisel-Light Mirror">
      <b>Physical DMG</b> dealt by the character is converted to{" "}
      <b>Dendro DMG</b>.
      <br />
      After this character performs a <b>Normal Attack</b>: Deals 1{" "}
      <b>Dendro DMG</b>. If this Skill is a <b>Charged Attack</b>, this
      state&apos;s <b>Duration</b> (Rounds) +1.
      <br />
      Duration (Rounds): 2 (Can stack, max 3 stacks)
    </TooltipText>{" "}
    with 3/2/1 Duration (Rounds) to this character.
  </>
),

passive: null, },
    { name: "All-Devouring Narwhal", img: "/characters/narwhal.webp", element: "Hydro", weapon: "Unknown", hp: 6, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Shattering Waves</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 1,
            alt: "Hydro die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned dice",
          },
        ]}
      />
    </span>

    Deals 2 <b>Physical DMG</b>.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Starfall Shower</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 3,
            alt: "Hydro dice",
          },
        ]}
      />
    </span>

    Deals 1 <b>Hydro DMG</b>. This character deals +1 DMG for every 3 extra max
    HP provided by <b>Insatiable Appetite</b> &#40;Max +3&#41;. After this,{" "}
    <b>Discard</b> 1 card with the highest original Elemental Dice Cost in your
    Hand.
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Ravaging Devourer</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 3,
            alt: "Hydro dice",
          },
          {
            icon: "/dice/energy.webp",
            count: 2,
            alt: "Energy",
          },
        ]}
      />
    </span>

    Deals 1 <b>Hydro DMG</b>, deals 1 <b>Piercing DMG</b> to all opposing
    characters on standby. Summons 1 <b>Dark Shadow</b>.

    <div className="mt-3 rounded-lg border border-[#27272A] bg-[#09090B]/60 p-3">
      <div className="flex gap-3 items-start">
        <div className="flex-1 space-y-2">
          <p className="font-semibold text-[#E0FF4F] mb-1">Dark Shadow</p>

          <b>When played</b>: Gain &quot;Attack Power&quot; equal to the
          Elemental Dice Cost of the devoured card with the highest Cost, and
          gain <b>Usage(s)</b> based on the number of devoured Cards with said
          Cost.
          <br />
          <b>End Phase</b>: Deals <b>Electro DMG </b> equal to &quot;Attack
          Power.&quot;
          <br />
          <b>When your active character takes DMG</b>: Reduce DMG taken by 1,
          then this card&apos;s Usage(s) -2.
        </div>

        <img
          src="/summons/dark-shadow.png"
          alt="Dark Shadow"
          className="w-24 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </div>
  </>
),

passive: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Insatiable Appetite
      <br />
    </span>

    When battle begins, create 1{" "}
    <TooltipText label="Deep Devourer's Domain">
      Cards you Discard from your Hand or use for Tune will be devoured.
      <br />
      <b>For every 3 cards devoured</b>, the All-Devouring Narwhal gains 1
      extra Max HP at the end of the Round. If there are at least 2 Cards
      amongst these that have the same original Elemental Dice Cost, gain
      another 1 extra Max HP. If all 3 Cards have the same original Elemental
      Dice Cost, gain yet another 1 extra Max HP.
    </TooltipText>
    .
  </>
), },
    { name: "Amber", img: "/characters/amber.webp", element: "Pyro", weapon: "Bow", hp: 12, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Sharpshooter</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/pyro.webp",
            count: 1,
            alt: "Pyro die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned die",
          },
        ]}
      />
    </span>{" "}
    Deals 2 <b>Physical DMG</b>.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Explosive Puppet</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/pyro.webp",
            count: 3,
            alt: "Pyro die",
          },
        ]}
      />
    </span>{" "}
    Summons 1 <b>Baron Bunny</b>.
    <br />
    <br />
    <InfoBox title="Baron Bunny">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          When your active character <b>takes DMG</b>: Decrease DMG by 2.
          <br />
          When the Usage(s) are depleted, this card will not be discarded.
          <br />
          At the <b>End Phase</b>, if Usage(s) have been depleted: Discard this
          card, deal 2 <b>Pyro DMG</b>.
          <br />
          Usage(s): 1
        </div>

        <img
          src="/summons/baron-bunny.png"
          alt="Baron Bunny"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </InfoBox>
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Fiery Rain</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/pyro.webp",
            count: 3,
            alt: "Pyro die",
          },
          {
            icon: "/dice/energy.webp",
            count: 2,
            alt: "Energy",
          },
        ]}
      />
    </span>{" "}
    Deals 2 <b>Pyro DMG</b>, deals 2 <b>Piercing DMG</b> to all opposing
    characters on standby.
  </>
),

passive: null, },
    { name: "Arataki Itto", img: "/characters/itto.webp", element: "Geo", weapon: "Claymore", hp: 10, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Fight Club Legend</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/geo.webp",
            count: 1,
            alt: "Geo die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned die",
          },
        ]}
      />
    </span>{" "}
    Deals 2 <b>Physical DMG</b>.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Masatsu Zetsugi: Akaushi Burst!</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/geo.webp",
            count: 3,
            alt: "Geo die",
          },
        ]}
      />
    </span>{" "}
    Deals 1 <b>Geo DMG</b>. Summons <b>Ushi</b>. This character gains{" "}
    <TooltipText label="Superlative Superstrength">
      <>
        When the character to which this is attached uses a <b>Charged Attack</b>
        : Deal +1 DMG. If there are at least 2 Usage(s), spend 1 less{" "}
        <b>Unaligned Element</b>.
        <br />
        Usage(s): 1 (Can stack. Max 3 stacks)
      </>
    </TooltipText>
    .
    <br />
    <br />
    <InfoBox title="Ushi">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          When your active character <b>takes DMG</b>: Decrease DMG taken by 1.
          <br />
          When the Usage(s) are depleted, this card will not be discarded.
          <br />
          <b>Can be triggered once while this summon is present</b>: When your
          character receives DMG, Arataki Itto gains{" "}
          <b>Superlative Superstrength</b>.
          <br />
          <b>End Phase</b>: Discard this card, deal 1 <b>Geo DMG</b>, and attach{" "}
          <b>Superlative Superstrength</b> to Arataki Itto.
          <br />
          Usage(s): 1
        </div>

        <img
          src="/summons/ushi.png"
          alt="Ushi"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </InfoBox>
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Royal Descent: Behold, Itto the Evil!</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/geo.webp",
            count: 3,
            alt: "Geo die",
          },
          {
            icon: "/dice/energy.webp",
            count: 3,
            alt: "Energy",
          },
        ]}
      />
    </span>{" "}
    Deals 4 <b>Geo DMG</b>. This character gains{" "}
    <TooltipText label="Raging Oni King">
      <>
        The character to which this is attached has their <b>Normal Attacks</b>{" "}
        deal +1 DMG, and their <b>Physical DMG</b> is converted to{" "}
        <b>Geo DMG</b>.
        <br />
        Duration (Rounds): 2
        <br />
        After the character to which this is attached uses a{" "}
        <b>Normal Attack</b>: Gains <b>Superlative Superstrength</b> (Once per
        Round)
      </>
    </TooltipText>
    .
  </>
),

passive: null, },
    { name: "Arlecchino", img: "/characters/arlecchino.webp", element: "Pyro", weapon: "Polearm", hp: 10, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Invitation to a Beheading</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/pyro.webp",
            count: 1,
            alt: "Pyro die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned die",
          },
        ]}
      />
    </span>{" "}
    Deals 2 <b>Physical DMG</b>. If possible, consume up to 3 stacks of the
    target&apos;s <b>Bond of Life</b> and increase DMG by the same amount.
  </>
),

skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>All is Ash</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/pyro.webp",
            count: 3,
            alt: "Pyro die",
          },
        ]}
      />
    </span>{" "}
    Create 3 stacks of{" "}
    <TooltipText label="Blood-Debt Directive">
      <>
        After your character <b>receives DMG</b>: Attach 2 stacks of{" "}
        <b>Bond of Life</b> to the character who took DMG and the opponent&apos;s
        Arlecchino.
        <br />
        Usage(s): 3
      </>
    </TooltipText>{" "}
    on the opponent&apos;s side of the field and deal 2 <b>Pyro DMG</b>.
  </>
),

burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Balemoon Rising</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/pyro.webp",
            count: 3,
            alt: "Pyro die",
          },
          {
            icon: "/dice/energy.webp",
            count: 3,
            alt: "Energy",
          },
        ]}
      />
    </span>{" "}
    Deal 4 <b>Pyro DMG</b>. Remove all of your stacks of{" "}
    <b>Bond of Life</b> and heal yourself for 1 HP per stack.
  </>
),

passive: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      The Balemoon Alone May Know
      <br />
    </span>{" "}
    Arlecchino won&apos;t receive healing from sources other than{" "}
    <b>Balemoon Rising</b>.
    <br />
    When <b>Bond of Life</b> is attached to self: <b>Physical DMG</b> dealt by
    Arlecchino is converted to <b>Pyro DMG</b>.
  </>
), },
    { name: "Azhdaha", img: "/characters/azhdaha.webp", element: "Geo", weapon: "Unknown", hp: 10 },
    { name: "Baizhu", img: "/characters/baizhu.webp", element: "Dendro", weapon: "Catalyst", hp: 11 },
    { name: "Barbara", img: "/characters/barbara.webp", element: "Hydro", weapon: "Catalyst", hp: 12 },
    { name: "Beidou", img: "/characters/beidou.webp", element: "Electro", weapon: "Claymore", hp: 11 },
    { name: "Bennett", img: "/characters/bennett.webp", element: "Pyro", weapon: "Sword", hp: 10 },
    { name: "Black Serpent Knight: Rockbreaker Ax", img: "/characters/blackserpent.webp", element: "Geo", weapon: "Unknown", hp: 12 },
    { name: "Candace", img: "/characters/candace.webp", element: "Hydro", weapon: "Polearm", hp: 11 },
    { name: "Charlotte", img: "/characters/charlotte.webp", element: "Cryo", weapon: "Catalyst", hp: 11 },
    { name: "Chasca", img: "/characters/chasca.webp", element: "Anemo", weapon: "Bow", hp: 10 },
    { name: "Chevreuse", img: "/characters/chevreuse.webp", element: "Pyro", weapon: "Polearm", hp: 10 },
    { name: "Chiori", img: "/characters/chiori.webp", element: "Geo", weapon: "Sword", hp: 10 },
    { name: "Chongyun", img: "/characters/chongyun.webp", element: "Cryo", weapon: "Claymore", hp: 10 },
    { name: "Citlali", img: "/characters/citlali.webp", element: "Cryo", weapon: "Catalyst", hp: 10 },
    { name: "Clorinde", img: "/characters/clorinde.webp", element: "Electro", weapon: "Sword", hp: 10 },
    { name: "Collei", img: "/characters/collei.webp", element: "Dendro", weapon: "Bow", hp: 11 },
    { name: "Consecrated Fanged Beast", img: "/characters/consfanged.webp", element: "Dendro", weapon: "Unknown", hp: 10 },
    { name: "Consecrated Flying Serpent", img: "/characters/consserpent.webp", element: "Anemo", weapon: "Unknown", hp: 10 },
    { name: "Consecrated Horned Crocodile", img: "/characters/conscroc.webp", element: "Hydro", weapon: "Unknown", hp: 11 },
    { name: "Consecrated Scorpion", img: "/characters/consscorpion.webp", element: "Electro", weapon: "Unknown", hp: 10 },
    { name: "Cryo Hypostasis", img: "/characters/cryohypo.webp", element: "Cryo", weapon: "Unknown", hp: 8 },
    { name: "Cyno", img: "/characters/cyno.webp", element: "Electro", weapon: "Polearm", hp: 10 },
    { name: "Dahlia", img: "/characters/dahlia.webp", element: "Hydro", weapon: "Sword", hp: 10 },
    { name: "Dehya", img: "/characters/dehya.webp", element: "Pyro", weapon: "Claymore", hp: 10 },
    { name: "Diluc", img: "/characters/diluc.webp", element: "Pyro", weapon: "Claymore", hp: 10 },
    { name: "Diona", img: "/characters/diona.webp", element: "Cryo", weapon: "Bow", hp: 12 },
    { name: "Dori", img: "/characters/dori.webp", element: "Electro", weapon: "Claymore", hp: 10 },
    { name: "Dvalin", img: "/characters/dvalin.webp", element: "Anemo", weapon: "Unknown", hp: 10 },
    { name: "Electro Hypostasis", img: "/characters/electrohypo.webp", element: "Electro", weapon: "Unknown", hp: 8 },
    { name: "Emilie", img: "/characters/emilie.webp", element: "Dendro", weapon: "Polearm", hp: 10 },
    { name: "Emperor of Fire and Iron", img: "/characters/emperor.webp", element: "Pyro", weapon: "Unknown", hp: 5 },
    { name: "Eremite Floral Ring-Dancer", img: "/characters/eremitefloral.webp", element: "Dendro", weapon: "Unknown", hp: 10 },
    { name: "Eremite Scorching Loremaster", img: "/characters/eremitescorch.webp", element: "Pyro", weapon: "Unknown", hp: 10 },
    { name: "Escoffier", img: "/characters/escoffier.webp", element: "Cryo", weapon: "Polearm", hp: 10 },
    { name: "Eula", img: "/characters/eula.webp", element: "Cryo", weapon: "Claymore", hp: 10 },
    { name: "Experimental Field Generator", img: "/characters/experimental.webp", element: "Geo", weapon: "Unknown", hp: 11 },
    { name: "Faruzan", img: "/characters/faruzan.webp", element: "Anemo", weapon: "Bow", hp: 10 },
    { name: "Fatui Cryo Cicin Mage", img: "/characters/cryomage.webp", element: "Cryo", weapon: "Unknown", hp: 10 },
    { name: "Fatui Electro Cicin Mage", img: "/characters/electromage.webp", element: "Electro", weapon: "Unknown", hp: 10 },
    { name: "Fatui Pyro Agent", img: "/characters/pyroagent.webp", element: "Pyro", weapon: "Unknown", hp: 11 },
    { name: "Fischl", img: "/characters/fischl.webp", element: "Electro", weapon: "Bow", hp: 10 },
    { name: "Flins", img: "/characters/flins.webp", element: "Electro", weapon: "Polearm", hp: 10 },
    { name: "Freminet", img: "/characters/freminet.webp", element: "Cryo", weapon: "Claymore", hp: 10 },
    { name: "Frost Operative", img: "/characters/frostoperative.webp", element: "Cryo", weapon: "Unknown", hp: 11 },

    { name: "Furina", img: "/characters/furina.webp", element: "Hydro", weapon: "Sword", hp: 12, normalAtk: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Soloist's Solicitation</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 1,
            alt: "Hydro die",
          },
          {
            icon: "/dice/unaligned.webp",
            count: 2,
            alt: "Unaligned die",
          },
        ]}
      />
    </span>

    Deals 2 Physical DMG.
    <br />
    Once per round: If you do not have{" "}
    <TooltipText label="Seats Sacred and Secular">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          When in Arkhe: Ousia or Arkhe: Pneuma states, switch Furina's state.
          <br />
          If you have Salon Members or Singer of Many Waters on the field, change
          their state as well.
        </div>

        <img
          src="/event-cards/seats-sacred.png"
          alt="Seats Sacred and Secular"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>{" "}
    in your hand, create 1{" "}
    <TooltipText label="Seats Sacred and Secular">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          When in Arkhe: Ousia or Arkhe: Pneuma states, switch Furina's state.
          <br />
          If you have Salon Members or Singer of Many Waters on the field, change
          their state as well.
        </div>

        <img
          src="/event-cards/seats-sacred.png"
          alt="Seats Sacred and Secular"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>{" "}
    card.
  </>
), skill: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Salon Solitaire</span>

      <DiceCost
        dice={[
          {
            icon: "/dice/hydro.webp",
            count: 3,
            alt: "Hydro die",
          },
        ]}
      />
    </span>

    If Furina is in the Arkhe: Ousia state, summon{" "}
    <TooltipText label="Salon Members">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          End Phase: Deal 1 <b>Hydro DMG</b>.
          <br />
          If your side has characters with at least 6 HP, deal 1{" "}
          <b>Piercing DMG</b> to your character who has taken the least DMG, and
          deal another <b>Hydro DMG</b>.
          <br />
          Usage(s): 2 (Can stack. Max 4 stacks)
        </div>

        <img
          src="/summons/salon-members.png"
          alt="Salon Members"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>
    . If Furina is in the Arkhe: Pneuma state, summon{" "}
    <TooltipText label="Singer of Many Waters">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          End Phase: Heal all your characters for 1 HP.
          <br />
          If your side has characters with no more than 5 HP, heal the most
          injured character for an additional 1 HP.
          <br />
          Usage(s): 2 (Can stack. Max 4 stacks)
        </div>

        <img
          src="/summons/singer.png"
          alt="Singer of Many Waters"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>
    .
  </>
), burst: (
  <>
    <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
      <span>Let The People Rejoice</span>

      <DiceCost
      dice={[
        {
          icon: "/dice/hydro.webp",
          count: 4,
          alt: "Hydro die",
        },
        {
          icon: "/dice/energy.webp",
          count: 3,
          alt: "Energy",
        }
      ]}
      />
      </span>
    Deals 2 <b>Hydro DMG</b>, creates 1{" "}
    <TooltipText label="Universal Revelry">
      After your active character takes DMG or is healed: Add 1 stack of <b>Revelry</b>.
      <br />
      Duration (Rounds): 2
      <br />
      <b>Revelry</b>:
      <br />
      Your side deals +1 DMG. (Including Swirl DMG triggered by Characters)
      <br />
      Usages: 1 (Can stack. No stack limit)
    </TooltipText>
    .
  </>
), passive: (
  <>
    When battle begins, create 1{" "}
    <TooltipText label="Seats Sacred and Secular">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          When in Arkhe: Pneuma or Arkhe: Ousia states, switch Furina's state.
          <br />
          If you have Salon Members or Singer of Many Waters on the field,
          change their state as well.
        </div>

        <img
          src="/event-cards/seats-sacred.png"
          alt="Seats Sacred and Secular"
          className="w-20 shrink-0 rounded-lg border border-[#27272A]"
        />
      </div>
    </TooltipText>{" "}
    card in your hand.
  </>
) },

    { name: "Gaming", img: "/characters/gaming.webp", element: "Pyro", weapon: "Claymore", hp: 10 },
    { name: "Ganyu", img: "/characters/ganyu.webp", element: "Cryo", weapon: "Bow", hp: 12 },
    { name: "Gluttonous Yumkasaur Mountain King", img: "/characters/glutton.webp", element: "Dendro", weapon: "Unknown", hp: 8 },
    { name: "Golden Wolflord", img: "/characters/goldenwolflord.webp", element: "Geo", weapon: "Unknown", hp: 10 },
    { name: "Goldflame Qucusaur Tyrant", img: "/characters/goldflame.webp", element: "Pyro", weapon: "Unknown", hp: 11 },
    { name: "Gorou", img: "/characters/gorou.webp", element: "Geo", weapon: "Bow", hp: 10 },
    { name: "Guardian of Apep's Oasis", img: "/characters/apep.webp", element: "Dendro", weapon: "Unknown", hp: 10 },
    { name: "Hu Tao", img: "/characters/hutao.webp", element: "Pyro", weapon: "Polearm", hp: 12 },
    { name: "Hydro Hilichurl Rogue", img: "/characters/hydrohili.webp", element: "Hydro", weapon: "Unknown", hp: 11 },
    { name: "Hydro Tulpa", img: "/characters/hydrotulpa.webp", element: "Hydro", weapon: "Unknown", hp: 10 },
    { name: "Iansan", img: "/characters/iansan.webp", element: "Electro", weapon: "Polearm", hp: 11 },
    { name: "Ifa", img: "/characters/ifa.webp", element: "Anemo", weapon: "Catalyst", hp: 10 },
    { name: "Ineffa", img: "/characters/ineffa.webp", element: "Electro", weapon: "Polearm", hp: 10 },
    { name: "Jadeplume Terrorshroom", img: "/characters/jadeplume.webp", element: "Dendro", weapon: "Unknown", hp: 12 },
    { name: "Jean", img: "/characters/jean.webp", element: "Anemo", weapon: "Sword", hp: 12 },
    { name: "Kachina", img: "/characters/kachina.webp", element: "Geo", weapon: "Polearm", hp: 10 },
    { name: "Kaedehara Kazuha", img: "/characters/kazuha.webp", element: "Anemo", weapon: "Sword", hp: 10 },
    { name: "Kaeya", img: "/characters/kaeya.webp", element: "Cryo", weapon: "Sword", hp: 10 },
    { name: "Kamisato Ayaka", img: "/characters/ayaka.webp", element: "Cryo", weapon: "Sword", hp: 10 },
    { name: "Kamisato Ayato", img: "/characters/ayato.webp", element: "Hydro", weapon: "Sword", hp: 11 },
    { name: "Kaveh", img: "/characters/kaveh.webp", element: "Dendro", weapon: "Claymore", hp: 12 },
    { name: "Keqing", img: "/characters/keqing.webp", element: "Electro", weapon: "Sword", hp: 10 },
    { name: "Kinich", img: "/characters/kinich.webp", element: "Dendro", weapon: "Claymore", hp: 10 },
    { name: "Kirara", img: "/characters/kirara.webp", element: "Dendro", weapon: "Sword", hp: 10 },
    { name: "Klee", img: "/characters/klee.webp", element: "Pyro", weapon: "Catalyst", hp: 10 },
    { name: "Kujou Sara", img: "/characters/kujousara.webp", element: "Electro", weapon: "Bow", hp: 10 },
    { name: "Kuki Shinobu", img: "/characters/kuki.webp", element: "Electro", weapon: "Sword", hp: 10 },
    { name: "La Signora", img: "/characters/signora.webp", element: "Cryo", weapon: "Unknown", hp: 10 },
    { name: "Lan Yan", img: "/characters/lanyan.webp", element: "Anemo", weapon: "Catalyst", hp: 10 },
    { name: "Lauma", img: "/characters/lauma.webp", element: "Dendro", weapon: "Catalyst", hp: 11 },
    { name: "Layla", img: "/characters/layla.webp", element: "Cryo", weapon: "Sword", hp: 10 },
    { name: "Lisa", img: "/characters/lisa.webp", element: "Electro", weapon: "Catalyst", hp: 10 },
    { name: "Lord of Eroded Primal Fire", img: "/characters/lorderoded.webp", element: "Pyro", weapon: "Unknown", hp: 11 },
    { name: "Lynette", img: "/characters/lynette.webp", element: "Anemo", weapon: "Sword", hp: 10 },
    { name: "Lyney", img: "/characters/lyney.webp", element: "Pyro", weapon: "Bow", hp: 10 },
    { name: "Maguu Kenki", img: "/characters/maguukenki.webp", element: "Anemo", weapon: "Unknown", hp: 10 },
    { name: "Mavuika", img: "/characters/mavuika.webp", element: "Pyro", weapon: "Claymore", hp: 10, normalAtk: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Flames Weave Life
      <br />
    </span>{" "}
    Deals 2 <b>Physical DMG</b>.
  </>
), skill: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      The Named Moment
      <br />
    </span>{" "}
    This character enters{" "}
    <TooltipText label="Nightsoul's Blessing">
      The character to which this is attached accumulates{" "}
      <b>Nightsoul points</b>. (Max 2 points)
    </TooltipText>{" "}
    and gains 2 <b>Nightsoul points</b>. Select 1 card from 3{" "}
    <b>Flamestrider</b> cards to add to your Hand.

    <div className="mt-4 space-y-3">
      {/* INFOBOX 1 */}
      <InfoBox title="Flamestrider: Soaring Ascent">
        <div className="flex gap-3 items-start">
          <div className="flex-1 space-y-2">
            <div>
              After you <b>Discard</b> this card: Deal 1 <b>Pyro DMG</b> to the
              opponent&apos;s active character.
            </div>

            <div>
              <b>Technique</b>: Soaring Ascent (Only usable by Mavuika)
            </div>

            <div>
              <span className="font-semibold text-[#E0FF4F]">
                Soaring Ascent
              </span>
              <br />
              Consumes 1 <b>Nightsoul point</b>, deals 4 <b>Pyro DMG</b>.
              <br />
              Cost: 1 &nbsp; Usage(s): 2
            </div>
          </div>

          <img
            src="/event-cards/soaring-ascent.webp"
            alt="Flamestrider: Soaring Ascent"
            className="w-20 shrink-0 rounded-lg border border-[#27272A]"
          />
        </div>
      </InfoBox>

      {/* INFOBOX 2 */}
      <InfoBox title="Flamestrider: Blazing Trail">
        <div className="flex gap-3 items-start">
          <div className="flex-1 space-y-2">
            <div>
              When this card is <b>played</b>: Randomly trigger the &quot;End
              Phase&quot; effect of one of your Summons.
            </div>

            <div>
              <b>Technique</b>: Blazing Trail (Only usable by Mavuika)
            </div>

            <div>
              <span className="font-semibold text-[#E0FF4F]">
                Blazing Trail
              </span>
              <br />
              Switch to your next character and convert 2 Elemental Dice to Omni
              Element. (You can continue your action after using this Skill)
              <br />
              Cost: 0 &nbsp; Usage(s): 2
            </div>
          </div>

          <img
            src="/event-cards/blazing-trail.webp"
            alt="Flamestrider: Blazing Trail"
            className="w-20 shrink-0 rounded-lg border border-[#27272A]"
          />
        </div>
      </InfoBox>

      {/* INFOBOX 3 */}
      <InfoBox title="Flamestrider: Full Throttle">
        <div className="flex gap-3 items-start">
          <div className="flex-1 space-y-2">
            <div>
              When this card has 0 Usages remaining: Draw 4 cards.
            </div>

            <div>
              <b>Technique</b>: Full Throttle (Only usable by Mavuika)
            </div>

            <div>
              <span className="font-semibold text-[#E0FF4F]">
                Full Throttle
              </span>
              <br />
              Consumes 1 <b>Nightsoul point</b>, then prepares for Flamestrider:
              Full Throttle.
              <br />
              Cost: 2
            </div>

            <div>
              <span className="font-semibold text-[#E0FF4F]">
                Flamestrider: Full Throttle
              </span>
              <br />
              <b>At the start of the Action Phase</b>: Create 2 Omni Dice.
              <br />
              Usage(s): 2
            </div>
          </div>

          <img
            src="/event-cards/full-throttle.webp"
            alt="Flamestrider: Full Throttle"
            className="w-20 shrink-0 rounded-lg border border-[#27272A]"
          />
        </div>
      </InfoBox>
    </div>
  </>
), burst: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Hour of Burning Skies
      <br />
    </span>{" "}
    This character enters{" "}
    <TooltipText label="Nightsoul's Blessing">
      The character to which this is attached accumulates{" "}
      <b>Nightsoul points</b>. (Max 2 points)
    </TooltipText>
    , gains 1 <b>Nightsoul point</b>, and consumes all of their{" "}
    <b>Fighting Spirit</b>. They then deal <b>Pyro DMG </b> to the
    opponent&apos;s active character equal to the <b>Fighting Spirit</b>{" "}
    consumed.
    <br />
    If 6 points of <b>Fighting Spirit</b> are consumed, attach{" "}
    <TooltipText label="Crucible of Death and Life">
      All your characters&apos; Skills no longer consume{" "}
      <b>Nightsoul points</b>.
      <br />
      All your characters&apos; <b>Normal Attacks</b> deal +1 DMG.
      <br />
      Usage(s): 2
    </TooltipText>{" "}
    to this character.
  </>
), passive: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Fighting Spirit
      <br />
    </span>{" "}
    This character cannot gain <b>Energy</b>.
    <br />
    Each time your characters consume <b>Nightsoul points</b> or use{" "}
    <b>Normal Attacks</b>, gain 1 <b>Fighting Spirit</b>.
    <br />
    When this character uses an <b>Elemental Skill</b> or{" "}
    <b>Elemental Burst</b>, attach{" "}
    <TooltipText label="All-Fire Armaments: Ring of Searing Radiance">
      After another of your characters uses a <b>Normal Attack</b> or{" "}
      <b>Technique</b>: Mavuika consumes 1 <b>Nightsoul point</b> and deals 1{" "}
      <b>Pyro DMG</b>. (Destroys self after Mavuika exits{" "}
      <b>Nightsoul&apos;s Blessing</b>.)
    </TooltipText>
    .
  </>
),},
    { name: "Mika", img: "/characters/mika.webp", element: "Cryo", weapon: "Polearm", hp: 10 },
    { name: "Millennial Pearl Seahorse", img: "/characters/seahorse.webp", element: "Electro", weapon: "Unknown", hp: 8 },
    { name: "Mirror Maiden", img: "/characters/mirrormaiden.webp", element: "Hydro", weapon: "Unknown", hp: 10 },
    { name: "Mona", img: "/characters/mona.webp", element: "Hydro", weapon: "Catalyst", hp: 10 },
    { name: "Mualani", img: "/characters/mualani.webp", element: "Hydro", weapon: "Catalyst", hp: 10, normalAtk: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Cooling Treatment
      <br />
    </span>{" "}
    Deals 1 <b>Hydro DMG</b>.
  </>
), skill: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Surfshark Wavebreaker
      <br />
    </span>{" "}
    Attach{" "}
    <TooltipText label="Bitey Shark">
      After either side switches characters, and <b>Mualani</b> is the active character:
      <br />
      Spend 1 <b>Nightsoul point</b> to apply <b>Bite Target</b> to the opposing active character.
    </TooltipText>{" "}
    to self, then enter{" "}
    <TooltipText label="Nightsoul's Blessing">
      The character to which this is attached accumulates "<b>Nightsoul points</b>." (Max 2 points)
    </TooltipText>{" "}
    and gain 2 "<b>Nightsoul points</b>."{" "}
    (This skill cannot be used after the character enters{" "}
    <TooltipText label="Nightsoul's Blessing">
      The character to which this is attached accumulates "<b>Nightsoul points</b>." (Max 2 points)
    </TooltipText>
    ){" "}
    <br />
    (Characters with{" "}
    <TooltipText label="Bitey Shark">
      After either side switches characters, and <b>Mualani</b> is the active character:
      <br />
      Spend 1 <b>Nightsoul point</b> to apply <b>Bite Target</b> to the opposing active character.
    </TooltipText>{" "}
    attached can use the Technique: Sharky Surfboard)
    
    {/* INFO BOX */}
    <div className="mt-4 space-y-3 border-t border-[#27272A] pt-3">
      <InfoBox title="Technique: Sharky Surfboard">
        <>
          When the character to which this is attached has 0 Nightsoul points, discard this card.
          When this card is discarded, the attached character's <b>Nightsoul's Blessing</b> ends.
          <br /><br />

          <b>Sharky Surfboard</b>
          <br />
          Switch to your previous character, attach 1 <b>Bite Target</b> stack to the opposing active character.
          (If your standby characters have all been defeated, consume 1 extra <b>Nightsoul point</b>)
          <br /><br />

          <b>Bite Target</b>
          <br />
          When receiving damage dealt by <b>Mualani</b> or <b>Shark Missile</b>: Remove this effect.
          For each stack, increase the damage by 2.
          <br />
          (Stacks are accumulative, with no limit.)
        </>
      </InfoBox>
    </div>
  </>
), burst:
(
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Boomsharka-laka
      <br />
    </span>{" "}
    Deals 2 <b>Hydro DMG</b>, summons{" "}
    <TooltipText label="Shark Missile">
  <div className="flex gap-3 items-start">
    <div className="flex-1">
      End Phase: Deal 2 <b>Hydro DMG</b>.
      <br />
      Usage(s): 2 (Can stack, no stack limit)
    </div>

    <img
      src="/summons/shark-missile.webp"
      alt="Shark Missile"
      className="w-20 shrink-0 rounded-lg border border-[#27272A]"
    />
  </div>
</TooltipText>
    .
  </>
), passive: null },
    { name: "Nahida", img: "/characters/nahida.webp", element: "Dendro", weapon: "Catalyst" },
    { name: "Navia", img: "/characters/navia.webp", element: "Geo", weapon: "Claymore" },
    { name: "Neuvillette", img: "/characters/neuvillette.webp", element: "Hydro", weapon: "Catalyst" },
    { name: "Nilou", img: "/characters/nilou.webp", element: "Hydro", weapon: "Sword" },
    { name: "Ningguang", img: "/characters/ningguang.webp", element: "Geo", weapon: "Catalyst" },
    { name: "Noelle", img: "/characters/noelle.webp", element: "Geo", weapon: "Claymore" },
    { name: "Ororon", img: "/characters/ororon.webp", element: "Electro", weapon: "Bow" },
    { name: "Qiqi", img: "/characters/qiqi.webp", element: "Cryo", weapon: "Sword" },
    { name: "Raiden Shogun", img: "/characters/raiden.webp", element: "Electro", weapon: "Polearm", hp: 10, normalAtk: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Origin
      <br />
    </span>{" "}
    Deals 2 <b>Physical DMG</b>.
  </>
), skill: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Transcendence: Baleful Omen
      <br />
    </span>{" "}
    Summons 1{" "}
    <TooltipText label="Eye of Stormy Judgment">
      End Phase: Deal 1 <b>Electro DMG</b>.
      <br />
      When this Summon is on the field: Your characters' Elemental Bursts deal +1 DMG.
      Usage(s): 3.
    </TooltipText>
    .
  </>
), burst: (
  <>
    <span className="font-semibold text-[#E0FF4F]">
      Secret Art: Musou Shinsetsu
      <br />
    </span>{" "}
    Deals 3 <b>Electro DMG</b>. All of your other characters gain 2 Energy.
  </>
), passive: (
  <>
    When the battle begins, this character gains{" "}
    <TooltipText label="Chakra Desiderata">
      <>
        After your other characters use Elemental Bursts: Gain 1 Resolve. (Max 3)
        <br />
        When the character to which this is attached uses{" "}
        <b>Secret Art: Musou Shinsetsu</b>: Consume all Resolve and deal +1 DMG
        per Resolve.
      </>
    </TooltipText>
    .
  </>
) },
    { name: "Razor", img: "/characters/razor.webp", element: "Electro", weapon: "Claymore", hp: 10 },
    { name: "Rhodeia of Loch", img: "/characters/oceanid.webp", element: "Hydro", weapon: "Other Weapons", hp: 11 },
    { name: "Rosaria", img: "/characters/rosaria.webp", element: "Cryo", weapon: "Polearm", hp: 10 },
    { name: "Sangonomiya Kokomi", img: "/characters/kokomi.webp", element: "Hydro", weapon: "Catalyst", hp: 12 },
    { name: "Sayu", img: "/characters/sayu.webp", element: "Anemo", weapon: "Claymore", hp: 10 },
    { name: "Sethos", img: "/characters/sethos.webp", element: "Electro", weapon: "Bow", hp: 10 },
    { name: "Shenhe", img: "/characters/shenhe.webp", element: "Cryo", weapon: "Polearm", hp: 10 },
    { name: "Shikanoin Heizou", img: "/characters/heizou.webp", element: "Anemo", weapon: "Catalyst", hp: 10 },
    { name: "Sigewinne", img: "/characters/sigewinne.webp", element: "Hydro", weapon: "Bow", hp: 12 },
    { name: "Skirk", img: "/characters/skirk.webp", element: "Cryo", weapon: "Sword", hp: 10, forms: [
    {
      name: "Skirk",
      img: "/characters/skirk.webp",
      element: "Cryo",
      weapon: "Sword",
      hp: 10,

      normalAtk: (
        <>
          <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
            <span>Havoc: Sunder</span>

            <DiceCost
              dice={[
                {
                  icon: "/dice/cryo.webp",
                  count: 1,
                  alt: "Cryo die",
                },
                {
                  icon: "/dice/unaligned.webp",
                  count: 2,
                  alt: "Unaligned dice",
                },
              ]}
            />
          </span>

          Deals 2 <b>Physical DMG</b>.
        </>
      ),

      skill: (
        <>
          <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
            <span>Havoc: Warp</span>

            <DiceCost
              dice={[
                {
                  icon: "/dice/cryo.webp",
                  count: 2,
                  alt: "Cryo dice",
                },
              ]}
            />
          </span>

          Gains 2 <b>Serpent's Subtlety</b>, then creates 1{" "}
          <TooltipText label="Mutual Weapons Mentorship">
            <div className="flex gap-3 items-start">
              <div className="flex-1">
                Your Skirk attaches <b>Seven-Phase Flash</b> and deals +1 DMG
                in the next instance.
                <br />
                At the start of the Round or after your side performs a switch:{" "}
                <b>Discard</b> this card, gain 1 <b>Serpent's Subtlety</b>.
              </div>

              <img
                src="/event-cards/mutual-weapons.webp"
                alt="Mutual Weapons Mentorship"
                className="w-20 shrink-0 rounded-lg border border-[#27272A]"
              />
            </div>
          </TooltipText>{" "}
          and adds it to your Hand. Once per Round.
        </>
      ),

      burst: (
        <>
          <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
            <span>Havoc: Ruin</span>

            <DiceCost
              dice={[
                {
                  icon: "/dice/cryo.webp",
                  count: 3,
                  alt: "Cryo dice",
                },
                {
                  icon: "/dice/energy.webp",
                  count: 2,
                  alt: "Energy",
                },
              ]}
            />
          </span>

          Consumes all <b>Serpent's Subtlety</b>, deals <b>Cryo DMG</b> equal
          to the <b>Serpent's Subtlety</b> consumed, and deals 2{" "}
          <b>Piercing DMG</b> to characters on standby.
          <br />
          If 7 <b>Serpent's Subtlety</b> are consumed, deal 3{" "}
          <b>Piercing DMG</b> to characters on standby instead.
        </>
      ),

      passive: (
        <>
          Skirk is unable to gain Energy but can accumulate up to 7 points of{" "}
          <b>Serpent's Subtlety</b>.
          <br />
          After you trigger{" "}
          <b>Frozen, Cryo Swirl, Superconduct, or Cryo Crystallize</b>{" "}
          reactions: Create 1{" "}
          <TooltipText label="Void Rift">
            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <b>Combat Action</b>: If there is a card with a{" "}
                <b>Current Elemental Dice Cost</b> of 3 in your Hand,{" "}
                <b>Discard</b> 1 card with a{" "}
                <b>Current Elemental Dice Cost</b> of 3 from your Hand. Allied
                Skirk then gains 2 <b>Serpent's Subtlety</b>.
              </div>

              <img
                src="/event-cards/void-rift.webp"
                alt="Void Rift"
                className="w-20 shrink-0 rounded-lg border border-[#27272A]"
              />
            </div>
          </TooltipText>{" "}
          in your hand. 3 times per Round.
        </>
      ),
    },

    {
      name: "Skirk: Seven-Phase Flash",
      img: "/characters/skirk-alt.png",
      element: "Cryo",
      weapon: "Sword",
      hp: 10,

      normalAtk: (
        <>
          <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
            <span>Havoc: Sunder</span>

            <DiceCost
              dice={[
                {
                  icon: "/dice/cryo.webp",
                  count: 1,
                  alt: "Cryo die",
                },
                {
                  icon: "/dice/unaligned.webp",
                  count: 1,
                  alt: "Unaligned die",
                },
              ]}
            />
          </span>

          Deals 2 <b>Cryo DMG</b>.
        </>
      ),

      skill: (
        <>
          <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
            <span>Seven-Phase Flash</span>
          </span>

          When the character to which this is attached uses a{" "}
          <b>Normal Attack</b>: Converts <b>Physical DMG</b> dealt to{" "}
          <b>Cryo DMG</b>. If possible, consume up to 2{" "}
          <b>Serpent's Subtlety</b>, and for each point consumed, reduce the
          cost by 1 Unaligned Element.
          <br />
          The character's Elemental Burst changes to{" "}
          <b>Havoc: Extinction</b>.
          <br />
          Duration Rounds: 1
        </>
      ),

      burst: (
        <>
          <span className="flex flex-wrap items-center gap-2 font-semibold text-[#E0FF4F]">
            <span>Havoc: Extinction</span>

            <DiceCost
              dice={[
                {
                  icon: "/dice/cryo.webp",
                  count: 1,
                  alt: "Cryo die",
                },
              ]}
            />
          </span>

          Convert 2 non-Omni Elemental Dice into <b>Cryo Dice</b>.{" "}
          <b>Discard</b> up to 2 cards that originally cost 0 Elemental Dice.
          For each card Discarded, Skirk gains 1 point of{" "}
          <b>Serpent's Subtlety</b>.
        </>
      ),

      passive: (
        <>
          Skirk is unable to gain Energy but can accumulate up to 7 points of{" "}
          <b>Serpent's Subtlety</b>.
          <br />
          After you trigger{" "}
          <b>Frozen, Cryo Swirl, Superconduct, or Cryo Crystallize</b>{" "}
          reactions: Create 1{" "}
          <TooltipText label="Void Rift">
            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <b>Combat Action</b>: If there is a card with a{" "}
                <b>Current Elemental Dice Cost</b> of 3 in your Hand,{" "}
                <b>Discard</b> 1 card with a{" "}
                <b>Current Elemental Dice Cost</b> of 3 from your Hand. Allied
                Skirk then gains 2 <b>Serpent's Subtlety</b>.
              </div>

              <img
                src="/event-cards/void-rift.webp"
                alt="Void Rift"
                className="w-20 shrink-0 rounded-lg border border-[#27272A]"
              />
            </div>
          </TooltipText>{" "}
          in your hand. 3 times per Round.
        </>
      ),
    },
  ],
},
    { name: "Stonehide Lawachurl", img: "/characters/stonehidelawachurl.webp", element: "Geo", weapon: "Other Weapons", hp: 10 },
    { name: "Sucrose", img: "/characters/sucrose.webp", element: "Anemo", weapon: "Catalyst", hp: 10 },
    { name: "Tartaglia", img: "/characters/tartaglia.webp", element: "Hydro", weapon: "Bow", hp: 10 },
    { name: "Thoma", img: "/characters/thoma.webp", element: "Pyro", weapon: "Polearm", hp: 12 },
    { name: "Thunder Manifestation", img: "/characters/thundermanifest.webp", element: "Electro", weapon: "Other Weapons", hp: 10 },
    { name: "Tighnari", img: "/characters/tighnari.webp", element: "Dendro", weapon: "Bow", hp: 10 },
    { name: "Varesa", img: "/characters/varesa.webp", element: "Electro", weapon: "Catalyst", hp: 10 },
    { name: "Venti", img: "/characters/venti.webp", element: "Anemo", weapon: "Bow", hp: 12 },
    { name: "Wanderer", img: "/characters/wanderer.webp", element: "Anemo", weapon: "Catalyst", hp: 10 },
    { name: "Wriothesley", img: "/characters/wriothesley.webp", element: "Cryo", weapon: "Catalyst", hp: 10 },
    { name: "Xiangling", img: "/characters/xiangling.webp", element: "Pyro", weapon: "Polearm", hp: 10 },
    { name: "Xianyun", img: "/characters/xianyun.webp", element: "Anemo", weapon: "Catalyst", hp: 10 },
    { name: "Xiao", img: "/characters/xiao.webp", element: "Anemo", weapon: "Polearm", hp: 10 },
    { name: "Xilonen", img: "/characters/xilonen.webp", element: "Geo", weapon: "Sword", hp: 12 },
    { name: "Xingqiu", img: "/characters/xingqiu.webp", element: "Hydro", weapon: "Sword", hp: 10 },
    { name: "Xinyan", img: "/characters/xinyan.webp", element: "Pyro", weapon: "Claymore", hp: 10 },
    { name: "Yae Miko", img: "/characters/yaemiko.webp", element: "Electro", weapon: "Catalyst", hp: 10 },
    { name: "Yanfei", img: "/characters/yanfei.webp", element: "Pyro", weapon: "Catalyst", hp: 10 },
    { name: "Yaoyao", img: "/characters/yaoyao.webp", element: "Dendro", weapon: "Polearm", hp: 10 },
    { name: "Yelan", img: "/characters/yelan.webp", element: "Hydro", weapon: "Bow", hp: 11 },
    { name: "Yoimiya", img: "/characters/yoimiya.webp", element: "Pyro", weapon: "Bow", hp: 10 },
    { name: "Yumemizuki Mizuki", img: "/characters/mizuki.webp", element: "Anemo", weapon: "Catalyst", hp: 10 },
    { name: "Yun Jin", img: "/characters/yunjin.webp", element: "Geo", weapon: "Polearm", hp: 10 },
    { name: "Zhongli", img: "/characters/zhongli.webp", element: "Geo", weapon: "Polearm", hp: 12 }
  ];

const filteredCharacters = characters
  .filter((char) =>
    filter === "All" ? true : char.element === filter
  )
  .filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

const elements = [
  { name: "All", icon: null },
  { name: "Pyro", icon: "/elements/pyro.webp" },
  { name: "Hydro", icon: "/elements/hydro.webp" },
  { name: "Electro", icon: "/elements/electro.webp" },
  { name: "Cryo", icon: "/elements/cryo.webp" },
  { name: "Anemo", icon: "/elements/anemo.webp" },
  { name: "Dendro", icon: "/elements/dendro.webp" },
  { name: "Geo", icon: "/elements/geo.webp" },
];

const weapons = [
  { name: "All", icon: null },
  { name: "Bow", icon: "/card-icons/bow.png" },
  { name: "Catalyst", icon: "/card-icons/catalyst.png" },
  { name: "Claymore", icon: "/card-icons/claymore.png" },
  { name: "Polearm", icon: "/card-icons/polearm.png" },
  { name: "Sword", icon: "/card-icons/sword.png" },
];

const elementIcons: Record<string, string> = {
  Pyro: "/elements/pyro.webp",
  Hydro: "/elements/hydro.webp",
  Electro: "/elements/electro.webp",
  Cryo: "/elements/cryo.webp",
  Anemo: "/elements/anemo.webp",
  Dendro: "/elements/dendro.webp",
  Geo: "/elements/geo.webp",
};

const weaponIcons: Record<string, string> = {
  Bow: "/card-icons/bow.png",
  Catalyst: "/card-icons/catalyst.png",
  Claymore: "/card-icons/claymore.png",
  Polearm: "/card-icons/polearm.png",
  Sword: "/card-icons/sword.png",
  Unknown: "/card-icons/technique.png",
};

const closeModal = () => {
  setIsClosing(true);
  setTimeout(() => {
    setSelectedCard(null);
    setIsClosing(false);
  }, 200);
};

const changeForm = () => {
  if (!selectedCard?.forms) return;

  setIsFormImageFading(true);

  setTimeout(() => {
    setSelectedFormIndex((prev) =>
      prev === selectedCard.forms!.length - 1 ? 0 : prev + 1
    );

    setIsFormImageFading(false);
  }, 150);
};

return (
  <>
    {/* MAIN PAGE */}
    <div className="text-[#E5E5E5]">
      <div className="min-h-screen p-8 bg-main-gradient bg-fixed">
        <h1 className={`${outfit.className} text-3xl font-semibold mb-4`}>
          Character Cards
        </h1>

        {/* FILTER + SEARCH */}
        <div className="bg-[#18181B]/70 backdrop-blur-md border border-[#27272A] rounded-2xl p-4 mb-4 space-y-4">
          <input
            type="text"
            placeholder="Search characters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#18181B]/60 backdrop-blur-md border border-[#27272A] text-[#E0FF4F] placeholder-[#829C6C] outline-none focus:border-[#829C6C] focus:bg-[#18181B]/80 transition"
          />

          <div className="flex gap-2 flex-wrap">
            {elements.map((el) => (
              <button
                key={el.name}
                onClick={() => setFilter(el.name)}
                className={`cursor-pointer flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full border transition ${
                  filter === el.name
                    ? "bg-[#E0FF4F] text-[#09090B] border-[#E0FF4F]"
                    : "bg-[#09090B]/50 text-[#E5E5E5] border-[#27272A] hover:bg-[#09090B]/70 hover:border-[#E0FF4F]/50"
                }`}
              >
                {el.icon && (
                  <img src={el.icon} alt={el.name} className="w-5 h-5" />
                )}
                {el.name}
              </button>
            ))}
          </div>
        </div>

        {/* CHARACTER GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-2">
          {filteredCharacters.map((char) => (
            <button
  key={char.name}
  onClick={() => {
    setSelectedCard(char);
    setSelectedFormIndex(0);
  }}
  className="cursor-pointer group relative rounded-xl transition-all duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.65)]"
>
  <div className="relative overflow-hidden rounded-xl transform group-hover:scale-[1.03] transition-all duration-300 ease-out">
    
    <img src={char.img} alt={char.name} />

    <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-black/90 to-transparent">
      <h2 className={`${abel.className} text-sm font-bold text-white truncate`}>
        {char.name}
      </h2>
    </div>

  </div>
</button>
          ))}
        </div>
      </div>
    </div>

    {/* MODAL */}
{selectedCard &&
  (() => {
    const activeForm = selectedCard.forms?.[selectedFormIndex] ?? selectedCard;
    const activeWeapon = activeForm.weapon ?? selectedCard.weapon;
    const activeElement = activeForm.element ?? selectedCard.element;
    const activeHp = activeForm.hp ?? selectedCard.hp;

    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          isClosing ? "animate-fadeOut" : "animate-fadeIn"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/70 modal-backdrop-blur-sm"
          onClick={closeModal}
        />

        {/* MODAL */}
<div className="relative z-10 w-[1100px] max-w-[95%] h-[760px] max-h-[90vh] rounded-2xl bg-[#09090B]/95 p-6 border border-[#27272A] overflow-visible">
  {/* CLOSE */}
  <button
    onClick={closeModal}
    className="absolute top-3 right-3 text-[#E5E5E5] hover:text-[#E0FF4F] cursor-pointer"
  >
    ✕
  </button>

  <div className="grid grid-cols-[350px_1fr] gap-6 h-full">
            {/* LEFT: IMAGE */}
<div className="relative rounded-xl overflow-hidden border border-[#27272A] h-full">
  <img
    src={activeForm.img}
    alt={activeForm.name}
    className={`w-full h-full object-cover transition-opacity duration-300 ${
    isFormImageFading ? "opacity-0" : "opacity-100"
  }`}
/>

  {selectedCard.forms && selectedCard.forms.length > 1 && (
    <button
  onClick={changeForm}
  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[#E0FF4F] bg-black/60 px-3 py-2 text-[#E0FF4F] hover:bg-[#E0FF4F] hover:text-black transition cursor-pointer"
>
  ›
</button>
  )}

  {selectedCard.forms && selectedCard.forms.length > 1 && (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
      {selectedCard.forms.map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-full ${
            index === selectedFormIndex ? "bg-[#E0FF4F]" : "bg-white/40"
          }`}
        />
      ))}
    </div>
  )}
</div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-4 h-full overflow-y-auto pr-2">
              {/* NAME */}
              <div className="bg-[#18181B]/70 rounded-xl p-4 border border-[#27272A]">
                <h2
                  className={`${outfit.className} text-2xl font-semibold text-[#E0FF4F]`}
                >
                  {selectedCard.name}
                </h2>
              </div>

              {/* TAGS */}
              <div className="bg-[#18181B]/70 rounded-xl p-3 border border-[#27272A] flex items-center gap-4">
                <span className="text-sm text-[#A1A1AA]">
                  HP: {activeForm.hp ?? selectedCard.hp ?? "—"}
                </span>

                {activeWeapon && (
  <img
    src={weaponIcons[activeWeapon]}
    alt={activeWeapon}
    className="w-5 h-5"
  />
)}

                <img
                  src={elementIcons[activeForm.element ?? selectedCard.element]}
                  alt={activeForm.element ?? selectedCard.element}
                  className="w-5 h-5"
                />
              </div>

              <div className="custom-scroll max-h-[220px] overflow-y-auto bg-[#18181B]/70 rounded-xl p-3 pr-3 border border-[#27272A]">
                <h3 className="text-base text-[#E0FF4F] mb-1">Normal Attack</h3>
                <div className="text-base text-[#A1A1AA] leading-relaxed space-y-1">
                  {activeForm.normalAtk ?? "No data yet."}
                </div>
              </div>

              <div className="custom-scroll max-h-[220px] overflow-y-auto bg-[#18181B]/70 rounded-xl p-3 pr-3 border border-[#27272A]">
            <h3 className="text-base text-[#E0FF4F] mb-2">
            Elemental Skill
            </h3>

            <div className="text-base text-[#A1A1AA] leading-relaxed space-y-2">
            {activeForm.skill ?? "No data yet."}
            </div>
            </div>

              <div className="custom-scroll max-h-[220px] overflow-y-auto bg-[#18181B]/70 rounded-xl p-3 pr-3 border border-[#27272A]">
                <h3 className="text-base text-[#E0FF4F] mb-1">Elemental Burst</h3>
                <div className="text-base text-[#A1A1AA] leading-relaxed space-y-2">
                  {activeForm.burst ?? "No data yet."}
                </div>
              </div>

              <div className="custom-scroll max-h-[220px] overflow-y-auto bg-[#18181B]/70 rounded-xl p-3 pr-3 border border-[#27272A]">
                <h3 className="text-base text-[#E0FF4F] mb-1">Passive</h3>
                <div className="text-base text-[#A1A1AA] leading-relaxed space-y-2">
                  {activeForm.passive ?? "This character has no passive skill."}
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
    );
  })()}
  </>
);
}
