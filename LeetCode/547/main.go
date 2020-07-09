// 朋友圈
// GO 语言 表达二维数组 ?
package main

import "fmt"

func findCircleNum(M [][]int) int {
	N := len(M)
    fmt.Printf("%d", N)
	res := N // 最多有多少个朋友圈
	// N--
	// 合并为一维数组
	friend := make([]int, res) // res 长度
	for i := 0; i < res; i++ {
		friend[i] = i // 0, 1, 2
		// 合并的时候 res--
	}

	union := func(s,d int) {
		// range 循环
		for i:= range friend {
			// 同化
			if friend[i] == s {
				friend[i] = d
			}
		}
	}

	for i := 0 ;i < N; i++ {
		for j := i + 1; j < N; j++ {
			if M[i][j] == 1 {
				// 只有没被同化过
				if friend[i] != friend[j] {
					res --
					// fmt.Printf("i是%d,j是%d\n", friend[i], friend[j])
					// 两个一维数组进行同化
					union(friend[i], friend[j])
				}
			}
		}
	}
    return res
}

func main() {
	// [[0,1,0]]
	count := findCircleNum( [][] int {
		{1,1,0},
		{1,1,0},
		{0,1,1}
	})
	fmt.Printf("朋友圈的数量是%d", count)
}