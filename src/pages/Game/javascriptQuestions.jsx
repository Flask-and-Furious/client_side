
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
        'description': 'Out factorial function is not working',
        'import': 'factorial',
        'body' : 'function factorial(n){\n\tif (n === 0) return 1;\n\tconst result = n\n\twhile (n > 1) {\n\t\tresult = n * n - 1;\n\t\tn--\n\t};\n\treturn result\n}',
        'to-execute-1': 'factorial(7)',
        'return-1' : 5040,
        'to-execute-2': 'factorial(17)',
        'return-2' : 355687428096000
      }
    }
]
