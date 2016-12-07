/**
* 数据结构-链表栈
**/
function LinkedStack() {
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
    var head = new Node();      //栈头
    //var endNode = new Node();   //栈尾
    var count = 0;

    /**
    * 入栈
    * @param val
    **/
    this.push = function(val) {
        if(count == 0) {
            head.setData(val);
        } else {
            var newNode = new Node();
            newNode.setData(val);
            newNode.setNext(head);
            head = newNode;
        }
        count++;
    };

    /**
    * 出栈
    * @param idx
    **/
    this.pop = function() {
        if(count == 0) {
            throw "empty stack.";
        }
        count--;
        if(head.getNext() != null) {
            head = head.getNext();
        }
    };

    this.debug = function() {
        var node = head;
        var debugVal = [];
        for(var i = 0; i < count; i++) {
            debugVal.push(node.getData());
            node = node.getNext();
        }
        console.log('LinkedList', debugVal);
    };
}