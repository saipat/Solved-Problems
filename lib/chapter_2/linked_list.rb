require_relative 'node'
require 'byebug'

class LinkedList
    attr_reader :head

    def initialize(value)
        @head = Node.new(value, nil)
    end

    # Traverse to the end of the list
    # And insert a new node over there with the specified value
    def add(val)
        #  debugger
        current = @head
        while current.next != nil
            current = current.next
        end
        current.next = Node.new(val, nil)
       
        # current.next.value
        self
    end

    def display
        current = @head
        full_list =[]
        while current.next != nil
            full_list += [current.value.to_s]
            current = current.next
        end
        full_list += [current.value.to_s]
        full_list.join(' -> ')
        # debugger
    end

    def delete(val)
        current = @head
        if current.value == val
            @head = @head.next
        else
            while (current != nil && current.next != nil && current.next.value != val)
                current = current.next
            end
            # debugger
            if current != nil && current.next != nil
                current.next = current.next.next
            end
        end
        display
    end
end
