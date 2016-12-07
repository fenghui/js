/**
* 顺序查找(添加哨兵，减少i < len的判断)
**/
function SeqSearch2(arr, key, len)
{
    if(arr[0] == key) {
        return 0;
    }
    var i = len - 1;
    arr[0] = key;           //设置哨兵
    while(arr[i] != key) {
        i--;
    }
    return i == 0 ? -1 : i;
}