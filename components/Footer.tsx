export default function Footer() {
  return (
    <footer className="w-full border-t py-4 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Pokémon Explorer All
      rights reserved.
    </footer>
  );
}
