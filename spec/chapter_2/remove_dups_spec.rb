
require 'chapter_2/remove_dups'

describe "Remove Duplicates" do

    # let(:input){ Node.new('a', Node.new('b', Node.new('a', Node.new('c', nil))))}
    # let(:output){ Node.new('a', Node.new('b', Node.new('c', nil)))}

    it "removes the duplicates from the unsorted lists" do
        @nodes = %w[a b c a d]
        @list = LinkedList.new(@nodes.first)

        (@nodes.drop(1)).each do |node| 
            @list.add(node)
        end

        @nodes = @nodes.uniq

        expect(remove_dups(@list)).to eq(@nodes)
    end
end