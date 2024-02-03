import { printReport, Expense } from './ExpenseReport'

describe(`testing expense report`, () => {
  it(`should print the correct report`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })
    const Dinner = new Expense('dinner', 100)
    const Breakfast = new Expense('breakfast', 100)
    const CarRental = new Expense('car-rental', 100)
    printReport([Dinner, Breakfast, CarRental])

    expect(interceptedOutput).toContain(`Expenses: 2024-02-03`)
    expect(interceptedOutput).toContain(`Dinner	100`)
    expect(interceptedOutput).toContain(`Breakfast	100`)
    expect(interceptedOutput).toContain(`Car Rental	100`)
    expect(interceptedOutput).toContain(`Meal Expenses: 200`)
    expect(interceptedOutput).toContain(`Total Expenses: 300`)
  })

  it('should print the correct report with meal expenses marker', () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })
    const Dinner = new Expense('dinner', 6000)
    const Breakfast = new Expense('breakfast', 2000)
    const CarRental = new Expense('car-rental', 100)
    printReport([Dinner, Breakfast, CarRental])

    expect(interceptedOutput).toContain(`Expenses: 2024-02-03`)
    expect(interceptedOutput).toContain(`Dinner	6000	X`)
    expect(interceptedOutput).toContain(`Breakfast	2000	X`)
    expect(interceptedOutput).toContain(`Car Rental	100`)
    expect(interceptedOutput).toContain(`Meal Expenses: 8000`)
    expect(interceptedOutput).toContain(`Total Expenses: 8100`)
  })
})
