export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm">
        © {new Date().getFullYear()} Carlos Castro Vargas. All rights reserved
      </div>
    </footer>
  );
}
