const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");

const fastHashing = (data) => {
  return data + "*";
};

class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis = () => {
    return new this(GENESIS_DATA);
  };

  static mineBlock = ({lastBlock, data}) => {
      const timestamp = Date.now();
      const lastHash = lastBlock.hash;
    return new this({
        timestamp,
        lastHash,
        data,
        hash: cryptoHash(timestamp,lastHash, data),
    })
  }
}

module.exports = Block;

// class BlockChain {
//   constructor() {
//     const genisis = new Block("gen-data", "gen-hash", "gen-last-hash");
//     this.chain = [genisis];
//   }

//   addData = (data) => {
//     const lastHash = this.chain[this.chain.length - 1].lastHash;
//     const hash = fastHashing(data + lastHash);
//     const Block = new Block(data, hash, lastHash);
//     this.chain.push(Block);
//   };
// }
