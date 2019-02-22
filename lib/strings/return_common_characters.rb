# *** Given two Strings - 'aabbaa' and 'abc', find the common characters between the strings, a non-repeated string/char array should be the output.


# .uniq => Amortized O(n) as it uses Hash internally.
# .has_key? => 0(1)
def common_characters(str1, str2)
    str1 = str1.chars.uniq
    str2 = str2.chars.uniq

    return str1.join('') if str1 == str2

    result = ''
    hash = Hash.new(0)

    str2.each do |ch|
        hash[ch] = true
    end

    str1.each do |ch|
        result << ch if hash.has_key?(ch)
    end
    
    result
end