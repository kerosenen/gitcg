"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-64 h-screen bg-[#09090B] text-[#E0FF4F] p-6 flex flex-col">
      {/* title */}
      <h1 className="text-2xl font-bold mb-8">
        Genius Invokation TCG Hub
      </h1>

      {/* navigation */}
      <nav className="flex flex-col gap-2">
        <Link
          href="/"
          className="p-2 rounded-lg hover:bg-white/30 transition"
        >
          Home
        </Link>

{/* Cards dropdown */}
<div>
  <div
    onClick={() => setOpen(!open)}
    className="p-2 rounded-lg hover:bg-white/30 transition cursor-pointer flex justify-between items-center"
  >
    <span>Cards</span>
    <span>{open ? "−" : "+"}</span>
  </div>

  {open && (
    <div className="ml-4 mt-2 flex flex-col gap-2">
      <Link
        href="/cards/characters"
        className="p-2 rounded-lg hover:bg-white/30 transition text-sm"
      >
        Character Cards
      </Link>

      <Link
        href="/cards/event"
        className="p-2 rounded-lg hover:bg-white/30 transition text-sm"
      >
        Event Cards
      </Link>

      <Link
        href="/cards/support"
        className="p-2 rounded-lg hover:bg-white/30 transition text-sm"
      >
        Support Cards
      </Link>

      <Link
        href="/cards/equipment"
        className="p-2 rounded-lg hover:bg-white/30 transition text-sm"
      >
        Equipment Cards
      </Link>
    </div>
  )}
</div>

        <Link
          href="/weapons"
          className="p-2 rounded-lg hover:bg-white/30 transition"
        >
          Deck Guides
        </Link>
      </nav>

      {/* bottom */}
      <div className="mt-auto text-sm text-gray-500">
        made with love by Ki ♡
      </div>
    </div>
  );
}