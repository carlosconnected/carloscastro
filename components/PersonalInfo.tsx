import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function PersonalInfo() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 text-center shadow-2xl">
        <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full animate-flag-wind">
          <Image
            src="/yo.jpg"
            alt="Carlos"
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <h1 className="text-2xl font-bold text-neutral-900 animate-slide-in-left">
          Carlos Castro Vargas
        </h1>

        <p className="mt-2 text-neutral-700 animate-slide-in-right">
          I am a Software Engineer <br /> from Peru 🇵🇪.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <IconLink
            href="https://www.linkedin.com/in/carlosconnected"
            label="LinkedIn"
            className="animate-icon-jump-1"
          >
            <FaLinkedin className="h-6 w-6" />
          </IconLink>

          <IconLink 
            href="https://github.com/carlosconnected" 
            label="GitHub"
            className="animate-icon-jump-2"
          >
            <FaGithub className="h-6 w-6" />
          </IconLink>

          <IconLink 
            href="mailto:carlos.castro.vargas@gmail.com" 
            label="Email"
            className="animate-icon-jump-3"
          >
            <FaEnvelope className="h-6 w-6" />
          </IconLink>
        </div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
  className = "",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-md bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 active:translate-y-[1px] ${className}`}
    >
      {children}
    </Link>
  );
}
