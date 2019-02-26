# Write an Array#merge_sort method; it should not modify the original array.

#  O(nlogn) => The log n comes from the number of times we have to cut n in half to get down to subarrays of just 1 element (our base case). The additional n comes from the time cost of merging all nn items together each time we merge two sorted subarrays.

class Array

  def merge_sort(&prc)
    prc = Proc.new {|x, y| x <=> y}

    return self if count <= 1

    mid = count / 2

    left_sorted = self.dup.take(mid).merge_sort(&prc)
    right_sorted = self.dup.drop(mid).merge_sort(&prc)

    Array.merge(left_sorted, right_sorted, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
        case prc.call(left.first, right.first)
        when -1
            merged << left.shift
        when 0 
            merged << left.shift
        when 1
            merged << right.shift
        end
    end

    merged.concat(left).concat(right)

  end
end

p [2,3,1,5,4].merge_sort
p [2].merge_sort
p [].merge_sort