require_relative 'linked_list'

#  *** Implement an algorithm to find kth_to_last element of a singly linked list

# simple and obvious solution, O(n) = n and O(1) space
# def kth_to_last(list, k)
#     return nil unless list
#     return list.head.value if list.count_nodes == k

#     current = list.head
#     index = list.count_nodes - k
#     looked = 0

#     until current.nil?
#         return current.value if looked == index
#         looked += 1
#         current = current.next
#     end
# end

# # 2 pointers approach. O(n) time and 0(1) space.
# def kth_to_last(node, k)
#     return nil if node.value == nil

#     fast_cursor = node
#     slow_cursor = node

#     k.times { fast_cursor = fast_cursor.next }

#     until fast_cursor.nil?
#         fast_cursor = fast_cursor.next
#         slow_cursor = slow_cursor.next
#     end

#     slow_cursor.value
# end

# recursive approach

def kth_to_last(node, k)
    return 0 if node == nil
    p node.next
    index = kth_to_last(node.next, k) + 1;
    
    index == k ? node.value : nil
end