require 'strings/nearby_az'

describe "Nearby az" do 
    it "returns true if z is within 3 spaces of a" do 
        expect(nearby_az('baz')).to eq(true)
    end

    it "returns true if z is within 3 spaces of a" do 
        expect(nearby_az('abcz')).to eq(true)
    end

    it "returns false if z is not within 3 spaces of a" do 
        expect(nearby_az('z')).to eq(false)
    end

    it "returns false if z is not within 3 spaces of a" do 
        expect(nearby_az('za')).to eq(false)
    end
end