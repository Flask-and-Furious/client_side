  export const pythonFetchedCodePackages = [
    {'id': 0,                       //  sample buggy functions
     'snippet': {
        'description': 'Fix this simple function!',
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
        'description': 'Make the input text upper case!',
        'import': 'make_text_upper_case',
        'body' : 'def make_text_upper_case(string):\n    upper_case += string.upper()\n\n    return upper_case\n\n# Expectation:\n# make_text_upper_case("hire us!")\n# => HIRE US!',
        'to-execute-1': 'make_text_upper_case("qwerty")',
        'return-1' : "QWERTY",
        'to-execute-2': 'make_text_upper_case("Game over!")',
        'return-2' : "GAME OVER!"
      }
    },
    {'id': 2,                      
     'snippet': {
        'description': 'Compare two numbers and return "true" if the first one is greater than or equal to the second one. Otherwise return "false". Input values will be integers.',
        'import': 'compare',
        'body' : 'def compare(num1, num2):\n    if num1 > num2:\n        return "true"\n    else:\n        return "false"\n\n# Expectation:\n# compare(6, 2) => "true"\n# compare(-4, 9) => "false"\n# compare(5, 5) => "true"',
        'to-execute-1': 'compare(3,26)',
        'return-1' : 'false',
        'to-execute-2': 'compare(66,66)',
        'return-2' : 'true'
      }
    },
    {'id': 3,
     'snippet': {
        'description': 'Take a look at the series in the comments. Debug this function which returns a string of the sum. The result should be rounded to two decimals of the series upto nth term.',
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
