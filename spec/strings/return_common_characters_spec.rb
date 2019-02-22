require 'strings/return_common_characters'

describe "Return common characters" do 
    it "returns all the common characters betwen 2 strings" do 
        expect(common_characters('aabbaa', 'bca')).to eq('ab')
    end

    it "returns all the common characters betwen 2 strings" do 
        expect(common_characters('aabbaa', 'ab')).to eq('ab')
    end

    it "returns an empty string if there is no common character" do 
        expect(common_characters('aabbaa', 'xyz')).to eq('')
    end
end