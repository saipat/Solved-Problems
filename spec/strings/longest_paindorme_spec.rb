require 'strings/longest_palindrome'

describe "Longest Plaindrome" do 
    it "returns the longest palindrome" do 
        expect(longest_palindrome('abcbd')).to eq("bcb")
    end

    it "returnsthe longest palindrome" do 
        expect(longest_palindrome('abba')).to eq("abba")
    end

    it "returns the longest palindrome" do 
        expect(longest_palindrome('abcbdeffe')).to eq("effe")
    end

    it "returns 'String can\'t be empty if th estring is empty" do 
        expect(longest_palindrome('')).to eq('String can\'t be empty')
    end
   
end