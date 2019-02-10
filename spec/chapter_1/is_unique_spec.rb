require "chapter_1/is_unique.rb"

describe "Is Unique" do
    it 'Should return true, since nothing repeats' do
        expect(is_unique('Sai')).to eq(true)
    end

    it "returns false for input string 'abca'" do
        expect(is_unique('Saia')).to eq(false)
    end

    it "returns false for input string 'aaa'" do
        expect(is_unique('aaa')).to eq(false)
    end

    it "returns true for 123" do
        expect(is_unique('123')).to eq(true)
    end

    it "returns true for 111" do
        expect(is_unique('111')).to eq(false)
    end
end