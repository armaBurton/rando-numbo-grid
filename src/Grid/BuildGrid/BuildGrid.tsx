export const BuildGrid = () => {
  const getNumbers = () => {
    const nums: number[] = [];
    let randoNumbo = Math.ceil(Math.random() * 9);
    while (nums.length < 9) {
      while (nums.includes(randoNumbo)) {
        randoNumbo = Math.ceil(Math.random() * 9);
      }
      nums.push(randoNumbo);
    }
    return nums;
  };

  const numArr: number[] = getNumbers();

  return (
    <>
      {numArr.map((num, i) => {
        return (
          <div
            className="transition ease-in-out w-[75px] h-[75px] bg-slate-300 flex justify-center items-center cursor-pointer hover:text-[3.5rem] duration-300"
            key={`${num}${i}`}
          >
            {num}
          </div>
        );
      })}
    </>
  );
};
