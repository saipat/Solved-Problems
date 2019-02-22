#  *** Write a method that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

# O(n)
def num_repeats(str)
    return 'String can\'t be empty if the string is empty' if str.empty?

    hash = Hash.new(0)

    str.each_char do |ch|
        hash[ch] += 1
    end
   
    hash.count {|k,v| v > 1}
end