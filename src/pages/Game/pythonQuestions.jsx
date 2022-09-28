  export const pythonFetchedCodePackages = [
    {'id': 0,                       //  sample buggy functions
     'snippet': {
        'description': 'Fix this simple function',
        'import': 'add',
        'body' : 'def add(a, b):\n    return a + a\n\n# Expectation: add(3,2) => 5',
        'to-execute-1': 'add(3,2)',
        'return-1' : 5,
        'to-execute-2': 'add(2222,3333)',
        'return-2' : 5555
      }
    },
    {'id': 1,
     'snippet': {
        'description': 'Remove spaces from the input string',
        'import': 'no_space',
        'body' : 'def no_space(string):\n    for i in string:\n        if i == " ":\n            i.replace(" ","")\n\n    return string\n\n# Expectation:\n# no_space("H i  r eU s  ! ")\n# => HireUs!',
        'to-execute-1': 'no_space("    he     l l o! ")',
        'return-1' : 'hello!',
        'to-execute-2': 'no_space("q  w  e     r t yyyy  ")',
        'return-2' : 'qwertyyyy'
      }
    },
    {'id': 2,
     'snippet': {
        'description': 'Take a look at the series in the comments. Debug this function which returns a string of the sum rounded to two decimals of the series upto nth term.',
        'import': 'show',
        'body' : "def series_sum(n):\n    if n == 0:\n        return '0.00'\n    sum = 0\n    for i in range(1, n):\n        sum += 1 / i\n    sum = str(round(sum, 2))\n    return sum\n\n# 1 => '1.00' (1)\
                  \n# 2 => '1.5' (1 + 1/2)\n# 5 => '2.28' (1 + 1/2 + 1/3 + 1/4 + 1/5)\n# If the given value is 0,\n# it should return '0.00'",
        'to-execute-1': 'series_sum(5)',
        'return-1' : '2.28',
        'to-execute-2': 'series_sum(0)',
        'return-2' : '0.00'
      }
    }
  ]
