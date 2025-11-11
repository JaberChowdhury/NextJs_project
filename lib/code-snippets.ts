export interface CodeSnippet {
  language: string;
  code: string;
  fileName: string;
  compactCode: string; // Added compact version
  complexity: string;
}

export const codeSnippets: Record<string, CodeSnippet> = {
  python: {
    language: "python",
    fileName: "sum_to_n.py",
    complexity: "O(1)",
    code: `def sum_to_n(n: int) -> int:
    """
    Calculate sum of integers from 1 to n using arithmetic progression formula
    Time Complexity: O(1)
    Space Complexity: O(1)
    """
    return n * (n + 1) // 2

# Test cases
if __name__ == "__main__":
    n = int(input())
    result = sum_to_n(n)
    print(f"Sum from 1 to {n} is: {result}")`,
    compactCode: `def sum_to_n(n: int) -> int:
    """O(1) arithmetic progression"""
    return n * (n + 1) // 2`,
  },
  cpp: {
    language: "cpp",
    fileName: "sum_to_n.cpp",
    complexity: "O(1)",
    code: `#include <iostream>
using namespace std;

long long sumToN(long long n) {
    // Using arithmetic progression formula: n*(n+1)/2
    // Prevents overflow by using long long
    return n * (n + 1) / 2;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    long long n;
    cin >> n;
    cout << sumToN(n) << endl;
    return 0;
}`,
    compactCode: `long long sumToN(long long n) {
    // O(1) arithmetic progression
    return n * (n + 1) / 2;
}`,
  },
  c: {
    language: "c",
    fileName: "sum_to_n.c",
    complexity: "O(1)",
    code: `#include <stdio.h>

long long sum_to_n(long long n) {
    // Formula: n*(n+1)/2
    // Efficient O(1) solution
    return n * (n + 1) / 2;
}

int main() {
    long long n;
    scanf("%lld", &n);
    printf("%lld\\n", sum_to_n(n));
    return 0;
}`,
    compactCode: `long long sum_to_n(long long n) {
    // O(1) formula
    return n * (n + 1) / 2;
}`,
  },
  java: {
    language: "java",
    fileName: "SumToN.java",
    complexity: "O(1)",
    code: `import java.util.Scanner;

public class SumToN {
    public static long sumToN(long n) {
        // Arithmetic series formula for O(1) computation
        return n * (n + 1) / 2;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long n = scanner.nextLong();
        System.out.println(sumToN(n));
        scanner.close();
    }
}`,
    compactCode: `public static long sumToN(long n) {
    // O(1) arithmetic series
    return n * (n + 1) / 2;
}`,
  },
  rust: {
    language: "rust",
    fileName: "sum_to_n.rs",
    complexity: "O(1)",
    code: `use std::io;

fn sum_to_n(n: i64) -> i64 {
    // O(1) arithmetic progression solution
    n * (n + 1) / 2
}

fn main() -> io::Result<()> {
    let mut input = String::new();
    io::stdin().read_line(&mut input)?;

    let n: i64 = input.trim().parse()
        .expect("Please enter a valid number");

    println!("{}", sum_to_n(n));
    Ok(())
}`,
    compactCode: `fn sum_to_n(n: i64) -> i64 {
    // O(1) arithmetic progression
    n * (n + 1) / 2
}`,
  },
};
