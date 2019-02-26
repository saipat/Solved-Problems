#Write a monkey patch of quick sort that accepts a block

# best O(nlogn), worst case => O(n^2)
# Space complexity => O(log(n))

class Array

  def my_quick_sort(&prc)
    return self if count <= 1

    prc = Proc.new{ |x,y| x <=> y}

    pivot = first

    left = self[1..-1].select { |el| prc.call(el, pivot) == -1}
    right = self[1..-1].select { |el| prc.call(el, pivot) != -1}

    left.my_quick_sort(&prc) + [pivot] + right.my_quick_sort(&prc)    
  end
  
end

p [2,3,1,5,4].my_quick_sort
p [4].my_quick_sort
p [].my_quick_sort