  // fetch the data from the database here
  // convert it to an array which will look like this:
  export const fetchedCodePackages = [
    {'id': 0,                       // 3 sample buggy functions
     'snippet': {
        'description': 'Dynamic description here',
        'import': 'add',
        'body' : 'def add(a, b):\n\treturn a + a\n\n# Expectation: add(3,2) => 5',
        'to-execute': 'add(3,2)',
        'return' : '5'
      }
    },
    {'id': 1,
     'snippet': {
        'description': 'Dynamic description here',
        'import': 'multiply',
        'body' : 'def multiply(a, b):\n\treturn a * a\n\n# Expectation: multiply(6,3) => 18',
        'to-execute': 'multiply(6,3)',
        'return' : '18'
      }
    },
    {'id': 2,
     'snippet': {
        'description': 'Dynamic description here',
        'import': 'no_space',
        'body' : 'def no_space(string):\n\tfor i in string:\n\t\tif i == " ":\n\t\t\ti.replace("")\n\n\treturn string\n\n# Expectation:\n# no_string("I >    3 Le    i d   os  !") => I<3Leidos',
        'to-execute': 'no_space("    he     l l o! ")',
        'return' : 'hello!'
      }
    }
  ]
