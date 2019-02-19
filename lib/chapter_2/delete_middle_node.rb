require_relative 'linked_list'

# *** Implement an algorithm to delete a node in the middle (i.e any node but the first and the last node but not necessarily the exact middle) of a singly linkedlist, given only access to that node.

# O(n)
def delete_middle_node(list, k)
    return nil unless list
    return 'can\'t delete head!' if list.head.value == k

    current = list.head.next

    until current.nil?
        if current.value == k && current.next == nil 
            return 'can\'t delete tail!'
        elsif current.value == k 
            list.delete(current.value)
            return list.display
        end

        current = current.next
    end

    return 'no such node!'
end