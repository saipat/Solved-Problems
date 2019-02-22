require 'strings/scramble_string'

describe "Scramble String" do 
    it "returns a new string in the order specified by the input array" do 
        expect(scramble_string("abcd", [3, 1, 2, 0])).to eq("dbca")
    end

    it "returns a new string in the order specified by the input array" do 
        expect(scramble_string("markov", [5, 3, 1, 4, 2, 0])).to eq("vkaorm")
    end

    it "returns 'String can\'t be empty" do 
        expect(scramble_string('', [1,2,3])).to eq('String can\'t be empty')
    end

    it "returns the same string if array is empty" do 
        expect(scramble_string('iphone', [])).to eq('iphone')
    end
   
end