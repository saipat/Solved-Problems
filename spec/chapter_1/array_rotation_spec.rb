require 'chapter_1/array_rotation'

describe "Array rotation" do
    it "returns the rotated array and no offset(should assign offet = 1)" do
        expect(my_rotate([1,2,3,4,5,6])).to eq([2,3,4,5,6,1])
    end

    it "returns the rotated array with an given offset" do
        expect(my_rotate([1,2,3,4,5,6],2)).to eq([3,4,5,6,1,2])
    end
end
