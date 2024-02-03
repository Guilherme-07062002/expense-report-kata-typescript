export type ExpenseType = 'dinner' | 'breakfast' | 'car-rental'

export class Expense {
  type: ExpenseType
  amount: number

  constructor(type: ExpenseType, amount: number) {
    this.type = type
    this.amount = amount
  }
}

function getExpenseName(expense: Expense): string {
  switch (expense.type) {
    case 'dinner':
      return 'Dinner'
    case 'breakfast':
      return 'Breakfast'
    case 'car-rental':
      return 'Car Rental'
  }
}

function getMealExpensesAmount(expenses: Expense[]): number {
  return expenses.reduce((sum, expense) => {
    if (expense.type == 'dinner' || expense.type == 'breakfast') {
      return sum + expense.amount
    }
    return sum
  }, 0)
}

function getTotalExpensesAmount(expenses: Expense[]): number {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0)
}

function markMealExpenses(expense: Expense): string {
  if (
    (expense.type == 'dinner' && expense.amount > 5000) ||
    (expense.type == 'breakfast' && expense.amount > 1000)
  ) {
    return 'X'
  }
  return ' '
}

export function printReport(expenses: Expense[]) {
  const totalExpenses: number = getTotalExpensesAmount(expenses)
  const mealExpenses: number = getMealExpensesAmount(expenses)

  process.stdout.write('Expenses: ' + new Date().toISOString().substring(0, 10) + '\n')

  expenses.forEach(expense => {
    const expenseName = getExpenseName(expense)
    const mealOverExpensesMarker = markMealExpenses(expense)

    process.stdout.write(expenseName + '\t' + expense.amount + '\t' + mealOverExpensesMarker + '\n')
  })

  process.stdout.write('Meal Expenses: ' + mealExpenses + '\n')
  process.stdout.write('Total Expenses: ' + totalExpenses + '\n')
}
