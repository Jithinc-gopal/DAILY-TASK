function example(){
    return new Promise((resolve,reject)=>{
        let result = false
        if(result){
            resolve("promise successfull")
        }else{
            reject("promise faild")
        }
    })
}

async function run() {
    try{
        let data = await example()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
    
}
run()
