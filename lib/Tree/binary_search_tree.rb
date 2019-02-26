# Implement Binary Search Tree

class Node
    attr_reader :value
    attr_accessor :right, :left

    def initialize(value)
        @value = value
        @right, @left = nil
    end
end

# Space O(n)
class BST
    attr_accessor :root

    def initialize
        @root = nil
    end

    # worst case => O(n) & average case => O(log n)
    def insert(value)
        @root = insert_into_tree(value, @root)
    end

    def insert_into_tree(value, root_node)
        return Node.new(value) unless root_node

        if value <= root_node.value
            root_node.left = insert_into_tree(value, root_node.left)
        else
            root_node.right = insert_into_tree(value, root_node.right)
        end

        root_node
    end

    # worst case => O(n) & average case => O(log n)
    def find(value, root_node = @root)
        return nil unless root_node
        return root_node if root_node.value == value

        value < root_node.value ? find(value, root_node.left) : find(value, root_node.right)
    end

    def maximum(root_node = @root)
        return nil unless root_node
        return maximum(root_node.right) if root_node.right

        root_node.value
    end

    def depth(root_node = @root)
        return 0 unless root_node

        left_depth = depth(root_node.left)
        right_depth = depth(root_node.right)

        depth = [left_depth, right_depth].max
        depth + 1
    end
end


# testing
bst = BST.new

# insert values
bst.insert(45)
bst.insert(65)
bst.insert(15)
bst.insert(10)
bst.insert(60)
bst.insert(5)
bst.insert(75)
bst.insert(45)
bst.insert(40)
bst.insert(12)

# p bst
value = 10
puts "Find the node with the given value => #{value} => #{bst.find(10)}"

puts "Maximum value in the tree: #{bst.maximum()}"

puts "Depth of the tree: #{bst.depth()}"



