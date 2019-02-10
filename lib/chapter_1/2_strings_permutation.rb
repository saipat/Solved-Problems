# *** Given two strings write a method to decide if one is a permutation of the other.

def permutation?(a, b)
  return true if a == b
  a.split('').sort == b.split('').sort ? true : false
end

