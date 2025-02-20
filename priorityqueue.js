//Since Priority 1 > 2 > 3 and so on, therefore - MIN BINARY HEAP

class PriorityQueue{
    constructor(){
        this.values = [];   
    }
   //INSERT
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length -1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor( (idx - 1) / 2 );
            let parent = this.values[parentIdx];
            
            if(element.priority >= parent.priority) break;
            
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
            
        } 
    }
   //REMOVE
    dequeue(){ 
        const min= this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end; 
            this.sinkDown();
        } 
        return min;  
    }
    
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if( 
                    (rightChild.priority < element.priority && swap === null) ||
                    (rightChild.priority < leftChild.priority && swap !== null)  
                ){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let pq = new PriorityQueue();

pq.enqueue("common cold",5);
pq.enqueue("gunshot wound",1);
pq.enqueue("high fever",4);
pq.enqueue("broken arm",2);
pq.enqueue("glass in foot",3);

pq.dequeue();