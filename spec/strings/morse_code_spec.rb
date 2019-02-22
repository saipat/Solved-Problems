require 'strings/morse_code'

describe "Morse Code" do 
    it "returns the morse code" do 
        expect(morse_encode("q")).to eq("--.-")
    end

    it "returns the morse code" do 
        expect(morse_encode("cat")).to eq("-.-. .- -")
    end

    it "returns the morse code" do 
        expect(morse_encode("cat in hat") ).to eq("-.-. .- -  .. -.  .... .- -")
    end



    it "returns String can\'t be empty if the string is empty" do 
        expect(morse_encode('')).to eq('String can\'t be empty if the string is empty')
    end
   
end