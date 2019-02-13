#  *** Write a method that is functionally equivalent to the rotate(offset) method of arrays. offset=1 ensures that the value of offset is 1 if no argument is provided. 

# *** HackerRank - Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

def my_rotate(array, offset = 1)
    shift = offset % array.length
    array.drop(shift) + array.take(shift)
end