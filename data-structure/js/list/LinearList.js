/**
* 数据结构-线性表
**/
function LinearList() {
    var maxSize = 10;   //线性表最大长度
    var length = 0;     //线性表当前长度
    var datas = [];     //线性表列表值存储

    /**
    * 初始化列表
    * @param len 定义线性表长度
    **/
    this.initialize = function(len) {
        maxSize = len;
    };

    /**
    * 获取索引对应的值
    * @param index 索引
    **/
    this.get = function(index) {
        if(index < 0 || index > length - 1) {
            throw "index outof LinearList.";
        }
        return datas[index];
    };

    /**
    * 添加值到指定下标
    * @param index 索引
    * @param val 要添加的值
    **/
    this.addToIndex = function(index, val) {
        if(length == maxSize) {
            throw "Is Full with LinearList.";
        }

        if(index < 0 || index > length) {
            throw "index outof LinearList.";
        }

        if(index < length - 1) {
            //index和index索引对应的右边的元素往右挪一位
            for(var i = length; i > index; i--) {
                datas[i] = datas[i - 1];
            }
        }

        datas[index] = val;
        length++;
    };

    /**
    * 添加值
    * @param val 要添加的值
    **/
    this.add = function(val) {
        if(length == maxSize) {
            throw "Is Full with LinearList.";
        }
        datas[length] = val;
        length++;
    };

    /**
    * 删除指定下标的值
    * @param index 索引
    **/
    this.remove = function(index) {
        if(index < 0 || index >= length) {
            throw "index outof LinearList.";
        }

        if(index < length - 1) {
            //index和index索引对应的右边的元素往左挪一位
            for(var i = index; i <= length; i++) {
                datas[i] = datas[i + 1];
            }
        } else {
            datas[index] = undefined;
        }
        length--;
    };

    /**
    * 删除全部
    **/
    this.removeAll = function() {
        length = 0;
    };

    /**
    * 获取长度
    **/
    this.getLength = function() {
        return length;
    };

    this.debug = function() {
        console.log(datas);
    };
}