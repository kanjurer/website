---
publishDate: 2024-05-18T00:00:00Z
title: 'Dynamic Programming'
excerpt: Are you frustrated like me when you see a dynamic programming problem? This post will help you REALLY understand the concept of dynamic programming and how to solve problems using it.
image: https://afteracademy.com/images/idea-of-dynamic-programming-banner-6fd855e4c3e0896e.png
tags:
  - Leetcode
  - Dynamic Programming
metadata:
  canonical: https://astrowind.vercel.app/landing
---

# What is Dynamic Programming?

The CLRS books says:

> Dynamic programming typically applies to optimization problems in which you make a set of choices in order to arrive at an optimal solution, each choice generates subproblems of the same form as the original problem, and the same subproblems arise repeatedly. The key strategy is to store the solution to each such subproblem rather than recompute it.

But what does it actually mean? Let's break it down.

## Why is it called "Dynamic Programming"?

The "programming" in dynamic programming refers to the "tabular" method. A dynamic-programming algorithm solves each
subsubproblem just once and then saves its answer in a table, thereby avoiding the work of recomputing the answer every time it solves each subsubproblem.

There is nothing special about the name. There is a story about Richard Bellman, the inventor of DP, that he wanted to hide the fact that he was doing mathematics, so he called it "dynamic programming" instead of "mathematical programming".

## When to use Dynamic Programming?

Dynamic programming typically applies to optimization problems. Such problems can have many possible solutions. Each solution has a value, and you want to ûnd a solution with the optimal (minimum or maximum) value.

We call such a solution an <span style="color:pink">optimal</span> solution to the problem, as opposed to the optimal solution, since there may be several solutions that achieve the optimal value.
