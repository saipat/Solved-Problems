require 'node'

class SinglyLinkedList
    attr_reader :length, :head, :tail

    def initialize
        @head, @tail = nil, nil
        @length = 0
    end

    def first
        @head && @head.data
    end
end
