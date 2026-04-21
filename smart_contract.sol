// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RailwayComplaints {

    struct Complaint {
        uint id;
        string name;
        string train;
        string issue;
        bool solved;
    }

    Complaint[] public complaints;

    function addComplaint(string memory _name, string memory _train, string memory _issue) public {
        complaints.push(Complaint(complaints.length, _name, _train, _issue, false));
    }

    function markSolved(uint _id) public {
        complaints[_id].solved = true;
    }

    function getComplaints() public view returns (Complaint[] memory) {
        return complaints;
    }
}
