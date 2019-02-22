require 'strings/nearby_az'

describe "Nearby az" do 
    it "returns the no:of: vowels in the string" do 
        expect(count_vowels('abcd')).to eq(1)
    end

    it "returns the no:of: vowels in the string" do 
        expect(count_vowels('cecilia')).to eq(4)
    end

    it "returns 0 if there is no vowel in the string" do 
        expect(count_vowels('bcvnmxz')).to eq(0)
    end
end