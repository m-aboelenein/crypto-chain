const Block = require('./block');
const Blockchain = require('./blockchain');

describe('BlockChain', () => {
    const blockChain = new Blockchain();
    it('contains a `chain` array Instance', () => {
        expect(blockChain.chain instanceof Array).toBe(true);
    });
    it('starts with a genesis block', () => {
        expect(blockChain.chain[0]).toEqual(Block.genesis());
    });
    it('adds a new block to the chain', () => {
        const newData = 'foo';
        blockChain.addBlock({data: newData});
        expect(blockChain.chain[blockChain.chain.length - 1].data).toEqual(newData);
    });
})
