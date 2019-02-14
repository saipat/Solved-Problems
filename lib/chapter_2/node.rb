class Node
    attr_accessor :next, :value

    def initialize(value)
        @value = value
        @next = nil
    end

    def to_s
        "Node with value: #{@value}"
    end
end