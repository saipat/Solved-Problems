require 'chapter_1/string_rotation_checker'

describe "String rotation checker" do
    it "returns true if s1 is a rotation of s2" do
        expect(is_string_rotation?('waterbottle', 'erbottlewat')).to eq(true)
    end

    it "returns true if s1 is a rotation of s2" do
        expect(is_string_rotation?('likespuzzle', 'zzlelikespu')).to eq(true)
    end

    it "return false if s1 is not a rotation of s2" do
        expect(is_string_rotation?('codinginterview', 'incointerviewg')).to eq(false)
    end

    it "return false if s1 length is not euqal to s2" do
        expect(is_string_rotation?('bootcamp','camp')).to eq(false)
    end
end