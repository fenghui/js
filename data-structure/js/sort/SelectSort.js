/**
* 简单选择排序
**/
function SelectSort(arr) {
    var i, j, min, len, temp;
    len = arr.length;

    for(i = 0; i < len; i++) {
        min = i;
        //从当前数之后找到小于当前数的值并与当前数交换位置
        for(j = i + 1; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min != i) {
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}