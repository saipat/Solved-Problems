# *** Given two strings write a method to decide if one is a permutation of the other.

def permutation?(str1, str2)
  return true if str1 == str2
  str1.split('').sort == str2.split('').sort ? true : false
end

