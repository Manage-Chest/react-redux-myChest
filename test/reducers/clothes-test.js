const clothesReducer = require('../../public/js/reducers/clothes-reducer');
const expect = require('chai').expect;

describe('clothesReducer', function () {
  it(' changes clothes state "GET_CLOTHES"', function () {
    const state = {clothes: []};
    const action = {type: "GET_CLOTHES", clothes: [{c_id: 1, image: "111"}]};
    expect(clothesReducer(state, action)).to.be.deep.equal({clothes: [{c_id: 1, image: "111"}]});
  });
});
