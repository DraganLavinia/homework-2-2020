function addTokens(input, tokens) {
    // initial checks
    if(typeof input !== 'string')
    {
        throw new Error('Invalid input');
        return "";
    }
    else if(input.length < 6)
    {
        throw new Error('Input should have at least 6 characters');
        return "";
    }
    
    // array checks
    if(!Array.isArray(tokens))
    {
        throw new Error('Invalid array format');
        return "";
    }
    else
    {
        for(let i = 0; i < tokens.length; i++)
        {
            if(typeof tokens[i].tokenName !== 'string')
            {
                throw new Error('Invalid array format');
                return "";
            }
        }
    }

    if(!input.includes("...") || tokens.length === 0)
    {
        return input;
    }

    let idx = 0;
    while(input.includes("..."))
    {
        input = input.replace("...", "${" + tokens[idx++].tokenName + "}");

        if(idx >= tokens.length) break;
    }

    return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;