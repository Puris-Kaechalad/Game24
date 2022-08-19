var randomumber =  function (){
    num = []
    count = 0
    while (count<4){
        n = Math.floor(Math.random()*10)
        while (num.includes(n)){
            n = Math.floor(Math.random()*10)
        }
        num.push(n)
        count++
    }
    document.getElementById("numbers").innerHTML=num[0]+" "+num[1]+" "+num[2]+" "+num[3]

}