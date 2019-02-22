#  *** Write a method that takes a string and returns true if it is a palindrome.

def is_palindrome?(str)
    str.each_char.with_index do |ch, idx|
        return false unless ch == str[str.length-idx-1]
    end

    true
end

def reverse_string(str)
    return 'Nothing to reverse' if str.empty?
    
    reversed = ''

    str.chars.each { |ch| reversed = ch + reversed }

    reversed
end

