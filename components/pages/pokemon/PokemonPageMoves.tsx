export default async function PokemonPageMoves({
  moves
}: {
  moves: string[];
}) {
  return (
    <section className="grid grid-cols-1 items-start justify-start gap-4 py-4 sm:grid-cols-[150px_1fr] sm:gap-0">
      <h3 className="text-lg font-bold uppercase underline sm:text-xl">
        moves
      </h3>
      <section className="flex flex-wrap gap-4">
        {moves.map((move, i) => (
          <span
            key={i}
            className="rounded-lg border border-[#64646c] px-2 py-1 text-sm capitalize sm:text-lg"
          >
            {move}
          </span>
        ))}
      </section>
    </section>
  );
}
