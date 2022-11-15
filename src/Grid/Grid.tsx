import { BuildGrid } from "./BuildGrid/BuildGrid";

export const Grid = () => {
  const tiles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className="text-[3rem] font-bold grid grid-cols-3 grid-rows-3 gap-3">
      <BuildGrid />
      {/* {tiles.map((t) => {
        return (
          <div
            key={t}
            className="text-[3rem] font-bold grid grid-cols-3 grid-rows-3 gap-1"
          >
            <BuildGrid />
          </div>
        );
      })} */}
    </section>
  );
};
