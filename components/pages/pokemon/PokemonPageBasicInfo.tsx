import Image from "next/image";

export default async function PokemonPageBasicInfo({
  id,
  name,
  height,
  weight,
  experience
}: {
  id: number;
  name: string;
  experience: number;
  height: number;
  weight: number;
}) {
  return (
    <section className="grid grid-cols-[min-content_1fr]">
      <section>
        <h1 className="text-2xl font-bold capitalize sm:text-3xl">
          {name}
        </h1>
        <div>
          <span className="pr-2 text-lg font-semibold uppercase sm:text-xl">
            Level
          </span>
          <span className="text-lg font-bold sm:text-xl">
            {experience}
          </span>
        </div>
        <section>
          <div>
            <span className="pr-2 text-xs uppercase sm:text-sm">
              height
            </span>
            <span className="text-sm font-bold">
              {height}
            </span>
          </div>
          <div>
            <span className="pr-2 text-xs uppercase sm:text-sm">
              weight
            </span>
            <span className="text-sm font-bold">
              {weight}
            </span>
          </div>
        </section>
      </section>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        title={name}
        height={400}
        width={400}
        unoptimized
        className="flex-1"
      />
    </section>
  );
}
