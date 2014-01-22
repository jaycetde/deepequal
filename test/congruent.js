var congruent = require('..')
  , should = require('should')
;

describe('congruent', function () {
    
    it('should pass all `deep-equal` tests', function () {
        
        congruent(
            { a : [ 2, 3 ], b : [ 4 ] },
            { a : [ 2, 3 ], b : [ 4 ] }
        ).should.be.true;
        
        congruent(
            { x : 5, y : [6] },
            { x : 5, y : 6 }
        ).should.be.false;
        
        congruent(
            [ null, null, null ],
            [ null, null, null ]
        ).should.be.true;
        
        congruent(
            [ { a: 3 }, { b: 4 } ],
            [ { a: '3' }, { b: '4' } ],
            true
        ).should.be.false;
        
        congruent(3, 3).should.be.true;
        congruent('beep', 'beep').should.be.true;
        congruent('3', 3).should.be.true;
        congruent('3', 3, true).should.be.false;
        congruent('3', [3]).should.be.false;
        
        congruent(
            (function(){return arguments})(1,2,3),
            (function(){return arguments})(1,2,3)
        ).should.be.true;
        congruent(
            (function(){return arguments})(1,2,3),
            [1,2,3]
        ).should.be.false;
        congruent(
            [1,2,3],
            (function(){return arguments})(1,2,3)
        ).should.be.false;
        
        var d0 = new Date(1387585278000);
        var d1 = new Date('Fri Dec 20 2013 16:21:18 GMT-0800 (PST)');
        
        congruent(d0, d1).should.be.true;
        
    });
    
    it('should return true for NaN', function () {
        congruent(NaN, NaN).should.be.true;
        congruent({ a: NaN }, { a: NaN }).should.be.true;
        
        congruent(123, NaN).should.be.false;
        congruent(NaN, 'abc').should.be.false;
        
        congruent('abc', NaN).should.be.false;
    });
    
    it('should compare buffers', function () {
        var b1 = new Buffer('foobar')
          , b2 = new Buffer('foobar')
          , b3 = new Buffer('foobaz')
        ;
        
        congruent(b1, b2).should.be.true;
        congruent(b1, b3).should.be.false;
        
        congruent(b1, 'foobar').should.be.false;
        congruent('foobar', b1).should.be.false;
    });
    
    it('should inspect all values of an array', function () {
        var a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
          , b = a.slice()
          , c = a .slice()
        ;
        
        c[7] = 3;
        
        congruent(a, b).should.be.true;
        congruent(a, c).should.be.false;
        
        congruent('abc', a).should.be.false;
    });
    
    it('should compare regular expressions', function () {
        
        var a = /abc/gi
          , b = new RegExp('abc', 'gi')
          , c = /abc/gim
          , d = /def/gi
          , e = /abc/gi
        ;
        
        e.test('foo abc bar');
        
        congruent(a, b).should.be.true;
        congruent(a, c).should.be.false;
        congruent(a, d).should.be.false;
        congruent(a, e).should.be.false;
        
    });
    
    it('should compare null and undefined', function () {
        congruent(null, null).should.be.true;
        congruent(undefined, undefined).should.be.true;
        
        congruent(null, undefined).should.be.false;
        congruent(null, false).should.be.false;
        
        congruent({ a: 1 }, null).should.be.false;
        congruent({ a: 1 }, undefined).should.be.false;
    });
    
});