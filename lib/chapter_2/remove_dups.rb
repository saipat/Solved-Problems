require_relative 'linked_list'

# *** Write code to remove duplicates from unsorted linked list.
# How would you solve the problem if the temprorary buffer is not allowed?

# with temprorary buffer
def remove_dups(list)
    return nil if list.nil? || list.head.next.nil?
    
    current = list.head

    set = Set.new

    until current.nil?
        set << current.value

        if !current.next.nil? && set.include?(current.next.value)
            current.next = current.next.next
        end

        current = current.next
    end

    set.to_a
end