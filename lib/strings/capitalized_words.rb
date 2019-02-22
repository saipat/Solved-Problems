#  *** Write a method that takes in a string of lowercase letters and spaces, producing a new string that capitalizes the first letter of each word.

def capitalize_words(str)
    return 'Can\'t capitalize if the srting is empty' if str.empty?

    str.split(' ').each { |word| capitalize(word) }.join(' ')
    
end

def capitalize(word)
    word[0] = word[0].upcase
    word
end