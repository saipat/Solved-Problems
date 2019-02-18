class Node
    attr_accessor :next, :value

    def initialize(value, next_node)
        @value = value
        @next = next_node
        puts "Initialized a Node with value:  " + value.to_s 
    end

end