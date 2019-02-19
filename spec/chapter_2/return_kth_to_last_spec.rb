require 'chapter_2/return_kth_to_last'

describe "Return Kth to the last" do

    it "returns 3rd to the last element" do
        @nodes = %w[a b c d]
        @list = LinkedList.new(@nodes.first)

        (@nodes.drop(1)).each do |node| 
            @list.add(node)
        end
        
        p @list.display

        expect(kth_to_last(@list.head, 2)).to eq('c')
    end

     it "returns head if list count == 1 and k = 1" do
        @nodes = %w[a]
        @list = LinkedList.new(@nodes.first)

        (@nodes.drop(1)).each do |node| 
            @list.add(node)
        end

        p @list.display

        expect(kth_to_last(@list.head, 1)).to eq('a')
    end

    it "returns nil if there is no element in the list" do
        @list = LinkedList.new(nil)

        expect(kth_to_last(@list.head, 4)).to eq(nil)
    end
end