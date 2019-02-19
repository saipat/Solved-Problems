
require 'chapter_2/remove_dups'

describe "Remove Duplicates" do

    it "removes the duplicates from the unsorted lists" do
        @nodes = %w[a b c a d a]
        @list = LinkedList.new(@nodes.first)

        (@nodes.drop(1)).each do |node| 
            @list.add(node)
        end

        @nodes = @nodes.uniq

        expect(remove_dups(@list)).to eq(@nodes)
    end

    it "removes the duplicates from the unsorted lists" do
        @nodes = %w[a a a]
        @list = LinkedList.new(@nodes.first)

        (@nodes.drop(1)).each do |node| 
            @list.add(node)
        end

        @nodes = @nodes.uniq

        expect(remove_dups(@list)).to eq(@nodes)
    end

    it "removes the duplicates from the unsorted lists" do
        @nodes = %w[10 20 30 40 50]
        @list = LinkedList.new(@nodes.first)

        (@nodes.drop(1)).each do |node| 
            @list.add(node)
        end

        @nodes = @nodes.uniq

        expect(remove_dups(@list)).to eq(@nodes)
    end
end