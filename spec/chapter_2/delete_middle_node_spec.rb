require 'chapter_2/delete_middle_node'

describe "Deletes the middle node" do

    it "return the list with given the node deleted" do
        @nodes = %w[a b c d]
        @list = LinkedList.new(@nodes.first)

        (@nodes.drop(1)).each do |node| 
            @list.add(node)
        end

        expect(delete_middle_node(@list, 'd')).to eq('a -> b -> c')
    end

    it "return the list with given the node deleted" do
        @nodes = %w[a b c d]
        @list = LinkedList.new(@nodes.first)

        (@nodes.drop(1)).each do |node| 
            @list.add(node)
        end

        expect(delete_middle_node(@list, '2')).to eq('no such node!')
    end
end