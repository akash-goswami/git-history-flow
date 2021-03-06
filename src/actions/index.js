const 
    all = {},
    changeMode = all.changeMode = (mode) => ({ type: 'CHANGE_MODE', payload: { mode: mode } }),
    changeXType = all.changeXType = (type) => ({ type: 'CHANGE_X', payload: { type: type } }),
    focus = all.focus = (index) => ({ type: 'FOCUS', payload: { index: index } });

export { changeMode, changeXType, focus, all};
