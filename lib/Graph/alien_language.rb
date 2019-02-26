require_relative 'topological_sort.rb'

# Given a sorted dictionary (array of words) of an alien language, find the order of the characters in the language.

def sort_alien_language(words)
    vertices ={}

    # //b, d, c, a
    words.reduce(:+).split('').uniq.each do |character|
        vertices[character] = Vertex.new(character)
    end

    (0...words.length-1).each do |i|
        word1, word2 = words[i], words[i+1]
        smaller = word1.length <= word2.length ? word1.length : word2.length

        (0...smaller).each do |j|
            if word1[j] != word2[j]
                Edge.new(vertices[word1[j]], vertices[word2[j]])
                break
            end
        end
    end

    topological_sort(vertices.values).map {|v| v.value}
    # [b, d, c, a]
end