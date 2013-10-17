describe('calculator', function() {
    beforeEach(function() {
        browser().navigateTo('../../#/calculator');
    });

    it('should initially be zero', function () {
        expect(input('left').val()).toBe('0');
        expect(input('right').val()).toBe('0');
        expect(element('span').text()).toBe('0');
    });

    it('should display answer', function () {
        input('left').enter('1');
        input('right').enter('2');

        expect(element('span').text()).toBe('3');
    });
});