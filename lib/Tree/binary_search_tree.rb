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

        root_node
    end

    def depth(root_node = @root)
        return 0 unless root_node

        left_depth = depth(root_node.left)
        right_depth = depth(root_node.right)

        depth = [left_depth, right_depth].max
        depth + 1
    end

    #A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.
    def is_balanced?(root_node = @root)
        return true unless root_node
        
        left_balanced = is_balanced?(root_node.left)
        right_balanced = is_balanced?(root_node.right)

        depth = (depth(root_node.left) - depth(root_node.right)).abs <= 1

        left_balanced && right_balanced && depth
    end

    # left, root, right
    def in_order_traversal(root_node = @root)
        return [] unless root_node

        left = in_order_traversal(root_node.left)
        right = in_order_traversal(root_node.right)

        left + [root_node.value] + right
    end

    # root, left, right
    def pre_order_traversal(root_node = @root)
        return [] unless root_node

        left = in_order_traversal(root_node.left)
        right = in_order_traversal(root_node.right)

        [root_node.value] + left + right
    end

    # left, right, root
    def post_order_traversal(root_node = @root)
        return [] unless root_node

        left = in_order_traversal(root_node.left)
        right = in_order_traversal(root_node.right)

        left + right + [root_node.value]
    end

    # worst case => O(n) & average case => O(log n)
    def delete(value)
        @root = delete_from_tree(@root, value)
    end

    def delete_from_tree(root_node, value)
        return nil unless root_node
        if value == root_node.value 
            root_node = remove(root_node)
        elsif value <= root_node.value
            root_node.left = delete_from_tree(root_node.left, value)
        else
            root_node.right = delete_from_tree(root_node.right, value)
        end

        root_node
    end


    def remove(node)
        if node.left.nil? && node.right.nil?
            node = nil
        elsif node.left.nil? && node.right
            node = node.right
        elsif node.left && node.right.nil?
            node = node.left
        else 
            node = replace(node)
        end

        node
    end

    def replace(node)
        replacement = maximum(node.left)

        if replacement == node.left
            replacement.right = node.right
            return replacement
        end

        if replacement.left
            promote(node.left)
        end

        replacement.left = node.left
        replacement.right = node.right

        replacement
    end

    def promote(node)
        parent = node
        child = node.right

        while child.right
            parent = parent.right
            child = child.right
        end

        parent.right = child.left
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
bst.insert(40)
bst.insert(12)

p bst

value = 10
puts "\nFind the node with the given value => #{value} => #{bst.find(value)}"

puts "Maximum value in the tree: #{bst.maximum().value}"

puts "Depth of the tree: #{bst.depth()}"

puts "Is the tree balanced? #{bst.is_balanced?()}"

puts "InOrder Traversal: #{bst.in_order_traversal()}"

puts "PreOrder Traversal: #{bst.pre_order_traversal()}"

puts "PostOrder Traversal: #{bst.post_order_traversal()}"

value = 15
puts "Delete the node with the given value => #{value} => #{bst.delete(value)} \n"

p bst

