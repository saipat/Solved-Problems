# *** Implement an algorithm to determine if a string has all unique characters. what if you cannot use additional data structures?

# Is Unique

def is_unique(str)
    str.split('').sort == str.split('')
end
