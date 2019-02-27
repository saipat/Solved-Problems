# Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


def remove_duplicates(arr)
    no_duplicate_idx = 0
    previous_el = nil

    arr.each do |el|
        next if el == previous_el
        arr[no_duplicate_idx] = el
        previous_el = el
        no_duplicate_idx += 1
    end

    # (0).upto(no_duplicate_idx-1) {|idx| p arr[idx]}
    no_duplicate_idx
end

def print_result(arr, len)
    (0).upto(len) {}
end

# testing

array = [1,1,2,2,3,3]
puts "Remove duplicates from #{array} and return its length: "
p remove_duplicates(array)

array = [1,1,2]
puts "Remove duplicates from #{array} and return its length: "
p remove_duplicates(array)

array = [1]
puts "Remove duplicates from #{array} and return its length: "
p remove_duplicates(array)

array = []
puts "Remove duplicates from #{array} and return its length: "
p remove_duplicates(array)