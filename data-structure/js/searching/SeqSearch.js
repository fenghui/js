/**
* 顺序查找
**/
function SeqSearch(arr, key, len)
{
    for(var i = 0; i < len; i++) {
        if(arr[i] == key)
        {
            return i;
        }
    }
    return -1;
}