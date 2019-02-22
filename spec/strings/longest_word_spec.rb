require 'strings/longest_word'

describe "Return the longest word" do 
    it "returns the longest word in the string" do 
        expect(longest_word('short longest')).to eq('longest')
    end

    it "returns the longest word in the string" do 
        expect(longest_word('one')).to eq('one')
    end

    it "returns the longest word in the string" do 
        expect(longest_word('abc def abcde')).to eq('abcde')
    end
end