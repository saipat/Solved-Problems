#  *** Write a method that is functionally equivalent to the rotate(offset) method of arrays. offset=1 ensures that the value of offset is 1 if no argument is provided. 

def my_rotate(array, offset = 1)
    shift = offset % array.length
    array.drop(shift) + array.take(shift)
end