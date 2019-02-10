require 'chapter_1/urlify'

describe 'Urlify string' do
    it 'replaces spaces with %20 except after the last character' do
        expect(urlify?('Mr John Smith    ', 13)).to eq('Mr%20John%20Smith')
    end
end