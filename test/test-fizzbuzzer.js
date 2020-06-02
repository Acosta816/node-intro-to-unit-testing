const expect = require('chai').expect;

const fizzbuzzer = require('../fizzBuzzer');

describe('fizzbuzzer', function() {
    
    it('should produce number, fizz, buzz, or fizz-buzz', ()=> {
        const normalCases = [
            {num:3, expected: "fizz"},
            {num:5, expected: "buzz"},
            {num:15, expected: "fizz-buzz"},
            {num:7, expected: 7}
        ];
        
        normalCases.forEach(num=> {
            const answer = fizzbuzzer(num.num);
            expect(answer).to.equal(num.expected);
        });
        
    });// end of it

        it('should raise error if arg is not a number', ()=> {
            const badInputs = [
                "c", false, [8,20], {"jello": "6"}, "5"
            ];

            badInputs.forEach(num=> {
                expect(()=> {
                    fizzbuzzer(num);
                }).to.throw(Error);
            })
        }); //end of it.


    

})