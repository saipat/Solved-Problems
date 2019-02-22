require 'strings/capitalized_words'

describe "Capitalized words" do 
    it "returns the capitalized string" do 
        expect(capitalize_words("this is a sentence")).to eq("This Is A Sentence")
    end

    it "returns the capitalized string" do 
        expect(capitalize_words("mike bloomfield")).to eq("Mike Bloomfield")
    end

    it "returns 'Can\'t capitalize if the srting is empty'" do 
        expect(capitalize_words('')).to eq('Can\'t capitalize if the srting is empty')
    end
   
end