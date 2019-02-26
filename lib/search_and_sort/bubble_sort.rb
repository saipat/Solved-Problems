# Implement bubble sort

# best case O(n), Worst case O(n^2)
# Space complexity => O(1)

class Array
    # without prc
    def bubble_sort_without_prc
        return self if count <= 1
        loop do
            swapped = false

            (length-1).times do |idx|
                if self[idx] > self[idx+1]
                    self[idx], self[idx+1] = self[idx+1], self[idx]
                    swapped = true
                end
            end

            break if !swapped
        end

        self
    end

    # with prc
    def bubble_sort!(&prc)
        prc = Proc.new{ |x,y| x <=> y }

        loop do
            swapped = false

            (length-1).times do |idx|
                if prc.call(self[idx], self[idx+1]) == 1
                    self[idx], self[idx+1] = self[idx+1], self[idx]
                    swapped = true
                end
            end

            break if !swapped
        end

        self
    end

    # without modifying
    def bubble_sort
        self.dup.bubble_sort!
    end
end


p [2,3,1,5,4].bubble_sort_without_prc
p [2].bubble_sort_without_prc
p [].bubble_sort_without_prc

p [2,3,1,5,4].bubble_sort
p [2].bubble_sort
p [].bubble_sort