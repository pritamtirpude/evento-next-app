import SearchForm from "@/components/SearchForm";
import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <Title>Find events around you</Title>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
