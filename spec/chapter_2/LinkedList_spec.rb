require 'chapter_2/linked_list'

describe "Initialize Node" do
    subject (:node) {LinkedList.new(5)}
    it "initialize a node with the given value" do
        expect(node.head.value).to eq(5)
    end

    it "displays the list" do
        node.add(10)
        node.add(20)
        node.add(30)
        expect(node.display).to eq("5 -> 10 -> 20 -> 30")
    end

    it "deletes the value and moves the next node" do
        node.add(10)
        node.add(20)
        node.add(30)
        expect(node.delete(20)).to eq('5 -> 10 -> 30')
    end

    it "deletes the head if head's value equal to the given value" do
        node.add(10)
        node.add(20)
        node.add(30)
        expect(node.delete(5)).to eq('10 -> 20 -> 30')
    end

    it "counts the no:of:nodes" do
        node.add(10)
        node.add(20)
        node.add(30)
        expect(node.count_nodes).to eq(4)
    end

    it "counts the no:of:nodes" do
        node.add(10)
        node.add(20)
        node.add(30)
        node.delete(5)
        expect(node.count_nodes).to eq(3)
    end

    it "reverses the list" do
        node.add(10)
        node.add(20)
        node.add(30)
        expect(node.reverse()).to eq('30 -> 20 -> 10 -> 5')
    end
end