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

  console.log(`*** 11 *** numArr >`, numArr);

  return (
    <>
      {numArr.map((num, i) => {
        return <div key={`${num}${i}`}>{num}</div>;
      })}
    </>
  );
};
