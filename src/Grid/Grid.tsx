export const Grid = () => {
  const randoNumbo = () => {
    const randoNumbo = Math.ceil(Math.random() * 9);
    return <>{randoNumbo}</>;
  };

  const makeGrid = () => {
    return <></>;
  };

  return (
    <section className="text-[3rem] font-bold grid grid-cols-3 grid-rows-3">
      {makeGrid()}
    </section>
  );
};
