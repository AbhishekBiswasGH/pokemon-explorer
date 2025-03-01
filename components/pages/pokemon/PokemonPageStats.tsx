export default async function PokemonPageStats({
  stats
}: {
  stats: { name: string; value: number }[];
}) {
  return (
    <section>
      <h3 className="py-4 text-lg font-bold uppercase underline sm:text-xl">
        Stats
      </h3>
      <section className="flex flex-col gap-4">
        {stats.map(({ name, value }, i) => (
          <div
            key={i}
            className="grid grid-cols-2 justify-between"
          >
            <span className="pr-1 uppercase">{name}</span>
            <span className="text-right">{value}</span>
          </div>
        ))}
      </section>
    </section>
  );
}
