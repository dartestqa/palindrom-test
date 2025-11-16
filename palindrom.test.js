const palindrom = require('./palindrom');

describe('Функция палиндром', () => {
    describe('Функция возвращает boolean', () => {
        test('Функция возвращает тип "boolean"', () => {
            const result = palindrom('Mom');
            expect(result).toBeDefined();
            expect(typeof result).toBe('boolean');
        });
    });

    describe('Палиндром', () => {
        test('Фраза с пробелами и с разным регистром', () => {
            expect(palindrom('А роза упала на лапу Азора')).toBeTruthy();
        });
        test('Числовая строка', () => {
            expect(palindrom('12321')).toBeTruthy();
        });
        test('Одно слово', () => {
            expect(palindrom('топот')).toBeTruthy();
        });
        test('Один символ', () => {
            expect(palindrom('.')).toBeTruthy();
        });
        test('Пустая строка', () => {
            expect(palindrom('')).toBeTruthy();
            expect(palindrom(' ')).toBeTruthy();
        });            
    });

    describe('Не палиндром', () => {
        test('Строка без симметрии', () => {
            expect(palindrom('He')).toBeFalsy();
        });
        test('Числовая строка без симметрии', () => {
            expect(palindrom('123')).toBeFalsy();
        });
    });

    describe('Невалидные входные данные', () => {
        test('Число', () => {
            expect(palindrom(12321)).toBeFalsy();
        });

        test('null', () => {
            expect(palindrom(null)).toBeFalsy();
        });

        test('undefined', () => {
            expect(palindrom(undefined)).toBeFalsy();
        });

        test('Объект', () => {
            expect(palindrom({})).toBeFalsy();
        });

        test('Массив', () => {
            expect(palindrom([1,2,1])).toBeFalsy();
        });
    });
    describe('Стресс-тест. Функция palindrom — длинные строки', () => {
        test('очень длинный палиндром', () => {
            const longPalindrome = 'a'.repeat(10000);
            expect(palindrom(longPalindrome)).toBeTruthy();
        });

        test('очень длинный не палиндром', () => {
            const longNonPalindrome = 'a'.repeat(9999) + 'b';
            expect(palindrom(longNonPalindrome)).toBeFalsy();
        });
    });
})