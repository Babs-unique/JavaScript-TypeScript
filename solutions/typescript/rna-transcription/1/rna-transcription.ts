export function toRna(dna:string):string {
  const map: Record<string, string> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  return dna
    .split("")
    .map((nucleotide) => {
      if (!map[nucleotide]) {
        throw new Error("Invalid input DNA. ");
      }
      return map[nucleotide];
    })
    .join("");
   
}
