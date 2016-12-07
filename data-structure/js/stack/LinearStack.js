/**
* 数据结构-顺序栈
**/
function LinearStack() {
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
    * 出栈
    * @param index 索引
    **/
    this.pop = function() {
        if(length == 0) {
            throw "empty stack.";
        }
        var val = datas[length];
        datas[--length] = undefined;
        return val;
    };

    /**
    * 入栈
    * @param val 要添加的值
    **/
    this.push = function(val) {
        if(length == maxSize) {
            throw "Is Full with LinearList.";
        }
        datas[length++] = val;
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
        console.log(datas + ",length:" + length);
    };
}