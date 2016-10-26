import { combineReducers } from 'redux'
import lodashMerge from 'lodash/merge'
import cloneDeep from 'lodash/cloneDeep'

export default function composeReducers(reducersData) {
  let finalReducers = {};

  for (let key in reducersData) {
    if (!reducersData[key].stateKey) {
      console.error("Skip this reducer composer that doesn't have a stateKey", reducersData[key]);
      continue;
    }
    finalReducers[reducersData[key].stateKey] = composeChildReducers(reducersData[key]);
  }

  return combineReducers(finalReducers);
}

function transPathToArray(path) {
  let pathArray = [];
  if (typeof path == 'string') {
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, '');           // strip a leading dot
    pathArray = path.split('.');
  }
  return pathArray;
}

function getObjectByPath(obj, path) {
  if (typeof obj != 'object') {
    throw new Error('Target is not a object or array.');
  }
  let pathArray;
  if (typeof path == 'string') {        // strip a leading dot
  pathArray = transPathToArray(path);
} else if (Array.isArray(path) && path.length > 0) {
  pathArray = path;
} else {
  return obj;
}

for (let key of pathArray) {
  if (typeof obj == 'object' && key in obj) {
    obj = obj[key]
  } else {
    return;
  }
}
return obj;
}

function setObjectByPath(obj, path, value) {
  let pathArray;
  if (typeof path == 'string') {
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, '');           // strip a leading dot
    pathArray = path.split('.');
  } else if (Array.isArray(path) && path.length > 0) {
    pathArray = path;
  } else {
    throw new Error('Invalid path.');
  }

  for (let i = 0 ; i < pathArray.length ; i++) {
    let key = pathArray[i];
    if (pathArray.length == 1 || i == pathArray.length - 1) {
      obj[key] = value;
      return obj;
    } else {
      if (typeof obj == 'object' && key in obj){
        // console.log('give value', obj[key]);
        obj = obj[key];
      } else {
        throw new Error("Can't find the target with the path.");
      }
    }
  }
}

function isReallyObject(...objs) {
  for (let item of objs) {
    if (typeof item != 'object' || Array.isArray(item)) {
      return false;
    }
  }
  return true;
}

function composeChildReducers({initialState = {}, actionTypeKey = 'type', reducers}){
  let finalReducerThunks = [];
  const reducerThunksData = reducers;

  if (typeof reducerThunksData === 'object') {
    const reducerThunksValueArray = Object.values(reducers);
    for (let i = 0; i < reducerThunksValueArray.length; i++) {
      if (typeof reducerThunksValueArray[i] === 'function') {
        finalReducerThunks.push(reducerThunksValueArray[i]);
      }
    }
  } else if (typeof reducerThunksData === 'function') {
    finalReducerThunks.push(reducerThunksData);
  }

  return (stateForKey = initialState, action) => {
    let newStateForKey = stateForKey;

    const merge = (...data) => () => {
      const oldState = stateForKey;
      let newState =  Object.assign({}, oldState);
      let targetState;;
      let path;

      if (data.length == 1) {
        targetState = data[0];
        path =[];
      } else {
        targetState = data[1];
        path = transPathToArray(data[0]);
      }

      let levelStartPos = [];

      let oldStateNow = oldState
      let targetStateNow = targetState;

      let over = false;

      const updateStateNow = () => {
        oldStateNow = getObjectByPath(oldState, path);
        targetStateNow = getObjectByPath(targetState, path);
      }

      const checkOver = () => {
        levelStartPos.pop();
        if (levelStartPos.length > 0) {
          // 將上一層的開始點更新
          levelStartPos[levelStartPos.length - 1] += 1;
          path.pop();
          updateStateNow();
        } else {
          // 全部遍歷完畢，退出流程
          over = true;
        }
      }

      while (!over) {

        const targetKeys = Object.keys(targetStateNow);

        if (levelStartPos[path.length] == undefined) {
          levelStartPos[path.length] = 0;
        }
        let startPos = levelStartPos[path.length];


        if (startPos < targetKeys.length) {
          path.push(targetKeys[startPos]);
          oldStateNow = getObjectByPath(oldState, path);
          targetStateNow = getObjectByPath(targetState, path);
        } else {
          checkOver();
        }

        for (let i = startPos ; i < targetKeys.length ; i++) {
          // console.log('-------------------');
          // console.log('path', path);
          if (isReallyObject(oldStateNow, targetStateNow)) {
            // 兩者都是 object 的話 跳出本層迴圈 先進入下一層
            setObjectByPath(newState, path, Object.assign({}, oldStateNow, targetStateNow));
            break;
          } else {
            // 不是兩者皆 object 的話，直接賦值並繼續本層迴圈
            setObjectByPath(newState, path, targetStateNow);
            path.pop();

            if (i == targetKeys.length - 1) {
              // 本層完成
              checkOver();

            } else {
              // 本層迴圈還沒結束，更新本層的開始點
              levelStartPos[path.length] = i + 1;

              // 更新下一次迴圈的目標物
              path.push(targetKeys[i + 1]);
              updateStateNow();
            }
          }
        }
      }
      return newState;
    }

    for (let i = 0; i < finalReducerThunks.length; i++) {
      let reducersArray
      try {
        reducersArray = finalReducerThunks[i](newStateForKey, action, {merge});

      } catch(e) {

      }
      const reducerForActionType = reducersArray[action[actionTypeKey]];
      if (reducerForActionType) {

        const result = reducerForActionType();
        if (result) {
          newStateForKey = result;
          // console.log('================');
          // console.log('oldState', stateForKey);
          // console.log('newState', newStateForKey)
        }
      }
    }

    return newStateForKey;
  };
}
