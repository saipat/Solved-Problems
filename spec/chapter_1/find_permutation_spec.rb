require 'chapter_1/find_permutation'

describe 'Find Permutations' do
    it 'returns the permutations of the given array' do
        expect(permutation([1,2,3])).to eq([[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]])
    end

    it 'returns the array if array length is than or equal to 1' do
        expect(permutation([1])).to eq([[1]])
    end
end