require 'strings/no_of_repeated_letters'

describe "Number of repeated letters" do 
    it "returns the no: of:repeated letters" do 
        expect(num_repeats('aaa')).to eq(1)
    end

    it "returns the no: of:repeated letters" do 
        expect(num_repeats('abab')).to eq(2)
    end

    it "returns 0 if there are no repeated letters in the string" do 
        expect(num_repeats('abcde')).to eq(0)
    end

    it "returns the no: of:repeated letters" do 
        expect(num_repeats('cadac')).to eq(2)
    end

    it "returns String can\'t be empty if the string is empty" do 
        expect(num_repeats('')).to eq('String can\'t be empty if the string is empty')
    end
   
end