module.exports = function(requestBody) {
    const keys = Object.keys(requestBody);
    const updates = {};

    for (let i = 0; i < keys.length; i++) {
        if (Object.values(requestBody)[i]) {
            updates[keys[i]] = Object.values(requestBody)[i];
        }
    }
    return updates;
};