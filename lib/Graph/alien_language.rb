#  *** Given a sorted dictionary (array of words) of an alien language, find order of characters in the language.

require_relative 'graph'
require_relative 'topological_sort.rb'

def sort_alien_language(words)
    vertices = {}

    words.reduce(:+).split('').uniq.each do |letter|
        vertices[letter] = Vertex.new(letter)
    end

    (0...words.length-1).each do |i|
        word1, word2 = words[i], words[i + 1]
        smaller = word1.length <= word2.length ? word1.length : word2.length
        
        (0...smaller).each do |j|
            if word1[j] != word2[j]
                Edge.new(vertices[word1[j]], vertices[word2[j]])
                break
            end
        end
    end

    topological_sort(vertices.values).map { |v| v.value }
end