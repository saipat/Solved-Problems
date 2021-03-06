require_relative 'linked_list'

# *** Write code to remove duplicates from unsorted linked list.
# How would you solve the problem if the temprorary buffer is not allowed?

# with temprorary buffer => O(n)time and O(n) extra space will be used in the Set if all characters are unique
# def remove_dups(list)
#     return nil if list.nil? || list.head.next.nil?
    
#     current = list.head

#     set = Set.new

#     until current.nil?
#         set << current.value

#         if !current.next.nil? && set.include?(current.next.value)
#             current.next = current.next.next
#         end

#         current = current.next
#     end

#     set.to_a
# end


# with hash
def remove_dups(list)
    return nil if list.nil? || list.head.next.nil?

    seen = {}
    current = list.head

    while current
        if seen[current.value]
            current = current.next
        else 
            seen[current.value] = true
            current = current.next
        end
    end

    seen.keys
end