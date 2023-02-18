/*function staircase(n: number): string {
   let signal:string = ""; 
   let output:string = "";
   for(let i = 1; i <= n; i++){
      if(signal === ""){
        signal += i;
        console.log(signal)
      }else{
        signal += 1
        output = output + "\n" + "\n" + signal
      }
   }
   return output
}

console.log(staircase(6))*/

 ///forma larga e inverso
function staircase(n: number): string {
    let output:string = "";
    let signal:string = "\n" + "#";
    for(let i = 1; i <= n; i++){
       if(output === ""){
         output += "#";
       }else{
         output += "#";
         signal = signal + "\n" + "\n" + output;
       }
    }
    return signal
 }
 console.log(staircase(8))


 ///forma optimizada
 function staircases(n:number) {
  for (let i = 1; i <= n; i++) {
      console.log(" ".repeat(n-i) + "#".repeat(i))
  }    
}
console.log(staircases(5))