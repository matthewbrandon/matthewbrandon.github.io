const decreaseEnergyPetting = require('./script');

test('Lower energy petting should remove 3x energy from player', () => {
    expect(decreaseEnergyPetting(1)).toBe(3);
});

