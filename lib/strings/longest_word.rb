# *** Write a method that takes in a string. Return the longest word in the string. You may assume that the string contains only letters and spaces.

def longest_word(string)
    longest = ''

    string.split(' ').each do |word|
        longest = word if longest.length < word.length
    end
    
    longest
end