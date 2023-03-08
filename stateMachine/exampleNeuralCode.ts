function theThreeWhitOne(n:any, n0:any){
    if(n === 1) return n

    for(let i =0; i<n; i++){
        let impar = (n[i] % 2 === 1)
        if(n === impar){
           n = n*3 + 1
        }else{
            n = n/2
        } 
    }
    return n
}

console.log(theThreeWhitOne(22, 5))