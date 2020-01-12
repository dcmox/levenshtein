import assert from 'assert'
import sinon from 'sinon'
import { levenshtein } from '../index'

describe('levenshtein test suite', () => {
    it('should calculate the distances between strings correctly', () => {
        assert.equal(levenshtein('test', 'test'), 0)
        assert.equal(levenshtein('', 'test'), 4)
        assert.equal(levenshtein('test', ''), 4)
        assert.equal(levenshtein('test', 'testing'), 3)
        assert.equal(levenshtein('abc', 'def'), 3)
        assert.equal(levenshtein('abc', 'cba'), 2)
    })
})
