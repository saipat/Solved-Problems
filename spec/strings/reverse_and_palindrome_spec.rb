require 'strings/reverse_and_palindrome'

describe "Is Palinderome?" do
    it "returns true if it is a palindrome" do
        expect(is_palindrome?('madam')).to eq(true)
    end

    it "returns false if it is a palindrome" do
        expect(is_palindrome?('cookie')).to eq(false)
    end
end 

describe "Reverse a string" do
    it "returns the reversed string" do
        expect(reverse_string('abd')).to eq('dba')
    end

    it "returns the reversed string" do
        expect(reverse_string('character')).to eq('retcarahc')
    end

    it "returns 'Nothing to reverse' if string is empty" do
        expect(reverse_string('')).to eq('Nothing to reverse' )
    end
end 

