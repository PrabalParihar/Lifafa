const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        RedEnvelope: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "Paused",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "Unpaused",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "_Envelopes",
              outputs: [
                {
                  internalType: "enum RedEnvelope.EnvelopeType",
                  name: "_type",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_messasge",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_noOfUsers",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_amountPerUsers",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_claimsLeft",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_expiry",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "_gameMode",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "_ERC20Amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_ERC721TokenID",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_envelopeId",
                  type: "uint256",
                },
              ],
              name: "claimEnvelopeById",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum RedEnvelope.EnvelopeType",
                  name: "_type",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_messasge",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_noOfUsers",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_amountPerUsers",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_expiry",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "_gameMode",
                  type: "bool",
                },
              ],
              name: "createEnvelope",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getMyEnvelopes",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "myEnvelopes",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "paused",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
