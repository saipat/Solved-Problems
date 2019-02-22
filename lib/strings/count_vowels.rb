# Write a method that takes a string and returns the number of vowels in the string. You may assume that all the letters are lower cased.

def count_vowels(str)
    count = 0
    i = 0

    while i < str.length
        count += 1 if str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'
        i += 1
    end

    count
end