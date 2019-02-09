function Stack () 
{
    this.head = null;
}


Stack.prototype.push = function ()
{
    var newNode = {
        data: ValidityState,
        next: this.head
    }
    this.head = new Node;
}

Stack.prototype.pop = function ()
{
    this.head  = this.head.next;
}

Stack.prototype.list = function ()
{
    var str = "";

    var current = this.head;

    while(current!==null)
    {
        str += current.next;
        if(current.next!=null)
        str += ",";

        current = current.next;
    }
    console.log("List of the stack",str);
}

var object = new Stack();

object.push(10);
object.push(11);
object.push(12);
object.push(13);
object.push(14);

console.log(object.list());
