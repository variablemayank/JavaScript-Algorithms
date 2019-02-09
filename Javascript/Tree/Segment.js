class Segment {
    constructor() {
        this.arraySize = 100;

        this.treeArray = Array(this.arraySize+1).fill(0);
    }

    build(index,start,end,A)
    {
        if(start === end)
        {
            this.treeArray[index] = A[start];
        }
        else 
        {
            var mid = (start+end)>>1;

            build(2*index,start,mid);
            build(2*index+1,mid+1,end);

            this.treeArray[index] = this.treeArray[2*index] + this.treeArray[2*index+1];
        }
    }
 
    update(node,start,end,idx,val)
    {
        if(start === end)
        {
            A[idx] += val;
            this.treeArray[index] += val;
        }
        else 
        {
            var mid = (start+end)>>1;
            
            if(start <= idx && idx <= mid)
            {
                update(2*node,start,mid,idx,val);
            }
            else
            {
                update(2*node+1,mid+1,end,idx,val);
            }

            this.treeArray[node] = this.treeArray[2*node] + this.treeArray[2*node+1];
        }
    }

    query(node,start,end,l,r)
    {
        if(r < start || end <l)
        {
            return 0;
        }
        if(l <= start && end <= r)
        {
            return this.treeArray[node];
        }

        var mid = (start+end)>>1;
        var p1 = query(2*node,start,mid,l,r);
        var p2 = query(2*node+1,mid+1,end,l,r);

        return (p1+p2);
    }

}

var A = [0,1,2,3,4,5];

var object = new Segment();
object.build(1,1,1,A);
console.log(object.query(1,1,5,1,3));
