Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

#

You must solve this problem without using the library's sort function.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

#

in-place 이기 때문에
새로운 배열을 만들지 않고 배열 안에서 원소의 위치만 서로 교체해주면서 풀어야 한다.

0, 1, 2 영역에 값을 옮겨준다. 0은 low로, 1은 그대로, 2는 high 로

low 는 0 pointer
mid 는 값을 확인하는 pointer
high 는 2 pointer

mid가 배열을 오른쪽으로 순회하면서 값을 확인하고 옮긴다.

mid가 0인경우 low와 값을 교체
그리고 low, mid 의 위치를 오른쪽으로 한 칸 옮긴다. (low++; mid++;)

mid가 1인경우 그 자리에 그대로 놓고
mid만 오르쪽으로 한 칸 옮긴다. (mid ++;)

mid가 2인경우 high와 값을 교체
그리고 high만 위치를 왼쪽으로 한 칸 옮긴다. (high --;)
mid 안에 들어 온 값은 새로운 값이기 때문에 한 번 더 확인한다.
