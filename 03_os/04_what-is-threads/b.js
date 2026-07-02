console.log("running b")
for(let i = 0; i < 10000000; i++){
    if(i % 4000000 == 0){
        console.log(`running loop 1 ${i}`);
    }
}