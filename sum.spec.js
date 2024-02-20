import {sum} from './Sum.js'
import {expect } from 'chai'


describe('sum', () => {

    //describe('This is a second describe', () => {
       // it('should pas', () => {
        //    expect(true).to.be.true;
       // })
  //  })
    it('should return 0 if an empty array is given', () => {
        //Arrange
        const inputArray = [];
        //Act
        const result = sum(inputArray);

        //Assert
        expect(result).to.equal(0);
    })

    it('should return the single element as a sum if a single element array is given',
    () => {
        //Arrange
        const inputArray = [33];
        //Act
        const result = sum(inputArray);

        //Assert
        expect(result).to.equal(33);
    } )

    it('should return the total sum of an array if a multi value array is given',
    () => {
       //Arrange
       const inputArray = [3, 5, 1];
       //Act
       const result = sum(inputArray);

       //Assert
       expect(result).to.equal(9);
    })
})
