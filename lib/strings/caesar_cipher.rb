# *** Write a method that takes in an integer `offset` and a string. Produce a new string, where each letter is shifted by `offset`. caesar_cipher

def caesar_cipher(offset = 1, str)
    return 'String can\'t be empty' if str.empty?

    result =''

    str.downcase.each_char do |ch|
        unless ch.ord.between?('a'.ord, 'z'.ord)
            result << ch
            next
        end

        char = ch.ord - 'a'.ord
        new_char = (char + offset) % 26
        result << (new_char + 'a'.ord).chr
    end

    str == str.upcase ? result.upcase : result
end


# Doesn't work if you have space between the strings
# def caesar_cipher(offset = 1, str)
#     return 'String can\'t be empty' if str.empty?

#     alphabet = ('a'..'z').to_a
#     key = Hash[alphabet.zip(alphabet.rotate(offset%26))]
#     str.each_char.inject('') { |new_char, char| new_char + key[char] }
# end