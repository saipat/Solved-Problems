# Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
# The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
# You may assume the integer does not contain any leading zero, except the number 0 itself.

# O(n)
def plus_one(digits)
    digits = digits.join('').to_i + 1 
    digits.to_s.chars.map {|el| el.to_i}
end

# testing
array = [1,2,3]
puts "plus_one => #{array} => #{plus_one(array)}"

array = [4,3,2,9]
puts "plus_one => #{array} => #{plus_one(array)}"

array = [5,9,9,9]
puts "plus_one => #{array} => #{plus_one(array)}"

array = [0]
puts "plus_one => #{array} => #{plus_one(array)}"