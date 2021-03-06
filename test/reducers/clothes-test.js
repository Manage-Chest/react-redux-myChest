const clothesReducer = require('../../public/js/reducers/clothes');
const expect = require('chai').expect;

describe('clothesReducer', () => {
  it('changes clothes state "GET_CLOTHES"', () => {
    const state = [];
    const action = {type: "GET_CLOTHES", clothes: [{c_id: 1, image: "111"}]};
    expect(clothesReducer(state, action)).to.be.deep.equal([{c_id: 1, image: "111"}]);
  });
});
