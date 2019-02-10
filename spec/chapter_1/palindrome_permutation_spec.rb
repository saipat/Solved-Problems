require 'chapter_1/palindrome_permutation'

describe "Palindrome_permutation" do 

    it 'returns true if the permuation has palindrome string' do
        expect(palindrome_permutation?('unn')).to eq(true)
    end

    it 'returns true if the permuation has palindrome string' do
        expect(palindrome_permutation?('tactcoa')).to eq(true)
    end

    it 'returns nil if the permuation has palindrome string' do
        expect(palindrome_permutation?('cat')).to eq(false)
    end
end