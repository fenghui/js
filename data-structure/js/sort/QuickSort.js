/**
* 快速排序
**/
function QuickSort(arr) {
    var low = 0,
        high = arr.length - 1;
    return QSort(arr, low, high);
}

function QSort(arr, low, high) {
    var pivot;
    if(low < high) {
        var pivot = Partition(arr, low, high);
        QSort(arr, low, pivot - 1);
        QSort(arr, pivot + 1, high);
    }
    return arr;
}

function Partition(arr, low, high) {
    var privotkey,
        arrLen = arr.length;
    privotkey = arr[low];
    while(low < high) {
        while(low < high && arr[high] >= privotkey) {
            high--;
        }
        //将比枢轴记录小的记录交换到低端
        arr[low] = arr[high];
        while(low < high && arr[low] <= privotkey) {
            low++;
        }
        //将比枢轴记录大的记录交换到高端
        arr[high] = arr[low];
    }
    arr[low] = privotkey;

    return low;
}