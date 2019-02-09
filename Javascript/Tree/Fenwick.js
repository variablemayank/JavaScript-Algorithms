 class FenwickTree {

    constructor() {
        this.arraySize = 100;

        this.treeArray = Array(this.arraySize+1).fill(0);
    }

    increase(position,value)
    {
        if(position < 1 || position > this.arraySize) 
        {
            throw new Error('Position is out of allowed range');
        }

        for(let i = position; i <= this.arraySize; i += (i& -i) )
        {
            this.treeArray[i] += value;
        }
        
        return this;
    }

    query(position)
    {
        if(position < 1 || position > this.arraySize )
        {
            throw new Error("Position is out of allowed range");
        }

        let sum  = 0;

        for(let i = position; i > 0; i -= (i&-i))
        {
            sum += this.treeArray[i];
        }

        return sum;
    }

    queryRange(l,r)
    {
        if(l > r )
        throw new Error('Left index can not be greater than right one');

        if(l === 1) 
        return this.query(r);

        return this.query(r) - this.query(l-1);
    }

}


var object =  new FenwickTree();

object.increase(1,1);
object.increase(2,2);
object.increase(3,3);
object.increase(4,4);
object.increase(5,5);
object.increase(6,6);

// 1  2 3 4 5 

console.log("sum of value from range",object.queryRange(1,3));
// ans is 6


console.log("sum of value from range",object.queryRange(2,5));



