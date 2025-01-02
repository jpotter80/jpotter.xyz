---
theme: [deep-space, wide]
title: Quick Reference
toc: true,
---

<body>

# Python Algorithms Quick Reference Guide

A practical guide to common algorithms implemented in Python with examples and explanations.

Visit the <a href="https://docs.python.org/">Python Docs</a>

---


## Search Algorithms

### Binary Search

Efficient search algorithm for sorted arrays.

**Time Complexity:** O(log n)  
**Space Complexity:** O(1)

```python
def binary_search(arr: list, target: int) -> int:
    """
    Find target in sorted array, returns index if found, -1 otherwise.
    
    Args:
        arr: Sorted list of integers
        target: Number to find
        
    Returns:
        Index of target or -1 if not found
    """
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1

# Example usage
sorted_array = [1, 3, 5, 7, 9, 11, 13, 15]
result = binary_search(sorted_array, 7)  # Returns 3
```

### Linear Search

Simple search algorithm checking each element.

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

```python
def linear_search(arr: list, target: int) -> int:
    """
    Find target by checking each element sequentially.
    
    Args:
        arr: List to search
        target: Element to find
        
    Returns:
        Index of target or -1 if not found
    """
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Example usage
array = [64, 34, 25, 12, 22, 11, 90]
result = linear_search(array, 12)  # Returns 3
```

---

## Sorting Algorithms

### Merge Sort

Efficient, stable sorting algorithm using divide-and-conquer.

**Time Complexity:** O(n log n)  
**Space Complexity:** O(n)

```python
def merge_sort(arr: list) -> list:
    """
    Sort array using merge sort algorithm.
    
    Args:
        arr: List to sort
        
    Returns:
        Sorted list
    """
    if len(arr) <= 1:
        return arr
        
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]
    
    left = merge_sort(left)
    right = merge_sort(right)
    
    return merge(left, right)

def merge(left: list, right: list) -> list:
    """Helper function to merge two sorted arrays."""
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
            
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

# Example usage
array = [64, 34, 25, 12, 22, 11, 90]
sorted_array = merge_sort(array)  # Returns [11, 12, 22, 25, 34, 64, 90]
```

### Quick Sort

Fast sorting algorithm using partitioning.

**Time Complexity:** O(n log n) average, O(n²) worst  
**Space Complexity:** O(log n)

```python
def quick_sort(arr: list) -> list:
    """
    Sort array using quick sort algorithm.
    
    Args:
        arr: List to sort
        
    Returns:
        Sorted list
    """
    if len(arr) <= 1:
        return arr
        
    pivot = arr[-1]
    left = []
    right = []
    
    for x in arr[:-1]:
        if x <= pivot:
            left.append(x)
        else:
            right.append(x)
            
    return quick_sort(left) + [pivot] + quick_sort(right)

# Example usage
array = [64, 34, 25, 12, 22, 11, 90]
sorted_array = quick_sort(array)  # Returns [11, 12, 22, 25, 34, 64, 90]
```

### Bubble Sort

Simple sorting algorithm for educational purposes.

**Time Complexity:** O(n²)  
**Space Complexity:** O(1)

```python
def bubble_sort(arr: list) -> list:
    """
    Sort array using bubble sort algorithm.
    
    Args:
        arr: List to sort
        
    Returns:
        Sorted list
    """
    n = len(arr)
    
    for i in range(n):
        swapped = False
        
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
                
        if not swapped:
            break
            
    return arr

# Example usage
array = [64, 34, 25, 12, 22, 11, 90]
sorted_array = bubble_sort(array)  # Returns [11, 12, 22, 25, 34, 64, 90]
```

---

## Mathematical Algorithms

### Fibonacci Sequence

Two implementations of Fibonacci number calculation.

#### Recursive Implementation

**Time Complexity:** O(2ⁿ)  
**Space Complexity:** O(n)

```python
def fibonacci_recursive(n: int) -> int:
    """
    Calculate nth Fibonacci number recursively.
    
    Args:
        n: Index in Fibonacci sequence
        
    Returns:
        nth Fibonacci number
    """
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

# Example usage
result = fibonacci_recursive(10)  # Returns 55
```

#### Iterative Implementation

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

```python
def fibonacci_iterative(n: int) -> int:
    """
    Calculate nth Fibonacci number iteratively.
    
    Args:
        n: Index in Fibonacci sequence
        
    Returns:
        nth Fibonacci number
    """
    if n <= 1:
        return n
        
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
        
    return b

# Example usage
result = fibonacci_iterative(10)  # Returns 55
```

### Greatest Common Divisor

Calculate GCD using Euclidean algorithm.

**Time Complexity:** O(log min(a,b))  
**Space Complexity:** O(1)

```python
def gcd(a: int, b: int) -> int:
    """
    Calculate greatest common divisor using Euclidean algorithm.
    
    Args:
        a: First number
        b: Second number
        
    Returns:
        Greatest common divisor
    """
    while b:
        a, b = b, a % b
    return a

# Example usage
result = gcd(48, 18)  # Returns 6
```

### Prime Numbers

Check if a number is prime and generate prime numbers.

#### Prime Check

**Time Complexity:** O(√n)  
**Space Complexity:** O(1)

```python
def is_prime(n: int) -> bool:
    """
    Check if number is prime.
    
    Args:
        n: Number to check
        
    Returns:
        True if prime, False otherwise
    """
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

# Example usage
result = is_prime(17)  # Returns True
```

---

## Data Structure Operations

### Linked List

Basic singly linked list implementation.

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, val):
        if not self.head:
            self.head = ListNode(val)
            return
            
        current = self.head
        while current.next:
            current = current.next
        current.next = ListNode(val)
    
    def print_list(self):
        current = self.head
        while current:
            print(current.val, end=" -> ")
            current = current.next
        print("None")

# Example usage
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.print_list()  # Prints: 1 -> 2 -> 3 -> None
```

### Binary Tree

Basic binary tree implementation.

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_traversal(root: TreeNode) -> list:
    """Inorder traversal of binary tree."""
    result = []
    
    def inorder(node):
        if node:
            inorder(node.left)
            result.append(node.val)
            inorder(node.right)
    
    inorder(root)
    return result

# Example usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
result = inorder_traversal(root)  # Returns [2, 1, 3]
```

### Stack and Queue

Stack and queue implementations using Python lists.

```python
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
    
    def is_empty(self):
        return len(self.items) == 0
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]

class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
    
    def is_empty(self):
        return len(self.items) == 0
    
    def peek(self):
        if not self.is_empty():
            return self.items[0]

# Example usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.pop()  # Returns 2

queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.dequeue()  # Returns 1
```

---

## Best Practices

1. **Use Type Hints**
   - Makes code more readable and maintainable
   - Helps catch type-related errors early
   - Improves IDE support

2. **Write Clear Docstrings**
   - Include purpose of function
   - Document parameters and return values
   - Specify time and space complexity

3. **Handle Edge Cases**
   - Empty inputs
   - Invalid inputs
   - Boundary conditions

4. **Write Test Cases**
   - Test normal cases
   - Test edge cases
   - Test error conditions

---

## Algorithm Selection Guide

Choose the appropriate algorithm based on your needs:

1. **Searching**
   - Sorted array: Use Binary Search
   - Unsorted array: Use Linear Search

2. **Sorting**
   - Need stability: Use Merge Sort
   - Average case performance: Use Quick Sort
   - Memory constraints: Use Bubble Sort (small arrays only)

3. **Mathematical**
   - Fibonacci: Use Iterative for efficiency
   - Large numbers: Consider modulo arithmetic
   - Prime numbers: Use Sieve of Eratosthenes for ranges

---

## Further Resources

- [Python Algorithm Implementations](https://github.com/TheAlgorithms/Python)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

---

</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>