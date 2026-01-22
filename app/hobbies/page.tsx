"use client";

import Image from "next/image";
import Link from "next/link";

type Hobby = {
  title: string;
  description: string;
  duration?: string;
  level?: string;
};

const hobbies = {
  yoga: [
    {
      title: "Morning Flow",
      description: "Start your day with gentle stretches and mindful movement",
      duration: "30 min",
      level: "Beginner",
    },
    {
      title: "Power Vinyasa",
      description: "Dynamic sequence building strength and flexibility",
      duration: "60 min",
      level: "Intermediate",
    },
    {
      title: "Yin & Restore",
      description: "Deep stretches and relaxation for recovery",
      duration: "45 min",
      level: "All Levels",
    },
    {
      title: "Sun Salutation",
      description: "Classic sequence to energize and center",
      duration: "20 min",
      level: "Beginner",
    },
  ],
  dancing: [
    {
      title: "Contact Improvisation",
      description: "Explore movement through connection and touch",
      duration: "90 min",
      level: "All Levels",
    },
    {
      title: "Contemporary Flow",
      description: "Fluid movements combining technique and expression",
      duration: "60 min",
      level: "Intermediate",
    },
    {
      title: "Ecstatic Dance",
      description: "Free-form movement to music, no steps to follow",
      duration: "75 min",
      level: "All Levels",
    },
    {
      title: "Movement Lab",
      description: "Experimental space for creative exploration",
      duration: "60 min",
      level: "All Levels",
    },
  ],
  breathwork: [
    {
      title: "Pranayama Basics",
      description: "Foundation breathing techniques for calm and focus",
      duration: "30 min",
      level: "Beginner",
    },
    {
      title: "Breath of Fire",
      description: "Energizing breath practice to build vitality",
      duration: "20 min",
      level: "Intermediate",
    },
    {
      title: "Box Breathing",
      description: "Structured breathing for stress relief and clarity",
      duration: "15 min",
      level: "All Levels",
    },
    {
      title: "Deep Relaxation",
      description: "Guided breathwork for complete rest and restoration",
      duration: "45 min",
      level: "All Levels",
    },
  ],
};

export default function Hobbies() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Hobbies</h1>
        <p className="text-neutral-300 text-lg mb-6">
          Explore yoga, dancing, and breathwork practices
        </p>
        
        {/* Intro section */}
        <div className="bg-white rounded-xl p-6 shadow-2xl max-w-3xl mx-auto mb-12">
          <p className="text-neutral-700 text-center">
            I created a personal project to spread my passions in{" "}
            <Link
              href="https://dev.carlosconnected.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline font-semibold"
            >
              carlosconnected.com
            </Link>
            . This platform allows me to share my love for movement, mindfulness,
            and creative expression through yoga, dancing, and breathwork practices.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Yoga Section - Text left, Image right */}
        <section className="bg-white rounded-xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Yoga</h2>
              <p className="text-neutral-600 mb-6">
                Mindful movement and body awareness
              </p>
              <div className="space-y-4">
                {hobbies.yoga.map((hobby, index) => (
                  <HobbyCard key={index} hobby={hobby} />
                ))}
              </div>
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src="/yoga.jpg"
                alt="Yoga practice"
                fill
                className="object-cover"
              />
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
                Expressive movement and connection
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
                Breathing practices for energy and calm
              </p>
              <div className="space-y-4">
                {hobbies.breathwork.map((hobby, index) => (
                  <HobbyCard key={index} hobby={hobby} />
                ))}
              </div>
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src="/breathwork.jpg"
                alt="Breathwork practice"
                fill
                className="object-cover"
              />
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
      <p className="text-sm text-neutral-600 mb-3">{hobby.description}</p>
      <div className="flex gap-3 text-xs text-neutral-500">
        {hobby.duration && (
          <span className="bg-neutral-100 px-2 py-1 rounded">
            {hobby.duration}
          </span>
        )}
        {hobby.level && (
          <span className="bg-neutral-100 px-2 py-1 rounded">
            {hobby.level}
          </span>
        )}
      </div>
    </div>
  );
}
