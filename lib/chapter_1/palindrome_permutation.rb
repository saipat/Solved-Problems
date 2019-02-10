# *** Given a string, write a function to check if it is a permutation of palindrome. A palindrome is a word or a phrase that is same forwards and backwords. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
require 'byebug'

#O(n) or O(1) => as there can only 128 different characters and 110,000 unicode characters.
def palindrome_permutation?(str)
    unpaired_characters = Set.new

    str.chars.each do |ch|
        if unpaired_characters.include?(ch)
            unpaired_characters.delete(ch)
        else
            unpaired_characters.add(ch)
        end
    end

    unpaired_characters.length <= 1
end



# O(n!n)
# def palindrome_permutation?(str)
#     result = []

#     permutations = permutation(str.split(' ').join('').downcase())
#     permutations.each do |item|
#         word = item.join('')
#         result.push(word) if word.reverse == word && !result.include?(word)
#     end

#     result.length == 0 ? nil : result.sort
# end

# def permutation(str)
#     str.split('').permutation.to_a
# end


# O(n!n)
# def palindrome_permutation?(str)
#     # debugger
#     str = str.split('')
#     result = []
    
#     permutations = find_permutation(str).map {|item| item = item.join('')}
    
#     result = permutations.select {|item| item == item.reverse}.uniq

#     result.length == 0? nil : result
# end

# def find_permutation(array) 
#   return [array] if array.length <= 1
#     first = array.shift
#     perms = find_permutation(array)
#     total = []
#     perms.each do |per|
#       (0..per.length).each do |i|
#           total << (per[0...i] +[first]+per[i..-1])
#      end
#     end
#     total
# end
