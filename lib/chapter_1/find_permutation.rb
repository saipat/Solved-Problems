def permutation(array) 
  return [array] if array.length <= 1
    first = array.shift
    perms = permutation(array)
    total = []
    perms.each do |per|
      (0..per.length).each do |i|
          total << per[0...i] +[first]+per[i..-1]
     end
    end
  total
end