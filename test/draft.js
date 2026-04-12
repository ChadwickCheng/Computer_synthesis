for(let i = 1; i < array.length; i++){
    let k = array[i];
    let j = i-1;
    while( j>= 0 && array[j] > k){
        array[j+1] = array[j];
        j--;
    }
    array[j+1] = k;
}