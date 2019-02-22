require_relative './reverse_and_palindrome'
#  *** Write a method that takes in a string of lowercase letters (no uppercase letters,no repeats). Consider the *substrings* of the string: consecutive sequences of letters contained inside the string. Find the longest such string of letters that is a palindrome and also the start and end index.

# O(n^2)
def longest_palindrome(str)
    return 'String can\'t be empty' if str.empty?

    best_palindrome = nil
    idx = 0
    indices = []

    while idx < str.length
        length = 1
        while (idx + length) <= str.length
            substring = str.slice(idx, length)
            
            if is_palindrome?(substring) && (best_palindrome == nil || substring.length  > best_palindrome.length)
                best_palindrome = substring
                indices = [idx, idx+length-1]
            end

            length += 1
        end
        
        idx += 1
    end

    [best_palindrome, indices]
end