require 'chapter_2/linked_list'

describe "Initialize Node" do
    subject (:node) {LinkedList.new(5)}
    it "initialize a node with the given value" do
        expect(node.head.value).to eq(5)
    end
end