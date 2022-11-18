pragma solidity ^0.8.4;

contract Migrations {
    address public owner;
    uint256 public last_completed_migration;

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function set_completed(uint256 completed) public restricted {
        last_completed_migration = completed;
    }

    function upgrage(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.set_completed(last_completed_migration);
    }
}
