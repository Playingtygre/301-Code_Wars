
function isNice(arr){
    if (arr.length == 0){
        return false
    }
    for (var n =0; n < arr.length; n++){
    let flag = false;
    for (let i = 0; i <arr.length; i++) {
    if (arr[n]== arr[i] + 1 || arr[n]== arr[i] - 1) {
     flag = true;
     
    }
    }
    if (!flag){
        return false
    }
}
        return true
}   