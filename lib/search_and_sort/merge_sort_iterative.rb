# Write an Array#merge_sort method; it should not modify the original array.

#  O(nlogn)
def merge_sort(arr)
    return arr if arr.count <= 1

    mid = arr.count / 2

    left_sorted = merge_sort(arr[0...mid])
    right_sorted = merge_sort(arr[mid..-1])

    merged = []

    until left_sorted.empty? && right_sorted.empty? do
        if (!left_sorted.empty?  && (right_sorted.empty? || left_sorted[0] < right_sorted[0]))
            merged << left_sorted.shift
        else
            merged << right_sorted.shift
        end
    end

    merged
end


p merge_sort([2,3,1,5,4])
p merge_sort([5,4,3,2,1])
p merge_sort([2])
p merge_sort([])