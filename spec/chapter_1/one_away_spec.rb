require "chapter_1/one_away.rb"

describe 'One away' do
    it 'return true if one/zero edit' do
        expect(one_away?('pale', 'ple')).to eq(true)
    end

    it 'return true if one/zero edit' do
        expect(one_away?('pales', 'pale')).to eq(true)
    end

    it 'return true if one/zero edit' do
        expect(one_away?('pale', 'bale')).to eq(true)
    end

    it 'return false if greater than one edit' do
        expect(one_away?('pale', 'bake')).to eq(false)
    end

    it 'return false if the difference in length is more that 1 edit' do
        expect(one_away?('pale', 'pe')).to eq(false)
    end
end 