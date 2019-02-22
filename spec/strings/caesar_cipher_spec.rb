require 'strings/caesar_cipher'

describe "caesar_cipher" do 
    it "returns the chiphered string" do 
        expect(caesar_cipher(3, 'abc') ).to eq('def')
    end

    it "returns the chiphered string" do 
        expect(caesar_cipher(3, 'ABC') ).to eq('DEF')
    end

    it "returnsthe the chiphered string" do 
        expect(caesar_cipher(3, "abc xyz")).to eq('def abc')
    end

    it "returns 'String can\'t be empty if the string is empty" do 
        expect(caesar_cipher(4,'')).to eq('String can\'t be empty')
    end

    it "returns the string with default offset 1" do 
        expect(caesar_cipher('abc')).to eq('bcd')
    end
   
end