require 'chapter_2/linked_list'

describe "Initialize Node" do
    subject (:node) {LinkedList.new(5)}
    it "initialize a node with the given value" do
        expect(node.head.value).to eq(5)
    end

    # it "Add a new node" do
    #     expect(node.add(10)).to eq(node.head.next.value)
    # end
    
    # it "Add a new node" do
    #     expect(node.add(20)).to eq(node.head.next.value)
    # end

    # it "Add a new node" do
    #     expect(node.add(30)).to eq(node.head.next.value)
    # end

    it "displays the list" do
        node.add(10)
        node.add(20)
        expect(node.display).to eq("5 -> 10 -> 20")
    end

end