const promisedSetState = (newState: any, setter:any) => new Promise(resolve => {
    setter(newState)
    resolve
});


export default promisedSetState