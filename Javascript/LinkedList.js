class Node 
{
    constructor(element)
    {
        this.element = element;
        this.next = null;           
    }
}
class LinkedList {
    constructor()
    {
        this.head  = null;
        this.size = 0;
    }

    addToList(element)
    {
        var node = new Node(element);
        var current;

        // if this is the first node 
        // we will point it to the node
        if(this.head == null)
        this.head = node;
        else 
        {

        
            current = this.head;
            //iterate to the next 
            // so that we can append it to last node
            while(current.next)
            {
                current = current.next;
            }
            current.next = node;
        }
        this.size ++;
    }
     

    printList()
    {
        var current = this.head;
        var str  = "";
        while(current)
        {
            console.log(ccu
                )
            current = current.next;
        }
        console.log(str);
    }
}

var object = new LinkedList();

object.addToList(10);
object.addToList(12);
object.addToList(12);
object.addToList(14);
object.addToList(15);

object.printList();
