import {
  getExecutionTimeForOp,
  getHumanTimeLimit,
} from '../../src/skynet/SkynetCostOptimizer'

describe('skynet human execution time optimizer', () => {
  it('should allocate execution times efficiently', () => {
    expect(getExecutionTimeForOp('add', 5, 2)).toBe(10)
    expect(getExecutionTimeForOp('sub', 120, 50)).toBe(45)
    expect(getExecutionTimeForOp('sub', 10, 2)).toBe(30)
    expect(getExecutionTimeForOp('sub', 10000000, 1)).toBe(120)
    expect(getExecutionTimeForOp('mul', 1234, 567)).toBe(180)
    expect(getExecutionTimeForOp('mul', 1234, 567)).toBe(180)
  })

  it('should compute total human execution time', () => {
    let input = `
      mov eax, 2000
      add eax, 10
      sub eax, 8
      inc eax
    `

    expect(getHumanTimeLimit(input)).toBe(112)
  })
})
