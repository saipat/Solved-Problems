# Implement Binary Search Tree

class Node
    attr_reader :value
    attr_accessor :right, :left

    def initialize(value)
        @value = value
        @right, @left = nil, nil
    end
end