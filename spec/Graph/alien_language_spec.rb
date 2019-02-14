require 'Graph/alien_language'

describe 'Alien Language' do
    it "returns the given array of words in sorted order" do
        expect(sort_alien_language(["baa", "abcd", "abca", "cab", "cad"])).to eq(['b', 'd', 'a', 'c'])
    end

    it "returns the given array of words in sorted order" do
        expect(sort_alien_language(["caa", "aaaa", "aab"])).to eq(["c", "a", "b"])
    end
end