class AdditionCallback{
    static getOperation()
    {
        return 'Addition'
    }

    static execute (val1, val2) {
        return val1 + val2
    }
}

class SubtractionCallback{
    static getOperation()
    {
        return 'Subtraction'
    }

    static execute (val1, val2){
        return val1 - val2
    }
}

class DivisionCallback{
    static getOperation()
    {
        return 'Division'
    }

    static execute (val1, val2)
    {
        return val1 / val2
    }
}

function processMathCallback (val1, val2, callback) {
    const result = callback.execute(val1, val2)

    console.log('Operation = ' + callback.getOperation())
    console.log('Value 1 = ' + val1)
    console.log('Value 2 = ' + val2)
    console.log('Result = ' + result)
    console.log(' ')

    return result
}

processMathCallback(2, 4, AdditionCallback)
processMathCallback(2, 4, SubtractionCallback)
processMathCallback(2, 4, DivisionCallback)

