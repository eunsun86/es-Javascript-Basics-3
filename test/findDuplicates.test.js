describe('1. 중복 요소 찾기 (lib/findDuplicates.js)', function () {
    it('주어진 인자가 배열이 아닌 경우', function () {
        expect(function () {
            findDuplicates(3);
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates("hello, I am wrong!");
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates(null);
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates();
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates({});
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates(function(){});
        }).to.throw(TypeError);
    });

    it('주어진 배열이 텅 비었을 경우', function () {
        expect(findDuplicates([])).to.equal([]);
    });

    it('주어진 배열에 한개의 숫자만 들어있을 경우', function () {
        expect(findDuplicates([1])).to.equal([1]);
    });

    describe('한개 이상의 요소가 있는 경우', function () {
        it('중복되는 요소가 없는 경우', function () {
            expect(findDuplicates([1,2,3,4,5])).to.equal([1,2,3,4,5]);
            expect(findDuplicates([3,4,5,6,7])).to.equal([3,4,5,6,7]);
        });

        it('중복되는 요소가 있는 경우', function () {
            expect(findDuplicates([3,4,5,3,6])).to.equal([3]);
            expect(findDuplicates([3,4,4,5,3])).to.equal([4,3]);
            expect(findDuplicates([1,1,1,2,2])).to.equal([1,2]);
            expect(findDuplicates([5,6,4,3,3])).to.equal([3]);
            expect(findDuplicates([6,6,6,6,6])).to.equal([6]);
        });
    });
});
