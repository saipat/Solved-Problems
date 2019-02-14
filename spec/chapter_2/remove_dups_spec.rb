require 'chapter_2/remove_dups'

describe "Remove Duplicates" do
    let(:input){ Node.new('a', Node.new('b', Node.new('a', Node.new(c, nil))))}
    let(:output){ Node.new('a', Node.new('b', Node.new('c', nil)))}

    it "removes the duplicates from the unsorted lists" do
        expect(remove_dups(input)).to eq(output)
    end
end