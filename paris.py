class teacher:
    def __init__(self, name, mark):
        self.name = name
        self.mark = mark

    def daniel(self):
        print('Hello', self.name)
        print('Your mark is', self.mark)

    def score(self):
        if self.mark >= 60:
            print("You got first grade")
        elif self.mark >= 50:
            print('You got second grade')
        elif self.mark >= 35:
            print('You got third grade')
        elif self.mark >= 30:
            print('You are promoted on trial')
        else:
            print('You failed')

n = int(input('Enter number of students: '))
for i in range(n):
    name = input('Enter Name: ')
    marks = int(input('Enter Marks: '))
    s = teacher(name, marks)
    s.daniel()
    s.score()
    print()