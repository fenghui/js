/**
* 数据结构-单链表
**/
function LinkedList() {
    var Node = function() {
        var data = null;
        var next = null;

        this.setData = function(val) {
            this.data = val;
        };

        this.getData = function() {
            return this.data;
        };

        this.setNext = function(next) {
            this.next = next;
        };

        this.getNext = function() {
            return this.next;
        };
    };
    var head = new Node();      //单链表表头
    var endNode = new Node();   //单链表尾节点

    /**
    * 添加到链表尾部(尾插法)
    * @param val
    **/
    this.add = function(val) {
        var newNode = new Node();
        newNode.setData(val);
        if(head.getNext() == null) {
            head.setNext(newNode);
            endNode = newNode;
        } else {
            endNode.setNext(newNode);
            endNode = newNode;
        }
    };

    /**
    * 添加到链表指定索引位置
    * @param idx
    * @param val
    **/
    this.addToIndex = function(idx, val) {
        var node = head;
        var i = 0;
        //获取到要添加的索引位置的元素
        while(i < idx) {
            node = node.getNext();
            i++;
        }

        if(node != null) {
            var newNode = new Node();
            newNode.setData(val);
            newNode.setNext(node.getNext());
            node.setNext(newNode);
        } else {
            throw "index outof the LinkedList.";
        }
    };

    /**
    * 移除指定位置元素
    * @param idx
    **/
    this.remove = function(idx) {
        var preNode = head;
        var node = head.getNext();
        var i = 0;
        //获取到要移除的索引位置的元素
        while(i < idx) {
            preNode = node;
            node = node.getNext();
            i++;
        }
        if(node != null) {
            preNode.setNext(node.getNext());
        } else {
            throw "index outof the LinkedList.";
        }
    };

    this.removeAll = function() {
        head.setNext(null);
    };

    this.debug = function() {
        //console.log(head);
        var node = head.getNext();
        var debugVal = [];
        while(node != null) {
            debugVal.push(node.getData());
            node = node.getNext();
        }

        console.log('LinkedList', debugVal);
    };
}