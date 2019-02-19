require_relative 'linked_list'

#  *** Implement an algorithm to find kth_to_last element of a singly linked list

# simple and obvious solution
def kth_to_last(list, k)
    return nil unless list
    return list.head.value if list.count_nodes == k

    current = list.head
    index = list.count_nodes - k
    looked = 0

    until current.nil?
        return current.value if looked == index
        looked += 1
        current = current.next
    end

end