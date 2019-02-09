function LinkedList () {
    this.head = null;

}

LinkedList.prototype.isEmpty = function () {
    return this.head === null;
}

LinkedList.prototype.size = function () {
    var current = this.head;
    var count  = 0;

    while(current !== null)
    {
        count++;
        current = current.next;
    }

    return count;
}

LinkedList.prototype.addtoFirst = function(val) {
    var newNode = {
        data: val,
        next: this.head
    
    }
    this.head = new Node;
}


LinkedList.prototype.addToLast = function(val) {
    var newNode = 
    {
        data :val,
        next:null
    };
    // if this the start of the node we will append it
    if(this.isEmpty()) 
    {
        this.head = newNode;
        return;
    }

    var temp = this.head;

    while(temp.next !== null)
    {
        temp = temp.next;
    }
    
    temp.next = newNode;
}

LinkedList.prototype.isPresent = function(val)
{
    var current = this.head;

    while(current!==null)
    {
        if(current.data === val) 
        {
            return true;
        }
        current = current.next;
    }

    return false;
}


LinkedList.prototype.removeFromList = function(value)
{
    if(!this.isPresent(value)) return;

    if(this.head.data === value) 
    {  // if this is the first element 
        this.head = this.head.next;
        return;
    }

    var prev = null;
    var curr  = this.head;

    while(curr.data !==val)
    {
        prev = curr;
        curr = curr.next;

    }

    prev.next = curr.next;
}

LinkedList.prototype.printList = function() 
{
    var str = "{";
    var current = this.head;

    while(current !== null )
    {

        str += current.data;
        if(current.next !=null)
        str += ',';

        current = current.next;
    }

    str += "}";

    console.log("Linked lIst is ",str);
    
}

var object = new LinkedList();

object.addToLast(10);
object.addToLast(12);
object.addToLast(13);
object.addToLast(14);
object.addToLast(15);
object.addToLast(16);
object.addToLast(17);

object.printList();

console.log("Removing from list ");

object.removeFromList(10);

console.log(object.size());

// check in the list if contains 10;

console.log("If it contains 10",object.isPresent(10));



