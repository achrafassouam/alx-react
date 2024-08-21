function getFullYear() {
  return new Date().getFullYear();
}
  

describe('getFullYear', () => {
  it('should return the correct year', () => {
    const mockDate = new Date('2024-01-01');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
	
    const year = getFullYear();
    expect(year).toBe(2024);
    jest.restoreAllMocks(); // Restore the original Date object
  });
});

function getFooterCopy(isTrue) {
  return isTrue ? 'Footer text for true' : 'Footer text for false';
}

describe('getFooterCopy', () => {
  it('should return the correct string when the argument is true', () => {
    const result = getFooterCopy(true);
    expect(result).toBe('Footer text for true');
  });

  it('should return the correct string when the argument is false', () => {
    const result = getFooterCopy(false);
    expect(result).toBe('Footer text for false');
  });
});
