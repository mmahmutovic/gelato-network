pragma solidity ^0.6.6;

import "./IGelatoCondition.sol";

abstract contract GelatoConditionsStandard is IGelatoCondition {
    string internal constant OK = "OK";

    function okStandardSelector() external pure override returns(bytes4) {
        return IGelatoCondition.ok.selector;
    }
}
