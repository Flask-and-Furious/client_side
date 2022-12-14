
export const javascriptFetchedCodePackages = [
     {'id': 0,                       // sample buggy functions
     'snippet': {
        'description': 'Debug the multiplication',
        'import': 'multiply',
        'body' : 'function multiply(a, b) {\n\treturn a * a\n}',
        'to-execute-1': 'multiply(3,2)',
        'return-1' : 6,
        'to-execute-2': 'multiply(6,4)',
        'return-2' : 24
      }
    },
    {'id': 1,                       
     'snippet': {
        'description': 'This function should create NxN multiplication table, of size provided in parameter.\nFor example, when given size is 4, the returned value should look like this:\n[[ 1, 2, 3, 4 ],\n[ 2, 4, 6, 8 ],\n[ 3, 6, 9, 12 ],\n[ 4, 8, 12, 16 ]]',
        'import': 'multiplicationTable',
        'body' : 'const multiplicationTable = function (size) {\n  let outerArr = [[...Array(size).keys()].map(x => x + 1)]\n  let multiplier = 2;\n  while (outerArr.length < size) {\n    let innerArr = outerArr.map(num => num * multiplier);\n    outerArr.push(innerArr);\n    multiplier++;\n  }\n\n  return outerArr;\n};',
        'to-execute-1': 'multiplicationTable(3)',
        'return-1' : [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ],
        'to-execute-2': 'multiplicationTable(6)',
        'return-2' : [
          [ 1, 2, 3, 4, 5, 6 ],
          [ 2, 4, 6, 8, 10, 12 ],
          [ 3, 6, 9, 12, 15, 18 ],
          [ 4, 8, 12, 16, 20, 24 ],
          [ 5, 10, 15, 20, 25, 30 ],
          [ 6, 12, 18, 24, 30, 36 ]
        ]
      }
    }
]
