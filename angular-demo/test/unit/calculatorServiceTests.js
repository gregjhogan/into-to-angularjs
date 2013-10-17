describe('calculator', function() {
    beforeEach(angular.mock.module('my-app.services'));

    it('should add strings correctly', angular.mock.inject(function(calculatorService) {
        expect(calculatorService.add('1', '2')).toBe(3);
    }));

    it('should add integers correctly', angular.mock.inject(function(calculatorService) {
        expect(calculatorService.add(1, 2)).toBe(3);
    }));
});