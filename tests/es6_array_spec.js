describe('nothing but the truth', function() {
  it('should return true', function() {
    var evens = [2,4,6,8];
    var odds = evens.map(v => v + 1);

    expect(odds).toEqual([3,5,7, 9]);
  });
});
