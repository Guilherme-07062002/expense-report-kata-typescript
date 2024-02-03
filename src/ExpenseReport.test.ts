import { printReport, Expense } from './ExpenseReport'

describe(`testing expense report`, () => {
    it(`should print the correct report`, () => {
        let interceptedOutput = ""
        jest.spyOn(process.stdout, "write").mockImplementation(
            (output: string): boolean => {
                interceptedOutput += output
                return true;
            }
        )
        const Dinner = new Expense("dinner", 5001)
        const Breakfast = new Expense("breakfast", 1001)
        const CarRental = new Expense("car-rental", 1000)
        printReport([Dinner, Breakfast, CarRental])

        expect(interceptedOutput).toContain(`Expenses: 2024-02-03`)
        expect(interceptedOutput).toContain(`Dinner	5001`)
        expect(interceptedOutput).toContain(`Breakfast	1001`)
        expect(interceptedOutput).toContain(`Car Rental	1000`)
        expect(interceptedOutput).toContain(`Meal Expenses: 6002`)
        expect(interceptedOutput).toContain(`Total Expenses: 7002`)
    })
})
