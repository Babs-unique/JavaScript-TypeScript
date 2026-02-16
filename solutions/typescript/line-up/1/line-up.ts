export function format(name: string, number: number): string {
  let num:string = '';
  if (number % 100 === 11 || number % 100 === 12 || number % 100 === 13){
    num = 'th'
  } else if (number % 10 === 1) {
     num = 'st'
  }else if (number % 10 === 2) {
    num = 'nd'
  }else if (number % 10 === 3) {
    num = 'rd'
  }else{
    num = 'th'
  }
  const sentence  = `${name}, you are the ${number}${num} customer we serve today. Thank you!`
  return sentence;
}
