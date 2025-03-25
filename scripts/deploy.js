const solc = require('solc');
const fs = require('fs');
const path = require('path');

function compileContract() {
  // Read the Solidity source code
  const contractPath = path.resolve(__dirname, 'contracts', 'HederaConnectRewards.sol');
  const source = fs.readFileSync(contractPath, 'utf8');

  // Solidity compiler input
  const input = {
    language: 'Solidity',
    sources: {
      'HederaConnectRewards.sol': {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['abi', 'evm.bytecode']
        }
      }
    }
  };

  // Compile the contract
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  
  // Check for compilation errors
  if (output.errors) {
    console.error('Compilation errors:');
    output.errors.forEach(err => console.error(err.formattedMessage));
    throw new Error('Contract compilation failed');
  }

  // Extract the bytecode and ABI
  const contractName = 'HederaConnectRewards';
  const bytecode = output.contracts['HederaConnectRewards.sol'][contractName].evm.bytecode.object;
  const abi = output.contracts['HederaConnectRewards.sol'][contractName].abi;

  // Save the compiled contract details
  const compiledContract = {
    bytecode,
    abi
  };

  // Write to a JSON file
  fs.writeFileSync(
    path.resolve(__dirname, 'compiled-contract.json'), 
    JSON.stringify(compiledContract, null, 2)
  );

  console.log('Contract compiled successfully!');
  return compiledContract;
}

// Run the compilation
compileContract();