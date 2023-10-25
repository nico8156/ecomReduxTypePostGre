import { getTotalAmount } from '../getTotalAmount'

const productsMock = [
    {
        price: 1,
        quantity: 1
    }
]
it('should return "1.00"', () => {
    expect(getTotalAmount(productsMock)).toEqual("1.00")
})