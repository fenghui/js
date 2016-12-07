/**
* 直接插入排序
**/
function InsertSort(arr) {
    var i, 
        j,
        mark,
        len = arr.length;

    for(i = 1; i < len; i++) {
        if(arr[i] < arr[i - 1]) {
            mark = arr[i];                              //设置哨兵
            for(j = i - 1; arr[j] > mark; j--) {        //
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = mark;                          //
        }
    }
    return arr;
}