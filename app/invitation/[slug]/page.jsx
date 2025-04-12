"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import Flower from "../../../components//Flower";
import HeroHeader from "../../../components//HeroHeader";
import GuestGreeting from "../../../components//GuestGreeting";
import OpenInvitationButton from "../../../components/OpenInvitationButton";

export default function GuestPage() {
  const { slug } = useParams();
  const [guest, setGuest] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const res = await fetch(`/api/guests/${slug}`);
        if (!res.ok) throw new Error("Tamu tidak ditemukan");
        const json = await res.json();
        setGuest(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchGuest();
  }, [slug]);

  return (
    <div className="fixed inset-0 min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#fdfaf5] to-[#f9f4ef] text-center font-sans text-brown-text px-6 flex flex-col justify-center items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/image/hero.jpg"
          alt="Ricky dan Susi"
          fill
          className="object-cover object-top opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-ivory/80" />
      </div>

      {/* Flowers */}
      <Flower className="absolute -top-8 -left-8 w-36 sm:w-40 z-10" />
      <Flower className="absolute -top-8 -right-8 w-36 sm:w-40 z-10" />
      <Flower className="absolute -bottom-5 -right-8 w-36 sm:w-36 z-10" />
      <Flower className="absolute -bottom-5 -left-8 w-40 sm:w-36 z-10" />

      {/* Header */}
      <HeroHeader />

      {/* Guest Greeting */}
      <GuestGreeting guest={guest} loading={loading} error={error} />

      {/* Button */}
      <OpenInvitationButton />
    </div>
  );
}
