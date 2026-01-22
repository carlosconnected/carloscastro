"use client";

import Image from "next/image";
import Link from "next/link";

type Hobby = {
  title: string;
  description: string;
};

const hobbies = {
  yoga: [
    {
      title: "Ashtanga Vinyasa Yoga",
      description: "My daily practice",
    },
    {
      title: "Yoga Philosophy",
      description: "A way of living life",
    },
  ],
  dancing: [
    {
      title: "Contact Improvisation Dance",
      description:
        "The most somatic group practice I've ever experienced. My current favorite practice.",
    },
    {
      title: "Ecstatic Dance",
      description: "Free-form movement to music. no steps to follow.",
    },
    {
      title: "Bachata",
      description: "Sensual and spicy",
    },
    {
      title: "Zouk",
      description: "Sensual and soft",
    },
  ],
  breathwork: [
    {
      title: "Retbirthing Breathwork",
      description: "A powerful healing practice that I'm blessed to facilitate",
    },
    {
      title: "Pranayama",
      description: "Part of my daily practice",
    },
    {
      title: "Breathing Coaching",
      description: "A way to help others to breathe better and self regulate",
    },
  ],
};

export default function Hobbies() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Hobbies</h1>
        <p className="text-neutral-300 text-lg mb-6">
          I created a personal project to spread my passions in{" "}
          <Link
            href="https://dev.carlosconnected.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-200 underline font-semibold"
          >
            carlosconnected.com
          </Link>
          . This space allows me to share my love for yoga, dancing, and
          breathwork practices.
        </p>
      </div>

      <div className="space-y-12">
        {/* Yoga Section - Text left, Image right */}
        <section className="bg-white rounded-xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Yoga</h2>
              <p className="text-neutral-600 mb-6">Present moment awareness</p>
              <div className="space-y-4">
                {hobbies.yoga.map((hobby, index) => (
                  <HobbyCard key={index} hobby={hobby} />
                ))}
              </div>
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 translate-x-[-10%] md:translate-x-0">
                <Image
                  src="/yoga.jpg"
                  alt="Yoga practice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dancing Section - Image left, Text right */}
        <section className="bg-white rounded-xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-96 rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="/dancing.jpg"
                alt="Dancing practice"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Dancing
              </h2>
              <p className="text-neutral-600 mb-6">
                Communicatig through the body and movement
              </p>
              <div className="space-y-4">
                {hobbies.dancing.map((hobby, index) => (
                  <HobbyCard key={index} hobby={hobby} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Breathwork Section - Text left, Image right */}
        <section className="bg-white rounded-xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Breathwork
              </h2>
              <p className="text-neutral-600 mb-6">
                The power and magic of breathing
              </p>
              <div className="space-y-4">
                {hobbies.breathwork.map((hobby, index) => (
                  <HobbyCard key={index} hobby={hobby} />
                ))}
              </div>
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 translate-x-[-10%] md:translate-x-0">
                <Image
                  src="/breathwork.jpg"
                  alt="Breathwork practice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function HobbyCard({ hobby }: { hobby: Hobby }) {
  return (
    <div className="border border-neutral-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-neutral-900 mb-2">{hobby.title}</h3>
      <p className="text-sm text-neutral-600">{hobby.description}</p>
    </div>
  );
}
