class Node
    attr_accessor :next, :value

    def initialize(value, next_node)
        @value = value
        @next = next_node
    end

    # def to_s
    #     "Node with value: #{@value}"
    # end
end