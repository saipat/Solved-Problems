require "chapter_1/string_rotation.rb"

describe "String Rotation" do
   it "returns true if s1 is a rotation of s2" do
        expect(rotated_string?('waterbottle', 'erbottlewat')).to eq(true)
    end

    it "returns true if s1 is a rotation of s2" do
        expect(rotated_string?('likespuzzle', 'zzlelikespu')).to eq(true)
    end

    it "return false if s1 is not a rotation of s2" do
        expect(rotated_string?('codinginterview', 'incointerviewg')).to eq(false)
    end

    it "return false if s1 length is not euqal to s2" do
        expect(rotated_string?('bootcamp','camp')).to eq(false)
    end
end
