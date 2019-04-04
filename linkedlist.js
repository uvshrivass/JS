function LinkedList() {
    this.head = null;
    this.tail = null;    
}

function Node(prev, value, next) {

    this.prev = prev;
    this.value = value;
    this.next = next;

}

// Add to Tail
LinkedList.prototype.addToTail = function(value) {

    let newNode = new Node(this.tail, value, null);

    if(this.tail){
        this.tail.next = newNode;
    }
    else{
        this.head = newNode;
    }

    this.tail = newNode;

};

// Add to Head
LinkedList.prototype.addToHead = function(value) {

    let newNode = new Node(null, value, this.head);

    if(this.head){
        this.head.prev = newNode;
    }
    else{
        this.tail = newNode;
    }

    this.head = newNode;

};

// Remove from head
LinkedList.prototype.removeHead = function(){

    if(!this.head){
        return null;
    }

    let val = this.head.value;

    this.head = this.head.next;

    if(this.head){
        this.head.prev = null;
    }
    else {
        this.tail = null;
    }

    return val;

};

// Remove from tail
LinkedList.prototype.removeTail = function(){

    if(!this.tail){
        return null;
    }

    let val = this.tail.value;

    this.tail = this.head.prev;

    if(this.tail){
        this.head.next = null;
    }
    else {
        this.head = null;
    }

    return val;

};

