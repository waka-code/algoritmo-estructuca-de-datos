function mySqrt(x: number): number {
   /* if(x === 2){
        return x
     }else{
        return mySqrt(x/2)
     }*/

     if(x % 2 == 0){
        return 2
     }else{
        return 0
     }
};


console.log(mySqrt(16))

