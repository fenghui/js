/**
* 折半查找（只针对有序列表）
**/
function BinarySearch(arr, len, key) 
{
    var low = 0,                //最低下标位置
        high = len - 1,         //最高下标位置
        mid;                    //中间下标位置

    while(low <= high) {
        mid = Math.ceil((low + high) / 2);

        if(arr[mid] > key) {    //目标比中间值小
            high = mid - 1;     //最高下标调整到中间值的前一位                 
        } else if(arr[mid] < key) {//目标比中间值大
            low = mid + 1;      //最低下标调整到中间值的后一位
        } else {
            return mid;
        }
    }
    return -1;                  //未查询到
}