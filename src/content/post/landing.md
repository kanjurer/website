---
publishDate: 2024-05-16T00:00:00Z
title: 'Python tricks for Leetcode'
excerpt: If you use python for competitive programming, you might find these tricks useful. I have compiled a list of python tricks that can help you solve LeetCode problems faster.
image: https://s3.amazonaws.com/thinkific/file_uploads/208015/images/f05/4fb/898/lc-py.jpg
tags:
  - Python
  - Leetcode
metadata:
  canonical: https://astrowind.vercel.app/landing
---

Here I have compiled a list of python tricks that can help you solve LeetCode problems faster. If you use python for competitive programming, you might find these tricks useful.

# Python

This is a collection of Python tips and tricks that I have found useful.

## Table of Contents

- Useful Functions
  - Enumerate
  - Divmod
  - Any and All
- Data Structures
  - Sets

## Useful Functions

### Enumerate

The `enumerate()` function is used to iterate over a list and keep track of the index of the current item. It returns a tuple containing the index and the item at that index.

```py
nums = ['apple', 'banana', 'cherry']

for i, num in enumerate(nums):
    print(i, num)

"""
Output:
0 apple
1 banana
2 cherry
"""
```

### Divmod

The `divmod()` function returns a tuple containing the quotient and the remainder when dividing two numbers.

```py
quotient, remainder = divmod(10, 3)
print(quotient, remainder)

"""
Output:
3 1
"""
```

### Any and All

The `any()` function returns `True` if any of the elements in the iterable are `True`, and `False` otherwise.
The `all()` function returns `True` if all of the elements in the iterable are `True`, and `False` otherwise.

```py
nums = [1, 2, 3, 4, 5]
all(nums) # True
any(nums) # True

nums = [0, 0, 0, 0, 0]
all(nums) # False
any(nums) # False

nums = [1, 0, 0, 0, 0]
all(nums) # False
any(nums) # True
```

## Strings

###

## Data Structures

### Sets

The `set()` function is used to create a set.

```py
# Create an empty set
empty_set = set()

# Create a set with elements
fruits = set(['apple', 'banana', 'cherry', 'apple'])
print(fruits)

"""
Output:
{'apple', 'banana', 'cherry'}
"""
```
