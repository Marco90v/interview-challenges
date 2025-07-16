export default function filtrarPares(array: string[]): string[] {
  // TODO: implement
  const result = array.reduce((acc, item) => {
    if(!acc[item]) {
      acc[item] = 0;
    }
    acc[item]++;
    return acc;
  },{});

  const total = Object.keys(result).filter((key) => {
    return (result[key] as number) % 2 === 0;
  });
  
  return total;
}
