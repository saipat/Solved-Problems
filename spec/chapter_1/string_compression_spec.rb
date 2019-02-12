require "chapter_1/string_compression.rb"

describe "String Compression" do
    it "returns the compressed string" do
        expect(string_compression('aabcccccaaa')).to eq('a2b1c5a3')
    end

    it "returns the compressed string" do
        expect(string_compression('pppiiitteggg')).to eq('p3i3t2e1g3')
    end

    it "returns the original string if compressed string is longer" do
        expect(string_compression('abcd')).to eq('abcd')
    end
    
    it "returns the original string if compressed string is longer" do
        expect(string_compression('ab')).to eq('ab')
    end

    it "returns the compressed string" do
        expect(string_compression('aaaa')).to eq('a4')
    end
end