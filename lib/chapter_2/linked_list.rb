require_relative 'node'

class LinkedList
    attr_reader :head

    def initialize(value)
        @head = Node.new(value, nil)
    end

    # Traverse to the end of the list
    # And insert a new node over there with the specified value
    def add(val)
        current = @head
        while current.next_node != nil
            current = current.next_node
        end
        current.next_node = Node.new(val, nil)
        self
    end

    def display
        current = @head
        full_list =[]
        while current.next_node != nil
            full_list += [current.value.to_s]
            current = current.next_node
        end
        full_list += [current.value.to_s]
        puts full_list.join(' -> ')
    end
end
