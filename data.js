let questions = [
  {
    state: false,
    name: "Find the nth node of linked list from last.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/nthToLastNode.cpp",
  },
  {
    state: false,
    name:
      "Add numbers where each digit of the number is represented by node of a linkedlist.  Give output as a linked list.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/add_two_numbers_lists.cpp",
  },
  {
    state: false,
    name: "Swap nodes of a linkedlist without swapping data.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/swapNodesWithoutSwappingData.cpp",
  },
  {
    state: false,
    name: "Reverse a linked list, iteratively and recursively",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/reverseLinkedListIterAndRecurse.cpp",
  },
  {
    state: false,
    name: "Given a linked list, reverse alternate nodes and append at the end.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/reverseAlternateNodes.cpp",
  },
  {
    state: false,
    name: "Only given a node pointer, delete the node from the linked list.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/deleteNode.cpp",
  },
  {
    state: false,
    name: "Delete the entire linkedlist.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/deleteLinkedlist.cpp",
  },
  {
    state: false,
    name: "Print middle node of linkedlist without iterating twice.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/printMiddleNode.cpp",
  },
  {
    state: false,
    name: "Determine if a linked list is a pallindrome.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/listPallindrome.cpp",
  },
  {
    state: false,
    name: "Insert data in a sorted linked list.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/insertInASortedLinkedList.cpp",
  },
  {
    state: false,
    name: "Determine the intersection(merging) point of two given linked list.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/findIntersectionPointOfLists.cpp",
  },
  {
    state: false,
    name:
      "Clone a linkedlist which has next and an random pointer, Space Complexity - O(1).",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/cloneListWithRandomPtr.cpp",
  },
  {
    state: false,
    name:
      "Given a sorted linked list with duplicates, remove duplicates in one iteration.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/removeDuplicatesFromSortedList.cpp",
  },
  {
    state: false,
    name:
      "Using Floyd's cycle finding algorithm, detect if a linkedlist contain cycle, if it does contain cycle, remove the loop",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/floyedCycleDetection.cpp",
  },
  {
    state: false,
    name: "Sort a linked list using merge sort",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/merge_sort.cpp",
  },
  {
    state: false,
    name:
      "Given a singly linked list L0 -> L1 -> … -> Ln-1 -> Ln. Rearrange the nodes in the list (in place) so that the new formed list is : L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 ....",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/linked_list_problems/rearrange_list.cpp",
  },
  {
    state: false,
    name: "Generic Macros and Algorithms like swap, random number generation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/generic.h",
  },
  {
    state: false,
    name: "Generic Stack Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/stack.h",
  },
  {
    state: false,
    name: "Generic Queue Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/queue.h",
  },
  {
    state: false,
    name: "Generic List Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/list.h",
  },
  {
    state: false,
    name: "Binary Search Tree Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/binarySearchTree.h",
  },
  {
    state: false,
    name: "Quick Sort Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/quickSort.h",
  },
  {
    state: false,
    name: "Merge Sort Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/mergeSort.h",
  },
  {
    state: false,
    name: "Selection Sort Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/selectionSort.h",
  },
  {
    state: false,
    name: "Bubble Sort Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/bubbleSort.h",
  },
  {
    state: false,
    name: "Linux Kernel Double LinkedList Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/double_linked_list.h",
  },
  {
    state: false,
    name: "Generic Graph Implementation (Adjacency List)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/graph.h",
  },
  {
    state: false,
    name: "Heap Sort Implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/heap_sort.h",
  },
  {
    state: false,
    name: "My own string library implementation",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/include/pstring.h",
  },
  {
    state: false,
    name: "Determine if a number is a power of 2.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/power_of_2.cpp",
  },
  {
    state: false,
    name: "Add two binary number represented as string.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/addBin.cpp",
  },
  {
    state: false,
    name: "Determine the next power of 2 for a given number.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/next_power_of_2.cpp",
  },
  {
    state: false,
    name: "Using bit manipulation determine if a number is multiple of 3.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/multiple_of_3.cpp",
  },
  {
    state: false,
    name:
      "Determine endianess of the machine, print a number in reverse Endianess.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/reverseEndianness.cpp",
  },
  {
    state: false,
    name: "Find the parity of given number.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/find_parity.cpp",
  },
  {
    state: false,
    name:
      "Implement fast multiplication of a number to 7 using bit manipulation.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/multiply_by_7.cpp",
  },
  {
    state: false,
    name:
      "Reverse bits of unsigned integer (two methods - Reversing bit by bit & divide and conquer).",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/reverseBitsOfAnInteger.cpp",
  },
  {
    state: false,
    name:
      "Small function to determine position of right most set bit in a given integer.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/right_most_set_bit.cpp",
  },
  {
    state: false,
    name:
      "Given a vector of numbers, only one number occurs odd number of times, find the number.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/find_odd_one_out.cpp",
  },
  {
    state: false,
    name:
      "Given two integers, determine if their sum would be interger overflow.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/integerOverflow.cpp",
  },
  {
    state: false,
    name: "How many bit flip operation would require to convert number A to B.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/countNumberOfBitFlips.cpp",
  },
  {
    state: false,
    name:
      "Given a number x and two positions (from right side) in binary representation of x, write a function that swaps n right bits at given two positions and returns the result. It is also given that the two sets of bits do not overlap.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/swapSetOfBits.cpp",
  },
  {
    state: false,
    name: "Add two numbers without using any arithmetic operators",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/addition_without_operators.cpp",
  },
  {
    state: false,
    name:
      "Louise and Richard play a game. They have a counter set to N. Louise gets the first turn and the turns alternate thereafter. In the game, they perform the following operations: If N is not a power of 2, reduce the counter by the largest power of 2 less than N.If N is a power of 2, reduce the counter by half of N. The resultant value is the new N which is again used for subsequent operations.The game ends when the counter reduces to 1, i.e., N == 1, and the last person to make a valid move wins.  Given N, your task is to find the winner of the game. If they set counter to 1, Richard wins, because its Louise' turn and she cannot make a move.Input Format : -The first line contains an integer T, the number of testcases. T lines follow. Each line contains N, the initial number set in the counter.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/counter_game.cpp",
  },
  {
    state: false,
    name: "Determine if two integers are of opposite signs.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/check_opposite_signs.cpp",
  },
  {
    state: false,
    name: "Swap two bits at position p and q of a given integer.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/swapBits.cpp",
  },
  {
    state: false,
    name: "Check if a number is power of 4.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/bit_manipulation/check_if_power_of_4.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-1 : Edition 6: Write an algorithm to determine whether a string has unique characters or not. Can we do it without using additional data structures?",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-1-hasUniqueChars.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-2 : Edition 5: Reverse a string when you are a pass a null terminated C string.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-2-edi5-reverseString.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-2 : Edition 6: Given two strings, determine if one is permutation of other.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-2-perm-strings.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-3 : Edition 5: Write an algorithm to remove duplicate chars from a string.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-3-edi5-removeDuplicates.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-3 : Edition 6: URLify: Replace all the spaces in a string with '%20'. Preferebly Inplace",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-3-URLify.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-4 : Edition 6: Given a string, write a function to check if it is a permutation of a pallindrome.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-4-pallindrome-permutations.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-5 : Edition 6: There are three possible edits that can be performed on a string - Insert a char, Delete a char, Replace a char. Given two strings, determine if they are one or 0 edit away.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-5-one-edit-away.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-6: Implement a method to perform basic string compression. Example string aabcccccaaa should be compressed to a2b1c5a3, however if compressed string is bigger than original string, return original string",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-6-string-compression.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-7: Rotate the matrix clockwise( & anticlockwise) by 90 degrees",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-7-matrix-rotation.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-8: Write an algorithm such that if an element of MxN matrix is 0, its entire row and column is set to 0.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-8-zero-matrix.cpp",
  },
  {
    state: false,
    name:
      "Problem 1-9: Given two strings s1 and s2, determine s2 is rotation of s1 using only one call to a function which checks whether one string is rotation of another.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/1-9-string-rotation.cpp",
  },
  {
    state: false,
    name:
      "Problem 2-1: Remove duplicates from an unsorted linked list. What if no temporary buffer is allowed.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/2-1-remove-dups.cpp",
  },
  {
    state: false,
    name:
      "Problem 2-2: Determine kth node from the last of a singly linked list. (Iterative and Recursive Approaches)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/2-2-kthToLast.cpp",
  },
  {
    state: false,
    name:
      "Problem 2-3: Implement an algorithm to delete a node in the middle of a singly linked list",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/2-3-delete-middle-node.cpp",
  },
  {
    state: false,
    name:
      "Problem 2-4: Partition a linked list around a value x, all the nodes smaller than x come before all the nodes greater than equal to x",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/2-4-partition.cpp",
  },
  {
    state: false,
    name:
      "Problem 2-5: You have two numberse represented by a linked list where each node contains a single digit. The digits are stored in reversed order, such that 1's digits are at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.Example:Input: ( 7 --> 1 --> 6 ) + ( 5 --> 9 --> 2 ) that is 617 + 295Output: ( 2 --> 1 --> 9 ) i.e. 912. FOLLOW UP : Suppose the lists are stored in forward order, Repeat the above problem.Input: ( 6 --> 1 --> 7 ) + ( 2 --> 9 --> 5 ) i.e. 617 + 295 Output: ( 9 --> 1 --> 2 ) i.e. 912.Implement it  recursively and iteratively.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/2-5-add-lists.cpp",
  },
  {
    state: false,
    name:
      "Problem 2-6: Determine if linked list is palindrome( 2 iterative and one recursive approach",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/2-6-palindrome.cpp",
  },
  {
    state: false,
    name:
      "Problem 2-7: Determine if two singly linked list intersect, if yes, return the intersecting node. The intersection is defined based on reference not on values",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/2-7-intersection.cpp",
  },
  {
    state: false,
    name:
      "Problem 2-8: Detect if the linked list have a loop, Find the start node of the loop and remove the loop",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/cracking_the_coding_interview_problems/2-8-loop-detection.cpp",
  },
  {
    state: false,
    name: "Nth Fibonacci term using different memoization techniques",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/dynamic_programming_problems/fibonacci.cpp",
  },
  {
    state: false,
    name: "Longest Common Subsequence Problem",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/dynamic_programming_problems/lcs.cpp",
  },
  {
    state: false,
    name: "Maximum Value Contigous Subsequence Problem wiki",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/dynamic_programming_problems/max_subsequence.cpp",
  },
  {
    state: false,
    name:
      "Catalan number - Count the number of possible Binary Search Trees with n keys",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/dynamic_programming_problems/catalan_number.cpp",
  },
  {
    state: false,
    name:
      "Calculate the number of unique paths from source origin (0, 0) to  destination (m-1, n-1) in a m x n grid. You can only move either in down or right direction.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/dynamic_programming_problems/unique_paths.cpp",
  },
  {
    state: false,
    name:
      "0-1 Knapsack Problem: Imagine you are a thief and you want to steal things with room full of things. You have a knapsack which can handle maximum capacity of weight W, and you want to fill it up such that it's worth is maximum. Being an intelligent thief, you know weights and values of each item in room. How would you fill your knapsack, such that you get the maximum possible value, such that you can only fill upto capacity W.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/dynamic_programming_problems/0_1_knapsack_problem.cpp",
  },
  {
    state: false,
    name: "Iterative Level order traversal of Tree using queue",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/levelOrderTraversalIterative.cpp",
  },
  {
    state: false,
    name: "Recursive Level order traveral of Tree",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/levelOrderTraversalRecursive.cpp",
  },
  {
    state: false,
    name: "ZigZag Traversal of Tree",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/zigZagTraversal.cpp",
  },
  {
    state: false,
    name: "Predecessor and Successor of a given node in Binary Search Tree",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/predecessorSuccessor.cpp",
  },
  {
    state: false,
    name:
      "Given values of two nodes in a Binary Search Tree, find the Lowest Common Ancestor (LCA). Assume that both the values exist in the tree.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/lowest-common-ancestor.cpp",
  },
  {
    state: false,
    name:
      "Given a binary tree (unlike binary search tree), find the Lowest Common Ancestor (LCA).",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/lowest-common-ancestor-binary-tree.cpp",
  },
  {
    state: false,
    name:
      "Given a binary tree, print out all of its root-to-leaf paths one per line.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/printAllRootToLeafPath.cpp",
  },
  {
    state: false,
    name:
      "Determine if a tree is sum tree. A SumTree is a Binary Tree where the value of a node is equal to sum of the nodes present in its left subtree and right subtree. An empty tree is SumTree and sum of an empty tree can be considered as 0. A leaf node is also considered as SumTree.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/sumTree.cpp",
  },
  {
    state: false,
    name:
      "Convert a tree to sumTree, such that each node is sum of left and right subtree of the original tree.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/convert_to_sum_tree.cpp",
  },
  {
    state: false,
    name: "Convert a sorted array to balanced binary search tree.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/sortedArrayToBST.cpp",
  },
  {
    state: false,
    name: "Given a binary tree, generate sum of each vertical column.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/verticalSum.cpp",
  },
  {
    state: false,
    name:
      "Given a binary tree and key, node with key exists in tree. Find all the ancestors of the node with key, ancestor here are the nodes which are in straight path from node to root.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/node_ancestors_in_root_path.cpp",
  },
  {
    state: false,
    name:
      "Given a binary tree and key, return the level of the node with key. Root is at level 1, and if node with key does not exists in tree, return 0",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/level_of_node.cpp",
  },
  {
    state: false,
    name:
      "Given a binary tree, find all the paths from root to nodes, whose sum is k.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/k_sum_paths.cpp",
  },
  {
    state: false,
    name:
      "Given a binary tree, print its nodes level by level in reverse order. i.e. all nodes present at last level should be printed first followed by nodes of second-last level and so on.. All nodes for any level should be printed from left to right.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/reverseLevelOrderTraversal.cpp",
  },
  {
    state: false,
    name: "Invert a binary tree, recursively and iteratively.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/invert_a_tree.cpp",
  },
  {
    state: false,
    name:
      "Given a Binary Search Tree, find ceil and floor of a given key in it. If the given key lie in the BST, then both floor and ceil is equal to that key, else ceil is equal to next greater key (if any) in the BST and floor is equal to previous greater key (if any) in the BST",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/floor_ceil_bst.cpp",
  },
  {
    state: false,
    name: "Find kth smallest element in a binary search tree",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/kth_smallest.cpp",
  },
  {
    state: false,
    name: "Validate if a given binary tree is a binary search tree.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/validate_bst.cpp",
  },
  {
    state: false,
    name:
      "Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/find_target_k.cpp",
  },
  {
    state: false,
    name:
      "Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target. Also, to note that the target value is a floating point. There will be only one unique value which is closest to the target.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/closest_bst_value.cpp",
  },
  {
    state: false,
    name:
      'Given a binary tree, traversing preorder, construct a string output containing node values and parenthesis. The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don\'t affect the one-to-one mapping relationship between the string and the original binary tree. Examples in code file',
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/tree_problems/string_from_tree.cpp",
  },
  {
    state: false,
    name: "Implementation of Robin-Karp algorithm for string search",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/string_problmes/robinKarpStringMatching.cpp",
  },
  {
    state: false,
    name:
      "Find next permutation of a given string, ie. rearrange the given string sucht a way that is next lexicographically greater string than given string",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/string_problems/next_permutation.cpp",
  },
  {
    state: false,
    name: "Implementation of Z algorithm for pattern matching",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/string_problems/z.cpp",
  },
  {
    state: false,
    name: "Test cases for self created string library",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/string_problems/pstring_test.cpp",
  },
  {
    state: false,
    name: "Get the length of the last word in a string.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/string_problems/length_of_last_word.cpp",
  },
  {
    state: false,
    name:
      "Find the difference between two string. String t is generated by random shuffling string s and then add one more letter at a random position. Determine the character which is different in t",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/string_problems/find_difference.cpp",
  },
  {
    state: false,
    name: "Print the contents of matrix in a spiral order",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/matrix_spiral_print.cpp",
  },
  {
    state: false,
    name:
      "Given a M x N matrix, rotate it by R rotations anticlockwise, and show the resulting matrix.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/rotate_matrix.cpp",
  },
  {
    state: false,
    name: "Rotate an array by r elements ( left or right )",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/array_rotation.cpp",
  },
  {
    state: false,
    name:
      "Given an array of repeating/non-repeating intergeres, determine the first non-repeating int in this array",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/first_non_repeating_int.cpp",
  },
  {
    state: false,
    name:
      "In Quantumland, there are n cities numbered from 1 to n. Here, ci denotes the ith city. There are n−1 roads in Quantumland. Here, ci and ci+1 have a bidirectional road between them for each i < n.There is a rumor that Flatland is going to attack Quantumland, and the queen wants to keep her land safe. The road between ci and ci+1 is safe if there is a guard in ci or ci+1. The queen has already placed a few guards in some of the cities, but she is not sure if they are enough to keep the roads safe. She wants to know the minimum number of new guards she needs to hire. See comments in solution for input/output details.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/save_quantumland.cpp",
  },
  {
    state: false,
    name:
      "You are given an integer N. Find the digits in this number that exactly divide N (division that leaves 0 as remainder) and display their count. For N=24, there are 2 digits (2 & 4). Both of these digits exactly divide 24. So our answer is 2. See more details in header comment of the solution file.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/findDigits.cpp",
  },
  {
    state: false,
    name: "Encrypt and then decrypts a text using Caeser Cipher.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/caeser_cipher.cpp",
  },
  {
    state: false,
    name: "Encrypt and then decrypts a text using Vigenère cipher.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/vigenere_cipher.cpp",
  },
  {
    state: false,
    name: "Generate binary numbers between 1 to N efficiently.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/n_binary.cpp",
  },
  {
    state: false,
    name: "Implement power function",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/common_ds_algo_problems/power_function.cpp",
  },
  {
    state: false,
    name:
      "Print all the permutations of a string. Example: Permutations of ABC are ABC, ACB, BCA, BAC, CAB, CBA",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/math_problems/string_permutations.cpp",
  },
  {
    state: false,
    name:
      "Euclidean algorithm to find greatest common divisor of two numbers. (Iterative and recursive)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/math_problems/gcd.cpp",
  },
  {
    state: false,
    name:
      "Implement pow(x,y) using divide and conquer approach. Try implementing it in O(logn)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/math_problems/pow.cpp",
  },
  {
    state: false,
    name:
      "Calculate factorial of large number, say 100 (it will have 158 digits)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/math_problems/factorial_of_large_num.cpp",
  },
  {
    state: false,
    name:
      "Generate all possible words from a number entered on a traditional mobile keypad",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/math_problems/phone_digits.cpp",
  },
  {
    state: false,
    name:
      "Given a string representation of a number, remove n characters from the string such that number representation is lowest possible.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/math_problems/lowest_possible_number.cpp",
  },
  {
    state: false,
    name:
      "Detect if a number is a happy number. A number is happy number if sequence of operations where number is replaced by sum of square of its digits leads eventually to 1. A number is not a happy number if we are in an infinite loop when above operations are performed.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/math_problems/happy_number.cpp",
  },
  {
    state: false,
    name:
      "We have series of n daily price quotes for a stock. We need to calculate span of stock's price for all n days. Span for ith day is defined as maximum number of consecutive days, for which the price of the stock was less than or equal to ith day. For stock quotes {100, 60, 70, 65, 80, 85} span will be {1, 1, 2, 1, 4, 5}. Span for day 1 is always 1, now for day 2 stock is at 60, and there is no day befor it when stock was less than 60. So span remains 1. For day 3, the stock is priced at 70, so its span is 2, as previous day it was 60, and so on.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/stack_problems/stock_span_problem.cpp",
  },
  {
    state: false,
    name:
      "Given an infix expression, convert it to postfix expression, Example (A+B)*C --> AB+C*",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/stack_problems/infix_to_postfix.cpp",
  },
  {
    state: false,
    name:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.The brackets must close in the correct order, \"()\" and \"()[]{}\" are all valid but \"(]\" and \"([)]\" are not.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/stack_problems/valid_parenthesis.cpp",
  },
  {
    state: false,
    name:
      "Given a sorted vector, return first index of the occurrence of a value in vector, if number does not exist, return -1",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/first_occurrence_binary_search.cpp",
  },
  {
    state: false,
    name:
      "Find the first repeating element in an array of integers. Given an array of integers, find the first repeating element in it. We need to find the element that occurs more than once and whose index of first occurrence is smallest.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/firstRepeatingElement.cpp",
  },
  {
    state: false,
    name:
      "Given a list of unsorted integers, A={a1,a2,…,aN}, Find the pair of elements that have the smallest absolute difference between them? If there are multiple pairs, find them all.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/closest_numbers.cpp",
  },
  {
    state: false,
    name:
      "Given a sorted array, determine index of fixed point in this array. If array does not have a fixed point return -1. An array has a fixed point when index of the element is same as index i.e. i == arr[i], Expected time complexity O(logn)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/fixedPoint.cpp",
  },
  {
    state: false,
    name:
      "Find the maximum element in an array which is first increasing and then decreasing. Input: arr[] = {8, 10, 20, 80, 100, 200, 400, 500, 3, 2, 1}, output : 500. Array may be strictly increasing or decreasing as well. ExpectedTime complexity is O(logn).",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/findMaximum.cpp",
  },
  {
    state: false,
    name:
      "Given an array of positive and/or negative integers, find a pair in the array whose sum is closest to 0.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/findClosestPairToZero.cpp",
  },
  {
    state: false,
    name:
      "Numeros, the Artist, had two lists A and B, such that B was a permutation of A. Numeros was very proud of these lists. Unfortunately, while transporting them from one exhibition to another, some numbers were left out of A. Can you find the missing numbers? Notes: If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.You have to print all the missing numbers in ascending order.Print each missing number once, even if it is missing multiple times.The difference between maximum and minimum number in B is less than or equal to 100..  There will be four lines of input: n - the size of the first list, This is followed by n space-separated integers that make up the first list. m - the size of the second list. This is followed by m space-separated integers that make up the second list. Output the missing numbers in ascending order.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/missingNumbers.cpp",
  },
  {
    state: false,
    name:
      "Find the closest pair from two sorted arrays. Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array. We are given two arrays ar1[0…m-1] and ar2[0..n-1] and a number x, we need to find the pair ar1[i] + ar2[j] such that absolute value of (ar1[i] + ar2[j] – x) is minimum.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/closestPairSorted.cpp",
  },
  {
    state: false,
    name:
      "Given an array A of n elements, find three indices i, j and k such that A[i]^2 + A[j]^2 = A[K]^2. O(n2) time complexity and O(1) space complexity",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/squareSum.cpp",
  },
  {
    state: false,
    name:
      "Given an unsorted array arr[0..n-1] of size n, find the minimum length subarray arr[s..e] such that sorting this subarray makes the whole array sorted.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/minLengthUnsortedArray.cpp",
  },
  {
    state: false,
    name: "Find the missing number in Arithmetic Progression",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/missingNumber2.cpp",
  },
  {
    state: false,
    name: "Find the common elements in 3 sorted vectors",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/commonIn3Arrays.cpp",
  },
  {
    state: false,
    name: "Find all the pairs with a given sum in an unsorted array/vector",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/find_pairs_with_sum.cpp",
  },
  {
    state: false,
    name:
      "Given an array, find peak element in it. A peak element is an element that is greater than its neighbors.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/peak_element.cpp",
  },
  {
    state: false,
    name:
      "Given a sorted array of distinct non-negative integers, find smallest missing element in it.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/smallest_missing.cpp",
  },
  {
    state: false,
    name: "Move all zeros in the vector to the end",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/move_zeros.cpp",
  },
  {
    state: false,
    name: "Depth First Traversal of a Graph",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/graph_problems/dfsDemo.cpp",
  },
  {
    state: false,
    name: "Breadth First Traversal of a Graph",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/graph_problems/bfsDemo.cpp",
  },
  {
    state: false,
    name:
      "calculate the shortest distance from the start position (Node S) to all of the other nodes in the graph using Dijkstra algorithm.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/graph_problems/dijkstra-shortest-reach.cpp",
  },
  {
    state: false,
    name:
      "Calculate total weight of Minimum Spanning Tree of a given graph ( sum of weights of edges which forms MST) using Prim's algorithm",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/graph_problems/primsMST.cpp",
  },
  {
    state: false,
    name:
      "Print Minimum Spanning Tree( MST ) of a given graph using Kruskal's algorithm.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/graph_problems/kruskalMST.cpp",
  },
  {
    state: false,
    name:
      "Create a program to generate a Huffman encoding for each character as a table.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/greedy_problems/huffman_encoding.cpp",
  },
  {
    state: false,
    name:
      "Search a given word in a 2D board containing letters. The word can be constructed by sequentially traversing adjacent horizontal or vertical cells. In a sequence to form word, letter on same position can not be used more than once. (Check top of file for examples.)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/graph_problems/grid_word_search.cpp",
  },
  {
    state: false,
    name:
      "Given a 2D screen, location of the pixel and new value of the color to fill, replace the color of the pixel and all the adjacent(up, below, left, right) same colored pixel with new color. This is same as flood fill (remember the bucket symbol) a region in MS-PAINT.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/graph_problems/flood_fill.cpp",
  },
  {
    state: false,
    name:
      "Given two integer arrays, A and B, each containing N integers. You are free to permute the order of the elements in the arrays. Is there an permutation A', B' possible of A and B, such that, A'i+B'i ≥ K for all i, where A'i denotes the ith element in the array A' and B'i denotes ith element in the array B'.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/greedy_problems/two_arrays.cpp",
  },
  {
    state: false,
    name:
      "John is taking orders. The ith order is placed by the ith customer at ti time and it takes di time to procees. What is the order in which the customers will get their orders? (see more details in solutions's comments)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/greedy_problems/orders_order.cpp",
  },
  {
    state: false,
    name:
      'You are given a digit string (e.g "1234", "567" etc), provide all possible letter combinations we could generate from this digit string, based on the mapping we see on the telphone/mobile dialpad. If you have typed SMS in old style phones, you would know. For e.g. "1" is mapped to "abc", 2 is mapped to "def". You can refer to the image..  Example: "34" will give output: {"dg","dh","di","eg","eh","ei","fg","fh","fi"}  Note that order does not matter in result set.',
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/backtracking_problems/dialpad_combinations.cpp",
  },
  {
    state: false,
    name:
      "Implement wildcard pattern maching with support for '?' & ''. '?' Matches any single character.'' Matches any sequence of character.. Checkout examples in file for more details.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/backtracking_problems/wild_card_matching.cpp",
  },
  {
    state: false,
    name:
      "Given a 2D board and list of words from a dictionary, find all the possible words on board fromt the list. (Check example in the solution)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/backtracking_problems/word_search.cpp",
  },
  {
    state: false,
    name:
      'Given a sorted integer array without duplicates, return the summary of its ranges. For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].',
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/summary_ranges.cpp",
  },
  {
    state: false,
    name:
      "Given a 2D matrix, with following properties Integers in each row are sorted in ascending from left to right.Integers in each column are sorted in ascending from top to bottom.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/search2DII.cpp",
  },
  {
    state: false,
    name:
      "Given an unsorted integer array, find the first missing positive integer.Example: [1,2,0] should return 3 and [3,4,-1,1] should return 2. Expected time complexity O(n) and solution should use constant space",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/firstMissingPositiveNum.cpp",
  },
  {
    state: false,
    name:
      "Given an unsorted array of integers, find the length of the longest consecutive elements sequence. For example: Given [100, 4, 200, 1, 3, 2]. The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4. Algorithm should run in O(n) complexity.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/longestConsecutiveSeq.cpp",
  },
  {
    state: false,
    name:
      "Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/mergeArrays.cpp",
  },
  {
    state: false,
    name:
      "Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index. For example: A = [2,3,1,1,4], return true.A = [3,2,1,0,4], return false.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/jumpGame.cpp",
  },
  {
    state: false,
    name:
      "Given a positive integer, return its corresponding column title as appear in an Excel sheet. For example 1 -> A, 2 -> B,...26 -> Z, 27 -> AA, 28 -> AB, ...705 -> AAC",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/excelColSheetTitle.cpp",
  },
  {
    state: false,
    name:
      "Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements. For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/moveZeroes.cpp",
  },
  {
    state: false,
    name:
      "Given an array of integers, find if the array contains any duplicates. Function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/containsDuplicate.cpp",
  },
  {
    state: false,
    name:
      "Given a list, rotate the list to the right by k places, where k is non-negative. For example: Given 1->2->3->4->5->NULL and k = 2, return 4->5->1->2->3->NULL",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/rotateList.cpp",
  },
  {
    state: false,
    name:
      "Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.). You have the following 3 operations permitted on a word:Insert a characterDelete a character.Replace a character.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/editDistance.cpp",
  },
  {
    state: false,
    name:
      "Given a binary tree, Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL.You may only use constant extra space.You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/connectNextPointers.cpp",
  },
  {
    state: false,
    name:
      'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. For example, given n = 3, a solution set is "((()))", "(()())", "(())()", "()(())", "()()()"',
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/generate_parenthesis.cpp",
  },
  {
    state: false,
    name:
      "Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.For example, Given nums = [0, 1, 3] return 2.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/missing_number.cpp",
  },
  {
    state: false,
    name:
      "Suppose a sorted array is rotated at some pivot unknown to you beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2). Find the minimum element. You may assume no duplicate exists in the array.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/find_min_rotated.cpp",
  },
  {
    state: false,
    name:
      "Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/threeSumClosest.cpp",
  },
  {
    state: false,
    name:
      "Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water. Note: You may not slant the container.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/maxArea.cpp",
  },
  {
    state: false,
    name:
      "Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number. An example is the root-to-leaf path 1->2->3 which represents the number 123. Find the total sum of all root-to-leaf numbers. Example in solution comments",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/sumRootToLeafNumbers.cpp",
  },
  {
    state: false,
    name:
      "Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/maxProfitStock.cpp",
  },
  {
    state: false,
    name:
      "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path. Note: You can only move either down or right at any point in time.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/minPath.cpp",
  },
  {
    state: false,
    name:
      "Count the number of prime numbers less than a non-negative number, n.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/countPrimes.cpp",
  },
  {
    state: false,
    name:
      "Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers. Ensure that numbers within the set are sorted in ascending order. Example : for k = 3, n = 9 result would be [[1,2,6], [1,3,5], [2,3,4]], similarly for k = 3, n = 7, result would be [[1,2,4]].",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/combinationSum3.cpp",
  },
  {
    state: false,
    name:
      "Given a non-negative integer num, repeatedly add all its digits until the result has only one digit. For example: Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it. Follow up: Could you do it without any loop/recursion in O(1) runtime?",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/addDigits.cpp",
  },
  {
    state: false,
    name:
      "Given a matrix with cell values 0 or 1. Find the length of the shortest path from (a1, b1) to (a2, b2), such that path can only be constructed through cells which have value 1 and you can only travel in 4 possible directions, i.e. left, right, up and down.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/shortest_path_maze.cpp",
  },
  {
    state: false,
    name:
      "The Hamming distance between two integers is the number of positions at which the corresponding bits are different. Given two integers x and y, calculate the Hamming distance.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/hamming_distance.cpp",
  },
  {
    state: false,
    name:
      "Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/merge_trees.cpp",
  },
  {
    state: false,
    name:
      "Write a function that takes a string as input and reverse only the vowels of a string.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/reverse_vowels.cpp",
  },
  {
    state: false,
    name:
      "Given a string, sort it in decreasing order based on the frequency of characters.For example: Input: cccbbbbaa Output: bbbcccaa",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/sortCharByFrequency.cpp",
  },
  {
    state: false,
    name:
      "Product of Array Except Self. Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/product_except_self.cpp",
  },
  {
    state: false,
    name:
      "Given a sorted array, remove duplicates in place and return the new length. It doesn't matter what is in array beyond the unique elements size. Expected O(1) space and O(n) time complexity.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/remove_duplicates.cpp",
  },
  {
    state: false,
    name:
      "Count the number of islands in a grid. Given a grid representing 1 as land body, and 0 as water body, determine the number of islands (more details in problem comments)",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/count_islands.cpp",
  },
  {
    state: false,
    name:
      "Find median from a data stream. Design a data structure that supports addNum to add a number to the stream, and findMedian to return the median of the current numbers seen so far. Also, if the count of numbers is even, return average of two middle elements, return median otherwise.",
    link:
      "https://github.com/mandliya/algorithms_and_data_structures/blob/master/leet_code_problems/median_stream.cpp",
  },
];

let algorithms = [
  {
    state: false,
    name: "Knuth-Morris-Pratt Algorithm cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/KMP.cpp",
  },
  {
    state: false,
    name: "Depth First Search w/o stack cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/DFS.cpp",
  },
  {
    state: false,
    name: "Depth First Search with stack cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/DFSS.cpp",
  },
  {
    state: false,
    name: "Breadth First Search cpp python java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/BFS.cpp",
  },
  {
    state: false,
    name: "Suffix Arrays cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/SuffixArray.cpp",
  },
  {
    state: false,
    name: "Segment Trees cpp python java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/SegmentTrees.cpp",
  },
  {
    state: false,
    name: "Segment Trees with Lazy Propogation cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/SegmentTreesLazy.cpp",
  },
  {
    state: false,
    name: "Segment Trees with Max Prefix/Suffix Sum and Max Subvector Sum cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/SEGTREE.cpp",
  },
  {
    state: false,
    name: "Euler Totient Function cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/EulerTotient.cpp",
  },
  {
    state: false,
    name: "Dijkstra's Algorithm cpp python java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Djikstras.cpp",
  },
  {
    state: false,
    name:
      "Fast Modulo Multiplication / Binary Exponention cpp python java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Fmm.cpp",
  },
  {
    state: false,
    name: "Dijkstra's Algorithm cpp python java",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Djikstras.cpp",
  },
  {
    state: false,
    name: "Fast Modulo Multiplication / Binary Exponention cpp python java",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Fmm.cpp",
  },
  {
    state: false,
    name: "Meet in Middle cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Mim.cpp",
  },
  {
    state: false,
    name: "Binary Search cpp python java kotlin coffee f# chapel",
    link: "https://github.com/saru95/DSA/blob/master/CPP/BinarySearch.cpp",
  },
  {
    state: false,
    name: "Matrix Exponention for Fibonacci Series cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Me.cpp",
  },
  {
    state: false,
    name: "Modular Multipicative Inverse using Fermat's Theorem cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Mmi.cpp",
  },
  {
    state: false,
    name: "Tries cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Tries.cpp",
  },
  {
    state: false,
    name: "Bellman-Ford Algorithm cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/BellmanFord.cpp",
  },
  {
    state: false,
    name: "Rabin-Karp Algorithm cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/RabinKarp.cpp",
  },
  {
    state: false,
    name: "Sieve of Eratosthenes cpp python java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/SEPrime.cpp",
  },
  {
    state: false,
    name: "Maximum Bipartite Matching cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/MBM.cpp",
  },
  {
    state: false,
    name: "Floyd-Warshall Algorithm cpp python java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/FWA.cpp",
  },
  {
    state: false,
    name: "Pollard Rho Integer Factorization cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/PRB.cpp",
  },
  {
    state: false,
    name: "Binary Indexed Trees / BIT cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/BIT.cpp",
  },
  {
    state: false,
    name: "Square Root Decomposition cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/SRD.cpp",
  },
  {
    state: false,
    name:
      "Ford-Fulkerson Algorithm for Maximum Flow (BFS)/ Edmonds Karp Algorithm cpp java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/FFA.cpp",
  },
  {
    state: false,
    name: "Miller Rabin Primality Test cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/MRPT.cpp",
  },
  {
    state: false,
    name: "Fibonacci Numbers using fast doubling cpp python java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/fastdoublingfibo.cpp",
  },
  {
    state: false,
    name: "Generating Non-Fibonacci Numbers cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/NonFibo.cpp",
  },
  {
    state: false,
    name: "Segmented Sieve Method of Erastothenes cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/SS.cpp",
  },
  {
    state: false,
    name: "Quick Sort cpp python java kotlin c",
    link: "https://github.com/saru95/DSA/blob/master/CPP/quicksort.cpp",
  },
  {
    state: false,
    name: "Heap Sort cpp python java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/HeapSort.cpp",
  },
  {
    state: false,
    name: "ConvexHull(GrahamScan) cpp",
    link:
      "https://github.com/saru95/DSA/blob/master/CPP/ConvexHull(graham).cpp",
  },
  {
    state: false,
    name: "Mergesort cpp python java kotlin scala",
    link: "https://github.com/saru95/DSA/blob/master/CPP/MergeSort.cpp",
  },
  {
    state: false,
    name: "Closest Pair Of Points cpp",
    link:
      "https://github.com/saru95/DSA/blob/master/CPP/closestpairofpoints.cpp",
  },
  {
    state: false,
    name: "Radix Sort cpp python java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/radixsort.cpp",
  },
  {
    state: false,
    name: "Kruskal Algorithm cpp java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Kruskal.cpp",
  },
  {
    state: false,
    name: "Bubble Sort cpp python java kotlin scala",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Bubblesort.cpp",
  },
  {
    state: false,
    name: "Stacks - Array implementation cpp - Linked List Implementation cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Stacks-ArrayImp.cpp",
  },
  {
    state: false,
    name: "Queue cpp c java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Queue.cpp",
  },
  {
    state: false,
    name: "Expression Tree cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/expressionTree.cpp",
  },
  {
    state: false,
    name: "Min Heap as array cpp java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/min_heap.cpp",
  },
  {
    state: false,
    name: "Max Heap as array cpp java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/max_heap.cpp",
  },
  {
    state: false,
    name: "Miller Rabin Primality Test cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/primality.cpp",
  },
  {
    state: false,
    name: "Sieve of eratosthenes cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/sieve.cpp",
  },
  {
    state: false,
    name: "Sieve implemented with BIT cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/BIt-Sieve.cpp",
  },
  {
    state: false,
    name: "Z algorithm (Linear time pattern searching Algorithm) cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/z-algorithm.cpp",
  },
  {
    state: false,
    name: "Karatsuba algorithm (for fast multiplication) cpp python",
    link:
      "https://github.com/saru95/DSA/blob/master/CPP/Karatsuba_algorithm.cpp",
  },
  {
    state: false,
    name: "Counting sort cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Counting_Sort.cpp",
  },
  {
    state: false,
    name: "Modular Multiplicative Inverse cpp",
    link:
      "https://github.com/saru95/DSA/blob/master/CPP/ModularMultiplicativeInverse.cpp",
  },
  {
    state: false,
    name: "Counting sort cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/Counting_Sort.cpp",
  },
  {
    state: false,
    name: "CircularBuffer cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/CircularBuffer.cpp",
  },
  {
    state: false,
    name: "ConvexHull(MonotoneChain) cpp",
    link:
      "https://github.com/saru95/DSA/blob/master/CPP/ConvexHull_MonotoneChain.cpp",
  },
  {
    state: false,
    name: "Topological Sort cpp python",
    link: "https://github.com/saru95/DSA/blob/master/CPP/topological_sort.cpp",
  },
  {
    state: false,
    name: "Closest Pair Algorithm cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/closestPair.cpp",
  },
  {
    state: false,
    name: "Bucket Sort Algorithm cpp  java kotlin",
    link: "https://github.com/saru95/DSA/blob/master/CPP/bucketSort.cpp",
  },
  {
    state: false,
    name: "K-Dimensional Tree cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/kdimensionalTree.cpp",
  },
  {
    state: false,
    name: "Disjoint set Union cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/DSU.cpp",
  },
  {
    state: false,
    name: "Inorder Binary Tree Traversal recursive cpp",
    link:
      "https://github.com/saru95/DSA/blob/master/CPP/Inorder_Recursive.cpp.cpp",
  },
  {
    state: false,
    name: "Inorder Binary Tree Traversal iterative using Stack cpp",
    link:
      "https://github.com/saru95/DSA/blob/master/CPP/Inorder_Iterative_Stack.cpp",
  },
  {
    state: false,
    name: "Inorder Morris Traversal cpp",
    link:
      "https://github.com/saru95/DSA/blob/master/CPP/Inorder_Iterative_Morris.cpp",
  },
  {
    state: false,
    name: "Ternary Search cpp",
    link: "https://github.com/saru95/DSA/blob/master/CPP/TernarySearch.cpp",
  },
];

module.exports = {
  questions,
  algorithms,
};
