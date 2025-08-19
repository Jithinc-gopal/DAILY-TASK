//recursion 

function reversestring(str){
    if(str.length == 0){
        return str
    }
    
    return reversestring(str.length-1)
}
reversestring("jithin")