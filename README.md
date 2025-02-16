A Priority Queue is a special type of queue where elements are dequeued based on their priority rather than their order of arrival. Each element in a priority queue has an associated priority, and elements with higher priority are served before those with lower priority. If two elements have the same priority, they follow a defined ordering rule (e.g., FIFO).

Key Characteristics:
Implemented using heaps (usually a binary heap for efficiency).
Supports operations like insertion (enqueue) and deletion (dequeue) efficiently, typically in O(log n) time.