require 'strings/capitalized_words'

describe "Capitalized words" do 
    it "returns the most common letter and its count" do 
        expect(most_common_letter('abca')).to eq(['a', 2])
    end

    it "returns the most common letter and its count" do 
        expect(most_common_letter('abbab')).to eq(['b', 3])
    end

    it "returns 'Can\'t count if th esrting is empty'" do 
        expect(most_common_letter('')).to eq('Can\'t count if the srting is empty')
    end
   
end