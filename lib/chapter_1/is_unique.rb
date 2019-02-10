# *** Implement an algorithm to determine if a string has all unique characters. what if you cannot use additional data structures?

# Is Unique

def is_unique(str)
    # str.split('').uniq.length == str.split('').length

    count = Hash.new(0)

    str.each_char do |ch|
        count[ch] += 1
    end

    count.each do |k, v|
        return false unless count[k] <= 1
    end

    true
end
