function Stack () 
{
    this.head = null;
}


Stack.prototype.push = function (value)
{
    var Node = {
        data: value,
        next: this.head
    }
    this.head = Node;
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
        str += current.data;
        if(current.next!=null)
        str += ",";

        current = current.next;
    }
    // console.log("List of the stack",str);
    return str;
}

Stack.prototype.top = function ()
{
    if(this.head!==null) return this.head.data;
}

var object = new Stack();

object.push(10);
object.push(11);
object.push(12);
object.push(13);
object.push(14);

console.log(object.list());
console.log(object.top());

object.pop();
console.log(object.list());