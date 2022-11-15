import { BuildGrid } from "./BuildGrid/BuildGrid";

export const Grid = () => {
  // const randoNumbo = () => {
  //   const randoNumbo = Math.ceil(Math.random() * 9);

  //   return <>{randoNumbo}</>;
  // };

  const makeGrid = () => {
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <>
        <BuildGrid />
      </>
      // <>
      //   {arr.map((a) => {
      //     return (
      //       <div
      //         className="w-[75px] h-[75px] bg-slate-300 flex justify-center items-center"
      //         key={a}
      //       >
      //         {randoNumbo()}
      //       </div>
      //     );
      //   })}
      // </>
    );
  };

  return (
    <section className="text-[3rem] font-bold grid grid-cols-3 grid-rows-3 gap-3">
      <BuildGrid />
    </section>
  );
};
