"use client";

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
        "The most somatic group practice I've ever experienced. My current favorite type of dance. I've reached alter states of mind that I could not believe was possible through body movement.",
    },
    {
      title: "Ecstatic Dance",
      description:
        "Discovering ecstatic dance is such a gift. I love it. Such a great release. Every time I travel, I look up ecstatic dance events. I've connected with so many amazing humans.",
    },
    {
      title: "Bachata",
      description: "Currently learning.",
    },
    {
      title: "Zouk",
      description: "Currently learning.",
    },
  ],
  languages: [
    {
      title: "Spanish",
      description:
        "My native language. My mother tongue. The only language I spoke until my early 20s.",
    },
    {
      title: "English",
      description: "The language I learned to communicate with the world.",
    },
    {
      title: "Portuguese",
      description:
        "Back in 2014 I studied Brazilian Portuguese on my own using some old recordings for 2 months before going to Brazil for 3 weeks. I would just speak out loud throughout my commute to work. One of my favorite moments of the day. When I landed in Brazil I spoke my broken Portuguese since day 1. Most Brazilians don't speak English, so it was such an awesome experience because just a couple of months before I had never had any experience with the language. It felt surreal. That experience changed my relationship with the language and languege learning.",
    },
    {
      title: "French",
      description:
        "After the positive experience with Portuguese, I picked up French. It was much harder than I expected. But at my peak in 2019 I was able to speak fairly well. I can still hold simple conversations. I always felt that I will go back to it. The reason I picked it was because I find it very beautiful.",
    },
    {
      title: "Russian",
      description:
        "The language that allowed me to learn how to read and write with an alphabet different from the Latin alphabet.",
    },
  ],
  breathwork: [
    {
      title: "Retbirthing Breathwork",
      description:
        "A powerful healing practice that, again, took me to profound states of mind and experiences that I could not believe was achievable through breathing. I'm also blessed to facilitate it nowadays.",
    },
    {
      title: "Pranayama",
      description: "Part of my yoga practice.",
    },
    {
      title: "Coherent Breathing",
      description:
        "A simple but powerful breathing technique that I practice whenever I need to calm down, relax or focus.",
    },
  ],
};

export default function Hobbies() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12 text-[#d1bc06] ">
        <h1 className="text-4xl font-bold text-white mb-4">Hobbies</h1>
        <p className="text-neutral-300 text-lg mb-6">
          Dancing, yoga, languages ... they are different forms of
          communication. Through yoga I communicate with myself, though dancing
          I communicate to others through our bodies and theough languages I
          communicate with other people and cultures.
        </p>
      </div>

      <div className="space-y-12">
        {/* Yoga Section - Text left, Image right */}
        <section className="bg-white rounded-xl p-8 shadow-2xl">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Yoga</h2>
            <p className="text-neutral-600 mb-6">Present moment awareness</p>
            <div className="space-y-4">
              {hobbies.yoga.map((hobby, index) => (
                <HobbyCard key={index} hobby={hobby} />
              ))}
            </div>
          </div>
        </section>

        {/* Dancing Section - Image left, Text right */}
        <section className="bg-white rounded-xl p-8 shadow-2xl">
          <div>
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
        </section>

        {/* Languages Section - Image left, Text right */}
        <section className="bg-white rounded-xl p-8 shadow-2xl">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Languages
            </h2>
            <p className="text-neutral-600 mb-6">
              Connecting with other cultures and people
            </p>
            <div className="space-y-4">
              {hobbies.languages.map((hobby, index) => (
                <HobbyCard key={index} hobby={hobby} />
              ))}
            </div>
          </div>
        </section>

        {/* Breathwork Section - Text left, Image right */}
        <section className="bg-white rounded-xl p-8 shadow-2xl">
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
