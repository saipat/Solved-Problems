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
            full_list << current.value.to_s
            current = current.next
        end
        full_list << current.value.to_s
        full_list.join(' -> ')
        # debugger
    end

    def count_nodes
        current = @head
        count = 0
        while current.next != nil
            count += 1
            current = current.next
        end

        count += 1
        count
    end

    def delete(val)
        current = @head
        if current.value == val
            @head = @head.next
        else
            while (current != nil && current.next.value != val)
                current = current.next
            end
            # debugger
            if current.next.next.nil?
                return 'Can\'t delete the tail'
            else
                current.next = current.next.next
            end
        end
        display
    end

    def reverse
        return nil if @head.value.nil?

        current = @head
        previous = nil

        while current
            next_node = current.next
            current.next = previous
            previous = current
            current = next_node
        end

        @head = previous
        p display
    end

end
