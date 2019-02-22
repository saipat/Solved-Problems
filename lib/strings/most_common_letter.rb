#  *** Write a method that takes in a string. Your method should return the most common letter in the array, and a count of how many times it appears.

def most_common_letter(str)
    return 'Can\'t count if the srting is empty' if str.empty?

    hash = Hash.new(0)

    str.chars.each do |ch|
        hash[ch] += 1
    end

    most_common = hash.sort_by {|k,v| v}.last
    
    [most_common.first, most_common.last]
end