import * as types from "../constants/actionTypes";

const checkNodeStatusStart = node => {
  return {
    type: types.CHECK_NODE_STATUS_START,
    node
  };
};

const checkNodeStatusSuccess = (node, res) => {
  return {
    type: types.CHECK_NODE_STATUS_SUCCESS,
    node,
    res
  };
};

const checkNodeStatusFailure = node => {
  return {
    type: types.CHECK_NODE_STATUS_FAILURE,
    node
  };
};

export function checkNodeStatus(node) {
  return async dispatch => {
    try {
      dispatch(checkNodeStatusStart(node));
      const res = await fetch(`${node.url}/api/v1/status`);

      if (res.status >= 400) {
        dispatch(checkNodeStatusFailure(node));
      }

      const json = await res.json();
      dispatch(checkNodeStatusSuccess(node, json));
    } catch (err) {
      dispatch(checkNodeStatusFailure(node));
    }
  };
}

export function checkNodeStatuses(list) {
  return dispatch => {
    list.forEach(node => {
      dispatch(checkNodeStatus(node));
    });
  };
}

const getBlocksStart = node => {
  return {
    type: types.GET_BLOCKS_START,
    node
  };
};

const getBlocksSuccess = (node, res) => {
  return {
    type: types.GET_BLOCKS_SUCCESS,
    node,
    res
  };
};

const getBlocksFailure = node => {
  return {
    type: types.GET_BLOCKS_FAILURE,
    node
  };
};

export function getBlocks(node) {
  return async dispatch => {
    try {
      dispatch(getBlocksStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if (res.status >= 400) {
        dispatch(getBlocksFailure(node));
      }

      const json = await res.json();
      dispatch(getBlocksSuccess(node, json));
    } catch (err) {
      dispatch(getBlocksFailure(node));
    }
  };
}
