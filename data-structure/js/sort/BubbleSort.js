/**
* 冒泡排序
**/
function BubbleSort(arr) {
    var arrLen = arr.length;
    var temp;
    for(var i = 0; i < arrLen - 1; i++) {
        for(var j = 0; j < arrLen - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}