# Write a monkey patch of binary search
# E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4

# O(log n)
class Array
    def my_bsearch(target)
       return nil if size < 1

       mid = size/2

       case self[mid] <=> target
        when -1
            result = self.dup.drop(mid+1).my_bsearch(target)
            result.nil? ? nil : mid + 1 + result
        when 0
            return mid
        else
            return self.dup.take(mid).my_bsearch(target)
        end
    end
end

puts [1, 2, 3, 4, 5, 7].my_bsearch(5)