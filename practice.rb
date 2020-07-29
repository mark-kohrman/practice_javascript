# # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
# def print_numbers_divisible_by_three
#   index = 1
#   while index <= 1000
#     if index % 3 == 0
#       puts index
#     end
#     index += 1
#   end
# end
# print_numbers_divisible_by_three


# # Write a method that accepts an array of strings and prints out every other string.
# def print_every_other_item(strings)
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       puts string
#     end
#     index += 1
#   end
# end
# print_every_other_item(["a", "b", "c", "d", "e"])


# # Write a method that accepts an array of numbers and returns the sum.
# def compute_sum(numbers)
#   sum = 0
#   numbers.each do |number|
#     sum += number
#   end
#   return sum
# end
# puts compute_sum([2, 4, 5])


# # Start with the hash: city_populations = {chi: 2700000}
# # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
# city_populations = {chi: 2700000}
# city_populations[:nyc] = 8400000
# city_populations[:sf] = 800000
# p city_populations



# Write a method that prints out every number from 1 to 100. 
# number = 1
# while number < 101
#   p number
#   number += 1
# end



# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
# number = 1
# while number <= 100
#   p number
#   number += 2
# end


# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
# def how_many_55s(array)
#   count_of_55 = 0
#   i = 0
#   while i < array.length
#     if array[i] == 55
#       count_of_55 += 1
#     end
#     i += 1
#   end
#   return count_of_55
# end

# p how_many_55s([2, 3, 55, 99, 2, 1, 55, 55])

# # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
# letters = ["a", "b", "c", "d", "e"]
# awesome = "awesomesauce"
# new_array = []
# letters.each do |letter|
#   new_array << letter
#   if letter != letters[-1]
#     new_array << awesome
#   end
# end
# p new_array

# # Start with the hash: item_amounts = {chair: 5, table: 2}
# # Someone just bought two chairs. Change the hash such that the chair amount is 3.
# # The final result should be: {chair: 3, table: 2}
# item_amounts = {chair: 5, table: 2}
# item_amounts[:chair] = 3
# p item_amounts

# # Start with the hash: item_amounts = {chair: 5, table: 2}
# # You received 7 desks to sell. Change the hash to include desks.
# # The final result should be: {chair: 5, table: 2, desk: 7}
# item_amounts = {chair: 5, table: 2}
# item_amounts[:desk] = 7
# p item_amounts

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
# def factorial(number)
#   factorial_no = number
#   while number >= 1
#     p factorial_no
#     factorial_no -= 1
#   end
#   return factorial_no
# end
# factorial = 5
# index = factorial
# while index > 1
#    index -= 1
#    factorial = factorial * index
# end
#   p factorial



# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# def sum(numbers)
#   current_sum = 0
#   i = 0
#   while i < numbers.length
#     current_sum += numbers[i]
#     i += 1
#   end
#   return current_sum
# end

# p sum([4, 9, 3, 2])

# def minimum_string(strings)
#   min_string = strings[0]
#   strings.each do |string|
#     if string.length < min_string.length
#       min_string = string
#     end
#   end
#   return min_string
# end

# p minimum_string(["hello", "goodbye", "hi", "sup"])

def a_words(strings)
  a_wordcount = 0
  strings.each do |string|
    if string[0] == "a"
      a_wordcount += 1
    end
  end
  return a_wordcount
end
p a_words(["apple", "igloo", "antartica", "evil", "elon musk"])

