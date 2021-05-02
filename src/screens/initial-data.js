const initialData = {
  tasks: {
    // CS REQUIRED COURSES (FIRST AND SECOND YEARS)
    'task-1': { id: 'task-1', content: 'CS 115/135/145' },
    'task-2': { id: 'task-2', content: 'CS 136/146' },
    'task-3': { id: 'task-3', content: 'CS 240' },
    'task-4': { id: 'task-4', content: 'CS 241' },
    'task-5': { id: 'task-5', content: 'CS 245' },
    'task-6': { id: 'task-6', content: 'CS 246' },
    'task-7': { id: 'task-7', content: 'CS 251' },
    'task-8': { id: 'task-8', content: 'CS 341' },
    'task-9': { id: 'task-9', content: 'CS 350' },
    // MATH REQUIRED COURSES (FIRST AND SECOND YEAR)
    'task-10': { id: 'task-10', content: 'MATH 127/137/147' },
    'task-11': { id: 'task-11', content: 'MATH 128/138/148' },
    'task-12': { id: 'task-12', content: 'MATH 135/145' },
    'task-13': { id: 'task-13', content: 'MATH 136/146' },
    'task-14': { id: 'task-14', content: 'MATH 239/249' },
    'task-15': { id: 'task-15', content: 'STAT 230/240' },
    'task-16': { id: 'task-16', content: 'MATH 231/241' },
    // 3 OF THE FOLLOWING COURSES
    'task-17': { id: 'task-17', content: 'CS 343' },
    'task-18': { id: 'task-18', content: 'CS 348' },
    'task-19': { id: 'task-19', content: 'CS 349' },
    // 'task-20': { id: 'task-20', content: 'CS 350' },
    'task-21': { id: 'task-21', content: 'CS 360/365' },
    // 'task-22': { id: 'task-22', content: 'CS 365' },
    'task-23': { id: 'task-23', content: 'CS 370/371' },
    // 'task-24': { id: 'task-24', content: 'CS 371' },
    'task-25': { id: 'task-25', content: 'CS 383' },
    // 2 OF THE FOLLOWING COURSES
    'task-26': { id: 'task-26', content: 'CS 442' },
    'task-27': { id: 'task-27', content: 'CS 444' },
    'task-28': { id: 'task-28', content: 'CS 445' },
    'task-29': { id: 'task-29', content: 'CS 446' },
    'task-30': { id: 'task-30', content: 'CS 447' },
    'task-31': { id: 'task-31', content: 'CS 448' },
    'task-32': { id: 'task-32', content: 'CS 449' },
    'task-33': { id: 'task-33', content: 'CS 450' },
    'task-34': { id: 'task-34', content: 'CS 451' },
    'task-35': { id: 'task-35', content: 'CS 452' },
    'task-36': { id: 'task-36', content: 'CS 454' },
    'task-37': { id: 'task-37', content: 'CS 456' },
    'task-38': { id: 'task-38', content: 'CS 457' },
    'task-39': { id: 'task-39', content: 'CS 458' },
    'task-40': { id: 'task-40', content: 'CS 462' },
    'task-41': { id: 'task-41', content: 'CS 466' },
    'task-42': { id: 'task-42', content: 'CS 467' },
    'task-43': { id: 'task-43', content: 'CS 475' },
    'task-44': { id: 'task-44', content: 'CS 476' },
    'task-45': { id: 'task-45', content: 'CS 479' },
    'task-46': { id: 'task-46', content: 'CS 480' },
    'task-47': { id: 'task-47', content: 'CS 482' },
    'task-48': { id: 'task-48', content: 'CS 484' },
    'task-49': { id: 'task-49', content: 'CS 485' },
    'task-50': { id: 'task-50', content: 'CS 486' },
    'task-51': { id: 'task-51', content: 'CS 487' },
    'task-52': { id: 'task-52', content: 'CS 488' },
    'task-53': { id: 'task-53', content: 'CS 489' },
    // Elective Requiremnets
    'task-54': { id: 'task-54', content: 'Humanities 1' },
    'task-55': { id: 'task-55', content: 'Humanities 2' },
    'task-56': { id: 'task-56', content: 'Social Science 1' },
    'task-57': { id: 'task-57', content: 'Social Science 2' },
    'task-58': { id: 'task-58', content: 'Pure Science 1' },
    'task-59': { id: 'task-59', content: 'Pure/Applied Science 1' },
    'task-60': { id: 'task-60', content: 'Course 1 (any subject)' },
    'task-61': { id: 'task-61', content: 'Course 2 (any subject)' },
    'task-62': { id: 'task-62', content: 'Course 3 (any subject) 3XX'},
    // Communication Requirements
    // LIST ONE
    'task-63': { id: 'task-63', content: 'EMLS 101R' },
    'task-64': { id: 'task-64', content: 'EMLS 102R' },
    'task-65': { id: 'task-65', content: 'EMLS 129R' },
    'task-66': { id: 'task-66', content: 'ENGL 129R' },
    'task-67': { id: 'task-67', content: 'ENG 109' },
    'task-68': { id: 'task-68', content: 'SPCOM 100' },
    'task-69': { id: 'task-69', content: 'SPCOM 223' },
    // LIST TWO
    'task-70': { id: 'task-70', content: 'EMLS 103R' },
    'task-71': { id: 'task-71', content: 'EMLS 104R' },
    'task-72': { id: 'task-72', content: 'EMLS 110R'},
    'task-73': { id: 'task-73', content: 'ENGL 101B' },
    'task-74': { id: 'task-74', content: 'ENGL 108D' },
    'task-75': { id: 'task-75', content: 'ENGL 119' },
    'task-76': { id: 'task-76', content: 'ENGL 208B' },
    'task-77': { id: 'task-77', content: 'ENGL 209' },
    'task-78': { id: 'task-78', content: 'ENGL 210E' },
    'task-79': { id: 'task-79', content: 'ENGL 210F' },
    'task-80': { id: 'task-80', content: 'ENGL 210A' },
    'task-81': { id: 'task-81', content: 'SPCOM 225' },
    'task-82': { id: 'task-82', content: 'SPCOM 227'},
    'task-83': { id: 'task-83', content: 'SPCOM 228' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData
